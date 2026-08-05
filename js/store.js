import { INITIAL_PRODUCTS, INITIAL_REVIEWS } from './mockData.js';
import { translations } from './translations.js';

class Store {
  constructor() {
    this.listeners = [];
    
    // Load persisted state or defaults
    const savedProducts = localStorage.getItem('fancy_products');
    let loadedProducts = savedProducts ? JSON.parse(savedProducts) : [];
    if (!Array.isArray(loadedProducts) || loadedProducts.length === 0) {
      loadedProducts = INITIAL_PRODUCTS;
    } else {
      // Ensure all initial products exist
      const existingIds = new Set(loadedProducts.map(p => p.id));
      INITIAL_PRODUCTS.forEach(p => {
        if (!existingIds.has(p.id)) {
          loadedProducts.push(p);
        }
      });
    }
    this.products = loadedProducts;
    localStorage.setItem('fancy_products', JSON.stringify(this.products));

    const savedReviews = localStorage.getItem('fancy_reviews');
    this.reviews = savedReviews ? JSON.parse(savedReviews) : INITIAL_REVIEWS;

    const savedCart = localStorage.getItem('fancy_cart');
    this.cart = savedCart ? JSON.parse(savedCart) : [];

    const savedOrders = localStorage.getItem('fancy_orders');
    this.orders = savedOrders ? JSON.parse(savedOrders) : [];

    const savedPoints = localStorage.getItem('fancy_points');
    this.points = savedPoints ? parseInt(savedPoints, 10) : 320;

    const savedLang = localStorage.getItem('fancy_lang');
    this.lang = savedLang || 'en';

    const savedUser = localStorage.getItem('fancy_user');
    this.user = savedUser ? JSON.parse(savedUser) : null;

    this.theme = 'light';
    document.documentElement.classList.remove('dark');

    this.activeTab = 'catalog'; // 'catalog' | 'ar' | 'cart' | 'loyalty' | 'analytics' | 'admin'
    this.selectedCategory = 'All';
    this.searchQuery = '';
    this.sortBy = 'featured'; // 'featured' | 'price-asc' | 'price-desc' | 'rating'
    this.selectedProductId = null;
    this.isCheckoutOpen = false;
    this.isLogoModalOpen = false;
    this.isOffline = !navigator.onLine;

    this.notifications = [
      { id: 1, title: 'Welcome to Fancy Furniture', text: 'Earn 10% back in loyalty points on all solid oak items.', time: 'Just now', read: false },
      { id: 2, title: 'New Collection Released', text: 'Check out the Transylvanian Walnut Boema Bed.', time: '1h ago', read: false }
    ];

    window.addEventListener('online', () => {
      this.isOffline = false;
      this.notify();
    });

    window.addEventListener('offline', () => {
      this.isOffline = true;
      this.notify();
    });
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(listener => listener(this));
  }

  t(key, params = {}) {
    const dict = translations[this.lang] || translations.en;
    let str = dict[key] || translations.en[key] || key;
    Object.keys(params).forEach(p => {
      str = str.replace(new RegExp(`\\{${p}\\}`, 'g'), params[p]);
    });
    return str;
  }

  setLang(lang) {
    this.lang = lang;
    localStorage.setItem('fancy_lang', lang);
    this.notify();
  }

