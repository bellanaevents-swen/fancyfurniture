export class ARStudioController {
  constructor(containerEl, store) {
    this.containerEl = containerEl;
    this.store = store;
    this.stream = null;
    this.bgType = 'living'; // 'living' | 'bedroom' | 'studio' | 'camera'
    this.selectedProduct = store.products[0] || null;
    this.scale = 1.0;
    this.rotation = 0; // degrees
    this.posX = 50; // percentage
    this.posY = 60; // percentage
    this.isDragging = false;
  }

  init() {
    this.render();
  }

  destroy() {
    this.stopCamera();
  }

  async startCamera() {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });
      this.bgType = 'camera';
      this.render();
    } catch (err) {
      alert('Could not access camera: ' + err.message + '\nFalling back to room photo backgrounds.');
      this.bgType = 'living';
      this.render();
    }
  }

  stopCamera() {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
    }
  }

  getBgSrc() {
    if (this.bgType === 'bedroom') return 'images/room_bedroom.jpg';
    if (this.bgType === 'studio') return 'images/room_studio.jpg';
    return 'images/room_living.jpg';
  }

  getFallbackBgSrc() {
    if (this.bgType === 'bedroom') return 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80';
    if (this.bgType === 'studio') return 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80';
    return 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80';
  }

  render() {
    if (!this.containerEl) return;
    const lang = this.store.lang;
    const t = (k) => this.store.t(k);

    const products = this.store.products;
    if (!this.selectedProduct && products.length > 0) {
      this.selectedProduct = products[0];
    }

    const prodName = this.selectedProduct ? (this.selectedProduct.name[lang] || this.selectedProduct.name.en) : '';

    this.containerEl.innerHTML = `
      <div class="flex flex-col gap-6 max-w-6xl mx-auto p-4 sm:p-6">
        <!-- Header -->
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
          <div>
            <div class="flex items-center gap-2 text-amber-700 font-semibold text-sm mb-1 uppercase tracking-wider">
              <span>✨ ${t('arSpatialTitle')}</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-bold text-stone-900 font-serif">${t('arTitle')}</h1>
            <p class="text-stone-600 text-sm mt-1">${t('arSubtitle')}</p>
          </div>
          
          <div class="flex items-center gap-2 flex-wrap">
            <button id="ar-cam-btn" class="px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all shadow-sm ${
              this.bgType === 'camera' 
                ? 'bg-red-600 text-white hover:bg-red-700' 
                : 'bg-amber-700 text-white hover:bg-amber-800'
            }">
              <span>📷</span>
              <span>${this.bgType === 'camera' ? t('arStopCam') : t('arStartCam')}</span>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <!-- Main AR Canvas Container -->
          <div class="lg:col-span-3 flex flex-col gap-4">
            <div id="ar-viewport" class="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-stone-900 rounded-2xl overflow-hidden shadow-lg border border-stone-200 select-none cursor-grab active:cursor-grabbing">
              ${
                this.bgType === 'camera'
                  ? `<video id="ar-video" autoplay playsinline class="w-full h-full object-cover"></video>`
                  : `<img id="ar-bg-img" src="${this.getBgSrc()}" alt="Room Preview" class="w-full h-full object-cover pointer-events-none select-none" onerror="this.onerror=null; this.src='${this.getFallbackBgSrc()}';" />`
              }

              <!-- Grid overlay helper -->
              <div class="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>

              <!-- Draggable Furniture Overlay -->
              ${
                this.selectedProduct ? `
                  <div id="ar-item-overlay" 
                    style="left: ${this.posX}%; top: ${this.posY}%; transform: translate(-50%, -50%) rotate(${this.rotation}deg) scale(${this.scale});"
                    class="absolute transition-transform duration-75 flex flex-col items-center group cursor-move">
                    <img src="${this.selectedProduct.image}" alt="${prodName}" class="max-w-[180px] sm:max-w-[260px] max-h-[180px] sm:max-h-[260px] object-contain filter drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] pointer-events-none select-none rounded-lg" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80';" />
                    
                    <!-- Bounding indicator -->
                    <div class="mt-2 px-3 py-1 bg-stone-900/90 backdrop-blur-md text-amber-400 text-xs font-semibold rounded-full shadow-lg border border-amber-500/30 flex items-center gap-1.5 opacity-90">
                      <span>📌 ${prodName}</span>
                    </div>
                  </div>
                ` : ''
              }

              <!-- Instruction hint -->
              <div class="absolute bottom-4 left-4 right-4 bg-stone-900/80 backdrop-blur-md text-stone-200 text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-stone-700/50 flex items-center justify-between gap-2 shadow-xl">
                <span>💡 ${t('arInstructions')}</span>
                <span class="text-amber-400 text-xs font-semibold uppercase hidden sm:inline">${t('arDragHint')}</span>
              </div>
            </div>

            <!-- Controls bar below AR viewport -->
            <div class="bg-white p-4 rounded-2xl border border-stone-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 shadow-sm w-full max-w-full min-w-0 overflow-hidden">
              <!-- Background preset switcher -->
              <div class="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 scrollbar-none max-w-full min-w-0">
                <span class="text-xs font-semibold uppercase text-stone-400 whitespace-nowrap flex-shrink-0">${t('roomPhotoLabel')}</span>
                <button data-bg="living" class="ar-bg-btn flex-shrink-0 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${this.bgType === 'living' ? 'bg-amber-100 text-amber-900 font-bold' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}">${t('roomLiving')}</button>
                <button data-bg="bedroom" class="ar-bg-btn flex-shrink-0 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${this.bgType === 'bedroom' ? 'bg-amber-100 text-amber-900 font-bold' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}">${t('roomBedroom')}</button>
                <button data-bg="studio" class="ar-bg-btn flex-shrink-0 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${this.bgType === 'studio' ? 'bg-amber-100 text-amber-900 font-bold' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}">${t('roomStudio')}</button>
              </div>

              <!-- Furniture Rotation & Scale Sliders -->
              <div class="flex items-center justify-between sm:justify-start gap-4 w-full sm:w-auto max-w-full min-w-0 flex-shrink-0">
                <div class="flex items-center gap-2 min-w-0">
                  <span class="text-xs font-medium text-stone-500 whitespace-nowrap">🔄 ${t('arRotateLabel')}</span>
                  <input id="ar-rotate-slider" type="range" min="-180" max="180" value="${this.rotation}" class="w-20 sm:w-24 accent-amber-700" />
                  <span class="text-xs text-stone-600 w-8">${this.rotation}°</span>
                </div>
                <div class="flex items-center gap-2 min-w-0">
                  <span class="text-xs font-medium text-stone-500 whitespace-nowrap">🔍 ${t('arScaleLabel')}</span>
                  <input id="ar-scale-slider" type="range" min="0.5" max="2.0" step="0.1" value="${this.scale}" class="w-20 sm:w-24 accent-amber-700" />
                  <span class="text-xs text-stone-600 w-8">${Math.round(this.scale * 100)}%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Product Picker Sidebar -->
          <div class="lg:col-span-1 bg-white p-5 rounded-2xl border border-stone-200 flex flex-col gap-4 shadow-sm h-fit">
            <h3 class="font-serif font-bold text-stone-900 text-lg border-b border-stone-200 pb-3">${t('arSelectPieceTitle')}</h3>
            
            <div class="flex flex-col gap-2 max-h-[480px] overflow-y-auto pr-1">
              ${products.map(p => {
                const isSel = this.selectedProduct && this.selectedProduct.id === p.id;
                const name = p.name[lang] || p.name.en;
                return `
                  <button data-prod-id="${p.id}" class="ar-prod-item p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                    isSel 
                      ? 'border-amber-700 bg-amber-50 text-amber-900 ring-2 ring-amber-700/20 font-semibold' 
                      : 'border-stone-200 hover:border-stone-300 text-stone-800'
                  }">
                    <img src="${p.image}" alt="${name}" class="w-12 h-12 object-cover rounded-lg bg-stone-100 flex-shrink-0" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=200&q=80';" />
                    <div class="min-w-0 flex-1">
                      <div class="font-semibold text-xs truncate text-stone-900">${name}</div>
                      <div class="text-amber-800 font-bold text-xs mt-0.5">${p.priceRON} RON</div>
                      <div class="text-[10px] text-stone-400 uppercase">${p.category}</div>
                    </div>
                  </button>
                `;
              }).join('')}
            </div>

            ${this.selectedProduct ? `
              <div class="mt-2 pt-4 border-t border-stone-200 flex flex-col gap-2">
                <button id="ar-add-cart-btn" class="w-full py-2.5 bg-amber-700 hover:bg-amber-800 text-white rounded-xl font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2">
                  <span>🛒</span>
                  <span>${t('addToCart')} (${this.selectedProduct.priceRON} RON)</span>
                </button>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;

    this.attachEvents();
  }

  attachEvents() {
    // Camera toggle
    const camBtn = this.containerEl.querySelector('#ar-cam-btn');
    if (camBtn) {
      camBtn.onclick = () => {
        if (this.bgType === 'camera') {
          this.stopCamera();
          this.bgType = 'living';
          this.render();
        } else {
          this.startCamera();
        }
      };
    }

    // Attach stream to video element if camera active
    if (this.bgType === 'camera' && this.stream) {
      const video = this.containerEl.querySelector('#ar-video');
      if (video) {
        video.srcObject = this.stream;
      }
    }

    // Room background preset switcher
    this.containerEl.querySelectorAll('.ar-bg-btn').forEach(btn => {
      btn.onclick = (e) => {
        this.stopCamera();
        this.bgType = e.currentTarget.dataset.bg;
        this.render();
      };
    });

    // Product picker
    this.containerEl.querySelectorAll('.ar-prod-item').forEach(btn => {
      btn.onclick = (e) => {
        const id = e.currentTarget.dataset.prodId;
        const prod = this.store.products.find(p => p.id === id);
        if (prod) {
          this.selectedProduct = prod;
          this.render();
        }
      };
    });

    // Rotation & Scale sliders
    const rotSlider = this.containerEl.querySelector('#ar-rotate-slider');
    if (rotSlider) {
      rotSlider.oninput = (e) => {
        this.rotation = parseInt(e.target.value, 10);
        this.updateOverlayTransform();
      };
    }

    const scaleSlider = this.containerEl.querySelector('#ar-scale-slider');
    if (scaleSlider) {
      scaleSlider.oninput = (e) => {
        this.scale = parseFloat(e.target.value);
        this.updateOverlayTransform();
      };
    }

    // Add to cart from AR
    const addCartBtn = this.containerEl.querySelector('#ar-add-cart-btn');
    if (addCartBtn) {
      addCartBtn.onclick = () => {
        if (this.selectedProduct) {
          this.store.addToCart(this.selectedProduct, 1);
        }
      };
    }

    // Drag and drop implementation for viewport overlay
    const viewport = this.containerEl.querySelector('#ar-viewport');
    if (viewport) {
      const onMove = (clientX, clientY) => {
        if (!this.isDragging) return;
        const rect = viewport.getBoundingClientRect();
        let x = ((clientX - rect.left) / rect.width) * 100;
        let y = ((clientY - rect.top) / rect.height) * 100;

        x = Math.max(10, Math.min(90, x));
        y = Math.max(10, Math.min(90, y));

        this.posX = x;
        this.posY = y;

        const overlay = this.containerEl.querySelector('#ar-item-overlay');
        if (overlay) {
          overlay.style.left = `${this.posX}%`;
          overlay.style.top = `${this.posY}%`;
        }
      };

      viewport.onmousedown = (e) => {
        this.isDragging = true;
        onMove(e.clientX, e.clientY);
      };

      window.onmousemove = (e) => {
        if (this.isDragging) onMove(e.clientX, e.clientY);
      };

      window.onmouseup = () => {
        this.isDragging = false;
      };

      viewport.ontouchstart = (e) => {
        if (e.touches.length === 1) {
          this.isDragging = true;
          onMove(e.touches[0].clientX, e.touches[0].clientY);
        }
      };

      window.ontouchmove = (e) => {
        if (this.isDragging && e.touches.length === 1) {
          onMove(e.touches[0].clientX, e.touches[0].clientY);
        }
      };

      window.ontouchend = () => {
        this.isDragging = false;
      };
    }
  }

  updateOverlayTransform() {
    const overlay = this.containerEl.querySelector('#ar-item-overlay');
    if (overlay) {
      overlay.style.transform = `translate(-50%, -50%) rotate(${this.rotation}deg) scale(${this.scale})`;
    }
    const rotVal = this.containerEl.querySelector('#ar-rotate-slider + span');
    if (rotVal) rotVal.textContent = `${this.rotation}°`;

    const scaleVal = this.containerEl.querySelector('#ar-scale-slider + span');
    if (scaleVal) scaleVal.textContent = `${Math.round(this.scale * 100)}%`;
  }
}
