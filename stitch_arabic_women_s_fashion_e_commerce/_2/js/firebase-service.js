// ==========================================================================
// Celine Fashion (سيلين للأزياء) - Firebase 13.x Enterprise Integration
// Firestore Database, Google Analytics & Authentication Engine
// ==========================================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getAnalytics, logEvent as fbLogEvent } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-analytics.js";
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  addDoc, 
  getDoc, 
  getDocs, 
  updateDoc,
  deleteDoc,
  query, 
  where, 
  orderBy, 
  serverTimestamp,
  onSnapshot 
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";
import { 
  getAuth, 
  signInAnonymously, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

// Firebase Project Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjPTdoEJcWd7Y4zGkkfQmace3TXVWgNHg",
  authDomain: "tast-b91f3.firebaseapp.com",
  projectId: "tast-b91f3",
  storageBucket: "tast-b91f3.firebasestorage.app",
  messagingSenderId: "129487182461",
  appId: "1:129487182461:web:8220dbc061305bf65a2f14",
  measurementId: "G-7X0N67D10R"
};

// Initialize Firebase Core
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

let analytics = null;
try {
  analytics = getAnalytics(app);
} catch (e) {
  console.log("Firebase Analytics initialized in non-tracking mode or blocked:", e.message);
}

// Current User State
let currentUserId = localStorage.getItem('celine_fb_user_id') || null;

// Sign In Anonymously to ensure valid session for Firestore security rules
signInAnonymously(auth).then((cred) => {
  currentUserId = cred.user.uid;
  localStorage.setItem('celine_fb_user_id', currentUserId);
  console.log("Firebase Auth: Connected successfully with UID:", currentUserId);
}).catch((err) => {
  console.warn("Firebase Auth anonymous login notice:", err.message);
});

// Firebase Service Class
class FirebaseService {
  constructor() {
    this.app = app;
    this.db = db;
    this.auth = auth;
    this.analytics = analytics;
    this.isReady = true;
  }

  // ------------------------------------------------------------------------
  // 1. PRODUCTS COLLECTION
  // ------------------------------------------------------------------------

  /**
   * Fetch all products from Firestore 'products' collection
   */
  async getProducts() {
    try {
      const q = collection(this.db, "products");
      const snapshot = await getDocs(q);
      if (snapshot.empty) {
        return null;
      }
      const products = [];
      snapshot.forEach(docSnap => {
        products.push({ docId: docSnap.id, ...docSnap.data() });
      });
      return products;
    } catch (error) {
      console.warn("Firestore getProducts fallback to local data:", error);
      return null;
    }
  }

  /**
   * Fetch a single product by ID from Firestore
   */
  async getProductById(id) {
    try {
      const docRef = doc(this.db, "products", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { docId: docSnap.id, ...docSnap.data() };
      }
      return null;
    } catch (error) {
      console.warn(`Firestore getProductById(${id}) fallback:`, error);
      return null;
    }
  }

  /**
   * Realtime listener for products catalog
   */
  listenToProducts(callback) {
    try {
      const q = collection(this.db, "products");
      return onSnapshot(q, (snapshot) => {
        const products = [];
        snapshot.forEach(docSnap => {
          products.push({ docId: docSnap.id, ...docSnap.data() });
        });
        callback(products);
      }, (error) => {
        console.warn("Firestore products onSnapshot error:", error);
      });
    } catch (e) {
      console.warn("Could not attach products listener:", e);
      return () => {};
    }
  }