  setTheme(theme) {
    this.theme = theme;
    localStorage.setItem('fancy_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    this.notify();
  }

  setActiveTab(tab) {
    this.activeTab = tab;
    this.notify();
  }

  setCategory(cat) {
    this.selectedCategory = cat;
    this.notify();
  }

  setSearchQuery(q) {
    this.searchQuery = q;
    this.notify();
  }

  setSortBy(sort) {
    this.sortBy = sort;
    this.notify();
  }

  selectProduct(productId) {
    this.selectedProductId = productId;
    this.notify();
  }

  setLogoModalOpen(isOpen) {
    this.isLogoModalOpen = isOpen;
    this.notify();
  }

  addToCart(product, qty = 1) {
    const existing = this.cart.find(item => item.product.id === product.id);
    if (existing) {
      existing.quantity += qty;
    } else {
      this.cart.push({ product, quantity: qty });
    }
    localStorage.setItem('fancy_cart', JSON.stringify(this.cart));
    
    // Push notification
    this.notifications.unshift({
      id: Date.now(),
      title: 'Added to Cart',
      text: `${product.name[this.lang] || product.name.en} added to your shopping bag.`,
      time: 'Just now',
      read: false
    });

    this.notify();
  }

  updateCartQuantity(productId, qty) {
    if (qty <= 0) {
      this.cart = this.cart.filter(item => item.product.id !== productId);
    } else {
      const item = this.cart.find(i => i.product.id === productId);
      if (item) item.quantity = qty;
    }
    localStorage.setItem('fancy_cart', JSON.stringify(this.cart));
    this.notify();
  }

  clearCart() {
    this.cart = [];
    localStorage.setItem('fancy_cart', JSON.stringify(this.cart));
    this.notify();
  }

  addReview(productId, userName, rating, comment) {
    const newRev = {
      id: 'rev_' + Date.now(),
      productId,
      userId: 'user_current',
      userName: userName || 'Valued Guest',
      rating: Number(rating),
      comment,
      date: new Date().toISOString(),
      verified: true
    };
    this.reviews.unshift(newRev);
    localStorage.setItem('fancy_reviews', JSON.stringify(this.reviews));
    this.notify();
  }

  addProduct(newProd) {
    this.products.unshift(newProd);
    localStorage.setItem('fancy_products', JSON.stringify(this.products));
    this.notify();
  }

  completeOrder(orderData) {
    const order = {
      id: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toISOString(),
      items: [...this.cart],
      total: orderData.total,
      shippingMethod: orderData.shippingMethod,
      city: orderData.city,
      address: orderData.address,
      fullName: orderData.fullName,
      phone: orderData.phone,
      earnedPoints: orderData.earnedPoints,
      status: 'Processing'
    };

    this.orders.unshift(order);
    localStorage.setItem('fancy_orders', JSON.stringify(this.orders));

    // Update loyalty points
    this.points += orderData.earnedPoints - (orderData.usedPoints || 0);
    localStorage.setItem('fancy_points', this.points.toString());

    this.clearCart();
    
    this.notifications.unshift({
      id: Date.now(),
      title: 'Order Placed Successfully!',
      text: `Order ${order.id} confirmed. Tracking activated.`,
      time: 'Just now',
      read: false
    });

    this.notify();
    return order;
  }

  loginUser({ email, password, name }) {
    const user = {
      id: 'usr_' + Date.now(),
      name: name || email.split('@')[0],
      email: email,
      role: email.includes('admin') ? 'admin' : 'customer'
    };
    this.user = user;
    localStorage.setItem('fancy_user', JSON.stringify(user));

    this.notifications.unshift({
      id: Date.now(),
      title: 'Welcome Back 👋',
      text: `Logged in as ${user.name} (${user.email}).`,
      time: 'Just now',
      read: false
    });

    this.notify();
    return user;
  }

  registerUser({ name, email, password }) {
    const user = {
      id: 'usr_' + Date.now(),
      name: name || 'Valued Member',
      email: email,
      role: 'customer'
    };
    this.user = user;
    localStorage.setItem('fancy_user', JSON.stringify(user));

    // Welcome bonus points
    this.points += 100;
    localStorage.setItem('fancy_points', this.points.toString());

    this.notifications.unshift({
      id: Date.now(),
      title: 'Account Created 🎉',
      text: `Welcome to Fancy Furniture, ${user.name}! 100 bonus loyalty points added.`,
      time: 'Just now',
      read: false
    });

    this.notify();
    return user;
  }

  logoutUser() {
    this.user = null;
    localStorage.removeItem('fancy_user');

    this.notifications.unshift({
      id: Date.now(),
      title: 'Signed Out',
      text: 'You have logged out of your Fancy Furniture account.',
      time: 'Just now',
      read: false
    });

    this.notify();
  }

  getFilteredProducts() {
    return this.products.filter(p => {
      // Category filter
      if (this.selectedCategory !== 'All' && p.category !== this.selectedCategory) {
        return false;
      }
      // Search query
      if (this.searchQuery.trim()) {
        const query = this.searchQuery.toLowerCase();
        const nameMatch = Object.values(p.material || {}).some(val => typeof val === 'string' && val.toLowerCase().includes(query)) ||
                          Object.values(p.name || {}).some(val => typeof val === 'string' && val.toLowerCase().includes(query)) ||
                          p.category.toLowerCase().includes(query);
        if (!nameMatch) return false;
      }
      return true;
    }).sort((a, b) => {
      if (this.sortBy === 'price-asc') return a.priceRON - b.priceRON;
      if (this.sortBy === 'price-desc') return b.priceRON - a.priceRON;
      if (this.sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured
    });
  }

  getCartSubtotal() {
    return this.cart.reduce((sum, item) => sum + item.product.priceRON * item.quantity, 0);
  }

  getCartTotalPoints() {
    return this.cart.reduce((sum, item) => sum + (item.product.pointsEarned || Math.floor(item.product.priceRON * 0.1)) * item.quantity, 0);
  }

  isAdmin() {
    return !!(this.user && this.user.role === 'admin');
  }

  getUserTier() {
    if (this.points >= 1500) return 'Gold Master';
    if (this.points >= 500) return 'Silver Guild';
    return 'Bronze Guild';
  }

  canRedeemPoints() {
    return !!(this.user && this.points >= 500);
  }

  calculateShippingFee(distanceKm, shippingMethod = 'Home Delivery') {
    if (shippingMethod === 'Pick & Collect') {
      return {
        fee: 0,
        baseFee: 0,
        extraKm: 0,
        blocks: 0,
        surcharge: 0,
        isPickup: true,
        isGoldFree: false
      };
    }

    // Free Home Delivery is ONLY available for Gold Master level (1500+ points & signed in user)
    const isGoldMaster = !!(this.user && this.points >= 1500);
    if (isGoldMaster) {
      return {
        fee: 0,
        baseFee: 0,
        extraKm: 0,
        blocks: 0,
        surcharge: 0,
        isPickup: false,
        isGoldFree: true
      };
    }

    const baseFee = 150; // 150 LEI base fee
    const baseDistanceLimit = 50; // up to 50 km included
    const km = Math.max(0, Number(distanceKm) || 0);

    if (km <= baseDistanceLimit) {
      return {
        fee: baseFee,
        baseFee,
        extraKm: 0,
        blocks: 0,
        surcharge: 0,
        isPickup: false,
        isGoldFree: false
      };
    }

    const extraKm = km - baseDistanceLimit;
    const blocks = Math.ceil(extraKm / 30); // 20% increase for every 30 km block
    const surcharge = blocks * (baseFee * 0.20); // 20% of 150 = 30 RON per 30km
    const fee = baseFee + surcharge;

    return {
      fee,
      baseFee,
      extraKm,
      blocks,
      surcharge,
      isPickup: false,
      isGoldFree: false
    };
  }
}

export const store = new Store();
