// ==========================================================================
// Celine Fashion - Main Application Logic & Interactivity
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initHeaderInteractions();
  initCartDrawer();
  initSearchModal();
  initWishlistListeners();
  initQuickAddButtons();
  highlightActiveNavigation();
});

// 1. Header & Navigation Interactions
function initHeaderInteractions() {
  const cartTriggerBtns = document.querySelectorAll('[data-action="open-cart"]');
  cartTriggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  });

  const mobileMenuBtn = document.getElementById('mobile-menu-toggle-btn');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileBackdrop = document.getElementById('mobile-nav-backdrop');
  const mobileCloseBtn = document.getElementById('mobile-nav-close-btn');

  if (mobileMenuBtn && mobileDrawer && mobileBackdrop) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.add('active');
      mobileBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    const closeMobileMenu = () => {
      mobileDrawer.classList.remove('active');
      mobileBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileMenu);
    mobileBackdrop.addEventListener('click', closeMobileMenu);
  }
}

// Highlight Current Active Navigation Link
function highlightActiveNavigation() {
  const currentPath = window.location.pathname;
  const currentParams = new URLSearchParams(window.location.search);
  const currentCat = currentParams.get('cat');

  const navLinks = document.querySelectorAll('nav a[data-path]');
  navLinks.forEach(link => {
    const pathAttr = link.getAttribute('data-path');
    let isActive = false;

    if (currentPath.endsWith('about.html') && pathAttr === 'about-us') {
      isActive = true;
    } else if (currentPath.endsWith('category.html')) {
      if (currentCat === 'new' && pathAttr === 'new-arrivals') isActive = true;
      else if (currentCat === 'casual' && pathAttr === 'casual-wear') isActive = true;
      else if (currentCat === 'dresses' && pathAttr === 'dresses-occasions') isActive = true;
      else if (currentCat === 'abayas' && pathAttr === 'abayas-modest') isActive = true;
    } else if (currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '') {
      if (pathAttr === 'home' || pathAttr === 'new-arrivals') {
        isActive = true;
      }
    }

    if (isActive) {
      link.classList.remove('text-on-surface-variant');
      link.classList.add('bg-primary-container', 'text-on-primary-container', 'font-semibold', 'rounded-lg');
    }
  });
}

// 2. Cart Drawer Rendering & Management
function initCartDrawer() {
  renderCartDrawer();
  updateHeaderBadges();

  window.addEventListener('cart-updated', () => {
    renderCartDrawer();
    updateHeaderBadges();
  });

  window.addEventListener('wishlist-updated', () => {
    updateHeaderBadges();
  });

  const closeCartBtn = document.getElementById('cart-drawer-close-btn');
  const cartBackdrop = document.getElementById('cart-drawer-backdrop');

  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', closeCartDrawer);
  }
  if (cartBackdrop) {
    cartBackdrop.addEventListener('click', closeCartDrawer);
  }
}