  /**
   * Add a new product to Firestore
   */
  async addProduct(productData) {
    try {
      const id = productData.id || ('prod_' + Date.now());
      const docRef = doc(this.db, "products", id);
      const payload = {
        id: id,
        title: productData.title || "منتج جديد",
        shortTitle: productData.shortTitle || productData.title || "منتج جديد",
        category: productData.category || "ملابس كاجوال",
        categorySlug: productData.categorySlug || "casual",
        badge: productData.badge || "",
        scarcityBadge: productData.scarcityBadge || "",
        price: Number(productData.price) || 0,
        originalPrice: productData.originalPrice ? Number(productData.originalPrice) : null,
        rating: Number(productData.rating) || 5.0,
        reviewsCount: Number(productData.reviewsCount) || 1,
        image: productData.image || "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600",
        hoverImage: productData.hoverImage || productData.image || "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600",
        gallery: productData.gallery || [
          { url: productData.image || "", label: "الأمامي", alt: productData.title }
        ],
        description: productData.description || "",
        longDescription: productData.longDescription || productData.description || "",
        sizes: Array.isArray(productData.sizes) ? productData.sizes : ["S", "M", "L", "XL"],
        defaultSize: productData.defaultSize || "M",
        colors: Array.isArray(productData.colors) ? productData.colors : [{ name: "افتراضي", hex: "#1A1A1A" }],
        defaultColor: productData.defaultColor || "افتراضي",
        fabric: productData.fabric || "أقمشة طبيعية فاخرة عالية الجودة",
        stylingTips: productData.stylingTips || "يناسب كافة الإطلالات والمناسبات الراقية.",
        careInstructions: Array.isArray(productData.careInstructions) ? productData.careInstructions : ["غسيل لطيف بماء بارد"],
        isNew: productData.isNew !== undefined ? productData.isNew : true,
        featured: productData.featured !== undefined ? productData.featured : false,
        stock: Number(productData.stock) || 25,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };

      await setDoc(docRef, payload, { merge: true });
      return { success: true, id: id, product: payload };
    } catch (error) {
      console.error("Firestore addProduct error:", error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Update an existing product in Firestore (e.g. price change, stock, details)
   */
  async updateProduct(productId, updatedFields) {
    try {
      const docRef = doc(this.db, "products", productId);
      const cleanFields = { ...updatedFields, updatedAt: serverTimestamp() };
      if (cleanFields.price !== undefined) cleanFields.price = Number(cleanFields.price);
      if (cleanFields.originalPrice !== undefined && cleanFields.originalPrice !== null) {
        cleanFields.originalPrice = Number(cleanFields.originalPrice);
      }
      if (cleanFields.stock !== undefined) cleanFields.stock = Number(cleanFields.stock);

      await updateDoc(docRef, cleanFields);
      return { success: true };
    } catch (error) {
      console.error("Firestore updateProduct error:", error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Delete a product from Firestore
   */
  async deleteProduct(productId) {
    try {
      const docRef = doc(this.db, "products", productId);
      await deleteDoc(docRef);
      return { success: true };
    } catch (error) {
      console.error("Firestore deleteProduct error:", error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Seed store products into Firestore 'products' collection
   */
  async seedProducts(productsList) {
    try {
      let count = 0;
      for (const product of productsList) {
        const docRef = doc(this.db, "products", product.id);
        await setDoc(docRef, {
          ...product,
          updatedAt: serverTimestamp()
        }, { merge: true });
        count++;
      }
      console.log(`Firestore: Seeded ${count} products successfully.`);
      return { success: true, count };
    } catch (error) {
      console.error("Firestore seedProducts error:", error);
      return { success: false, error };
    }
  }

  /**
   * Auto-seed if collection is currently empty
   */
  async autoSeedIfEmpty(defaultProducts) {
    try {
      const existing = await this.getProducts();
      if (!existing || existing.length === 0) {
        console.log("Firestore 'products' is empty. Auto-seeding initial store catalog...");
        await this.seedProducts(defaultProducts);
      }
    } catch (e) {
      console.warn("Auto-seed check notice:", e);
    }
  }

  // ------------------------------------------------------------------------
  // 2. ORDERS COLLECTION
  // ------------------------------------------------------------------------

  /**
   * Save a customer order to Firestore 'orders' collection
   */
  async createOrder(orderPayload) {
    try {
      const orderNumber = orderPayload.orderNumber || ('#CEL-' + Math.floor(1000 + Math.random() * 9000));
      
      const orderDocData = {
        orderNumber: orderNumber,
        customer: orderPayload.customer || {},
        items: orderPayload.items || [],
        subtotal: orderPayload.subtotal || 0,
        discount: orderPayload.discount || 0,
        vat: orderPayload.vat || 0,
        shipping: orderPayload.shipping || 0,
        total: orderPayload.total || 0,
        paymentMethod: orderPayload.paymentMethod || 'card',
        paymentStatus: 'paid', // Or 'pending' for COD
        status: 'قيد التجهيز الفوري',
        statusCode: 'processing',
        notes: orderPayload.notes || '',
        createdAt: serverTimestamp(),
        userId: currentUserId || 'guest',
        channel: 'online_store_web'
      };

      const docRef = await addDoc(collection(this.db, "orders"), orderDocData);
      
      // Log Analytics Purchase Event
      this.logEvent("purchase", {
        transaction_id: orderNumber,
        value: orderDocData.total,
        currency: "SAR",
        items: orderDocData.items.map(i => ({
          item_id: i.id,
          item_name: i.title,
          price: i.price,
          quantity: i.quantity
        }))
      });

      console.log(`Firestore: Order created with ID: ${docRef.id} (Order ${orderNumber})`);
      return {
        success: true,
        orderId: docRef.id,
        orderNumber: orderNumber,
        order: orderDocData
      };
    } catch (error) {
      console.error("Firestore createOrder error:", error);
      // Fallback response so user checkout never fails
      const fallbackOrderNumber = '#CEL-' + Math.floor(1000 + Math.random() * 9000);
      return {
        success: true,
        isFallback: true,
        orderId: 'offline-' + Date.now(),
        orderNumber: fallbackOrderNumber,
        error: error.message
      };
    }
  }

  /**
   * Get all orders from Firestore (for Admin Dashboard)
   */
  async getOrders() {
    try {
      const q = query(collection(this.db, "orders"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const orders = [];
      snapshot.forEach(docSnap => {
        orders.push({ docId: docSnap.id, ...docSnap.data() });
      });
      return orders;
    } catch (error) {
      console.warn("Firestore getOrders fallback to empty array:", error);
      return [];
    }
  }

  /**
   * Realtime listener for new orders
   */
  listenToOrders(callback) {
    try {
      const q = query(collection(this.db, "orders"), orderBy("createdAt", "desc"));
      return onSnapshot(q, (snapshot) => {
        const orders = [];
        snapshot.forEach(docSnap => {
          orders.push({ docId: docSnap.id, ...docSnap.data() });
        });
        callback(orders);
      }, (error) => {
        console.warn("Firestore orders onSnapshot listener error:", error);
      });
    } catch (e) {
      console.warn("Could not attach orders listener:", e);
      return () => {};
    }
  }

  /**
   * Update Order Status in Firestore
   */
  async updateOrderStatus(orderDocId, newStatus, statusCode = 'updated') {
    try {
      const docRef = doc(this.db, "orders", orderDocId);
      await updateDoc(docRef, {
        status: newStatus,
        statusCode: statusCode,
        updatedAt: serverTimestamp()
      });
      return { success: true };
    } catch (error) {
      console.error("Firestore updateOrderStatus error:", error);
      return { success: false, error };
    }
  }

  /**
   * Delete Order from Firestore
   */
  async deleteOrder(orderDocId) {
    try {
      const docRef = doc(this.db, "orders", orderDocId);
      await deleteDoc(docRef);
      return { success: true };
    } catch (error) {
      console.error("Firestore deleteOrder error:", error);
      return { success: false, error };
    }
  }

  /**
   * Helper to aggregate unique customers from orders list
   */
  getCustomersFromOrders(orders) {
    const customerMap = {};
    orders.forEach(order => {
      const phone = order.customer?.phone || 'unknown';
      const name = order.customer?.name || 'عميلة غير مسجلة';
      const city = order.customer?.city || 'غير محدد';
      const email = order.customer?.email || '';
      const address = `${order.customer?.district || ''} ${order.customer?.streetNotes || ''}`.trim();
      const amount = Number(order.total) || 0;

      if (!customerMap[phone]) {
        customerMap[phone] = {
          name: name,
          phone: phone,
          email: email,
          city: city,
          address: address,
          ordersCount: 1,
          totalSpent: amount,
          lastOrderDate: order.createdAt || null,
          lastOrderId: order.orderNumber || ''
        };
      } else {
        customerMap[phone].ordersCount += 1;
        customerMap[phone].totalSpent += amount;
      }
    });
    return Object.values(customerMap);
  }

  // ------------------------------------------------------------------------
  // 3. CART & WISHLIST BACKEND SYNCHRONIZATION
  // ------------------------------------------------------------------------

  /**
   * Sync Cart Items to Firestore
   */
  async syncCart(cartItems) {
    if (!currentUserId) return;
    try {
      const docRef = doc(this.db, "carts", currentUserId);
      await setDoc(docRef, {
        items: cartItems,
        updatedAt: serverTimestamp()
      }, { merge: true });
    } catch (e) {
      // Non-blocking sync
    }
  }

  /**
   * Sync Wishlist to Firestore
   */
  async syncWishlist(wishlistIds) {
    if (!currentUserId) return;
    try {
      const docRef = doc(this.db, "wishlists", currentUserId);
      await setDoc(docRef, {
        productIds: wishlistIds,
        updatedAt: serverTimestamp()
      }, { merge: true });
    } catch (e) {
      // Non-blocking sync
    }
  }

  // ------------------------------------------------------------------------
  // 4. CUSTOMER INQUIRIES & STYLING ASSISTANCE
  // ------------------------------------------------------------------------

  async saveInquiry(inquiryData) {
    try {
      const docRef = await addDoc(collection(this.db, "inquiries"), {
        ...inquiryData,
        createdAt: serverTimestamp(),
        userId: currentUserId || 'anonymous'
      });
      return { success: true, docId: docRef.id };
    } catch (error) {
      console.error("Firestore saveInquiry error:", error);
      return { success: false, error };
    }
  }

  // ------------------------------------------------------------------------
  // 5. GOOGLE ANALYTICS WRAPPER
  // ------------------------------------------------------------------------

  logEvent(eventName, eventParams = {}) {
    if (!this.analytics) return;
    try {
      fbLogEvent(this.analytics, eventName, eventParams);
    } catch (e) {
      // Ignore analytics logging errors
    }
  }
}

// Instantiate and expose globally
const firebaseService = new FirebaseService();
window.firebaseService = firebaseService;

// Dispatch event so other modules can react when Firebase is ready
window.dispatchEvent(new CustomEvent('firebase-ready', { detail: firebaseService }));

// Auto-seed initial catalog products to Firestore if available
if (typeof STORE_PRODUCTS !== 'undefined' && Array.isArray(STORE_PRODUCTS)) {
  firebaseService.autoSeedIfEmpty(STORE_PRODUCTS);
}

export default firebaseService;
export { app, db, auth, analytics };
