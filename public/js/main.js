import { store } from './store.js';
import { ARStudioController } from './arStudio.js';
import { CloudinaryService } from './cloudinary.js';

const LOGO_SVG_FALLBACK = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><rect width='200' height='200' rx='32' fill='%23180c07'/><path d='M50 45 h100 v24 h-65 v28 h50 v24 h-50 v54 h-35 Z' fill='%23d97706'/><path d='M80 65 h80 v20 h-50 v20 h40 v20 h-40 v45 h-30 Z' fill='%23f59e0b' opacity='0.85'/><text x='100' y='180' text-anchor='middle' fill='%23f7eeea' font-family='Cinzel, serif' font-size='16' font-weight='bold' letter-spacing='2'>FANCY</text></svg>";

class AppController {
  constructor() {
    this.root = document.getElementById('root');
    this.arController = null;
    this.showNotifications = false;
    this.showCartDrawer = false;
    this.showCheckoutModal = false;
    this.showSocialLoginModal = false;
    this.showAuthModal = false;
    this.authModalMode = 'signin';
    this.showUserMenu = false;

    // Analytics live visitor ticker simulation
    this.liveVisitors = 18;
    setInterval(() => {
      this.liveVisitors += Math.floor(Math.random() * 3) - 1;
      if (this.liveVisitors < 12) this.liveVisitors = 12;
      const el = document.getElementById('analytics-live-visitors');
      if (el) el.textContent = this.liveVisitors;
    }, 4000);

    // Initial theme setup
    store.setTheme(store.theme);

    // Subscribe to store updates
    store.subscribe(() => this.render());
  }

  init() {
    this.render();
  }

  render() {
    if (!this.root) return;
    const t = (k, p) => store.t(k, p);
    const lang = store.lang;
    const isDark = store.theme === 'dark';

    // Top Navigation
    const cartCount = store.cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartSubtotal = store.getCartSubtotal();
    const unreadNotifs = store.notifications.filter(n => !n.read).length;

    this.root.innerHTML = `
      <!-- Top Bar / Header -->
      <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm transition-colors">
        ${store.isOffline ? `
          <div class="bg-amber-800 text-white text-xs font-semibold py-1 px-4 text-center flex items-center justify-center gap-2">
            <span>📡 ${t('offlineTitle')}:</span>
            <span>${t('offlineText')}</span>
          </div>
        ` : ''}

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3">
          <!-- Logo -->
          <div id="nav-logo" role="button" tabindex="0" class="flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none group flex-shrink-0 cursor-pointer">
            <div id="open-logo-modal-btn" title="Click to view luxury logo details" class="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden shadow-md shadow-amber-900/25 group-hover:scale-105 transition-all ring-2 ring-amber-700/50 bg-stone-950 flex items-center justify-center">
              <img src="./images/fancy_logo_1785839799811.jpg" alt="Fancy Furniture Logo" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='images/logo.jpg';" />
              <div class="absolute inset-0 bg-gradient-to-tr from-amber-900/20 via-transparent to-amber-400/20 pointer-events-none"></div>
            </div>
            <div>
              <span class="font-serif font-bold text-base sm:text-xl text-stone-900 tracking-tight leading-none flex items-center gap-1.5">
                Fancy <span class="text-amber-800 font-normal">Furniture</span>
                <span class="inline-block text-[9px] bg-gradient-to-r from-amber-700 to-amber-900 text-white px-1.5 py-0.5 rounded font-sans font-bold uppercase tracking-widest shadow-xs">LUXURY</span>
              </span>
              <span class="text-[9px] sm:text-[10px] font-bold tracking-wider text-stone-500 uppercase block mt-0.5">
                Handcrafted Collection
              </span>
            </div>
          </div>

          <!-- Nav Tabs (Desktop lg+) -->
          <nav class="hidden lg:flex items-center gap-1 bg-stone-100 p-1.5 rounded-xl border border-stone-200 flex-shrink-0">
            <button data-tab="catalog" class="nav-tab-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              store.activeTab === 'catalog'
                ? 'bg-amber-800 text-white shadow-sm font-bold'
                : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/70'
            }">${t('navCatalog')}</button>

            <button data-tab="ar" class="nav-tab-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              store.activeTab === 'ar'
                ? 'bg-amber-800 text-white shadow-sm font-bold'
                : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/70'
            }">
              <span>👓</span>
              <span>${t('navAR')}</span>
            </button>

            <button data-tab="loyalty" class="nav-tab-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              store.activeTab === 'loyalty'
                ? 'bg-amber-800 text-white shadow-sm font-bold'
                : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/70'
            }">
              <span>🏅</span>
              <span>${t('navLoyalty')}</span>
              <span class="${store.activeTab === 'loyalty' ? 'bg-amber-950 text-amber-200' : 'bg-amber-100 text-amber-900 border border-amber-300/60'} px-2 py-0.5 rounded-full text-[10px] font-bold">${store.points} pts</span>
            </button>

            <button data-tab="analytics" class="nav-tab-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              store.activeTab === 'analytics'
                ? 'bg-amber-800 text-white shadow-sm font-bold'
                : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/70'
            }">${t('navAnalytics')}</button>

            <button data-tab="admin" class="nav-tab-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              store.activeTab === 'admin'
                ? 'bg-amber-800 text-white shadow-sm font-bold'
                : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/70'
            }">Merchant Admin</button>
          </nav>

          <!-- Action Utilities (Lang, Cart, Notifs, Auth) -->
          <div class="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <!-- Language Picker -->
            <div class="relative">
              <select id="lang-select" class="appearance-none bg-white border border-stone-300 rounded-lg px-2 sm:px-2.5 py-1.5 text-xs font-semibold text-stone-800 pr-5 sm:pr-6 cursor-pointer focus:outline-none hover:border-amber-700 transition-colors shadow-sm">
                <option value="en" ${lang === 'en' ? 'selected' : ''}>🇬🇧 EN</option>
                <option value="ro" ${lang === 'ro' ? 'selected' : ''}>🇷🇴 RO</option>
                <option value="hu" ${lang === 'hu' ? 'selected' : ''}>🇭🇺 HU</option>
              </select>
            </div>

            <!-- Notifications -->
            <div class="relative">
              <button id="notif-btn" class="p-1.5 sm:p-2 rounded-lg bg-white border border-stone-300 text-stone-700 hover:bg-stone-100 transition-colors relative shadow-sm">
                🔔
                ${unreadNotifs > 0 ? `
                  <span class="absolute -top-1 -right-1 w-4 h-4 bg-amber-800 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                    ${unreadNotifs}
                  </span>
                ` : ''}
              </button>

              <!-- Notifications Dropdown -->
              ${this.showNotifications ? `
                <div class="absolute right-0 mt-2 w-72 sm:w-80 bg-white rounded-2xl shadow-xl border border-stone-200 p-4 z-50 animate-in fade-in slide-in-from-top-2">
                  <div class="flex items-center justify-between pb-3 border-b border-stone-100">
                    <h4 class="font-bold text-sm text-stone-900">${t('notificationTitle')}</h4>
                    <span class="text-xs text-amber-800 font-semibold">${store.notifications.length} total</span>
                  </div>
                  <div class="divide-y divide-stone-100 max-h-64 overflow-y-auto my-2">
                    ${store.notifications.map(n => `
                      <div class="py-2.5 px-1">
                        <div class="flex items-center justify-between text-xs font-semibold text-stone-800">
                          <span>${n.title}</span>
                          <span class="text-[10px] text-stone-400">${n.time}</span>
                        </div>
                        <p class="text-xs text-stone-500 mt-0.5">${n.text}</p>
                      </div>
                    `).join('')}
                  </div>
                </div>
              ` : ''}
            </div>

            <!-- User Account / Sign In / Register -->
            ${!store.user ? `
              <button id="auth-modal-btn" class="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-white border border-stone-300 hover:border-amber-700 text-stone-800 text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all hover:bg-stone-50">
                <span>👤</span>
                <span class="hidden sm:inline">${t('signIn')}</span>
              </button>
            ` : `
              <div class="relative">
                <button id="user-menu-btn" class="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-amber-50 border border-amber-200 hover:bg-amber-100 text-amber-900 text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all">
                  <span class="w-5 h-5 rounded-full bg-amber-800 text-white flex items-center justify-center text-[10px] font-bold">${store.user.name.charAt(0).toUpperCase()}</span>
                  <span class="max-w-[90px] truncate hidden sm:inline">${store.user.name}</span>
                </button>
                ${this.showUserMenu ? `
                  <div class="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-stone-200 p-3 z-50 animate-in fade-in">
                    <div class="pb-2 border-b border-stone-100 mb-2">
                      <div class="font-bold text-xs text-stone-900 truncate">${store.user.name}</div>
                      <div class="text-[10px] text-stone-500 truncate">${store.user.email}</div>
                      <div class="mt-1.5 inline-flex items-center gap-1 bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        🏅 ${store.points} pts
                      </div>
                    </div>
                    <button id="user-orders-btn" class="w-full text-left text-xs font-semibold text-stone-700 hover:text-amber-800 py-1.5 px-2 rounded-lg hover:bg-stone-100 flex items-center gap-2">
                      📦 ${t('navLoyalty')} & Orders
                    </button>
                    <button id="user-signout-btn" class="w-full text-left text-xs font-semibold text-red-600 hover:text-red-700 py-1.5 px-2 rounded-lg hover:bg-red-50 flex items-center gap-2 mt-1">
                      🚪 ${t('signOut')}
                    </button>
                  </div>
                ` : ''}
              </div>
            `}

            <!-- Cart Trigger -->
            <button id="cart-drawer-btn" class="px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold flex items-center gap-1.5 sm:gap-2 shadow-sm transition-all active:scale-95">
              <span>🛒</span>
              <span class="hidden sm:inline">${t('navCart')}</span>
              <span class="bg-amber-950 px-1.5 sm:px-2 py-0.5 rounded-md font-bold text-[10px] sm:text-[11px]">${cartCount} (${cartSubtotal} RON)</span>
            </button>
          </div>
        </div>

        <!-- Sub Navigation Bar (Responsive, contained within screen width) -->
        <div class="lg:hidden w-full max-w-full min-w-0 bg-stone-100 border-t border-stone-200 py-2 px-3 sm:px-6">
          <div class="flex items-center gap-1.5 overflow-x-auto scrollbar-none w-full max-w-full min-w-0">
            <button data-tab="catalog" class="nav-tab-btn flex-shrink-0 whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
              store.activeTab === 'catalog' ? 'bg-amber-800 text-white font-bold shadow-sm' : 'text-stone-700 hover:bg-stone-200/80'
            }">
              <span>🛋️</span>
              <span>${t('navCatalog')}</span>
            </button>
            <button data-tab="ar" class="nav-tab-btn flex-shrink-0 whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
              store.activeTab === 'ar' ? 'bg-amber-800 text-white font-bold shadow-sm' : 'text-stone-700 hover:bg-stone-200/80'
            }">
              <span>👓</span>
              <span>${t('navAR')}</span>
            </button>
            <button data-tab="loyalty" class="nav-tab-btn flex-shrink-0 whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
              store.activeTab === 'loyalty' ? 'bg-amber-800 text-white font-bold shadow-sm' : 'text-stone-700 hover:bg-stone-200/80'
            }">
              <span>🏅</span>
              <span>${t('navLoyalty')}</span>
              <span class="${store.activeTab === 'loyalty' ? 'bg-amber-950 text-amber-200' : 'bg-amber-200 text-amber-900'} px-1.5 py-0.2 rounded-full text-[10px] font-bold">${store.points}p</span>
            </button>
            <button data-tab="analytics" class="nav-tab-btn flex-shrink-0 whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
              store.activeTab === 'analytics' ? 'bg-amber-800 text-white font-bold shadow-sm' : 'text-stone-700 hover:bg-stone-200/80'
            }">
              <span>📊</span>
              <span>${t('navAnalytics')}</span>
            </button>
            <button data-tab="admin" class="nav-tab-btn flex-shrink-0 whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
              store.activeTab === 'admin' ? 'bg-amber-800 text-white font-bold shadow-sm' : 'text-stone-700 hover:bg-stone-200/80'
            }">
              <span>🛠️</span>
              <span>Admin</span>
            </button>
          </div>
        </div>
      </header>

      <!-- Main Container View -->
      <main id="main-content" class="min-h-[calc(100vh-16rem)]">
        <!-- Dynamic Content injected below -->
      </main>

      <!-- Modals & Drawers -->
      <div id="modal-container"></div>

      <!-- Footer -->
      <footer class="bg-stone-900 text-stone-400 border-t border-stone-800 mt-20 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div class="flex items-center gap-3 mb-2">
              <div id="footer-logo-btn" title="Click to view luxury logo details" class="w-8 h-8 rounded-lg overflow-hidden ring-1 ring-amber-700/50 bg-stone-950 flex-shrink-0 cursor-pointer hover:ring-amber-500 transition-all">
                <img src="./images/fancy_logo_1785839799811.jpg" alt="Fancy Furniture Logo" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='images/logo.jpg';" />
              </div>
              <div class="font-serif font-bold text-xl text-white">Fancy Furniture</div>
            </div>
            <p class="text-xs text-stone-400 leading-relaxed">${t('heroSubtitle')}</p>
            <div class="mt-4 text-xs text-amber-500 font-semibold">📍 ${t('shopAddress')}</div>
          </div>
          <div>
            <h4 class="font-bold text-stone-200 text-sm mb-3">${t('footerQuickNav')}</h4>
            <ul class="space-y-2 text-xs">
              <li><button data-tab="catalog" class="nav-tab-btn hover:text-white">${t('navCatalog')}</button></li>
              <li><button data-tab="ar" class="nav-tab-btn hover:text-white">${t('navAR')}</button></li>
              <li><button data-tab="loyalty" class="nav-tab-btn hover:text-white">${t('navLoyalty')}</button></li>
              <li><button id="footer-account-btn" class="hover:text-white">${store.user ? t('myAccount') : t('signIn') + ' / ' + t('register')}</button></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-stone-200 text-sm mb-3">${t('footerGuaranteeTitle')}</h4>
            <p class="text-xs text-stone-400">${t('footerGuaranteeText')}</p>
          </div>
          <div>
            <h4 class="font-bold text-stone-200 text-sm mb-3">${t('footerSupportTitle')}</h4>
            <div class="text-xs space-y-1">
              <div>📞 Phone: +40 266 123 456</div>
              <div>✉️ Email: contact@fancyfurniture.com</div>
              <div>📍 Showroom: Odorheiu Secuiesc</div>
            </div>
          </div>
        </div>

        <div class="max-w-7xl mx-auto border-t border-stone-800/80 pt-6 text-center text-xs text-stone-500 font-medium">
          ${t('footerRights')}
        </div>
      </footer>
    `;

    this.renderActiveTabContent();
    this.renderModals();
    this.attachHeaderEvents();
  }