function openCartDrawer() {
  const drawerPanel = document.getElementById('cart-drawer-panel');
  const drawerBackdrop = document.getElementById('cart-drawer-backdrop');
  if (drawerPanel && drawerBackdrop) {
    drawerPanel.classList.add('active');
    drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawerPanel = document.getElementById('cart-drawer-panel');
  const drawerBackdrop = document.getElementById('cart-drawer-backdrop');
  if (drawerPanel && drawerBackdrop) {
    drawerPanel.classList.remove('active');
    drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function updateHeaderBadges() {
  const cartBadge = document.querySelectorAll('.header-cart-badge');
  const cartCount = storeCart.getItemsCount();
  cartBadge.forEach(badge => {
    badge.textContent = cartCount;
    badge.style.display = cartCount > 0 ? 'flex' : 'none';
  });

  const wishlistBadge = document.querySelectorAll('.header-wishlist-badge');
  const wishlistCount = storeWishlist.getCount();
  wishlistBadge.forEach(badge => {
    badge.textContent = wishlistCount;
    badge.style.display = wishlistCount > 0 ? 'flex' : 'none';
  });
}

function renderCartDrawer() {
  const itemsContainer = document.getElementById('cart-drawer-items-list');
  const shippingText = document.getElementById('cart-shipping-text');
  const shippingPercent = document.getElementById('cart-shipping-percent');
  const shippingBar = document.getElementById('cart-shipping-bar');
  const subtotalEl = document.getElementById('cart-subtotal');
  const vatEl = document.getElementById('cart-vat');
  const totalEl = document.getElementById('cart-final-total');
  const cartItemCountLabel = document.getElementById('cart-items-count-label');

  if (!itemsContainer) return;

  const items = storeCart.items;
  const shippingStatus = storeCart.getFreeShippingStatus();

  // Update Free Shipping Bar
  if (shippingStatus.isFree) {
    if (shippingText) shippingText.textContent = "تهانينا! لقد حصلتِ على شحن مجاني لكافة مدن المملكة ✓";
    if (shippingPercent) shippingPercent.textContent = "١٠٠٪";
    if (shippingBar) shippingBar.style.width = "100%";
  } else {
    if (shippingText) shippingText.textContent = `متبقي ${shippingStatus.remaining} ر.س للحصول على شحن مجاني!`;
    if (shippingPercent) shippingPercent.textContent = `${shippingStatus.percentage}%`;
    if (shippingBar) shippingBar.style.width = `${shippingStatus.percentage}%`;
  }

  // Update Count
  if (cartItemCountLabel) {
    cartItemCountLabel.textContent = `${storeCart.getItemsCount()} قطع`;
  }

  // Render items
  if (items.length === 0) {
    itemsContainer.innerHTML = `
      <div class="flex flex-col items-center justify-center py-16 text-center text-on-surface-variant">
        <span class="material-symbols-outlined text-6xl text-outline mb-3">shopping_bag</span>
        <h4 class="font-headline-sm text-lg text-on-surface font-semibold mb-1">حقيبة التسوق فارغة</h4>
        <p class="font-body-sm text-sm max-w-xs mb-6 text-on-surface-variant">استكشفي أحدث التصاميم الراقية وأضيفي لمستكِ المميزة إلى إطلالتكِ.</p>
        <a href="category.html" class="px-6 py-2.5 rounded-lg bg-primary text-on-primary font-headline-sm text-sm hover:bg-primary-container transition-all">
          ابدئي التسوق الآن
        </a>
      </div>
    `;
  } else {
    itemsContainer.innerHTML = items.map((item, index) => `
      <div class="flex gap-4 p-3 rounded-xl bg-surface-container-lowest border border-surface-container hover:shadow-sm transition-all">
        <a href="product.html?id=${item.id}" class="w-20 h-24 rounded-lg bg-surface-container-high flex-shrink-0 overflow-hidden block">
          <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
        </a>
        <div class="flex-1 flex flex-col justify-between">
          <div>
            <div class="flex justify-between items-start gap-2">
              <a href="product.html?id=${item.id}" class="font-headline-sm text-sm text-on-surface font-medium hover:text-primary transition-colors line-clamp-1">
                ${item.title}
              </a>
              <button class="text-outline hover:text-error transition-colors p-1" onclick="storeCart.removeItem(${index})" title="حذف القطعة">
                <span class="material-symbols-outlined text-base">delete</span>
              </button>
            </div>
            <p class="font-label-sm text-xs text-on-surface-variant mt-0.5">
              المقاس: ${item.size} | اللون: ${item.color}
            </p>
          </div>
          <div class="flex items-center justify-between mt-2 pt-1 border-t border-surface-container/60">
            <div class="flex items-center rounded-lg bg-surface-container-low px-1">
              <button class="w-6 h-6 flex items-center justify-center text-on-surface hover:bg-surface-container rounded transition-colors" onclick="storeCart.updateQuantity(${index}, -1)">
                <span class="material-symbols-outlined text-xs">remove</span>
              </button>
              <span class="px-2 font-label-md text-xs font-semibold">${item.quantity}</span>
              <button class="w-6 h-6 flex items-center justify-center text-on-surface hover:bg-surface-container rounded transition-colors" onclick="storeCart.updateQuantity(${index}, 1)">
                <span class="material-symbols-outlined text-xs">add</span>
              </button>
            </div>
            <span class="font-headline-sm text-sm font-bold text-primary">
              ${item.price * item.quantity} ر.س
            </span>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Update Summary Totals
  if (subtotalEl) subtotalEl.textContent = `${storeCart.getSubtotal()} ر.س`;
  if (vatEl) vatEl.textContent = `${storeCart.getVat()} ر.س`;
  if (totalEl) totalEl.textContent = `${storeCart.getFinalTotal()} ر.س`;
}

// 3. Search Modal Functionality
function initSearchModal() {
  const searchBtn = document.querySelectorAll('[data-action="open-search"]');
  const searchModal = document.getElementById('search-modal');
  const searchBackdrop = document.getElementById('search-backdrop');
  const searchCloseBtn = document.getElementById('search-close-btn');
  const searchInput = document.getElementById('search-modal-input');
  const searchResultsContainer = document.getElementById('search-modal-results');

  if (!searchModal) return;

  const openSearch = () => {
    searchModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      if (searchInput) searchInput.focus();
    }, 150);
  };

  const closeSearch = () => {
    searchModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  searchBtn.forEach(btn => btn.addEventListener('click', openSearch));
  if (searchCloseBtn) searchCloseBtn.addEventListener('click', closeSearch);
  if (searchBackdrop) searchBackdrop.addEventListener('click', closeSearch);

  // Live product search
  if (searchInput && searchResultsContainer) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (!query) {
        searchResultsContainer.innerHTML = `
          <div class="py-8 text-center text-on-surface-variant font-label-md text-sm">
            اكتبي اسم القطعة، التصنيف (فساتين، عبايات، كاجوال) أو المقاس للبحث السريع...
          </div>
        `;
        return;
      }

      const matches = STORE_PRODUCTS.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );

      if (matches.length === 0) {
        searchResultsContainer.innerHTML = `
          <div class="py-8 text-center text-on-surface-variant">
            <span class="material-symbols-outlined text-4xl text-outline mb-2">search_off</span>
            <p class="font-headline-sm text-base text-on-surface">لم نجد نتائج مطابقة لـ "${query}"</p>
            <p class="font-body-sm text-xs mt-1">جربي البحث بكلمات أخرى مثل "فستان"، "عباية"، أو "طقم"</p>
          </div>
        `;
      } else {
        searchResultsContainer.innerHTML = matches.map(p => `
          <a href="product.html?id=${p.id}" class="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container transition-colors">
            <div class="w-14 h-16 rounded-lg bg-surface-container-high overflow-hidden shrink-0">
              <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 text-right">
              <h5 class="font-headline-sm text-sm text-on-surface font-semibold">${p.title}</h5>
              <span class="font-label-sm text-xs text-primary font-medium block">${p.category}</span>
              <span class="font-headline-sm text-sm font-bold text-on-surface mt-1 block">${p.price} ر.س</span>
            </div>
            <span class="material-symbols-outlined text-outline rtl:rotate-180">chevron_right</span>
          </a>
        `).join('');
      }
    });
  }
}

// 4. Quick Add Buttons
function initQuickAddButtons() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-quick-add]');
    if (btn) {
      e.preventDefault();
      const productId = btn.getAttribute('data-quick-add');
      const product = getProductById(productId);
      if (product) {
        storeCart.addItem(product, product.defaultSize, product.defaultColor, 1);
        openCartDrawer();
      }
    }
  });
}

// 5. Wishlist Listeners
function initWishlistListeners() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-wishlist-toggle]');
    if (btn) {
      e.preventDefault();
      const productId = btn.getAttribute('data-wishlist-toggle');
      const product = getProductById(productId);
      const isAdded = storeWishlist.toggle(productId, product ? product.title : "القطعة");
      
      const icon = btn.querySelector('.material-symbols-outlined');
      if (icon) {
        if (isAdded) {
          icon.style.fontVariationSettings = "'FILL' 1";
          icon.classList.add('text-error');
        } else {
          icon.style.fontVariationSettings = "'FILL' 0";
          icon.classList.remove('text-error');
        }
      }
    }
  });
}
