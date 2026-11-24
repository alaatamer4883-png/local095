// ==========================================================================
// Celine Fashion - Shopping Cart & Wishlist State Engine (localStorage)
// ==========================================================================

const CART_STORAGE_KEY = 'celine_cart_items_v1';
const WISHLIST_STORAGE_KEY = 'celine_wishlist_items_v1';
const FREE_SHIPPING_THRESHOLD = 500; // 500 SAR for free shipping

// Initial Default Cart Items matching initial store mockup
const DEFAULT_CART_ITEMS = [
  {
    id: "dress",
    title: "فستان حريري مطرز بالدانتيل",
    price: 450,
    size: "38 (S)",
    color: "بيج رملي",
    quantity: 1,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqhOKCaOiSkcCNWZ5fFf_-qKZ1jn7ghDtR19ReEvgYTyMYJ-aKFwJkB1Tb57rB-L73awZxYAriwhFX9xMOZXh6GmKEQR_ZD-WUFgVzRvLSSXVqOQI5VFnEtSOgqg3156QHgZkcrZ9qkkFnyg7rLDCVfOe1ODwYJ8W4NH53t4oe3S419o_KGhz9JZlBLsreIObT1B494XVdFrhupDZiZ1xmTa1aoY3SVPbC1dOQcYw"
  },
  {
    id: "abaya",
    title: "عباية كلاسيكية بقصة ملكية",
    price: 350,
    size: "54",
    color: "أسود ملكي",
    quantity: 1,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-pVoj_IpJqzlTYME_kLOI4lOlVMfRKa1JhCoZaOpH7tMiolIEPDxJyNFMsDtk1kSKLqQ1BJHsftTYr-KCLKu3kOhiQdIufEX1Bpmolq7pBfwdZAzbCAfQk-_vJoEvIMRfSAu62SvAlojvaJsVe6-RWxVZJEBFCy9cgGdpBMbHxp5ohzYl6hP3cWGTPSG55peqq5UhU5XqJcTABoJCdiAQtkpiLq9TWph_PFWSJBo"
  }
];

class CartManager {
  constructor() {
    this.items = this.loadCart();
  }

  loadCart() {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error("Failed to parse cart storage", e);
    }
    // Set default mockup items if first visit
    this.saveCart(DEFAULT_CART_ITEMS);
    return [...DEFAULT_CART_ITEMS];
  }

  saveCart(items) {
    this.items = items;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error("Failed to save cart storage", e);
    }
    // Sync with Firebase Firestore if available
    if (window.firebaseService && typeof window.firebaseService.syncCart === 'function') {
      window.firebaseService.syncCart(items);
    }
    this.notifyUpdate();
  }

  notifyUpdate() {
    window.dispatchEvent(new CustomEvent('cart-updated', { detail: { cart: this } }));
  }

  addItem(product, size, color, quantity = 1) {
    const existingIndex = this.items.findIndex(
      item => item.id === product.id && item.size === size && item.color === color
    );

    if (existingIndex > -1) {
      this.items[existingIndex].quantity += quantity;
    } else {
      this.items.push({
        id: product.id,
        title: product.title,
        price: product.price,
        size: size || product.defaultSize || "M",
        color: color || product.defaultColor || "اللون الافتراضي",
        quantity: quantity,
        image: product.image
      });
    }

    this.saveCart(this.items);
    showToast(`تمت إضافة "${product.title}" إلى حقيبة التسوق`, 'success');
  }

  updateQuantity(index, delta) {
    if (this.items[index]) {
      this.items[index].quantity += delta;
      if (this.items[index].quantity <= 0) {
        this.removeItem(index);
        return;
      }
      this.saveCart(this.items);
    }
  }

  removeItem(index) {
    if (this.items[index]) {
      const removed = this.items.splice(index, 1)[0];
      this.saveCart(this.items);
      showToast(`تم حذف "${removed.title}" من الحقيبة`, 'info');
    }
  }

  clearCart() {
    this.saveCart([]);
  }

  getItemsCount() {
    return this.items.reduce((acc, item) => acc + item.quantity, 0);
  }

  getSubtotal() {
    return this.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  getVat() {
    // 15% VAT calculation
    return Math.round(this.getSubtotal() * 0.15);
  }

  getFreeShippingStatus() {
    const subtotal = this.getSubtotal();
    const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
    const percentage = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
    return {
      isFree: subtotal >= FREE_SHIPPING_THRESHOLD,
      remaining: remaining,
      percentage: percentage,
      threshold: FREE_SHIPPING_THRESHOLD
    };
  }

  getFinalTotal() {
    const subtotal = this.getSubtotal();
    const vat = this.getVat();
    return subtotal + vat;
  }
}

// Wishlist Manager
class WishlistManager {
  constructor() {
    this.ids = this.loadWishlist();
  }

  loadWishlist() {
    try {
      const stored = localStorage.getItem(WISHLIST_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error("Failed to parse wishlist storage", e);
    }
    // Default 3 sample wishlist items
    const defaults = ["dress", "abaya", "pearl-earrings"];
    this.saveWishlist(defaults);
    return defaults;
  }

  saveWishlist(ids) {
    this.ids = ids;
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(ids));
    } catch (e) {
      console.error("Failed to save wishlist storage", e);
    }
    // Sync with Firebase Firestore if available
    if (window.firebaseService && typeof window.firebaseService.syncWishlist === 'function') {
      window.firebaseService.syncWishlist(ids);
    }
    window.dispatchEvent(new CustomEvent('wishlist-updated', { detail: { wishlist: this } }));
  }

  toggle(productId, title = "القطعة") {
    const index = this.ids.indexOf(productId);
    let added = false;
    if (index > -1) {
      this.ids.splice(index, 1);
      showToast(`تمت إزالة ${title} من قائمة الأمنيات`, 'wishlist');
    } else {
      this.ids.push(productId);
      added = true;
      showToast(`تمت إضافة ${title} إلى قائمة الأمنيات ♥`, 'wishlist');
    }
    this.saveWishlist(this.ids);
    return added;
  }

  has(productId) {
    return this.ids.includes(productId);
  }

  getCount() {
    return this.ids.length;
  }
}

// Global Toast Notification Helper
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let iconName = 'check_circle';
  if (type === 'wishlist') iconName = 'favorite';
  else if (type === 'info') iconName = 'info';
  else if (type === 'error') iconName = 'error';

  toast.innerHTML = `
    <span class="material-symbols-outlined text-[20px] text-primary" style="${type === 'wishlist' ? 'color:#E53935' : ''}">${iconName}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastOut 0.3s ease forwards';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3200);
}

// Instantiate Singletons
const storeCart = new CartManager();
const storeWishlist = new WishlistManager();