  renderActiveTabContent() {
    const mainEl = this.root.querySelector('#main-content');
    if (!mainEl) return;

    // Destroy AR controller if switching away from AR
    if (store.activeTab !== 'ar' && this.arController) {
      this.arController.destroy();
      this.arController = null;
    }

    if (store.activeTab === 'ar') {
      mainEl.innerHTML = `<div id="ar-container"></div>`;
      const arContainer = mainEl.querySelector('#ar-container');
      this.arController = new ARStudioController(arContainer, store);
      this.arController.init();
    } else if (store.activeTab === 'loyalty') {
      this.renderLoyaltyHub(mainEl);
    } else if (store.activeTab === 'analytics') {
      this.renderAnalyticsDashboard(mainEl);
    } else if (store.activeTab === 'admin') {
      this.renderAdminPanel(mainEl);
    } else {
      this.renderCatalog(mainEl);
    }
  }

  renderCatalog(container) {
    const t = (k) => store.t(k);
    const lang = store.lang;
    const products = store.getFilteredProducts();

    const categories = ['All', 'Tables', 'Chairs', 'Sofas', 'Cabinets', 'Beds', 'Lighting', 'Armchairs', 'Decor'];

    container.innerHTML = `
      <!-- Hero Banner -->
      <section class="relative bg-stone-900 text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden mb-8 border-b border-stone-800">
        <div class="absolute inset-0 opacity-25 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80');"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-900/90 to-transparent"></div>

        <div class="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-semibold mb-4">
              <span>✨</span>
              <span>Fancy Furniture Handcrafted Collection</span>
            </div>
            <h1 class="text-3xl sm:text-5xl font-bold font-serif leading-tight text-white mb-4">
              ${t('heroTitle')}
            </h1>
            <p class="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
              ${t('heroSubtitle')}
            </p>
            <div class="flex items-center gap-4 flex-wrap">
              <button data-tab="ar" class="nav-tab-btn px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm shadow-lg shadow-amber-900/30 transition-all flex items-center gap-2">
                <span>👓</span>
                <span>Try AR Visualizer</span>
              </button>
              <a href="#catalog-grid" class="px-5 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-sm border border-stone-700 transition-all">
                Explore ${store.products.length} Furniture Pieces
              </a>
            </div>
          </div>
        </div>
      </section>

      <div id="catalog-grid" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Controls Bar: Category Pills with Left/Right Scroll, Search, Sort & Layout Toggle -->
        <div class="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 bg-white dark:bg-stone-900 p-4 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm w-full max-w-full min-w-0">
          
          <!-- Category Pills with Left/Right Scroll Controls -->
          <div class="flex items-center gap-1.5 w-full lg:w-auto max-w-full min-w-0 flex-1 relative">
            <button id="cat-scroll-left" class="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 text-xs font-bold transition-all shrink-0 shadow-xs" title="Scroll categories left">
              ◀
            </button>

            <div id="category-pills-wrapper" class="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none scroll-smooth w-full max-w-full min-w-0 flex-1">
              ${categories.map(cat => {
                const labelKey = cat === 'All' ? 'categoryAll' : 'category' + cat;
                const isSel = store.selectedCategory === cat;
                return `
                  <button data-cat="${cat}" class="cat-pill px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap flex-shrink-0 transition-all ${
                    isSel 
                      ? 'bg-amber-800 text-white shadow-sm'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                  }">
                    ${t(labelKey) || cat}
                  </button>
                `;
              }).join('')}
            </div>

            <button id="cat-scroll-right" class="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 text-xs font-bold transition-all shrink-0 shadow-xs" title="Scroll categories right">
              ▶
            </button>
          </div>

          <!-- Search, Sort & Layout Controls -->
          <div class="flex items-center gap-3 w-full lg:w-auto max-w-full min-w-0 flex-shrink-0 flex-wrap sm:flex-nowrap">
            <!-- Search -->
            <div class="relative flex-1 sm:w-56 min-w-0">
              <input 
                id="search-input" 
                type="text" 
                placeholder="Search oak, chair, table..." 
                value="${store.searchQuery}"
                class="w-full bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3.5 py-2 pl-9 text-xs font-medium text-stone-800 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-700"
              />
              <span class="absolute left-3 top-2.5 text-stone-400 text-xs">🔍</span>
            </div>

            <!-- Sort -->
            <select id="sort-select" class="bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2 text-xs font-semibold text-stone-700 dark:text-stone-300 focus:outline-none cursor-pointer flex-shrink-0">
              <option value="featured" ${store.sortBy === 'featured' ? 'selected' : ''}>Featured</option>
              <option value="price-asc" ${store.sortBy === 'price-asc' ? 'selected' : ''}>Price: Low to High</option>
              <option value="price-desc" ${store.sortBy === 'price-desc' ? 'selected' : ''}>Price: High to Low</option>
              <option value="rating" ${store.sortBy === 'rating' ? 'selected' : ''}>Highest Rated</option>
            </select>

            <!-- Layout View Switcher -->
            <div class="flex items-center bg-stone-100 dark:bg-stone-800 p-1 rounded-xl border border-stone-200 dark:border-stone-700 shrink-0">
              <button id="view-grid-btn" class="px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${store.catalogLayout === 'grid' ? 'bg-amber-800 text-white shadow-xs' : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'}" title="Grid View">
                <span>▦ Grid</span>
              </button>
              <button id="view-carousel-btn" class="px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${store.catalogLayout === 'carousel' ? 'bg-amber-800 text-white shadow-xs' : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'}" title="Horizontal Scroll View">
                <span>↔️ Scroll</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Catalog Header & Left/Right Scroll Navigation Bar -->
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <h2 class="text-xl font-serif font-bold text-stone-900 dark:text-stone-100">
              ${store.selectedCategory === 'All' ? 'All Handcrafted Collections' : store.selectedCategory}
            </h2>
            <span class="text-xs font-semibold text-stone-500 bg-stone-100 dark:bg-stone-800 px-2.5 py-0.5 rounded-full">
              ${products.length} items
            </span>
          </div>

          <!-- Left / Right Scroll Action Buttons -->
          <div class="flex items-center gap-2">
            <span class="text-xs text-stone-500 font-medium hidden sm:inline">Scroll Items:</span>
            <button id="catalog-scroll-left" class="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-white dark:bg-stone-800 hover:bg-amber-50 dark:hover:bg-stone-700 text-amber-900 dark:text-amber-300 border border-stone-200 dark:border-stone-700 text-xs font-bold transition-all shadow-xs flex items-center gap-1 active:scale-95" title="Scroll left">
              <span>◀</span>
              <span class="hidden sm:inline">Left</span>
            </button>
            <button id="catalog-scroll-right" class="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-white dark:bg-stone-800 hover:bg-amber-50 dark:hover:bg-stone-700 text-amber-900 dark:text-amber-300 border border-stone-200 dark:border-stone-700 text-xs font-bold transition-all shadow-xs flex items-center gap-1 active:scale-95" title="Scroll right">
              <span class="hidden sm:inline">Right</span>
              <span>▶</span>
            </button>
          </div>
        </div>

        <!-- Product Cards Container (Grid or Horizontal Carousel) -->
        ${products.length === 0 ? `
          <div class="text-center py-20 bg-white rounded-2xl border border-stone-200 p-8">
            <div class="text-4xl mb-3">🪵</div>
            <h3 class="text-lg font-bold text-stone-800 mb-1">No furniture pieces found</h3>
            <p class="text-xs text-stone-500">Try clearing your search query or switching categories.</p>
          </div>
        ` : `
          <div id="catalog-scroll-track" class="${
            store.catalogLayout === 'carousel' 
              ? 'flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth pb-6 pt-2 scrollbar-none w-full' 
              : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
          }">
            ${products.map(prod => {
              const name = prod.name[lang] || prod.name.en;
              const desc = prod.description[lang] || prod.description.en;
              const mat = prod.material ? (prod.material[lang] || prod.material.en) : '';

              return `
                <div class="group bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                  store.catalogLayout === 'carousel' ? 'w-80 sm:w-96 shrink-0 snap-start' : ''
                }">
                  <div>
                    <!-- Image container -->
                    <div class="relative aspect-[4/3] bg-stone-100 dark:bg-stone-800 overflow-hidden cursor-pointer open-prod-modal" data-prod-id="${prod.id}">
                      <img src="${prod.image}" alt="${name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80';" />
                      
                      <div class="absolute top-3 left-3 flex flex-col gap-1">
                        <span class="px-2.5 py-1 bg-stone-900/80 backdrop-blur-md text-stone-200 text-[10px] font-bold uppercase rounded-lg border border-stone-700/50">
                          ${prod.category}
                        </span>
                      </div>

                      <div class="absolute top-3 right-3">
                        <span class="px-2 py-1 bg-amber-500 text-stone-950 font-bold text-[10px] rounded-lg shadow-sm">
                          +${prod.pointsEarned || Math.floor(prod.priceRON * 0.1)} pts
                        </span>
                      </div>

                      <div class="absolute bottom-3 left-3 bg-stone-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-amber-400 text-xs font-semibold flex items-center gap-1">
                        <span>⭐ ${prod.rating}</span>
                        <span class="text-stone-400 text-[10px]">(${prod.reviewsCount})</span>
                      </div>
                    </div>

                    <!-- Details -->
                    <div class="p-5">
                      <h3 class="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors cursor-pointer open-prod-modal" data-prod-id="${prod.id}">
                        ${name}
                      </h3>
                      <p class="text-xs text-stone-600 dark:text-stone-300 mt-1 line-clamp-2 leading-relaxed">
                        ${desc}
                      </p>

                      <div class="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs text-stone-600 dark:text-stone-400">
                        <span>🪵 ${mat}</span>
                        <span>📏 ${prod.dimensions}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Footer action -->
                  <div class="p-5 pt-0 flex items-center justify-between gap-3">
                    <div>
                      <span class="text-xs text-stone-400 uppercase block font-semibold">Price</span>
                      <span class="text-xl font-bold font-serif text-amber-800 dark:text-amber-400">${prod.priceRON} RON</span>
                    </div>

                    <button data-add-prod-id="${prod.id}" class="add-to-cart-btn px-4 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-amber-900/20 active:scale-95 transition-all">
                      <span>🛒</span>
                      <span>${t('addToCart')}</span>
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `}
      </div>
    `;

    // Attach category pills scroll events
    const catWrapper = container.querySelector('#category-pills-wrapper');
    const catScrollLeft = container.querySelector('#cat-scroll-left');
    const catScrollRight = container.querySelector('#cat-scroll-right');
    if (catScrollLeft && catWrapper) {
      catScrollLeft.onclick = () => catWrapper.scrollBy({ left: -220, behavior: 'smooth' });
    }
    if (catScrollRight && catWrapper) {
      catScrollRight.onclick = () => catWrapper.scrollBy({ left: 220, behavior: 'smooth' });
    }

    // Attach layout view toggle events
    const viewGridBtn = container.querySelector('#view-grid-btn');
    const viewCarouselBtn = container.querySelector('#view-carousel-btn');
    if (viewGridBtn) viewGridBtn.onclick = () => store.setCatalogLayout('grid');
    if (viewCarouselBtn) viewCarouselBtn.onclick = () => store.setCatalogLayout('carousel');

    // Attach catalog items left/right scroll events
    const catalogTrack = container.querySelector('#catalog-scroll-track');
    const catalogScrollLeft = container.querySelector('#catalog-scroll-left');
    const catalogScrollRight = container.querySelector('#catalog-scroll-right');

    if (catalogScrollLeft && catalogTrack) {
      catalogScrollLeft.onclick = () => {
        if (store.catalogLayout === 'grid') {
          store.setCatalogLayout('carousel');
          setTimeout(() => {
            const track = container.querySelector('#catalog-scroll-track');
            if (track) track.scrollBy({ left: -360, behavior: 'smooth' });
          }, 50);
        } else {
          catalogTrack.scrollBy({ left: -360, behavior: 'smooth' });
        }
      };
    }

    if (catalogScrollRight && catalogTrack) {
      catalogScrollRight.onclick = () => {
        if (store.catalogLayout === 'grid') {
          store.setCatalogLayout('carousel');
          setTimeout(() => {
            const track = container.querySelector('#catalog-scroll-track');
            if (track) track.scrollBy({ left: 360, behavior: 'smooth' });
          }, 50);
        } else {
          catalogTrack.scrollBy({ left: 360, behavior: 'smooth' });
        }
      };
    }

    // Attach catalog events
    container.querySelectorAll('.cat-pill').forEach(btn => {
      btn.onclick = (e) => store.setCategory(e.currentTarget.dataset.cat);
    });

    const searchInput = container.querySelector('#search-input');
    if (searchInput) {
      searchInput.oninput = (e) => store.setSearchQuery(e.target.value);
    }

    const sortSelect = container.querySelector('#sort-select');
    if (sortSelect) {
      sortSelect.onchange = (e) => store.setSortBy(e.target.value);
    }

    container.querySelectorAll('.open-prod-modal').forEach(el => {
      el.onclick = (e) => store.selectProduct(e.currentTarget.dataset.prodId);
    });

    container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
      btn.onclick = (e) => {
        const id = e.currentTarget.dataset.addProdId;
        const prod = store.products.find(p => p.id === id);
        if (prod) store.addToCart(prod, 1);
      };
    });
  }

  renderLoyaltyHub(container) {
    const t = (k, p) => store.t(k, p);
    const pts = store.points;

    let tier = t('tierBronze');
    let minPts = 0;
    let nextPts = 500;
    if (pts >= 1500) {
      tier = t('tierGold');
      minPts = 1500;
      nextPts = 3000;
    } else if (pts >= 500) {
      tier = t('tierSilver');
      minPts = 500;
      nextPts = 1500;
    }

    const progressPct = Math.min(100, Math.max(0, ((pts - minPts) / (nextPts - minPts)) * 100));

    container.innerHTML = `
      <div class="max-w-5xl mx-auto p-4 sm:p-6 flex flex-col gap-8">
        <!-- Header -->
        <div class="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-stone-800 relative overflow-hidden">
          <div class="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div class="text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
                ${t('loyaltyCard')}
              </div>
              <h1 class="text-3xl font-serif font-bold text-white mb-2">${tier}</h1>
              <p class="text-stone-300 text-xs sm:text-sm max-w-lg">
                ${t('loyaltyHeroDesc')}
              </p>
            </div>

            <div class="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 text-center min-w-[180px]">
              <span class="text-xs uppercase text-stone-300 block font-semibold">${t('yourBalance')}</span>
              <span class="text-4xl font-bold font-serif text-amber-400">${pts}</span>
              <span class="text-xs text-stone-300 block mt-0.5">${t('pointsText')}</span>
            </div>
          </div>

          <!-- Progress bar -->
          <div class="mt-8 pt-6 border-t border-white/10">
            <div class="flex items-center justify-between text-xs text-stone-300 mb-2 font-semibold">
              <span>${t('currentLevel', { tier })}</span>
              <span>${pts >= 1500 ? t('maxLevelReached') : t('nextLevelGoal', { nextPts, remaining: nextPts - pts })}</span>
            </div>
            <div class="w-full h-3 bg-stone-800 rounded-full overflow-hidden p-0.5 border border-white/10">
              <div class="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full transition-all duration-500" style="width: ${progressPct}%"></div>
            </div>
          </div>
        </div>

        <!-- Tier Benefits Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white dark:bg-stone-900 p-6 rounded-2xl border ${pts < 500 ? 'border-amber-500 ring-2 ring-amber-500/20' : 'border-stone-200 dark:border-stone-800'} shadow-sm">
            <div class="text-2xl mb-2">🥉</div>
            <h3 class="font-bold text-stone-900 dark:text-stone-100 mb-1 text-sm">${t('tierBronze')}</h3>
            <p class="text-xs text-stone-500 mb-4">${t('tierBronzeRange')}</p>
            <ul class="text-xs space-y-2 text-stone-600 dark:text-stone-400">
              <li>${t('tierBronzeBenefit1')}</li>
              <li>${t('tierBronzeBenefit2')}</li>
              <li>${t('tierBronzeBenefit3')}</li>
            </ul>
          </div>

          <div class="bg-white dark:bg-stone-900 p-6 rounded-2xl border ${pts >= 500 && pts < 1500 ? 'border-amber-500 ring-2 ring-amber-500/20' : 'border-stone-200 dark:border-stone-800'} shadow-sm">
            <div class="text-2xl mb-2">🥈</div>
            <h3 class="font-bold text-stone-900 dark:text-stone-100 mb-1 text-sm">${t('tierSilver')}</h3>
            <p class="text-xs text-stone-500 mb-4">${t('tierSilverRange')}</p>
            <ul class="text-xs space-y-2 text-stone-600 dark:text-stone-400">
              <li>${t('tierSilverBenefit1')}</li>
              <li>${t('tierSilverBenefit2')}</li>
              <li>${t('tierSilverBenefit3')}</li>
            </ul>
          </div>

          <div class="bg-white dark:bg-stone-900 p-6 rounded-2xl border ${pts >= 1500 ? 'border-amber-500 ring-2 ring-amber-500/20' : 'border-stone-200 dark:border-stone-800'} shadow-sm">
            <div class="text-2xl mb-2">🥇</div>
            <h3 class="font-bold text-stone-900 dark:text-stone-100 mb-1 text-sm">${t('tierGold')}</h3>
            <p class="text-xs text-stone-500 mb-4">${t('tierGoldRange')}</p>
            <ul class="text-xs space-y-2 text-stone-600 dark:text-stone-400">
              <li>${t('tierGoldBenefit1')}</li>
              <li>${t('tierGoldBenefit2')}</li>
              <li>${t('tierGoldBenefit3')}</li>
              <li>${t('tierGoldBenefit4')}</li>
            </ul>
          </div>
        </div>

        <!-- Order History -->
        <div class="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm">
          <h3 class="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 mb-4">${t('recentOrdersTitle')}</h3>
          ${store.orders.length === 0 ? `
            <div class="text-center py-8 text-xs text-stone-500">
              ${t('noOrdersFound')}
            </div>
          ` : `
            <div class="divide-y divide-stone-100 dark:divide-stone-800">
              ${store.orders.map(ord => `
                <div class="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="font-bold text-sm text-stone-900 dark:text-stone-100">${ord.id}</span>
                      <span class="px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-[10px] font-bold uppercase">${ord.status}</span>
                    </div>
                    <div class="text-xs text-stone-500 mt-0.5">
                      ${new Date(ord.date).toLocaleDateString()} • ${t('orderItemsCount', { count: ord.items.length })} • ${ord.shippingMethod}
                    </div>
                  </div>
                  <div class="text-right">
                    <span class="font-serif font-bold text-base text-amber-700 dark:text-amber-400 block">${ord.total} RON</span>
                    <span class="text-[10px] text-green-600 dark:text-green-400 font-semibold">${t('ptsEarnedText', { points: ord.earnedPoints })}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      </div>
    `;
  }

  renderAnalyticsDashboard(container) {
    const t = (k) => store.t(k);
    const lang = store.lang;
    const totalRev = store.orders.reduce((sum, o) => sum + o.total, 0) + 48200; // Base historical revenue + orders

    const categories = [
      { id: 'Tables', icon: '🪵', label: { en: 'Solid Oak Tables', ro: 'Mese din Stejar Masiv', hu: 'Tölgyfa Asztalok' }, baseWeight: 35, gradient: 'from-amber-600 to-amber-500', barBg: 'bg-amber-500', badgeClass: 'bg-amber-100 text-amber-900 dark:bg-amber-950/80 dark:text-amber-200 border-amber-300 dark:border-amber-700' },
      { id: 'Sofas', icon: '🛋️', label: { en: 'Sofas & Lounges', ro: 'Canapele & Fotolii', hu: 'Kanapék & Bútorok' }, baseWeight: 26, gradient: 'from-emerald-600 to-emerald-500', barBg: 'bg-emerald-500', badgeClass: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950/80 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700' },
      { id: 'Beds', icon: '🛌', label: { en: 'Beds & Bedroom', ro: 'Paturi & Dormitoare', hu: 'Ágyak & Hálószoba' }, baseWeight: 17, gradient: 'from-indigo-600 to-indigo-500', barBg: 'bg-indigo-500', badgeClass: 'bg-indigo-100 text-indigo-900 dark:bg-indigo-950/80 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700' },
      { id: 'Chairs', icon: '🪑', label: { en: 'Dining Chairs', ro: 'Scaun de Dining', hu: 'Étkezőszékek' }, baseWeight: 9, gradient: 'from-sky-600 to-sky-500', barBg: 'bg-sky-500', badgeClass: 'bg-sky-100 text-sky-900 dark:bg-sky-950/80 dark:text-sky-200 border-sky-300 dark:border-sky-700' },
      { id: 'Cabinets', icon: '🗄️', label: { en: 'Cabinets & Sideboards', ro: 'Comode & Dulapuri', hu: 'Szekrények & Tálalók' }, baseWeight: 7, gradient: 'from-orange-600 to-orange-500', barBg: 'bg-orange-500', badgeClass: 'bg-orange-100 text-orange-900 dark:bg-orange-950/80 dark:text-orange-200 border-orange-300 dark:border-orange-700' },
      { id: 'Armchairs', icon: '👑', label: { en: 'Lounge Armchairs', ro: 'Fotolii Sculptate', hu: 'Faragott Fotelek' }, baseWeight: 3, gradient: 'from-rose-600 to-rose-500', barBg: 'bg-rose-500', badgeClass: 'bg-rose-100 text-rose-900 dark:bg-rose-950/80 dark:text-rose-200 border-rose-300 dark:border-rose-700' },
      { id: 'Lighting', icon: '💡', label: { en: 'Pendant & Floor Lights', ro: 'Corpuri de Iluminat', hu: 'Világítótestek' }, baseWeight: 2, gradient: 'from-yellow-500 to-amber-400', barBg: 'bg-yellow-500', badgeClass: 'bg-yellow-100 text-yellow-900 dark:bg-yellow-950/80 dark:text-yellow-200 border-yellow-300 dark:border-yellow-700' },
      { id: 'Decor', icon: '🎨', label: { en: 'Artisan Wall Decor', ro: 'Decorațiuni Artizanale', hu: 'Kézműves Dekorációk' }, baseWeight: 1, gradient: 'from-teal-600 to-teal-500', barBg: 'bg-teal-500', badgeClass: 'bg-teal-100 text-teal-900 dark:bg-teal-950/80 dark:text-teal-200 border-teal-300 dark:border-teal-700' }
    ];

    // Compute live weights from store products & orders
    const categoryStats = categories.map(c => {
      const prods = store.products.filter(p => p.category === c.id);
      const prodCount = prods.length;
      const totalStock = prods.reduce((s, p) => s + (p.stock || 0), 0);
      const avgPrice = prodCount > 0 ? Math.round(prods.reduce((s, p) => s + p.priceRON, 0) / prodCount) : 0;

      // Calculate order sales for this category
      let salesCount = 0;
      store.orders.forEach(o => {
        if (o.cart) {
          o.cart.forEach(item => {
            if (item.product && item.product.category === c.id) {
              salesCount += item.quantity;
            }
          });
        }
      });

      const weight = c.baseWeight + (prodCount * 3) + (salesCount * 5);
      return { ...c, prodCount, totalStock, avgPrice, salesCount, weight };
    });

    const totalWeightSum = categoryStats.reduce((s, c) => s + c.weight, 0);

    const fullData = categoryStats.map(c => {
      const sharePct = Math.max(1, Math.round((c.weight / totalWeightSum) * 100));
      const estRevenue = Math.round((totalRev * sharePct) / 100);
      let statusTag = '✨ Steady Demand';
      if (sharePct >= 20) statusTag = '🔥 Best Seller';
      else if (sharePct >= 10) statusTag = '📈 High Demand';
      else if (sharePct >= 5) statusTag = '🌟 Growing Category';

      return { ...c, sharePct, estRevenue, statusTag };
    }).sort((a, b) => b.sharePct - a.sharePct);

    const totalCatalogItems = store.products.length;
    const totalWarehouseStock = store.products.reduce((s, p) => s + (p.stock || 0), 0);

    container.innerHTML = `
      <div class="max-w-6xl mx-auto p-4 sm:p-6 flex flex-col gap-8">
        <div class="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">${t('analyticsTitle')}</h1>
            <p class="text-xs text-stone-500 mt-1">${t('analyticsSub')}</p>
          </div>
          <div class="flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>${t('realtimeSyncActive')}</span>
          </div>
        </div>

        <!-- Metric Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm">
            <div class="text-xs text-stone-400 font-semibold uppercase mb-1">${t('analyticsVisits')}</div>
            <div id="analytics-live-visitors" class="text-3xl font-serif font-bold text-amber-700 dark:text-amber-500">${this.liveVisitors}</div>
            <div class="text-[10px] text-emerald-600 mt-2">↑ 14% vs last hour</div>
          </div>

          <div class="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm">
            <div class="text-xs text-stone-400 font-semibold uppercase mb-1">${t('analyticsRevenue')}</div>
            <div class="text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">${totalRev.toLocaleString()} RON</div>
            <div class="text-[10px] text-emerald-600 mt-2">↑ 22% monthly growth</div>
          </div>

          <div class="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm">
            <div class="text-xs text-stone-400 font-semibold uppercase mb-1">${t('analyticsConversion')}</div>
            <div class="text-3xl font-serif font-bold text-amber-700 dark:text-amber-500">4.8%</div>
            <div class="text-[10px] text-stone-400 mt-2">High conversion rate</div>
          </div>

          <div class="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm">
            <div class="text-xs text-stone-400 font-semibold uppercase mb-1">${t('analyticsCartAdd')}</div>
            <div class="text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">18.2%</div>
            <div class="text-[10px] text-emerald-600 mt-2">Strong AR visualizer engagement</div>
          </div>
        </div>

        <!-- High-Visibility Category Demand Distribution Section -->
        <div class="bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-3xl border-2 border-amber-500/30 dark:border-amber-500/20 shadow-xl space-y-6">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-stone-200 dark:border-stone-800">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 text-white flex items-center justify-center text-2xl font-bold shadow-md shadow-amber-900/20">
                📊
              </div>
              <div>
                <h2 class="font-serif font-bold text-xl sm:text-2xl text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <span>${t('categoryDemandTitle')}</span>
                  <span class="px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 border border-amber-300 text-xs font-sans font-bold">8 Categories</span>
                </h2>
                <p class="text-xs text-stone-500 dark:text-stone-400 mt-1">
                  Live real-time analytics on revenue distribution, catalog volume, and warehouse inventory demand.
                </p>
              </div>
            </div>

            <!-- Quick Summary Stats Pill -->
            <div class="flex items-center gap-4 bg-stone-50 dark:bg-stone-800/80 p-3 rounded-2xl border border-stone-200 dark:border-stone-700 shrink-0">
              <div class="text-center px-2">
                <div class="text-[10px] font-bold text-stone-400 uppercase">Catalog Pieces</div>
                <div class="text-base font-extrabold text-stone-900 dark:text-stone-100">${totalCatalogItems}</div>
              </div>
              <div class="h-8 w-px bg-stone-200 dark:bg-stone-700"></div>
              <div class="text-center px-2">
                <div class="text-[10px] font-bold text-stone-400 uppercase">Warehouse Stock</div>
                <div class="text-base font-extrabold text-emerald-600 dark:text-emerald-400">${totalWarehouseStock} units</div>
              </div>
            </div>
          </div>

          <!-- Segmented Full-Width Distribution Bar -->
          <div class="space-y-2">
            <div class="flex justify-between items-center text-xs font-bold text-stone-700 dark:text-stone-300">
              <span>Overall Revenue Share Breakdown</span>
              <span>100% Demand Total</span>
            </div>
            
            <div class="w-full h-7 rounded-2xl bg-stone-100 dark:bg-stone-800 overflow-hidden flex shadow-inner border border-stone-200 dark:border-stone-700 p-0.5">
              ${fullData.map(c => `
                <div 
                  class="h-full bg-gradient-to-r ${c.gradient} first:rounded-l-xl last:rounded-r-xl transition-all duration-500 relative group cursor-pointer" 
                  style="width: ${c.sharePct}%"
                  title="${c.id}: ${c.sharePct}% (${c.estRevenue.toLocaleString()} RON)"
                >
                  <div class="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap pointer-events-none z-20">
                    ${c.icon} ${c.id}: ${c.sharePct}% (${c.estRevenue.toLocaleString()} RON)
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Legend Pills -->
            <div class="flex flex-wrap items-center gap-2 pt-1">
              ${fullData.map(c => `
                <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-[11px] font-bold text-stone-800 dark:text-stone-200">
                  <span class="w-2.5 h-2.5 rounded-full ${c.barBg}"></span>
                  <span>${c.icon} ${c.id}</span>
                  <span class="text-amber-700 dark:text-amber-400">(${c.sharePct}%)</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Comprehensive Category Demand Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            ${fullData.map(c => {
              const categoryTitle = c.label[lang] || c.label.en;
              return `
                <div class="p-4 sm:p-5 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-800/50 hover:bg-white dark:hover:bg-stone-800 transition-all shadow-xs space-y-3">
                  <!-- Category Header -->
                  <div class="flex items-center justify-between gap-2">
                    <div class="flex items-center gap-2">
                      <span class="text-xl p-1.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 shadow-xs">${c.icon}</span>
                      <div>
                        <h3 class="font-bold text-sm text-stone-900 dark:text-stone-100">${categoryTitle}</h3>
                        <span class="text-[10px] font-semibold text-stone-600 dark:text-stone-300">${c.statusTag}</span>
                      </div>
                    </div>
                    <span class="px-3 py-1 rounded-full text-xs font-extrabold border ${c.badgeClass}">
                      ${c.sharePct}% Share
                    </span>
                  </div>

                  <!-- High Visibility Progress Bar -->
                  <div>
                    <div class="flex justify-between text-xs font-extrabold text-stone-800 dark:text-stone-200 mb-1">
                      <span>Demand Weight</span>
                      <span class="text-amber-700 dark:text-amber-400">${c.estRevenue.toLocaleString()} RON est.</span>
                    </div>
                    <div class="w-full bg-stone-200 dark:bg-stone-700 h-4 rounded-full overflow-hidden shadow-inner p-0.5 border border-stone-300 dark:border-stone-600">
                      <div class="bg-gradient-to-r ${c.gradient} h-full rounded-full transition-all duration-700 flex items-center justify-end pr-1 text-[9px] font-extrabold text-white" style="width: ${Math.max(8, c.sharePct)}%">
                        ${c.sharePct}%
                      </div>
                    </div>
                  </div>

                  <!-- Category Statistics Breakdown -->
                  <div class="grid grid-cols-3 gap-2 pt-2 border-t border-stone-200/60 dark:border-stone-700/60 text-center">
                    <div class="bg-white dark:bg-stone-900 p-2 rounded-xl border border-stone-200 dark:border-stone-700">
                      <span class="text-[10px] text-stone-600 dark:text-stone-300 font-bold block">Catalog Items</span>
                      <span class="font-extrabold text-xs text-stone-900 dark:text-stone-100">${c.prodCount} pieces</span>
                    </div>
                    <div class="bg-white dark:bg-stone-900 p-2 rounded-xl border border-stone-200 dark:border-stone-700">
                      <span class="text-[10px] text-stone-600 dark:text-stone-300 font-bold block">Avg Price</span>
                      <span class="font-extrabold text-xs text-stone-900 dark:text-stone-100">${c.avgPrice} RON</span>
                    </div>
                    <div class="bg-white dark:bg-stone-900 p-2 rounded-xl border border-stone-200 dark:border-stone-700">
                      <span class="text-[10px] text-stone-600 dark:text-stone-300 font-bold block">In Stock</span>
                      <span class="font-extrabold text-xs text-emerald-600 dark:text-emerald-400">${c.totalStock} units</span>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }

  renderAdminPanel(container) {
    const t = (k) => store.t(k);

    if (!store.isAdmin()) {
      container.innerHTML = `
        <div class="max-w-xl mx-auto p-4 sm:p-6 my-10">
          <div class="bg-white dark:bg-stone-900 p-8 sm:p-10 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-xl text-center">
            <div class="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 flex items-center justify-center text-3xl font-bold mx-auto mb-4 border border-amber-200 dark:border-amber-800">
              🔒
            </div>
            <h1 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">${t('adminAccessRequired')}</h1>
            <p class="text-xs text-stone-600 dark:text-stone-300 leading-relaxed max-w-md mx-auto mb-6">
              ${t('adminAccessDesc')}
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button id="admin-quick-login-btn" class="w-full sm:w-auto px-6 py-3 bg-amber-800 hover:bg-amber-900 text-white rounded-xl text-xs font-bold shadow-md shadow-amber-900/20 transition-all flex items-center justify-center gap-2">
                <span>⚡</span>
                <span>${t('quickAdminLogin')}</span>
              </button>
              <button id="admin-open-auth-btn" class="w-full sm:w-auto px-5 py-3 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 rounded-xl text-xs font-semibold transition-all">
                ${t('signIn')} / ${t('register')}
              </button>
            </div>
          </div>
        </div>
      `;

      const quickBtn = container.querySelector('#admin-quick-login-btn');
      if (quickBtn) {
        quickBtn.onclick = () => {
          store.loginUser({ email: 'admin@fancyfurniture.com', name: 'Store Manager (Admin)' });
          this.render();
        };
      }

      const openAuthBtn = container.querySelector('#admin-open-auth-btn');
      if (openAuthBtn) {
        openAuthBtn.onclick = () => {
          this.showAuthModal = true;
          this.authModalMode = 'signin';
          this.render();
        };
      }
      return;
    }

    const isCloudinaryActive = store.cloudinaryConfig && store.cloudinaryConfig.configured;
    const isMongoConnected = store.mongoStatus && store.mongoStatus.connected;
    const sampleAssets = CloudinaryService.getSampleCloudinaryAssets();

    container.innerHTML = `
      <div class="max-w-3xl mx-auto p-4 sm:p-6 space-y-6">
        <!-- Storage Systems Banners Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <!-- Cloudinary Status Banner -->
          <div class="p-4 rounded-2xl ${isCloudinaryActive ? 'bg-emerald-950/20 border-emerald-800/40 text-emerald-200' : 'bg-amber-950/20 border-amber-800/40 text-amber-200'} border flex items-center justify-between gap-3 shadow-md">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl ${isCloudinaryActive ? 'bg-emerald-800 text-white' : 'bg-amber-800 text-amber-100'} flex items-center justify-center text-xl font-bold shrink-0">
                ☁️
              </div>
              <div>
                <div class="font-bold text-xs flex items-center gap-1.5">
                  <span>Cloudinary Storage</span>
                  <span class="${isCloudinaryActive ? 'bg-emerald-800 text-emerald-100' : 'bg-amber-800 text-amber-100'} px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase">
                    ${isCloudinaryActive ? 'Active CDN' : 'Ready'}
                  </span>
                </div>
                <p class="text-[10px] text-stone-400 mt-0.5">Media CDN for furniture photos</p>
              </div>
            </div>
          </div>

          <!-- MongoDB Status Banner -->
          <div class="p-4 rounded-2xl ${isMongoConnected ? 'bg-emerald-950/20 border-emerald-800/40 text-emerald-200' : 'bg-emerald-950/10 border-emerald-800/30 text-emerald-300'} border flex items-center justify-between gap-3 shadow-md">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center text-xl font-bold shrink-0">
                🍃
              </div>
              <div>
                <div class="font-bold text-xs flex items-center gap-1.5">
                  <span>MongoDB Database</span>
                  <span class="${isMongoConnected ? 'bg-emerald-800 text-emerald-100' : 'bg-stone-700 text-stone-200'} px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase">
                    ${isMongoConnected ? 'Connected' : 'Active Store'}
                  </span>
                </div>
                <p class="text-[10px] text-stone-400 mt-0.5">Content descriptions & updates</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Add New Product Card -->
        <div class="bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-lg">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-stone-100 dark:border-stone-800">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-amber-700 text-white flex items-center justify-center text-xl font-bold">🛠️</div>
              <div>
                <h1 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">${t('adminAddProduct')}</h1>
                <p class="text-xs text-stone-500">${t('adminAddSub')}</p>
              </div>
            </div>
            <div class="px-3 py-1 bg-amber-100 dark:bg-amber-950/80 border border-amber-300 text-amber-900 dark:text-amber-200 rounded-full text-[11px] font-bold flex items-center gap-1.5 self-start sm:self-auto">
              <span>🔑</span>
              <span>Admin: ${store.user.email}</span>
            </div>
          </div>

          <form id="admin-add-form" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">${t('itemTitleEn')}</label>
                <input required type="text" name="name_en" placeholder="e.g. Oak Coffee Table" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs font-medium" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">${t('itemTitleRo')}</label>
                <input required type="text" name="name_ro" placeholder="e.g. Măsuță de Cafea" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs font-medium" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">${t('itemTitleHu')}</label>
                <input required type="text" name="name_hu" placeholder="e.g. DOHÁNYZÓASZTAL" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs font-medium" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">${t('priceText')} (RON)</label>
                <input required type="number" name="price" placeholder="1850" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs font-medium" />
              </div>

              <div>
                <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">${t('categoryText')}</label>
                <select name="category" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs font-medium">
                  <option value="Tables">${t('categoryTables')}</option>
                  <option value="Chairs">${t('categoryChairs')}</option>
                  <option value="Sofas">${t('categorySofas')}</option>
                  <option value="Cabinets">${t('categoryCabinets')}</option>
                  <option value="Beds">${t('categoryBeds')}</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">${t('stockCountLabel')}</label>
                <input required type="number" name="stock" value="5" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs font-medium" />
              </div>
            </div>

            <!-- Product Image Section (Cloudinary Upload Zone) -->
            <div class="space-y-3 p-4 rounded-2xl bg-stone-50/80 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800">
              <div class="flex items-center justify-between">
                <label class="text-xs font-bold text-stone-800 dark:text-stone-200 flex items-center gap-1.5">
                  <span>☁️</span>
                  <span>Cloudinary Image Upload</span>
                </label>
                <span id="upload-status-tag" class="text-[10px] font-mono font-bold text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/60 px-2 py-0.5 rounded-md">
                  Ready to upload
                </span>
              </div>

              <!-- Drag & Drop Zone -->
              <div id="admin-dropzone" class="relative border-2 border-dashed border-stone-300 dark:border-stone-700 hover:border-amber-600 dark:hover:border-amber-500 bg-white dark:bg-stone-900 rounded-2xl p-4 transition-all text-center cursor-pointer group shadow-xs">
                <input type="file" id="admin-file-input" accept="image/*" class="hidden" />
                
                <div id="admin-dropzone-empty" class="flex flex-col items-center justify-center py-2 space-y-2">
                  <div class="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-200 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-xs border border-amber-300 dark:border-amber-800">
                    📤
                  </div>
                  <div>
                    <p class="text-xs font-bold text-stone-800 dark:text-stone-200">
                      Drop product photo here or click to upload to Cloudinary
                    </p>
                    <p class="text-[10px] text-stone-600 dark:text-stone-300 mt-0.5 font-medium">
                      Images automatically store on Cloudinary CDN
                    </p>
                  </div>
                </div>

                <!-- Uploading Progress Indicator -->
                <div id="admin-dropzone-loading" class="hidden flex flex-col items-center justify-center py-4 space-y-2">
                  <div class="w-8 h-8 border-4 border-amber-700 border-t-transparent rounded-full animate-spin"></div>
                  <p class="text-xs font-bold text-amber-800 dark:text-amber-300 animate-pulse">Uploading to Cloudinary CDN...</p>
                </div>

                <!-- Preview Box -->
                <div id="admin-dropzone-preview" class="hidden flex items-center gap-3 text-left p-2 bg-stone-50 dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700">
                  <img id="admin-preview-img" src="" alt="Product Preview" class="w-16 h-16 object-cover rounded-lg border border-stone-300 dark:border-stone-600 shrink-0 bg-stone-200" />
                  <div class="flex-1 min-w-0">
                    <p id="admin-preview-filename" class="text-xs font-bold text-stone-900 dark:text-stone-100 truncate">Image Stored</p>
                    <p id="admin-preview-status" class="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 mt-0.5">
                      <span>✓</span>
                      <span id="status-text">Cloudinary URL Generated</span>
                    </p>
                  </div>
                  <button type="button" id="admin-remove-img-btn" class="px-3 py-1.5 text-xs font-bold text-rose-600 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-950/50 rounded-lg transition-colors border border-rose-200 dark:border-rose-900 shrink-0">
                    ${t('removeItem')}
                  </button>
                </div>
              </div>

              <!-- Quick Cloudinary Sample Assets Picker -->
              <div class="pt-2 border-t border-stone-200/60 dark:border-stone-800">
                <span class="text-[11px] font-bold text-stone-700 dark:text-stone-300 block mb-2">⚡ Or select a Cloudinary sample asset:</span>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  ${sampleAssets.map((asset, i) => `
                    <button type="button" data-asset-url="${asset.url}" class="sample-cloudinary-btn p-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 hover:border-amber-600 text-left transition-all flex items-center gap-2 group">
                      <img src="${asset.url}" class="w-8 h-8 rounded-lg object-cover bg-stone-200 shrink-0" />
                      <span class="text-[10px] font-semibold text-stone-800 dark:text-stone-200 truncate group-hover:text-amber-800">${asset.name.split(' ')[0]}</span>
                    </button>
                  `).join('')}
                </div>
              </div>

              <!-- Cloudinary Target Image URL Input -->
              <div class="pt-1">
                <label class="block text-[11px] font-semibold text-stone-600 dark:text-stone-300 mb-1">
                  Active Cloudinary Image URL
                </label>
                <input required type="text" name="image" id="admin-image-url" value="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-xs font-mono font-medium focus:outline-none focus:ring-2 focus:ring-amber-700" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">${t('materialLabel')}</label>
                <input type="text" name="material_en" value="Solid Transylvanian Oak" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs font-medium" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">${t('dimensionsText')}</label>
                <input type="text" name="dimensions" value="120 x 60 x 45 cm" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs font-medium" />
              </div>
            </div>

            <button type="submit" class="w-full py-3.5 bg-amber-700 hover:bg-amber-800 text-white rounded-xl font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2">
              <span>🚀</span>
              <span>${t('adminBtn')}</span>
            </button>
          </form>
        </div>

        <!-- MongoDB Content Descriptions & Product Updates Card -->
        <div class="bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-lg space-y-6">
          <div class="flex items-center justify-between gap-3 pb-4 border-b border-stone-100 dark:border-stone-800">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center text-xl font-bold">🍃</div>
              <div>
                <h2 class="text-xl font-serif font-bold text-stone-900 dark:text-stone-100">MongoDB Content Descriptions & Updates Manager</h2>
                <p class="text-xs text-stone-500">Edit rich stories, care guides, and publish product changelogs to MongoDB</p>
              </div>
            </div>
            <span class="${isMongoConnected ? 'bg-emerald-800 text-emerald-100' : 'bg-stone-700 text-stone-200'} px-3 py-1 rounded-full text-[11px] font-mono font-bold">
              ${isMongoConnected ? 'MongoDB Cloud Active' : 'Active In-Memory Store'}
            </span>
          </div>

          <!-- MongoDB Content Description Editor -->
          <form id="mongo-desc-form" class="space-y-4 p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700">
            <h3 class="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 flex items-center gap-1.5">
              <span>📖</span>
              <span>Product Rich Description & Care Guide (MongoDB)</span>
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">Target Product</label>
                <select id="mongo-target-prod" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-xs font-medium">
                  ${store.products.map(p => `<option value="${p.id}">${p.name.en || p.name.ro} (${p.id})</option>`).join('')}
                </select>
              </div>
              <div>
                <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">Craftsmanship Origin</label>
                <input type="text" id="mongo-origin" value="Transylvania, Romania" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-xs font-medium" />
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">Full Story & Heritage Notes</label>
              <textarea id="mongo-full-story" rows="3" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-xs font-medium" placeholder="Describe wood sourcing, hand finish techniques, artisan history...">Every single joint and grain line is meticulously finished by experienced woodcraft artisans. Sourced from FSC-certified sustainable timber reserves in the Transylvanian foothills.</textarea>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">Care & Maintenance Instructions</label>
                <input type="text" id="mongo-care" value="Wipe with soft lint-free cloth. Apply natural organic beeswax polish bi-annually." class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-xs font-medium" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">Designer Notes</label>
                <input type="text" id="mongo-designer-notes" value="Seamlessly pairs traditional joinery with clean contemporary lines." class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-xs font-medium" />
              </div>
            </div>

            <button type="submit" class="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2">
              <span>💾</span>
              <span>Save Description to MongoDB</span>
            </button>
          </form>

          <!-- MongoDB Product Update / Changelog Form -->
          <form id="mongo-update-form" class="space-y-4 p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700">
            <h3 class="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 flex items-center gap-1.5">
              <span>📢</span>
              <span>Publish Product Update & Changelog (MongoDB)</span>
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">Target Product</label>
                <select id="mongo-up-prod" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-xs font-medium">
                  <option value="all">Global / All Products</option>
                  ${store.products.map(p => `<option value="${p.id}">${p.name.en || p.name.ro}</option>`).join('')}
                </select>
              </div>
              <div>
                <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">Update Type</label>
                <select id="mongo-up-type" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-xs font-medium">
                  <option value="restock">Restock Complete</option>
                  <option value="new_finish">New Finish / Option</option>
                  <option value="craftsmanship_note">Craftsmanship Note</option>
                  <option value="price_change">Special Pricing</option>
                  <option value="general">General Announcement</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">Author Name</label>
                <input type="text" id="mongo-up-author" value="Master Artisan Vasile" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-xs font-medium" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">Headline Title</label>
                <input required type="text" id="mongo-up-title" placeholder="e.g. New Organic Beeswax Finish Available" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-xs font-medium" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">Badge Label</label>
                <input type="text" id="mongo-up-badge" value="New Feature" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-xs font-medium" />
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">Update Details</label>
              <textarea required id="mongo-up-details" rows="2" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-xs font-medium" placeholder="Describe the craftsman update, stock restock, or materials refinement..."></textarea>
            </div>

            <button type="submit" class="px-5 py-2.5 bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2">
              <span>🚀</span>
              <span>Publish Update to MongoDB</span>
            </button>
          </form>
        </div>
      </div>
    `;

    const form = container.querySelector('#admin-add-form');
    if (form) {
      const dropzone = container.querySelector('#admin-dropzone');
      const fileInput = container.querySelector('#admin-file-input');
      const dropzoneEmpty = container.querySelector('#admin-dropzone-empty');
      const dropzoneLoading = container.querySelector('#admin-dropzone-loading');
      const dropzonePreview = container.querySelector('#admin-dropzone-preview');
      const previewImg = container.querySelector('#admin-preview-img');
      const previewFilename = container.querySelector('#admin-preview-filename');
      const statusText = container.querySelector('#status-text');
      const statusTag = container.querySelector('#upload-status-tag');
      const urlInput = container.querySelector('#admin-image-url');
      const removeBtn = container.querySelector('#admin-remove-img-btn');

      const uploadAndSetFile = async (file) => {
        if (!file || !file.type.startsWith('image/')) return;

        if (dropzoneEmpty) dropzoneEmpty.classList.add('hidden');
        if (dropzonePreview) dropzonePreview.classList.add('hidden');
        if (dropzoneLoading) dropzoneLoading.classList.remove('hidden');
        if (statusTag) {
          statusTag.textContent = 'Uploading to Cloudinary...';
          statusTag.className = 'text-[10px] font-mono font-bold text-amber-800 bg-amber-200 px-2 py-0.5 rounded-md animate-pulse';
        }

        const res = await store.uploadProductImage(file);

        if (dropzoneLoading) dropzoneLoading.classList.add('hidden');

        if (res && res.success && res.url) {
          const cloudUrl = res.url;
          if (urlInput) urlInput.value = cloudUrl;
          if (previewImg) previewImg.src = cloudUrl;
          if (previewFilename) previewFilename.textContent = file.name;
          if (statusText) statusText.textContent = res.cloudinary ? 'Cloudinary CDN Active' : 'Uploaded (Local Mode)';
          if (statusTag) {
            statusTag.textContent = res.cloudinary ? '☁️ Cloudinary CDN Stored' : '✓ Image Uploaded';
            statusTag.className = 'text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md';
          }
          if (dropzonePreview) dropzonePreview.classList.remove('hidden');
        } else {
          alert('Upload error: ' + (res?.error || 'Failed to upload to Cloudinary'));
          if (dropzoneEmpty) dropzoneEmpty.classList.remove('hidden');
          if (statusTag) {
            statusTag.textContent = 'Upload Failed';
            statusTag.className = 'text-[10px] font-mono font-bold text-rose-800 bg-rose-100 px-2 py-0.5 rounded-md';
          }
        }
      };

      if (dropzone && fileInput) {
        dropzone.onclick = (e) => {
          if (e.target.closest('#admin-remove-img-btn')) return;
          fileInput.click();
        };

        fileInput.onchange = () => {
          if (fileInput.files && fileInput.files[0]) {
            uploadAndSetFile(fileInput.files[0]);
          }
        };

        dropzone.ondragover = (e) => {
          e.preventDefault();
          dropzone.classList.add('border-amber-600', 'bg-amber-50/50', 'dark:bg-amber-950/30');
        };

        dropzone.ondragleave = (e) => {
          e.preventDefault();
          dropzone.classList.remove('border-amber-600', 'bg-amber-50/50', 'dark:bg-amber-950/30');
        };

        dropzone.ondrop = (e) => {
          e.preventDefault();
          dropzone.classList.remove('border-amber-600', 'bg-amber-50/50', 'dark:bg-amber-950/30');
          if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
            uploadAndSetFile(e.dataTransfer.files[0]);
          }
        };
      }

      // Sample asset click handler
      container.querySelectorAll('.sample-cloudinary-btn').forEach(btn => {
        btn.onclick = (e) => {
          const sampleUrl = e.currentTarget.dataset.assetUrl;
          if (urlInput) urlInput.value = sampleUrl;
          if (previewImg) previewImg.src = sampleUrl;
          if (previewFilename) previewFilename.textContent = 'Cloudinary Sample Asset';
          if (statusText) statusText.textContent = 'Cloudinary Sample Loaded';
          if (statusTag) {
            statusTag.textContent = '☁️ Cloudinary Sample Selected';
            statusTag.className = 'text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md';
          }
          if (dropzoneEmpty) dropzoneEmpty.classList.add('hidden');
          if (dropzonePreview) dropzonePreview.classList.remove('hidden');
        };
      });

      if (removeBtn) {
        removeBtn.onclick = (e) => {
          e.stopPropagation();
          if (fileInput) fileInput.value = '';
          if (urlInput) urlInput.value = 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80';
          if (previewImg) previewImg.src = '';
          if (dropzonePreview) dropzonePreview.classList.add('hidden');
          if (dropzoneEmpty) dropzoneEmpty.classList.remove('hidden');
          if (statusTag) {
            statusTag.textContent = 'Ready to upload';
            statusTag.className = 'text-[10px] font-mono font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md';
          }
        };
      }

      if (urlInput) {
        urlInput.oninput = () => {
          const val = urlInput.value.trim();
          if (val && (val.startsWith('http') || val.startsWith('data:image'))) {
            if (previewImg) previewImg.src = val;
            if (previewFilename) previewFilename.textContent = val.includes('cloudinary.com') ? 'Cloudinary CDN Asset' : 'Custom Image URL';
            if (dropzoneEmpty) dropzoneEmpty.classList.add('hidden');
            if (dropzonePreview) dropzonePreview.classList.remove('hidden');
          }
        };
      }

      form.onsubmit = (e) => {
        e.preventDefault();
        const fd = new FormData(form);
        const price = Number(fd.get('price'));
        const newProd = {
          id: 'prod_' + Date.now(),
          name: {
            en: fd.get('name_en'),
            ro: fd.get('name_ro'),
            hu: fd.get('name_hu')
          },
          description: {
            en: "Handcrafted in Odorheiu Secuiesc with artisanal precision.",
            ro: "Realizat manual în Odorheiu Secuiesc cu precizie meșteșugărească.",
            hu: "Kézzel készült Székelyudvarhelyen mesteri precizitással."
          },
          priceRON: price,
          category: fd.get('category'),
          image: fd.get('image'),
          arOverlayType: 'table',
          dimensions: fd.get('dimensions'),
          material: {
            en: fd.get('material_en'),
            ro: fd.get('material_en'),
            hu: fd.get('material_en')
          },
          stock: Number(fd.get('stock')),
          rating: 5.0,
          reviewsCount: 1,
          pointsEarned: Math.floor(price * 0.1),
          createdAt: new Date().toISOString()
        };

        store.addProduct(newProd);
        alert(store.t('adminSuccess'));
        store.setActiveTab('catalog');
      };
    }

    // MongoDB Content Description form submit handler
    const mongoDescForm = container.querySelector('#mongo-desc-form');
    if (mongoDescForm) {
      mongoDescForm.onsubmit = async (e) => {
        e.preventDefault();
        const targetProd = container.querySelector('#mongo-target-prod').value;
        const origin = container.querySelector('#mongo-origin').value;
        const fullStory = container.querySelector('#mongo-full-story').value;
        const care = container.querySelector('#mongo-care').value;
        const designerNotes = container.querySelector('#mongo-designer-notes').value;

        const res = await store.saveMongoDescription(targetProd, {
          craftsmanshipOrigin: origin,
          fullStory,
          careInstructions: care,
          designerNotes,
          updatedAt: new Date().toISOString()
        });

        alert(res.success ? `🍃 Description saved to MongoDB for ${targetProd} (${res.source})` : `Failed: ${res.error}`);
      };
    }

    // MongoDB Product Update form submit handler
    const mongoUpForm = container.querySelector('#mongo-update-form');
    if (mongoUpForm) {
      mongoUpForm.onsubmit = async (e) => {
        e.preventDefault();
        const targetProd = container.querySelector('#mongo-up-prod').value;
        const updateType = container.querySelector('#mongo-up-type').value;
        const author = container.querySelector('#mongo-up-author').value;
        const title = container.querySelector('#mongo-up-title').value;
        const badge = container.querySelector('#mongo-up-badge').value;
        const details = container.querySelector('#mongo-up-details').value;

        const prod = store.products.find(p => p.id === targetProd);
        const productName = prod ? (prod.name.en || prod.name.ro) : 'All Products';

        const res = await store.addMongoUpdate({
          productId: targetProd,
          productName,
          updateType,
          author,
          title,
          badge,
          details,
          createdAt: new Date().toISOString()
        });

        if (res.success) {
          alert(`📢 Update published to MongoDB! (${res.source})`);
          container.querySelector('#mongo-up-title').value = '';
          container.querySelector('#mongo-up-details').value = '';
        } else {
          alert(`Failed to publish update: ${res.error}`);
        }
      };
    }
  }

  renderModals() {
    const modalContainer = this.root.querySelector('#modal-container');
    if (!modalContainer) return;

    modalContainer.innerHTML = '';

    // Product Detail Modal
    if (store.selectedProductId) {
      this.renderProductDetailModal(modalContainer);
    }

    // Cart Drawer
    if (this.showCartDrawer) {
      this.renderCartDrawer(modalContainer);
    }

    // Checkout Modal
    if (this.showCheckoutModal) {
      this.renderCheckoutModal(modalContainer);
    }

    // Sign In / Registration Modal
    if (this.showAuthModal) {
      this.renderAuthModal(modalContainer);
    }

    // Logo Showcase Modal
    if (store.isLogoModalOpen) {
      this.renderLogoModal(modalContainer);
    }
  }

  renderAuthModal(container) {
    const t = (k) => store.t(k);
    const isRegister = this.authModalMode === 'register';

    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in';
    modal.innerHTML = `
      <div class="bg-white dark:bg-stone-900 rounded-3xl max-w-md w-full border border-stone-200 dark:border-stone-800 shadow-2xl p-6 sm:p-8 relative">
        <button id="close-auth-modal" class="absolute top-4 right-4 w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 font-bold flex items-center justify-center hover:bg-stone-200">
          ✕
        </button>

        <div class="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100 dark:border-stone-800">
          <div class="w-11 h-11 rounded-2xl bg-amber-800 text-white flex items-center justify-center text-xl font-bold shadow-md shadow-amber-900/20">
            ${isRegister ? '📝' : '🔐'}
          </div>
          <div>
            <h2 class="font-serif font-bold text-xl text-stone-900 dark:text-stone-100">
              ${isRegister ? t('registerTitle') : t('signInTitle')}
            </h2>
            <p class="text-xs text-stone-500">${t('authSubtitle')}</p>
          </div>
        </div>

        <form id="auth-form" class="space-y-4">
          ${isRegister ? `
            <div>
              <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">${t('fullNameLabel')}</label>
              <input required type="text" name="name" placeholder="e.g. Andrei Popescu" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-700" />
            </div>
          ` : ''}

          <div>
            <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">${t('emailLabel')}</label>
            <input required type="email" name="email" placeholder="customer@example.com" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-700" />
          </div>

          <div>
            <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">${t('passwordLabel')}</label>
            <input required type="password" name="password" placeholder="••••••••" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-700" />
          </div>

          <button type="submit" class="w-full py-3 bg-amber-800 hover:bg-amber-900 text-white rounded-xl font-bold text-xs shadow-md shadow-amber-900/20 transition-all">
            ${isRegister ? t('register') : t('signIn')}
          </button>

          <!-- Toggle Mode -->
          <div class="text-center pt-2">
            <button type="button" id="toggle-auth-mode" class="text-xs font-semibold text-amber-800 hover:underline">
              ${isRegister ? t('alreadyHaveAccount') : t('dontHaveAccount')}
            </button>
          </div>

          <!-- Quick Demo Sign In -->
          ${!isRegister ? `
            <div class="pt-3 border-t border-stone-100 dark:border-stone-800 space-y-2 text-center">
              <button type="button" id="quick-demo-btn" class="w-full py-2 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 rounded-xl text-xs font-bold transition-all">
                ${t('quickDemoLogin')} (Customer: Andrei Popescu)
              </button>
              <button type="button" id="quick-admin-demo-btn" class="w-full py-2 bg-amber-800 hover:bg-amber-900 text-white rounded-xl text-xs font-bold transition-all">
                ${t('quickAdminLogin')}
              </button>
            </div>
          ` : ''}
        </form>
      </div>
    `;

    container.appendChild(modal);

    modal.querySelector('#close-auth-modal').onclick = () => {
      this.showAuthModal = false;
      this.render();
    };

    modal.querySelector('#toggle-auth-mode').onclick = () => {
      this.authModalMode = isRegister ? 'signin' : 'register';
      this.render();
    };

    const demoBtn = modal.querySelector('#quick-demo-btn');
    if (demoBtn) {
      demoBtn.onclick = () => {
        store.loginUser({ email: 'andrei.popescu@example.com', name: 'Andrei Popescu' });
        this.showAuthModal = false;
        this.render();
      };
    }

    const demoAdminBtn = modal.querySelector('#quick-admin-demo-btn');
    if (demoAdminBtn) {
      demoAdminBtn.onclick = () => {
        store.loginUser({ email: 'admin@fancyfurniture.com', name: 'Store Manager (Admin)' });
        this.showAuthModal = false;
        this.render();
      };
    }

    const form = modal.querySelector('#auth-form');
    if (form) {
      form.onsubmit = (e) => {
        e.preventDefault();
        const fd = new FormData(form);
        const email = fd.get('email');
        const password = fd.get('password');
        const name = fd.get('name');

        if (isRegister) {
          store.registerUser({ name, email, password });
        } else {
          store.loginUser({ email, password, name });
        }

        this.showAuthModal = false;
        this.render();
      };
    }
  }

  renderProductDetailModal(container) {
    const t = (k) => store.t(k);
    const lang = store.lang;
    const prod = store.products.find(p => p.id === store.selectedProductId);
    if (!prod) return;

    const name = prod.name[lang] || prod.name.en;
    const desc = prod.description[lang] || prod.description.en;
    const mat = prod.material ? (prod.material[lang] || prod.material.en) : '';

    const reviews = store.reviews.filter(r => r.productId === prod.id);

    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in';
    modal.innerHTML = `
      <div class="bg-white dark:bg-stone-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-stone-200 dark:border-stone-800 shadow-2xl relative">
        <button id="close-prod-modal" class="absolute top-4 right-4 w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 font-bold flex items-center justify-center hover:bg-stone-200 dark:hover:bg-stone-700 z-10 transition-colors">
          ✕
        </button>

        <div class="grid grid-cols-1 md:grid-cols-2">
          <!-- Image -->
          <div class="relative bg-stone-100 dark:bg-stone-800 min-h-[300px]">
            <img src="${prod.image}" alt="${name}" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80';" />
            <div class="absolute bottom-4 left-4 bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-amber-400 font-bold text-xs">
              ${t('pointsRewardTag', { points: prod.pointsEarned || Math.floor(prod.priceRON * 0.1) })}
            </div>
          </div>

          <!-- Content -->
          <div class="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-500">${prod.category}</span>
              <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-1">${name}</h2>
              
              <div class="flex items-center gap-2 mt-2">
                <span class="text-amber-500 font-bold text-sm">⭐ ${prod.rating}</span>
                <span class="text-xs text-stone-400">${t('customerReviewsCount', { count: prod.reviewsCount })}</span>
              </div>

              <div class="text-3xl font-serif font-bold text-amber-700 dark:text-amber-500 my-4">
                ${prod.priceRON} RON
              </div>

              <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                ${desc}
              </p>

              <div class="space-y-2 text-xs bg-stone-50 dark:bg-stone-800/50 p-4 rounded-xl border border-stone-100 dark:border-stone-800 mb-6">
                <div><strong class="text-stone-700 dark:text-stone-300">${t('materialText')}:</strong> ${mat}</div>
                <div><strong class="text-stone-700 dark:text-stone-300">${t('dimensionsText')}:</strong> ${prod.dimensions}</div>
                <div><strong class="text-stone-700 dark:text-stone-300">${t('stockText')}:</strong> <span class="text-green-600 font-semibold">${t('warehouseStock', { stock: prod.stock })}</span></div>
              </div>

              <!-- MongoDB Rich Content & Updates Container -->
              <div id="mongo-detail-container"></div>
            </div>

            <div class="flex items-center gap-3">
              <button id="modal-add-cart" class="flex-1 py-3.5 bg-amber-700 hover:bg-amber-800 text-white rounded-xl font-semibold text-sm shadow-lg shadow-amber-900/20 transition-all flex items-center justify-center gap-2">
                <span>🛒</span>
                <span>${t('addToCart')} (${prod.priceRON} RON)</span>
              </button>
              <button id="modal-try-ar" class="px-4 py-3.5 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 rounded-xl font-semibold text-sm transition-all flex items-center gap-1.5">
                <span>👓</span>
                <span>${t('arViewBtn')}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Customer Reviews Section -->
        <div class="p-6 sm:p-8 border-t border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/50">
          <h3 class="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 mb-4">${t('reviewsTitle')}</h3>

          <div class="space-y-4 mb-6">
            ${reviews.length === 0 ? `
              <p class="text-xs text-stone-400">${t('noReviewsYet')}</p>
            ` : reviews.map(r => `
              <div class="bg-white dark:bg-stone-800 p-4 rounded-xl border border-stone-200/60 dark:border-stone-700/60">
                <div class="flex items-center justify-between mb-1">
                  <span class="font-bold text-xs text-stone-900 dark:text-stone-100">${r.userName}</span>
                  <span class="text-amber-500 text-xs font-semibold">{"⭐".repeat(r.rating)}</span>
                </div>
                <p class="text-xs text-stone-600 dark:text-stone-300">${r.comment}</p>
              </div>
            `).join('')}
          </div>

          <!-- Write Review Form -->
          <form id="review-form" class="bg-white dark:bg-stone-800 p-4 rounded-xl border border-stone-200/60 dark:border-stone-700/60 space-y-3">
            <h4 class="font-semibold text-xs text-stone-900 dark:text-stone-100">${t('writeReview')}</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input required type="text" name="name" placeholder="${t('yourName')}" class="p-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-xs" />
              <select name="rating" class="p-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-xs">
                <option value="5">⭐⭐⭐⭐⭐ 5 Stars</option>
                <option value="4">⭐⭐⭐⭐ 4 Stars</option>
                <option value="3">⭐⭐⭐ 3 Stars</option>
              </select>
            </div>
            <textarea required name="comment" rows="2" placeholder="${t('commentText')}" class="w-full p-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-xs"></textarea>
            <button type="submit" class="px-4 py-2 bg-amber-700 text-white font-semibold text-xs rounded-lg hover:bg-amber-800">
              ${t('submitReview')}
            </button>
          </form>
        </div>
      </div>
    `;

    container.appendChild(modal);

    modal.querySelector('#close-prod-modal').onclick = () => store.selectProduct(null);
    modal.querySelector('#modal-add-cart').onclick = () => {
      store.addToCart(prod, 1);
      store.selectProduct(null);
    };
    modal.querySelector('#modal-try-ar').onclick = () => {
      store.selectProduct(null);
      store.setActiveTab('ar');
    };

    const reviewForm = modal.querySelector('#review-form');
    if (reviewForm) {
      reviewForm.onsubmit = (e) => {
        e.preventDefault();
        const fd = new FormData(reviewForm);
        store.addReview(prod.id, fd.get('name'), fd.get('rating'), fd.get('comment'));
        alert('Thank you for your review!');
      };
    }

    // Async load MongoDB Content Description & Updates for this product
    Promise.all([
      store.fetchMongoDescription(prod.id),
      store.fetchMongoUpdates(prod.id)
    ]).then(([descRes, updatesRes]) => {
      const mongoContainer = modal.querySelector('#mongo-detail-container');
      if (!mongoContainer) return;

      const descDoc = descRes && descRes.success ? descRes.data : null;
      const updates = updatesRes && updatesRes.success && Array.isArray(updatesRes.data) ? updatesRes.data : [];

      if (descDoc || updates.length > 0) {
        let html = `
          <div class="mt-4 p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/40 space-y-3 mb-4">
            <div class="flex items-center justify-between text-xs font-bold text-emerald-900 dark:text-emerald-300">
              <span class="flex items-center gap-1.5">🍃 <span>MongoDB Craftsmanship & Updates</span></span>
              <span class="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-200/70 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200 font-semibold uppercase">MongoDB Engine</span>
            </div>
        `;

        if (descDoc) {
          if (descDoc.craftsmanshipOrigin) {
            html += `<div class="text-xs text-stone-700 dark:text-stone-300"><strong>📍 Origin:</strong> ${descDoc.craftsmanshipOrigin}</div>`;
          }
          if (descDoc.fullStory) {
            html += `
              <div class="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                <strong class="text-stone-900 dark:text-stone-100 block mb-0.5">🏰 Heritage & Story:</strong>
                ${descDoc.fullStory}
              </div>
            `;
          }
          if (descDoc.careInstructions) {
            html += `<div class="text-xs text-stone-600 dark:text-stone-400"><strong>✨ Care Guide:</strong> ${descDoc.careInstructions}</div>`;
          }
          if (descDoc.designerNotes) {
            html += `<div class="text-xs text-stone-600 dark:text-stone-400"><strong>✏️ Designer Note:</strong> ${descDoc.designerNotes}</div>`;
          }
        }

        if (updates.length > 0) {
          html += `
            <div class="pt-2 border-t border-emerald-200/60 dark:border-emerald-800/40">
              <strong class="text-xs text-stone-900 dark:text-stone-100 block mb-2">📢 Workshop Updates Changelog:</strong>
              <div class="space-y-2">
                ${updates.map(u => `
                  <div class="p-2.5 rounded-xl bg-white/90 dark:bg-stone-800/90 border border-emerald-100 dark:border-stone-700 text-xs">
                    <div class="flex items-center justify-between gap-2 mb-1">
                      <span class="font-bold text-stone-900 dark:text-stone-100">${u.title}</span>
                      <span class="text-[9px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 uppercase">${u.badge || u.updateType}</span>
                    </div>
                    <p class="text-[11px] text-stone-600 dark:text-stone-300">${u.details}</p>
                    <div class="mt-1 text-[9px] text-stone-400 flex items-center justify-between">
                      <span>By ${u.author || 'Artisan Workshop'}</span>
                      <span>${new Date(u.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }

        html += `</div>`;
        mongoContainer.innerHTML = html;
      }
    }).catch(err => {
      console.warn('MongoDB detail fetch error:', err);
    });
  }

  renderCartDrawer(container) {
    const t = (k, p) => store.t(k, p);
    const lang = store.lang;
    const cart = store.cart;
    const subtotal = store.getCartSubtotal();
    const earnedPts = store.getCartTotalPoints();

    const drawer = document.createElement('div');
    drawer.className = 'fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in';
    drawer.innerHTML = `
      <div class="w-full max-w-md bg-white dark:bg-stone-900 h-full flex flex-col justify-between p-6 border-l border-stone-200 dark:border-stone-800 shadow-2xl relative">
        <div>
          <div class="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-stone-800">
            <div class="flex items-center gap-2">
              <span class="text-xl">🛒</span>
              <h2 class="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">${t('cartSummary')}</h2>
            </div>
            <button id="close-cart-btn" class="w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 font-bold flex items-center justify-center hover:bg-stone-200">
              ✕
            </button>
          </div>

          <!-- Items list -->
          <div class="divide-y divide-stone-100 dark:divide-stone-800 max-h-[60vh] overflow-y-auto my-4 pr-1">
            ${cart.length === 0 ? `
              <div class="text-center py-16">
                <div class="text-4xl mb-2">🪵</div>
                <h4 class="font-bold text-stone-800 dark:text-stone-200 text-sm">${t('cartEmptyTitle')}</h4>
                <p class="text-xs text-stone-500 mt-1">${t('cartEmptySub')}</p>
              </div>
            ` : cart.map(item => {
              const name = item.product.name[lang] || item.product.name.en;
              return `
                <div class="py-4 flex items-center gap-3">
                  <img src="${item.product.image}" alt="${name}" class="w-16 h-16 object-cover rounded-xl bg-stone-100 dark:bg-stone-800 flex-shrink-0" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=200&q=80';" />
                  <div class="flex-1 min-w-0">
                    <h4 class="font-semibold text-xs text-stone-900 dark:text-stone-100 truncate">${name}</h4>
                    <div class="text-amber-700 dark:text-amber-500 font-bold text-xs mt-0.5">${item.product.priceRON} RON</div>
                    <div class="flex items-center gap-2 mt-2">
                      <button data-qty-id="${item.product.id}" data-qty-val="${item.quantity - 1}" class="cart-qty-btn w-6 h-6 rounded bg-stone-100 dark:bg-stone-800 text-xs font-bold">-</button>
                      <span class="text-xs font-bold w-4 text-center">${item.quantity}</span>
                      <button data-qty-id="${item.product.id}" data-qty-val="${item.quantity + 1}" class="cart-qty-btn w-6 h-6 rounded bg-stone-100 dark:bg-stone-800 text-xs font-bold">+</button>
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="font-bold text-sm text-stone-900 dark:text-stone-100">${item.product.priceRON * item.quantity} RON</div>
                    <button data-remove-id="${item.product.id}" class="remove-cart-btn text-[10px] text-red-500 font-semibold hover:underline mt-2">${t('removeItem')}</button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        ${cart.length > 0 ? `
          <div class="pt-4 border-t border-stone-200 dark:border-stone-800 space-y-3">
            <div class="flex justify-between text-xs text-stone-500">
              <span>${t('subtotalText')}</span>
              <span class="font-bold text-stone-900 dark:text-stone-100">${subtotal} RON</span>
            </div>

            <div class="flex justify-between text-xs text-emerald-600 font-semibold bg-emerald-50 dark:bg-emerald-950/40 p-2.5 rounded-xl">
              <span>${t('pointsToGain')}</span>
              <span>+${earnedPts} pts</span>
            </div>

            <button id="proceed-checkout-btn" class="w-full py-3.5 bg-amber-700 hover:bg-amber-800 text-white rounded-xl font-semibold text-sm shadow-lg shadow-amber-900/20 transition-all flex items-center justify-center gap-2">
              <span>🔒</span>
              <span>${t('proceedToCheckout')} (${subtotal} RON)</span>
            </button>
          </div>
        ` : ''}
      </div>
    `;

    container.appendChild(drawer);

    drawer.querySelector('#close-cart-btn').onclick = () => {
      this.showCartDrawer = false;
      this.render();
    };

    drawer.querySelectorAll('.cart-qty-btn').forEach(btn => {
      btn.onclick = (e) => {
        const id = e.currentTarget.dataset.qtyId;
        const val = parseInt(e.currentTarget.dataset.qtyVal, 10);
        store.updateCartQuantity(id, val);
      };
    });

    drawer.querySelectorAll('.remove-cart-btn').forEach(btn => {
      btn.onclick = (e) => {
        const id = e.currentTarget.dataset.removeId;
        store.updateCartQuantity(id, 0);
      };
    });

    const checkoutBtn = drawer.querySelector('#proceed-checkout-btn');
    if (checkoutBtn) {
      checkoutBtn.onclick = () => {
        this.showCartDrawer = false;
        this.showCheckoutModal = true;
        this.render();
      };
    }
  }

  renderCheckoutModal(container) {
    const t = (k, p) => store.t(k, p);
    const subtotal = store.getCartSubtotal();
    const earnedPts = store.getCartTotalPoints();
    const userPts = store.points;

    const CITY_DISTANCES = {
      'Odorheiu Secuiesc': 0,
      'Cristuru Secuiesc': 26,
      'Sighișoara': 48,
      'Miercurea Ciuc': 52,
      'Târgu Mureș': 78,
      'Brașov': 110,
      'Sibiu': 135,
      'Cluj-Napoca': 180,
      'Bucharest': 300,
      'Timișoara': 380,
      'Other': 100
    };

    let selectedCity = 'Odorheiu Secuiesc';
    let currentDistance = 0;
    let currentShippingMethod = 'Home Delivery';
    let usePoints = false;

    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in';
    modal.innerHTML = `
      <div class="bg-white dark:bg-stone-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-stone-200 dark:border-stone-800 shadow-2xl p-6 sm:p-8 relative">
        <button id="close-checkout" class="absolute top-4 right-4 w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 font-bold flex items-center justify-center hover:bg-stone-200">
          ✕
        </button>

        <div class="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100 dark:border-stone-800">
          <div class="w-10 h-10 rounded-xl bg-amber-700 text-white flex items-center justify-center text-xl font-bold">💳</div>
          <div>
            <h2 class="font-serif font-bold text-xl text-stone-900 dark:text-stone-100">${t('checkoutTitle')}</h2>
            <p class="text-xs text-stone-500">${t('checkoutSub')}</p>
          </div>
        </div>

        <form id="checkout-form" class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-amber-950 dark:text-stone-200 mb-1.5 flex items-center gap-1">
                <span>👤</span>
                <span>${t('fullName')}</span>
              </label>
              <input required type="text" name="fullName" value="${store.user ? store.user.name : ''}" placeholder="e.g. Andrei Popescu" class="w-full p-2.5 rounded-xl border border-amber-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs" />
            </div>

            <div>
              <label class="block text-xs font-bold text-amber-950 dark:text-stone-200 mb-1.5 flex items-center gap-1">
                <span>📞</span>
                <span>${t('phoneNumber')}</span>
              </label>
              <input required type="tel" name="phone" placeholder="+40 712 345 678" class="w-full p-2.5 rounded-xl border border-amber-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-amber-950 dark:text-stone-200 mb-1.5 flex items-center gap-1">
                <span>🏙️</span>
                <span>${t('selectCity')}</span>
              </label>
              <select id="checkout-city" name="city" class="w-full p-2.5 rounded-xl border border-amber-300 dark:border-amber-700/60 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 text-xs font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs">
                <option value="Odorheiu Secuiesc" class="bg-white text-stone-900 dark:bg-stone-900 dark:text-stone-100 font-medium">Odorheiu Secuiesc (Local Showroom - 0 km)</option>
                <option value="Cristuru Secuiesc" class="bg-white text-stone-900 dark:bg-stone-900 dark:text-stone-100 font-medium">Cristuru Secuiesc (26 km)</option>
                <option value="Sighișoara" class="bg-white text-stone-900 dark:bg-stone-900 dark:text-stone-100 font-medium">Sighișoara (48 km)</option>
                <option value="Miercurea Ciuc" class="bg-white text-stone-900 dark:bg-stone-900 dark:text-stone-100 font-medium">Miercurea Ciuc (52 km)</option>
                <option value="Târgu Mureș" class="bg-white text-stone-900 dark:bg-stone-900 dark:text-stone-100 font-medium">Târgu Mureș (78 km)</option>
                <option value="Brașov" class="bg-white text-stone-900 dark:bg-stone-900 dark:text-stone-100 font-medium">Brașov (110 km)</option>
                <option value="Sibiu" class="bg-white text-stone-900 dark:bg-stone-900 dark:text-stone-100 font-medium">Sibiu (135 km)</option>
                <option value="Cluj-Napoca" class="bg-white text-stone-900 dark:bg-stone-900 dark:text-stone-100 font-medium">Cluj-Napoca (180 km)</option>
                <option value="Bucharest" class="bg-white text-stone-900 dark:bg-stone-900 dark:text-stone-100 font-medium">Bucharest (300 km)</option>
                <option value="Timișoara" class="bg-white text-stone-900 dark:bg-stone-900 dark:text-stone-100 font-medium">Timișoara (380 km)</option>
                <option value="Other" class="bg-white text-stone-900 dark:bg-stone-900 dark:text-stone-100 font-medium">${t('cityOther')}</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-bold text-amber-950 dark:text-stone-200 mb-1.5 flex items-center gap-1">
                <span>🚚</span>
                <span>${t('shippingMethod')}</span>
              </label>
              <select id="checkout-shipping" name="shippingMethod" class="w-full p-2.5 rounded-xl border border-amber-300 dark:border-amber-700/60 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 text-xs font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs">
                <option value="Home Delivery" class="bg-white text-stone-900 dark:bg-stone-900 dark:text-stone-100 font-medium">${t('deliveryLocal')}</option>
                <option value="Pick & Collect" class="bg-white text-stone-900 dark:bg-stone-900 dark:text-stone-100 font-medium">${t('deliveryCollect')}</option>
              </select>
            </div>
          </div>

          <!-- Distance Calculation Control -->
          <div id="distance-container" class="p-3.5 bg-amber-50/90 dark:bg-stone-800 rounded-2xl border border-amber-200/80 dark:border-stone-700 space-y-2.5 shadow-sm">
            <div class="flex items-center justify-between gap-2">
              <label class="text-xs font-bold text-amber-950 dark:text-stone-100 flex items-center gap-1.5">
                <span>📍</span>
                <span>${t('distanceLabel')}</span>
              </label>
              <div class="flex items-center gap-1.5 bg-white dark:bg-stone-900 px-2.5 py-1 rounded-xl border border-amber-300 dark:border-stone-600 shadow-xs">
                <input id="checkout-dist-num" type="number" min="0" max="1000" value="0" class="w-16 text-center font-bold text-xs text-stone-900 dark:text-stone-100 bg-transparent focus:outline-none" />
                <span class="text-xs font-extrabold text-amber-700 dark:text-amber-400">km</span>
              </div>
            </div>
            <input id="checkout-dist-range" type="range" min="0" max="500" value="0" class="w-full accent-amber-600 cursor-pointer h-2 bg-amber-200/60 dark:bg-stone-700 rounded-lg" />
            <div class="text-[11px] text-stone-700 dark:text-stone-200 leading-relaxed bg-white/90 dark:bg-stone-900/80 p-2.5 rounded-xl border border-amber-100 dark:border-stone-700 font-medium">
              ℹ️ ${t('shippingBreakdown')}
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">${t('deliveryAddress')}</label>
            <input required type="text" name="address" placeholder="Strada Principală nr. 45" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs font-medium" />
          </div>

          <!-- Points Discount Checkbox / Lock Status -->
          ${!store.user ? `
            <div class="p-3.5 bg-amber-50/70 dark:bg-amber-950/30 rounded-2xl border border-amber-200 dark:border-amber-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div>
                <span class="font-bold text-amber-900 dark:text-amber-200 block mb-0.5">${t('pointsDiscountRequiresSignIn')}</span>
                <span class="text-[11px] text-amber-800/80 dark:text-amber-300/80">${t('signInRedeemPrompt')}</span>
              </div>
              <button type="button" id="checkout-open-auth-btn" class="px-3 py-1.5 bg-amber-800 hover:bg-amber-900 text-white rounded-xl text-xs font-bold transition-all shrink-0">
                ${t('signIn')} / ${t('register')}
              </button>
            </div>
          ` : !store.canRedeemPoints() ? `
            <div class="p-3.5 bg-stone-100 dark:bg-stone-800/80 rounded-2xl border border-stone-200 dark:border-stone-700 text-xs">
              <div class="flex items-center gap-2 mb-1">
                <span class="text-amber-800 dark:text-amber-400 font-bold">🔒 ${t('pointsLockedTitle')}</span>
                <span class="px-2 py-0.5 bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 text-[10px] font-bold rounded-md">${t('tierBronze')}</span>
              </div>
              <span class="text-[11px] text-stone-600 dark:text-stone-300 block">
                ${t('pointsDiscountRequiresSilver', { points: userPts })}
              </span>
            </div>
          ` : `
            <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-2xl border border-amber-200 dark:border-amber-800 flex items-center justify-between">
              <div>
                <span class="text-xs font-bold text-amber-900 dark:text-amber-200 block">${t('pointsDiscountUnlocked', { points: userPts })}</span>
                <span class="text-[10px] text-amber-700 dark:text-amber-300">${t('pointsValueDetail')}</span>
              </div>
              <label class="flex items-center gap-2 cursor-pointer">
                <input id="use-pts-checkbox" type="checkbox" class="w-4 h-4 accent-amber-600 rounded" />
                <span class="text-xs font-semibold text-amber-900 dark:text-amber-200">${t('usePointsLabel')}</span>
              </label>
            </div>
          `}

          <!-- Order Summary Box -->
          <div class="bg-stone-50 dark:bg-stone-800 p-4 rounded-xl border border-stone-200 dark:border-stone-700 space-y-2 text-xs">
            <div class="flex justify-between text-stone-600 dark:text-stone-300">
              <span>${t('subtotalText')}:</span>
              <span class="font-bold">${subtotal} RON</span>
            </div>

            <div class="flex justify-between text-stone-600 dark:text-stone-300">
              <span>${t('shippingFeeLabel')}:</span>
              <span id="shipping-fee-val" class="font-bold text-amber-800 dark:text-amber-400">150 RON</span>
            </div>

            <div id="shipping-breakdown-note" class="text-[11px] text-stone-600 dark:text-stone-300 bg-white dark:bg-stone-900 p-2 rounded-lg border border-stone-200 dark:border-stone-800 font-mono">
              ${t('shippingBaseFeeNote')}
            </div>

            <div id="points-discount-row" class="hidden justify-between text-emerald-600 font-semibold">
              <span>${t('pointsDiscountLabel')}:</span>
              <span id="points-discount-val">-0 RON</span>
            </div>

            <div class="flex justify-between text-amber-700 dark:text-amber-400 font-bold pt-2 border-t border-stone-200 dark:border-stone-700 text-sm">
              <span>${t('totalPayableLabel')}:</span>
              <span id="payable-total-text">${subtotal + 150} RON</span>
            </div>
          </div>

          <button type="submit" class="w-full py-3.5 bg-amber-700 hover:bg-amber-800 text-white rounded-xl font-semibold text-sm shadow-lg shadow-amber-900/20 transition-all flex items-center justify-center gap-2">
            <span>🚀</span>
            <span>${t('placeOrder')}</span>
          </button>
        </form>
      </div>
    `;

    container.appendChild(modal);

    const closeBtn = modal.querySelector('#close-checkout');
    if (closeBtn) {
      closeBtn.onclick = () => {
        this.showCheckoutModal = false;
        this.render();
      };
    }

    const checkoutAuthBtn = modal.querySelector('#checkout-open-auth-btn');
    if (checkoutAuthBtn) {
      checkoutAuthBtn.onclick = () => {
        this.showCheckoutModal = false;
        this.showAuthModal = true;
        this.authModalMode = 'signin';
        this.render();
      };
    }

    const citySelect = modal.querySelector('#checkout-city');
    const shippingSelect = modal.querySelector('#checkout-shipping');
    const distNumInput = modal.querySelector('#checkout-dist-num');
    const distRangeInput = modal.querySelector('#checkout-dist-range');
    const ptsCheck = modal.querySelector('#use-pts-checkbox');

    const updateCalculations = () => {
      const shippingInfo = store.calculateShippingFee(currentDistance, currentShippingMethod);
      const pointsDiscount = (usePoints && store.canRedeemPoints()) ? Math.min(subtotal, userPts) : 0;

      const feeValEl = modal.querySelector('#shipping-fee-val');
      const breakdownEl = modal.querySelector('#shipping-breakdown-note');
      const ptsRowEl = modal.querySelector('#points-discount-row');
      const ptsValEl = modal.querySelector('#points-discount-val');
      const totalEl = modal.querySelector('#payable-total-text');
      const distContainer = modal.querySelector('#distance-container');

      if (currentShippingMethod === 'Pick & Collect') {
        if (distContainer) distContainer.style.display = 'none';
        if (feeValEl) {
          feeValEl.textContent = t('freePickupLabel');
          feeValEl.className = 'font-bold text-emerald-600';
        }
        if (breakdownEl) {
          breakdownEl.textContent = t('pickCollectNote');
        }
      } else if (shippingInfo.isGoldFree) {
        if (distContainer) distContainer.style.display = 'block';
        if (feeValEl) {
          feeValEl.textContent = t('freeGoldLabel');
          feeValEl.className = 'font-bold text-emerald-600';
        }
        if (breakdownEl) {
          breakdownEl.textContent = `🎉 ${t('goldFreeDeliveryNote')}`;
        }
      } else {
        if (distContainer) distContainer.style.display = 'block';
        if (feeValEl) {
          feeValEl.textContent = `${shippingInfo.fee} RON`;
          feeValEl.className = 'font-bold text-amber-800 dark:text-amber-400';
        }
        if (breakdownEl) {
          if (shippingInfo.extraKm <= 0) {
            breakdownEl.textContent = t('distBaseNote', { dist: currentDistance });
          } else {
            const pct = shippingInfo.blocks * 20;
            breakdownEl.textContent = t('distExtraNote', { dist: currentDistance, extraKm: shippingInfo.extraKm, pct, blocks: shippingInfo.blocks, surcharge: shippingInfo.surcharge, fee: shippingInfo.fee });
          }
        }
      }

      if (pointsDiscount > 0) {
        if (ptsRowEl) ptsRowEl.style.display = 'flex';
        if (ptsValEl) ptsValEl.textContent = `-${pointsDiscount} RON`;
      } else {
        if (ptsRowEl) ptsRowEl.style.display = 'none';
      }

      const grandTotal = Math.max(0, subtotal + shippingInfo.fee - pointsDiscount);
      if (totalEl) totalEl.textContent = `${grandTotal} RON`;
    };

    if (citySelect) {
      citySelect.onchange = (e) => {
        selectedCity = e.target.value;
        currentDistance = CITY_DISTANCES[selectedCity] ?? 100;
        if (distNumInput) distNumInput.value = currentDistance;
        if (distRangeInput) distRangeInput.value = currentDistance;
        updateCalculations();
      };
    }

    if (distNumInput) {
      distNumInput.oninput = (e) => {
        currentDistance = Math.max(0, Number(e.target.value) || 0);
        if (distRangeInput) distRangeInput.value = Math.min(500, currentDistance);
        updateCalculations();
      };
    }

    if (distRangeInput) {
      distRangeInput.oninput = (e) => {
        currentDistance = Number(e.target.value);
        if (distNumInput) distNumInput.value = currentDistance;
        updateCalculations();
      };
    }

    if (shippingSelect) {
      shippingSelect.onchange = (e) => {
        currentShippingMethod = e.target.value;
        updateCalculations();
      };
    }

    if (ptsCheck) {
      ptsCheck.onchange = (e) => {
        usePoints = e.target.checked;
        updateCalculations();
      };
    }

    // Initial calculation
    updateCalculations();

    const form = modal.querySelector('#checkout-form');
    if (form) {
      form.onsubmit = (e) => {
        e.preventDefault();
        const fd = new FormData(form);
        const shippingInfo = store.calculateShippingFee(currentDistance, currentShippingMethod);
        const pointsDiscount = usePoints ? Math.min(subtotal, userPts) : 0;
        const netTotal = Math.max(0, subtotal + shippingInfo.fee - pointsDiscount);

        const order = store.completeOrder({
          fullName: fd.get('fullName'),
          phone: fd.get('phone'),
          city: fd.get('city'),
          address: fd.get('address'),
          distanceKm: currentDistance,
          shippingFee: shippingInfo.fee,
          shippingMethod: currentShippingMethod,
          subtotal: subtotal,
          total: netTotal,
          earnedPoints: earnedPts,
          usedPoints: pointsDiscount
        });

        this.showCheckoutModal = false;
        alert(`${t('orderSuccess')}\n\nInvoice generated for order ${order.id}. Courier tracking activated!`);
        store.setActiveTab('loyalty');
      };
    }
  }

  renderLogoModal(container) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in';
    modal.innerHTML = `
      <div class="bg-stone-900 border border-amber-800/50 rounded-3xl max-w-md w-full p-6 sm:p-8 text-stone-200 shadow-2xl relative overflow-hidden">
        <!-- Close Button -->
        <button id="close-logo-modal" class="absolute top-4 right-4 w-10 h-10 rounded-full bg-stone-800/80 hover:bg-stone-700 text-stone-300 font-bold flex items-center justify-center transition-colors">
          ✕
        </button>

        <div class="text-center mb-5">
          <span class="inline-block text-[10px] bg-amber-900/60 text-amber-300 border border-amber-700/50 px-3 py-1 rounded-full font-mono font-bold uppercase tracking-widest mb-2">
            Luxury Brand Emblem
          </span>
          <h3 class="font-serif font-bold text-2xl text-stone-100">Fancy Furniture Logo</h3>
          <p class="text-xs text-stone-400 mt-1">Official High-Resolution Handcrafted Monogram & Crest</p>
        </div>

        <div class="relative w-full aspect-square max-w-[240px] mx-auto rounded-2xl overflow-hidden shadow-2xl ring-4 ring-amber-700/50 bg-stone-950 flex items-center justify-center mb-6 group">
          <img src="images/fancy_logo_1785839799811.jpg" alt="Fancy Furniture High-Res Logo" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.onerror=null; this.src='images/logo.jpg';" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-3">
            <span class="text-[11px] font-semibold text-amber-200">High-Resolution Master Asset</span>
          </div>
        </div>

        <div class="bg-stone-950/80 border border-stone-800 rounded-xl p-3.5 mb-6 text-xs text-stone-300 space-y-2">
          <div class="flex justify-between border-b border-stone-800/80 pb-1.5">
            <span class="text-stone-400">File Asset:</span>
            <span class="font-mono text-amber-400">fancy_logo_1785839799811.jpg</span>
          </div>
          <div class="flex justify-between border-b border-stone-800/80 pb-1.5">
            <span class="text-stone-400">Relative Path:</span>
            <span class="font-mono text-stone-300">images/fancy_logo_1785839799811.jpg</span>
          </div>
          <div class="flex justify-between">
            <span class="text-stone-400">Status:</span>
            <span class="text-emerald-400 font-semibold flex items-center gap-1">
              <span class="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span> Loaded & Active
            </span>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-3">
          <a href="images/fancy_logo_1785839799811.jpg" target="_blank" rel="noopener noreferrer" class="flex-1 py-3 px-4 bg-amber-700 hover:bg-amber-600 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all text-center">
            <span>🔍</span> Open Full Image
          </a>
          <a href="images/fancy_logo_1785839799811.jpg" download="Fancy_Furniture_Logo.jpg" class="flex-1 py-3 px-4 bg-stone-800 hover:bg-stone-700 text-amber-200 border border-stone-700 font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-all text-center">
            <span>⬇️</span> Download Logo
          </a>
        </div>
      </div>
    `;

    container.appendChild(modal);

    modal.querySelector('#close-logo-modal').onclick = () => store.setLogoModalOpen(false);
    modal.onclick = (e) => {
      if (e.target === modal) store.setLogoModalOpen(false);
    };
  }

  attachHeaderEvents() {
    // Nav tabs
    this.root.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.onclick = (e) => {
        const tab = e.currentTarget.dataset.tab;
        store.setActiveTab(tab);
      };
    });

    // Logo click
    const logo = this.root.querySelector('#nav-logo');
    if (logo) {
      logo.onclick = () => store.setActiveTab('catalog');
    }

    const openLogoBtn = this.root.querySelector('#open-logo-modal-btn');
    if (openLogoBtn) {
      openLogoBtn.onclick = (e) => {
        e.stopPropagation();
        store.setLogoModalOpen(true);
      };
    }

    const footerLogoBtn = this.root.querySelector('#footer-logo-btn');
    if (footerLogoBtn) {
      footerLogoBtn.onclick = (e) => {
        e.stopPropagation();
        store.setLogoModalOpen(true);
      };
    }

    // Language selector
    const langSel = this.root.querySelector('#lang-select');
    if (langSel) {
      langSel.onchange = (e) => store.setLang(e.target.value);
    }

    // Notifications toggle
    const notifBtn = this.root.querySelector('#notif-btn');
    if (notifBtn) {
      notifBtn.onclick = () => {
        this.showNotifications = !this.showNotifications;
        this.render();
      };
    }

    // Cart drawer toggle
    const cartBtn = this.root.querySelector('#cart-drawer-btn');
    if (cartBtn) {
      cartBtn.onclick = () => {
        this.showCartDrawer = true;
        this.render();
      };
    }

    // Auth Modal trigger
    const authBtn = this.root.querySelector('#auth-modal-btn');
    if (authBtn) {
      authBtn.onclick = () => {
        this.showAuthModal = true;
        this.authModalMode = 'signin';
        this.render();
      };
    }

    // User Menu toggle
    const userMenuBtn = this.root.querySelector('#user-menu-btn');
    if (userMenuBtn) {
      userMenuBtn.onclick = () => {
        this.showUserMenu = !this.showUserMenu;
        this.render();
      };
    }

    // User Menu Orders link
    const userOrdersBtn = this.root.querySelector('#user-orders-btn');
    if (userOrdersBtn) {
      userOrdersBtn.onclick = () => {
        this.showUserMenu = false;
        store.setActiveTab('loyalty');
      };
    }

    // User Sign Out
    const userSignoutBtn = this.root.querySelector('#user-signout-btn');
    if (userSignoutBtn) {
      userSignoutBtn.onclick = () => {
        this.showUserMenu = false;
        store.logoutUser();
      };
    }

    // Footer Account link
    const footerAccountBtn = this.root.querySelector('#footer-account-btn');
    if (footerAccountBtn) {
      footerAccountBtn.onclick = () => {
        if (store.user) {
          store.setActiveTab('loyalty');
        } else {
          this.showAuthModal = true;
          this.authModalMode = 'signin';
          this.render();
        }
      };
    }
  }
}

// Instantiate and start app controller
const app = new AppController();
document.addEventListener('DOMContentLoaded', () => app.init());
// In case script loads after DOMContentLoaded
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  app.init();
}
