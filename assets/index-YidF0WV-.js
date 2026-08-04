(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function e(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=e(a);fetch(a.href,n)}})();const A=[{id:"prod_tarnava_table",name:{en:"Solid Oak Dining Table 'Târnava'",ro:"Masă din Stejar Masiv 'Târnava'",hu:"Târnava Tömör Tölgyfa Étkezőasztal"},description:{en:"Handcrafted from local sustainable solid oak, reflecting the centuries-old carpentry tradition of Harghita county. Seats up to 8 guests comfortably.",ro:"Realizată manual din stejar masiv local, reflectând tradiția seculară a tâmplăriei din județul Harghita. Găzduiește confortabil până la 8 persoane.",hu:"Helyi, fenntartható tölgyfából kézzel készített étkezőasztal, amely a Hargita megyei asztalosmesterség évszázados hagyományait tükrözi. Akár 8 személynek is kényelmes."},priceRON:3850,category:"Tables",image:"https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=600&q=80",arOverlayType:"table",dimensions:"220 x 90 x 76 cm",material:{en:"Solid Transylvanian Oak",ro:"Stejar Masiv Transilvănean",hu:"Erdélyi Tömör Tölgyfa"},stock:5,rating:4.9,reviewsCount:12,pointsEarned:385},{id:"prod_bukk_chair",name:{en:"Nordic Ash Dining Chair 'Bükk'",ro:"Scaun din Frasin Nordic 'Bükk'",hu:"Bükk Skandináv Kőrisfa Szék"},description:{en:"A minimalist, ergonomic dining chair sculpted from native ash wood. Feature a premium woven organic cord seat for ultimate comfort.",ro:"Un scaun minimalist și ergonomic sculptat din lemn de frasin autohton. Dispune de o șezut din șnur organic împletit premium pentru confort maxim.",hu:"Helyi kőrisfából faragott minimalista, ergonomikus szék. Prémium fonott organikus kötél ülőfelülettel a maximális kényelemért."},priceRON:480,category:"Chairs",image:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80",arOverlayType:"chair",dimensions:"45 x 48 x 82 cm",material:{en:"Native Ash & Woven Cord",ro:"Frasin Autohton și Șnur Împletit",hu:"Kőrisfa és Fonott Kötél"},stock:24,rating:4.7,reviewsCount:8,pointsEarned:48},{id:"prod_secuiesc_sofa",name:{en:"Royal Velvet Lounge Sofa 'Secuiesc'",ro:"Canapea din Catifea Regală 'Secuiesc'",hu:"Secuiesc Királyi Bársony Kanapé"},description:{en:"Immersive deep-seated lounge sofa upholstered in plush, high-resilience velvet. Supported by deep-colored solid walnut legs.",ro:"Canapea spațioasă tapițată în catifea fină de înaltă rezistență. Susținută de picioare elegante din nuc masiv cu nuanțe profunde.",hu:"Mély ülésű, kényelmes kanapé plüss, nagy rugalmasságú bársony kárpitozással. Elegáns tömör diófa lábakkal alátámasztva."},priceRON:6200,category:"Sofas",image:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",arOverlayType:"sofa",dimensions:"240 x 100 x 85 cm",material:{en:"Royal Velvet & Solid Walnut",ro:"Catifea Regală și Nuc Masiv",hu:"Királyi Bársony és Tömör Diófa"},stock:3,rating:5,reviewsCount:15,pointsEarned:620},{id:"prod_hargita_sideboard",name:{en:"Transylvanian Pine Sideboard 'Hargita'",ro:"Comodă din Pin Transilvănean 'Hargita'",hu:"Hargita Erdélyi Fenyőfa Tálalószekrény"},description:{en:"Featuring traditional wood joinery and brass hardware, this pine sideboard offers spacious modern storage with a rustic, historical charm.",ro:"Având îmbinări tradiționale din lemn și feronerie din alamă, această comodă din pin oferă depozitare modernă și spațioasă cu un farmec rustic istoric.",hu:"Hagyományos fa csapolásokkal és sárgaréz vasalatokkal készült fenyőfa tálaló, amely tágas, modern tárolást biztosít rusztikus, történelmi bájjal."},priceRON:2100,category:"Cabinets",image:"https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80",arOverlayType:"cabinet",dimensions:"160 x 45 x 85 cm",material:{en:"Aged Transylvanian Pine",ro:"Pin Transilvănean Învechit",hu:"Érlelt Erdélyi Fenyőfa"},stock:8,rating:4.8,reviewsCount:6,pointsEarned:210},{id:"prod_boema_bed",name:{en:"Transylvanian Walnut Bed 'Boema'",ro:"Pat din Nuc Transilvănean 'Boema'",hu:"Boema Erdélyi Diófa Ágy"},description:{en:"Elegantly framed with hand-finished solid walnut and upholstered headboard in woven linen. Designed for ultimate rest and royal aesthetics.",ro:"Cadru elegant din nuc masiv finisat manual, cu tăblie tapițată în in natural. Conceput pentru un somn odihnitor și o estetică regală.",hu:"Kézzel megmunkált tömör diófa keret, vászon kárpitozású fejvéggel. A pihentető alvásért és a királyi eleganciáért."},priceRON:4900,category:"Beds",image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",arOverlayType:"sofa",dimensions:"200 x 180 x 120 cm",material:{en:"Solid Walnut & Woven Linen",ro:"Nuc Masiv și In Țesut",hu:"Tömör Diófa és Vászon"},stock:4,rating:4.9,reviewsCount:10,pointsEarned:490},{id:"prod_ciucas_coffeetable",name:{en:"Solid Walnut Coffee Table 'Ciucaș'",ro:"Măsuță de Cafea din Nuc Masiv 'Ciucaș'",hu:"Ciucaș Tömör Diófa Dohányzóasztal"},description:{en:"Organic shape coffee table carved from a single slab of solid Transylvanian walnut with matte brass inlay detailing.",ro:"Măsuță de cafea cu formă organică sculptată dintr-o singură placă de nuc masiv transilvănean, cu detalii din alamă mată.",hu:"Organikus formájú dohányzóasztal egyetlen tömör erdélyi diófa lapból faragva, matt sárgaréz betétekkel."},priceRON:1650,category:"Tables",image:"https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80",arOverlayType:"table",dimensions:"120 x 70 x 42 cm",material:{en:"Solid Walnut & Matte Brass",ro:"Nuc Masiv și Alamă Mată",hu:"Tömör Diófa és Matt Sárgaréz"},stock:9,rating:4.8,reviewsCount:14,pointsEarned:165},{id:"prod_mures_armchair",name:{en:"Sculpted Lounge Armchair 'Mureș'",ro:"Fotoliu Sculptat 'Mureș'",hu:"Mureș Faragott Pihenőfotel"},description:{en:"Ergonomic lounge chair featuring a steam-bent oak frame and premium textured bouclé upholstery.",ro:"Fotoliu ergonomic cu cadru din stejar curbat la abur și tapițerie textilă bouclé de calitate superioară.",hu:"Ergonomikus pihenőfotel gőzölt hajlított tölgyfa kerettel és prémium bouclé kárpitozással."},priceRON:2450,category:"Armchairs",image:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",arOverlayType:"chair",dimensions:"82 x 88 x 78 cm",material:{en:"Curved Oak & Textured Bouclé",ro:"Stejar Curbat și Țesătură Bouclé",hu:"Hajlított Tölgy és Bouclé"},stock:7,rating:4.9,reviewsCount:11,pointsEarned:245},{id:"prod_olt_pendant",name:{en:"Minimalist Brass Pendant Light 'Olt'",ro:"Lustră Suspendată din Alamă 'Olt'",hu:"Olt Minimalista Sárgaréz Függeszték"},description:{en:"Hand-spun brushed brass dome pendant providing warm ambient illumination for dining spaces and kitchen islands.",ro:"Lustră suspendată din alamă periată prelucrată manual, oferind o iluminare caldă și primitoare pentru zonele de dining.",hu:"Kézzel megmunkált szálcsiszolt sárgaréz függeszték, meleg hangulatvilágítással az étkezőasztal fölé."},priceRON:890,category:"Lighting",image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",arOverlayType:"cabinet",dimensions:"45 x 45 x 120 cm",material:{en:"Brushed Brass & Ceramic",ro:"Alamă Periată și Ceramică",hu:"Szálcsiszolt Sárgaréz"},stock:15,rating:4.7,reviewsCount:9,pointsEarned:89},{id:"prod_covasna_corner_sofa",name:{en:"Italian Leather Corner Sofa 'Covasna'",ro:"Canapea de Colț din Piele Italiană 'Covasna'",hu:"Covasna Olasz Bőrgarnitúra"},description:{en:"Generous modular L-shape corner sofa upholstered in top-grain cognac Italian leather with reinforced oak structure.",ro:"Canapea de colț modulară spațioasă, tapițată în piele naturală italiană de culoare coniac, cu structură din stejar.",hu:"Tágas moduláris L-alakú sarokkanapé prémium konyakbarna olasz bőrből, megerősített tölgyfa szerkezettel."},priceRON:8900,category:"Sofas",image:"https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80",arOverlayType:"sofa",dimensions:"290 x 180 x 82 cm",material:{en:"Top-Grain Italian Leather & Oak",ro:"Piele Italiană și Stejar",hu:"Olasz Bőr és Tölgyfa"},stock:2,rating:5,reviewsCount:18,pointsEarned:890},{id:"prod_harghita_wardrobe",name:{en:"Solid Walnut Wardrobe 'Harghita Master'",ro:"Șifonier din Nuc Masiv 'Harghita Master'",hu:"Harghita Master Tömör Diófa Szekrény"},description:{en:"Three-door luxury wardrobe crafted from solid walnut with soft-closing hinges and integrated LED hanging rails.",ro:"Șifonier de lux cu trei uși, creat din nuc masiv cu balamale soft-close și iluminare LED integrată.",hu:"Háromajtós luxus szekrény tömör diófából, halkan záródó pántokkal és integrált LED világítással."},priceRON:7400,category:"Cabinets",image:"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80",arOverlayType:"cabinet",dimensions:"210 x 180 x 65 cm",material:{en:"Solid Transylvanian Walnut",ro:"Nuc Masiv Transilvănean",hu:"Erdélyi Tömör Diófa"},stock:3,rating:4.9,reviewsCount:7,pointsEarned:740},{id:"prod_maramures_mirror",name:{en:"Hand-carved Wooden Mirror Frame 'Maramureș'",ro:"Oglindă cu Ramă Sculptată Manual 'Maramureș'",hu:"Maramureș Kézzel Faragott Tükör"},description:{en:"Accent wall mirror encircled by a traditional hand-carved geometric motif frame made of solid beech wood.",ro:"Oglindă decorativă de perete înconjurată de o ramă sculptată manual cu motive tradiționale din lemn de fag masiv.",hu:"Fali tükör hagyományos kézi faragású geometriai mintás tömör bükkfa kerettel."},priceRON:950,category:"Decor",image:"https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=600&q=80",arOverlayType:"cabinet",dimensions:"100 x 100 x 5 cm",material:{en:"Carved Solid Beech Wood",ro:"Fag Masiv Sculptat",hu:"Faragott Bükkfa"},stock:12,rating:4.8,reviewsCount:16,pointsEarned:95},{id:"prod_retezat_floorlamp",name:{en:"Sculpted Oak Floor Lamp 'Retezat'",ro:"Lampadar din Stejar Sculptat 'Retezat'",hu:"Retezat Tölgyfa Állólámpa"},description:{en:"Tripod floor lamp with steam-bent solid oak legs and a warm linen shade creating soft ambient evening illumination.",ro:"Lampadar trepied cu picioare din stejar masiv curbat și abajur din in, oferind o lumină caldă de seară.",hu:"Tölgyfa lábú állólámpa vászon búrával, amely kellemes meleg fényt biztosít az estéken."},priceRON:1120,category:"Lighting",image:"https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80",arOverlayType:"cabinet",dimensions:"165 x 50 x 50 cm",material:{en:"Solid Oak & Natural Linen",ro:"Stejar Masiv și In Natural",hu:"Tömör Tölgy és Vászon"},stock:10,rating:4.9,reviewsCount:13,pointsEarned:112}],M=[{id:"rev_1",productId:"prod_tarnava_table",userId:"user_1",userName:"Mihai Popescu",rating:5,comment:"Exceptional solid oak quality! Craftsmanship from Harghita at its finest.",date:"2026-07-15T10:30:00.000Z",verified:!0},{id:"rev_2",productId:"prod_secuiesc_sofa",userId:"user_2",userName:"Kovács Zoltán",rating:5,comment:"Nagyon kényelmes és elegáns bársony kanapé! Gyors kiszállítás.",date:"2026-07-20T14:15:00.000Z",verified:!0}],P={en:{shopName:"Fancy Furniture",shopAddress:"Main Boulevard 12, Odorheiu Secuiesc, Harghita, Romania",heroTitle:"Luxury Handcrafted Furniture",heroSubtitle:"Premium solid wood & designer furniture customized for modern living spaces.",navCatalog:"Catalog",navAR:"AR Studio",navCart:"Cart",navLoyalty:"Loyalty Hub",navAnalytics:"Analytics",categoryAll:"All Pieces",categoryTables:"Tables",categoryChairs:"Chairs",categorySofas:"Sofas",categoryCabinets:"Cabinets",categoryBeds:"Beds",categoryLighting:"Lighting",categoryArmchairs:"Armchairs",categoryDecor:"Decor",priceText:"Price",stockText:"In Stock",outOfStock:"Out of Stock",materialText:"Material",dimensionsText:"Dimensions",pointsText:"Loyalty Points",pointsValue:"Earn {points} points on this item",addToCart:"Add to Cart",addedToCart:"Added to Cart!",buyNow:"Buy Now",reviewsTitle:"Customer Reviews",writeReview:"Write a Review",yourName:"Your Name",ratingText:"Rating",commentText:"Your thoughts",submitReview:"Submit Review",verifiedPurchase:"Verified Buyer",arTitle:"AR Room Visualizer",arSubtitle:"Scan your room using your device's camera to visualize furniture pieces in 3D real-time.",arStartCam:"Start AR Camera Feed",arStopCam:"Stop Camera",arRotate:"Rotate",arScale:"Scale",arInstructions:"Point camera to your floor, select a piece, then drag to place, rotate, and resize.",checkoutTitle:"Secure Checkout",checkoutSub:"Transactions encrypted in compliance with GDPR and PCI-DSS data standards.",fullName:"Full Name",phoneNumber:"Phone Number",shippingMethod:"Delivery / Pickup Options",deliveryLocal:"Local Home Delivery (with Live Tracking)",deliveryCollect:"Pick & Collect (Free at Fancy Furniture showroom)",deliveryAddress:"Delivery Address",placeOrder:"Pay and Complete Order",orderSuccess:"Payment and Order Successful!",orderSuccessSub:"Thank you for choosing Fancy Furniture. Your invoice is encrypted and archived securely.",trackingTitle:"Delivery Dispatch Tracker",trackingStatus:"Current status",trackingVehicle:"Delivery courier is",pointsUsed:"Apply {points} loyalty points for {discount} RON discount",pointsBalance:"Your loyalty balance: {points} pts",offlineTitle:"Offline Mode Active",offlineText:"You are currently offline. You can browse cached products, add to cart, and check out locally. Orders will sync when you are back online.",themeTitle:"Custom Theme",themeLabel:"Select Visual Vibe",ambientLightMode:"Ambient Sync",ambientLightDesc:"Automatically toggle Dark / Light mode based on calculated solar ambient lighting.",notificationTitle:"Personalized Alerts",notificationEmpty:"No new notifications",adminAddProduct:"Merchant Dashboard: Add Item",adminBtn:"Add Item to Shop",adminSuccess:"New furniture piece added to the live database! Syncing with all connected clients in real-time.",productRealtimeSync:"Real-time updates active",analyticsTitle:"Real-time Store Insights",analyticsVisits:"Real-time Live Visitors",analyticsConversion:"Conversion Rate",analyticsRevenue:"Total Revenue",analyticsCartAdd:"Cart Add Rate",loyaltyTier:"Loyalty Tier",loyaltyCard:"Artisan Guild Member",socialLogin:"Or Sign-Up / Onboard with Social",contactUs:"Contact Us",phoneLabel:"Phone",emailLabel:"Email",addressLabel:"Address",cartEmptyTitle:"Your cart is empty",cartEmptySub:"Explore our catalog of fine solid wood furniture to add items to your cart.",cartSummary:"Cart Summary",subtotalText:"Subtotal",shippingText:"Shipping",rewardsEarnings:"Rewards Earnings",rewardsEarningsSub:"You will gain +{points} loyalty points once completed.",proceedToCheckout:"Proceed to Checkout",totalText:"TOTAL",shippingFree:"FREE",itemTotal:"Total",shippingPromo:"Home Delivery Fee",shippingTierNotice:"Free Home Delivery requires Gold Master member level (1,500+ pts)",freeForTiers:"FREE (Gold Master level)",pointsDiscountRequiresSignIn:"🔒 Points discount requires a signed-in account at Silver Guild (500+ pts) or higher.",pointsDiscountRequiresSilver:"🔒 Reach Silver Guild (500+ pts) to unlock loyalty points redemption at checkout. Current balance: {points} pts.",pointsDiscountUnlocked:"Redeem Loyalty Points ({points} pts available)",goldFreeDeliveryNote:"🎉 FREE Home Delivery applied (Gold Master Privilege - 0 RON)",silverTierBenefitPts:"✓ Points discount redemption unlocked at checkout",goldTierBenefitDelivery:"✓ FREE Home Delivery across Romania + White-glove Assembly",selectCity:"Select Your City",baseTierRestrictionTitle:"⚠️ Showroom Pickup Available at Fancy Furniture",baseTierRestrictionDesc:"To pay and collect from the showroom, select Showroom Pickup or choose Home Delivery to receive your furniture anywhere!",signIn:"Sign In",register:"Sign Up / Register",signInTitle:"Member Sign In",registerTitle:"Create Account",authSubtitle:"Join Fancy Furniture Guild for exclusive artisan rewards and order tracking.",emailLabel:"Email Address",passwordLabel:"Password",fullNameLabel:"Full Name",dontHaveAccount:"Don't have an account? Sign Up",alreadyHaveAccount:"Already have an account? Sign In",quickDemoLogin:"⚡ Quick Demo Sign In",quickAdminLogin:"⚡ Sign In as Admin (admin@fancyfurniture.com)",adminAccessRequired:"Merchant Admin Access Required 🔒",adminAccessDesc:"The merchant dashboard is strictly restricted to administrator accounts. Please sign in with an Admin account to manage catalog inventory.",myAccount:"My Account",signOut:"Sign Out",distanceLabel:"Distance from Odorheiu Secuiesc Showroom",shippingBreakdown:"150 RON base fee (up to 50 km) + 20% (+30 RON) for every 30 km beyond 50 km.",loyaltyHeroDesc:"Earn 1 point for every 10 RON spent. Redeem points for exclusive discounts and free shipping on Transylvanian furniture.",yourBalance:"Your Balance",currentLevel:"Current Level: {tier}",nextLevelGoal:"Next Level Goal: {nextPts} pts ({remaining} remaining)",maxLevelReached:"Max Level Reached! (Gold Master Member)",tierBronze:"Bronze Guild",tierBronzeRange:"0 - 499 Points",tierBronzeBenefit1:"✓ Standard points accumulation",tierBronzeBenefit2:"✓ Access to AR room visualizer",tierBronzeBenefit3:"✓ Pick & Collect in Odorheiu Secuiesc",tierSilver:"Silver Guild",tierSilverRange:"500 - 1,499 Points",tierSilverBenefit1:"✓ Points discount redemption at checkout",tierSilverBenefit2:"✓ 1.2x points bonus on oak pieces",tierSilverBenefit3:"✓ Priority customer dispatch",tierGold:"Gold Master",tierGoldRange:"1,500+ Points",tierGoldBenefit1:"✓ FREE Home Delivery across Romania",tierGoldBenefit2:"✓ Free Delivery + White-glove Assembly",tierGoldBenefit3:"✓ 1.5x points multiplier",tierGoldBenefit4:"✓ Bespoke custom wood engraving",recentOrdersTitle:"Your Recent Orders",noOrdersFound:"No previous orders found. Make your first purchase to start earning loyalty points!",orderItemsCount:"{count} items",ptsEarnedText:"+{points} pts earned",navAdmin:"Merchant Admin",handcraftedCollection:"Handcrafted Collection",heroBannerTag:"Fancy Furniture Handcrafted Collection",tryARVisualizer:"Try AR Visualizer",exploreCountPieces:"Explore {count} Furniture Pieces",searchPlaceholder:"Search oak, chair, table...",sortFeatured:"Featured",sortPriceAsc:"Price: Low to High",sortPriceDesc:"Price: High to Low",sortRating:"Highest Rated",noProductsFound:"No furniture pieces found",noProductsFoundSub:"Try clearing your search query or switching categories.",ptsShort:"pts",pointsRewardTag:"Points Reward: +{points} pts",customerReviewsCount:"({count} customer reviews)",warehouseStock:"{stock} units in Harghita warehouse",arViewBtn:"AR View",noReviewsYet:"No reviews yet for this piece. Be the first to review!",reviewSubmittedAlert:"Thank you for your review!",pointsToGain:"Points to gain:",removeItem:"Remove",cityOther:"Other Romanian City (Custom Distance)",signInPointsNote:"Sign in to redeem your earned loyalty points for instant order discounts.",signInRedeemPrompt:"Sign in to redeem your earned loyalty points for instant order discounts.",pointsLockedTitle:"🔒 Loyalty Points Discount Locked",pointsValueDetail:"1 point = 1 RON discount (up to cart subtotal)",usePointsLabel:"Use points",shippingFeeLabel:"Shipping Fee",shippingBaseFeeNote:"Base fee: 150 RON (0-50 km)",pointsDiscountLabel:"Loyalty Points Discount",totalPayableLabel:"Total Payable",freePickupLabel:"0 RON (FREE Pickup)",freeGoldLabel:"0 RON (FREE Gold Master)",pickCollectNote:"🚚 Pick & Collect at Fancy Furniture Showroom in Odorheiu Secuiesc (0 RON)",distBaseNote:"📍 Distance: {dist} km (≤ 50 km). Base shipping fee: 150 RON. (Gold Master members receive FREE Home Delivery!)",distExtraNote:"📍 Distance: {dist} km ({extraKm} km over 50 km limit). +{pct}% surcharge ({blocks} block(s) × 30 RON = +{surcharge} RON). Total Shipping: {fee} RON.",orderInvoiceNotice:"Invoice generated for order {id}. Courier tracking activated!",analyticsSub:"Live metrics from Odorheiu Secuiesc storefront and online platform.",realtimeSyncActive:"Real-time Sync Active",categoryDemandTitle:"Category Demand Distribution",categoryTablesOak:"Tables (Solid Oak Târnava)",categorySofasLounges:"Sofas & Lounges",categoryBedsBedroom:"Beds & Bedroom",categoryChairsCabinets:"Chairs & Cabinets",ofRevenue:"of revenue",adminAddSub:"Insert new handcrafted furniture items directly into the live catalog.",itemTitleEn:"Item Title (English)",itemTitleRo:"Item Title (Romanian)",itemTitleHu:"Item Title (Hungarian)",categoryText:"Category",stockCountLabel:"Stock Count",imageUrlLabel:"Image URL",uploadLocalImageLabel:"Product Image (Upload Local File or URL)",dragDropHint:"Click to select or drag & drop an image from computer",supportedFormatsHint:"Supports PNG, JPG, JPEG, WebP, GIF",uploadedSuccess:"Local file uploaded successfully!",orEnterUrl:"Or enter / edit Image URL directly:",materialLabel:"Material (EN)",arSpatialTitle:"3D Spatial Room Visualizer",roomPhotoLabel:"Room Photo:",roomLiving:"Living Room",roomBedroom:"Bedroom",roomStudio:"Studio",arRotateLabel:"Rotate:",arScaleLabel:"Scale:",arDragHint:"Drag to move",arSelectPieceTitle:"Select Furniture Piece",arCamError:`Could not access camera: {err}
Falling back to room photo backgrounds.`,footerQuickNav:"Quick Navigation",footerGuaranteeTitle:"Craftsmanship Guarantee",footerGuaranteeText:"100% Solid Premium Wood & Designer Materials sustainably crafted with master joinery.",footerSupportTitle:"Customer Support",footerRights:"© 2026 SwenTech. All rights reserved."},ro:{shopName:"Fancy Furniture",shopAddress:"Bulevardul Principal 12, Odorheiu Secuiesc, Harghita, România",heroTitle:"Mobilier de Lux Realizat Manual",heroSubtitle:"Mobilier din lemn masiv și design contemporan, creat special pentru spații de locuit elegante.",navCatalog:"Catalog",navAR:"Studio AR",navCart:"Coș",navLoyalty:"Hub Loialitate",navAnalytics:"Analize",categoryAll:"Toate piesele",categoryTables:"Mese",categoryChairs:"Scaune",categorySofas:"Canapele",categoryCabinets:"Comode / Dulapuri",categoryBeds:"Paturi",categoryLighting:"Iluminat",categoryArmchairs:"Fotolii",categoryDecor:"Decorațiuni",priceText:"Preț",stockText:"În stoc",outOfStock:"Stoc epuizat",materialText:"Material",dimensionsText:"Dimensiuni",pointsText:"Puncte Loialitate",pointsValue:"Câștigi {points} puncte la această piesă",addToCart:"Adaugă în coș",addedToCart:"Adăugat în coș!",buyNow:"Cumpără acum",reviewsTitle:"Recenzii Clienți",writeReview:"Scrie o recenzie",yourName:"Numele tău",ratingText:"Evaluare",commentText:"Opinia ta",submitReview:"Trimite recenzia",verifiedPurchase:"Cumpărător Verificat",arTitle:"Vizualizator AR în Cameră",arSubtitle:"Scanează-ți camera folosind camera dispozitivului pentru a vizualiza mobilierul în 3D în timp real.",arStartCam:"Pornește camera AR",arStopCam:"Oprește camera",arRotate:"Rotește",arScale:"Scalează",arInstructions:"Îndreaptă camera spre podea, selectează o piesă, apoi trage pentru a o plasa, roti sau scala.",checkoutTitle:"Finalizare Securizată",checkoutSub:"Tranzacții criptate în conformitate cu standardele GDPR și PCI-DSS.",fullName:"Nume Complet",phoneNumber:"Număr de Telefon",shippingMethod:"Metodă de Livrare / Ridicare",deliveryLocal:"Livrare la Domiciliu (cu Urmărire în Direct)",deliveryCollect:"Ridicare din Showroom (Gratuit la Fancy Furniture)",deliveryAddress:"Adresă de Livrare",placeOrder:"Plătește și Trimite Comanda",orderSuccess:"Plată și Comandă Finalizată cu Succes!",orderSuccessSub:"Vă mulțumim că ați ales Fancy Furniture. Factura dvs. a fost criptată și meținută securizat.",trackingTitle:"Urmărire Expediere Livrare",trackingStatus:"Stare curentă",trackingVehicle:"Curierul de livrare este",pointsUsed:"Aplică {points} puncte de loialitate pentru o reducere de {discount} RON",pointsBalance:"Balanța ta de loialitate: {points} pct",offlineTitle:"Mod Offline Activ",offlineText:"Ești offline în acest moment. Poți naviga prin produsele stocate, le poți adăuga în coș și poți finaliza comanda local. Comenzile se vor sincroniza când revii online.",themeTitle:"Temă Personalizată",themeLabel:"Alege Stilul Vizual",ambientLightMode:"Sincronizare Ambientală",ambientLightDesc:"Comută automat modul Întunecat / Luminos pe baza luminii solare calculate.",notificationTitle:"Alerte Personalizate",notificationEmpty:"Nu ai notificări noi",adminAddProduct:"Panou Comerciant: Adaugă Produs",adminBtn:"Adaugă piesa în Magazin",adminSuccess:"Piesa de mobilier a fost adăugată în baza de date live! Sincronizare în timp real cu toți clienții conectați.",productRealtimeSync:"Sincronizare în timp real activă",analyticsTitle:"Date Statistice Magazin",analyticsVisits:"Vizitatori Live",analyticsConversion:"Rată de Conversie",analyticsRevenue:"Venit Total",analyticsCartAdd:"Adăugări în Coș",loyaltyTier:"Nivel Loialitate",loyaltyCard:"Membru Fancy Furniture",socialLogin:"Sau autentifică-te rapid cu Cont Social",contactUs:"Contactați-ne",phoneLabel:"Telefon",emailLabel:"E-mail",addressLabel:"Adresă",cartEmptyTitle:"Coșul tău este gol",cartEmptySub:"Navighează prin catalogul de mobilier Fancy Furniture pentru a adăuga produse în coș.",cartSummary:"Total Coș",subtotalText:"Subtotal",shippingText:"Transport",rewardsEarnings:"Puncte de Câștigat",rewardsEarningsSub:"Vei adăuga +{points} puncte în contul tău la finalizarea plății.",proceedToCheckout:"Mergi la Plată",totalText:"TOTAL",shippingFree:"GRATUIT",itemTotal:"Total",shippingPromo:"Taxă Livrare Domiciliu",shippingTierNotice:"Livrarea gratuită la domiciliu necesită nivelul Gold Master (1.500+ puncte)",freeForTiers:"GRATUIT (Nivel Gold Master)",pointsDiscountRequiresSignIn:"🔒 Reducerea cu puncte necesită un cont autentificat la nivelul Silver Guild (500+ pct) sau superior.",pointsDiscountRequiresSilver:"🔒 Atingeți nivelul Silver Guild (500+ puncte) pentru a debloca reducerea la finalizarea comenzii. Sold curent: {points} pct.",pointsDiscountUnlocked:"Folosește Punctele de Loialitate ({points} pct disponibile)",goldFreeDeliveryNote:"🎉 Livrare Gratuită la Domiciliu aplicată (Privilegiu Membru Gold Master - 0 RON)",silverTierBenefitPts:"✓ Deblocare reducere cu puncte la comenzi",goldTierBenefitDelivery:"✓ Livrare Gratuită la Domiciliu în toată România + Asamblare",selectCity:"Orașul tău",baseTierRestrictionTitle:"⚠️ Ridicare din Showroom Fancy Furniture",baseTierRestrictionDesc:"Pentru a ridica personal comanda, alegeți Ridicare din Showroom sau selectați Livrare la Domiciliu.",signIn:"Autentificare",register:"Înregistrare / Cont Nou",signInTitle:"Autentificare Membru",registerTitle:"Creează Cont",authSubtitle:"Alătură-te comunității Fancy Furniture pentru recompense exclusive și urmărire comenzi.",emailLabel:"Adresă Email",passwordLabel:"Parolă",fullNameLabel:"Nume Complet",dontHaveAccount:"Nu ai cont? Înregistrează-te",alreadyHaveAccount:"Ai deja cont? Autentifică-te",quickDemoLogin:"⚡ Autentificare Rapidă Demo",quickAdminLogin:"⚡ Autentificare ca Admin (admin@fancyfurniture.com)",adminAccessRequired:"Acces Admin Securizat 🔒",adminAccessDesc:"Panoul de administrare este rezervat exclusiv administratorilor magazinului. Autentificați-vă cu un cont de administrator pentru a gestiona stocurile.",myAccount:"Contul Meu",signOut:"Deconectare",distanceLabel:"Distanță față de Showroom Odorheiu Secuiesc",shippingBreakdown:"Taxă bază 150 RON (până la 50 km) + 20% (+30 RON) pentru fiecare 30 km peste limita de 50 km.",loyaltyHeroDesc:"Câștigi 1 punct la fiecare 10 RON cheltuiți. Folosește punctele pentru reduceri exclusive și livrare gratuită la mobilierul transilvănean.",yourBalance:"Soldul Tău",currentLevel:"Nivel Curent: {tier}",nextLevelGoal:"Obiectiv Nivel Următor: {nextPts} pct (încă {remaining} pct)",maxLevelReached:"Nivel Maxim Atins! (Membru Gold Master)",tierBronze:"Bronze Guild",tierBronzeRange:"0 - 499 Puncte",tierBronzeBenefit1:"✓ Acumulare standard de puncte",tierBronzeBenefit2:"✓ Acces la Vizualizatorul AR",tierBronzeBenefit3:"✓ Ridicare gratuită din Showroom Odorheiu Secuiesc",tierSilver:"Silver Guild",tierSilverRange:"500 - 1.499 Puncte",tierSilverBenefit1:"✓ Reducere cu puncte la finalizarea comenzii",tierSilverBenefit2:"✓ Bonus 1.2x puncte la piese din stejar",tierSilverBenefit3:"✓ Expediere prioritară comenzi",tierGold:"Gold Master",tierGoldRange:"1.500+ Puncte",tierGoldBenefit1:"✓ Livrare Gratuită la Domiciliu în toată România",tierGoldBenefit2:"✓ Livrare Gratuită + Montaj Premium Gratuit",tierGoldBenefit3:"✓ Multiplicator 1.5x la toate punctele",tierGoldBenefit4:"✓ Gravură personalizată pe lemn",recentOrdersTitle:"Comenzile Tale Recente",noOrdersFound:"Nu ai nicio comandă înregistrată. Plasează prima comandă pentru a aduna puncte de loialitate!",orderItemsCount:"{count} produse",ptsEarnedText:"+{points} pct câștigate",navAdmin:"Admin Comerciant",handcraftedCollection:"Colecție Crafteată Manual",heroBannerTag:"Colecția de Lux Fancy Furniture",tryARVisualizer:"Încearcă Studio AR",exploreCountPieces:"Explorează {count} Piese de Mobilier",searchPlaceholder:"Caută stejar, scaun, masă...",sortFeatured:"Recomandate",sortPriceAsc:"Preț: Crescător",sortPriceDesc:"Preț: Descrescător",sortRating:"Cele Mai Bune Recenzii",noProductsFound:"Nu s-a găsit nicio piesă de mobilier",noProductsFoundSub:"Încearcă să ștergi căutarea sau să schimbi categoria.",ptsShort:"pct",pointsRewardTag:"Recompensă Puncte: +{points} pct",customerReviewsCount:"({count} recenzii clienți)",warehouseStock:"{stock} bucăți în depozitul din Harghita",arViewBtn:"Vizualizare AR",noReviewsYet:"Nu există recenzii pentru această piesă. Fii primul care adaugă o recenzie!",reviewSubmittedAlert:"Vă mulțumim pentru recenzie!",pointsToGain:"Puncte de câștigat:",removeItem:"Elimină",cityOther:"Alt Oraș din România (Distanță Personalizată)",signInPointsNote:"Autentifică-te pentru a folosi punctele de loialitate ca reducere directă la comandă.",signInRedeemPrompt:"Autentifică-te pentru a folosi punctele de loialitate ca reducere directă la comandă.",pointsLockedTitle:"🔒 Reducerea cu Puncte de Loialitate este Blocată",pointsValueDetail:"1 punct = 1 RON reducere (până la subtotalul coșului)",usePointsLabel:"Folosește punctele",shippingFeeLabel:"Taxă de Transport",shippingBaseFeeNote:"Taxă de bază: 150 RON (0-50 km)",pointsDiscountLabel:"Reducere Puncte Loialitate",totalPayableLabel:"Total de Plată",freePickupLabel:"0 RON (Ridicare GRATUITĂ)",freeGoldLabel:"0 RON (GRATUIT Gold Master)",pickCollectNote:"🚚 Ridicare personală din Showroom Fancy Furniture în Odorheiu Secuiesc (0 RON)",distBaseNote:"📍 Distanță: {dist} km (≤ 50 km). Taxă livrare de bază: 150 RON. (Membrii Gold Master beneficiază de Livrare GRATUITĂ!)",distExtraNote:"📍 Distanță: {dist} km ({extraKm} km peste limita de 50 km). Suprataxă +{pct}% ({blocks} bloc(uri) × 30 RON = +{surcharge} RON). Total Transport: {fee} RON.",orderInvoiceNotice:"Factura a fost generată pentru comanda {id}. Urmărirea curierului a fost activată!",analyticsSub:"Metrici în timp real din magazinul Odorheiu Secuiesc și platforma online.",realtimeSyncActive:"Sincronizare Live Activă",categoryDemandTitle:"Distribuția Cererii pe Categorii",categoryTablesOak:"Mese (Stejar Masiv Târnava)",categorySofasLounges:"Canapele & Fotolii",categoryBedsBedroom:"Paturi & Dormitor",categoryChairsCabinets:"Scaune & Comode",ofRevenue:"din venituri",adminAddSub:"Adaugă piese de mobilier realizate manual direct în catalogul live.",itemTitleEn:"Titlu Produs (Engleză)",itemTitleRo:"Titlu Produs (Română)",itemTitleHu:"Titlu Produs (Maghiară)",categoryText:"Categorie",stockCountLabel:"Cantitate Stoc",imageUrlLabel:"URL Imagine",uploadLocalImageLabel:"Imagine Produs (Încarcă Fișier Local sau URL)",dragDropHint:"Apasă pentru a alege sau trage o imagine din calculator",supportedFormatsHint:"Suportă PNG, JPG, JPEG, WebP, GIF",uploadedSuccess:"Fișier local încărcat cu succes!",orEnterUrl:"Sau introdu / editează URL-ul imaginii direct:",materialLabel:"Material (EN)",arSpatialTitle:"Vizualizator Spațial 3D în Cameră",roomPhotoLabel:"Foto Cameră:",roomLiving:"Sufragerie",roomBedroom:"Dormitor",roomStudio:"Garsonieră",arRotateLabel:"Rotiți:",arScaleLabel:"Scalare:",arDragHint:"Trageți pentru a muta",arSelectPieceTitle:"Selectează Piesa de Mobilier",arCamError:`Nu s-a putut accesa camera: {err}
Se comută pe imagini de fundal.`,footerQuickNav:"Navigare Rapidă",footerGuaranteeTitle:"Garanție Meșteșugărească",footerGuaranteeText:"100% Lemn Masiv Premium și Materiale de Designer, realizate sustenabil prin meșteșug tradițional.",footerSupportTitle:"Asistență Clienți",footerRights:"© 2026 SwenTech. Toate drepturile rezervate."},hu:{shopName:"Fancy Furniture",shopAddress:"Fő sugárút 12, Székelyudvarhely (Odorheiu Secuiesc), Erdély",heroTitle:"Prémium Kézműves Bútorok",heroSubtitle:"Tömörfa és modern dizájnbútorok, a legigényesebb otthonokhoz tervezve.",navCatalog:"Katalógus",navAR:"AR Stúdió",navCart:"Kosár",navLoyalty:"Hűségközpont",navAnalytics:"Elemzések",categoryAll:"Összes bútor",categoryTables:"Asztalok",categoryChairs:"Székek",categorySofas:"Kanapék",categoryCabinets:"Szekrények / Tálalók",categoryBeds:"Ágyak",categoryLighting:"Világítás",categoryArmchairs:"Fotelek",categoryDecor:"Dekorációk",priceText:"Ár",stockText:"Készleten",outOfStock:"Nincs raktáron",materialText:"Anyag",dimensionsText:"Méretek",pointsText:"Hűségpontok",pointsValue:"Ezzel a termékkel {points} pontot szerzel",addToCart:"Kosárba teszem",addedToCart:"Kosárba helyezve!",buyNow:"Vásárlás most",reviewsTitle:"Vásárlói Értékelések",writeReview:"Értékelés írása",yourName:"Az Ön neve",ratingText:"Értékelés",commentText:"Véleménye",submitReview:"Értékelés beküldése",verifiedPurchase:"Ellenőrzött Vásárló",arTitle:"AR Szobavizualizáció",arSubtitle:"Szkennelje be szobáját és vetítse ki a Fancy Furniture bútorokat 3D-ben, valós időben.",arStartCam:"AR Kamera indítása",arStopCam:"Kamera leállítása",arRotate:"Forgatás",arScale:"Méretezés",arInstructions:"Irányítsa a kamerát a padlóra, válasszon egy bútort, majd húzza a helyére, forgassa vagy méretezze.",checkoutTitle:"Biztonságos Fizetés",checkoutSub:"A tranzakciókat a GDPR és PCI-DSS adatvédelmi előírásoknak megfelelően titkosítjuk.",fullName:"Teljes név",phoneNumber:"Telefonszám",shippingMethod:"Szállítási és Átvételi lehetőségek",deliveryLocal:"Helyi házhozszállítás (élő nyomonkövetéssel)",deliveryCollect:"Személyes átvétel (Ingyenes a Fancy Furniture üzletben)",deliveryAddress:"Szállítási cím",placeOrder:"Fizetés és megrendelés",orderSuccess:"Sikeres fizetés és megrendelés!",orderSuccessSub:"Köszönjük, hogy a Fancy Furniture-t választotta. Számláját biztonságosan archiváltuk.",trackingTitle:"Kiszállítás nyomonkövetése",trackingStatus:"Jelenlegi állapot",trackingVehicle:"A kiszállító futár neve",pointsUsed:"{points} hűségpont beszámítása {discount} RON kedvezményért",pointsBalance:"Hűségpont egyenlege: {points} pont",offlineTitle:"Offline mód aktív",offlineText:"Jelenleg nem érhető el internetkapcsolat. Böngészhet a gyorsítótárazott termékek között, kosárba teheti őket, és helyben rendelhet.",themeTitle:"Egyedi Téma",themeLabel:"Válasszon vizuális hangulatot",ambientLightMode:"Környezeti fény szinkronizáció",ambientLightDesc:"A sötét/világos mód automatikus váltása.",notificationTitle:"Személyre szabott értesítések",notificationEmpty:"Nincsenek új értesítései",adminAddProduct:"Kereskedői Vezérlőpult: Új termék",adminBtn:"Bútor hozzáadása a bolthoz",adminSuccess:"Az új bútor sikeresen hozzáadva az élő adatbázishoz! Valós idejű szinkronizálás.",productRealtimeSync:"Valós idejű szinkronizálás aktív",analyticsTitle:"Valós idejű Boltstatisztika",analyticsVisits:"Élő látogatók",analyticsConversion:"Konverziós ráta",analyticsRevenue:"Összbevétel",analyticsCartAdd:"Kosárba helyezési arány",loyaltyTier:"Hűségszint",loyaltyCard:"Fancy Furniture Tag",socialLogin:"Vagy lépjen be gyorsan közösségi fiókkal",contactUs:"Kapcsolat",phoneLabel:"Telefon",emailLabel:"E-mail",addressLabel:"Cím",cartEmptyTitle:"A kosara üres",cartEmptySub:"Böngésszen a Fancy Furniture bútorok között termékek kosárba helyezéséhez.",cartSummary:"Kosár Összegzése",subtotalText:"Részösszeg",shippingText:"Szállítás",rewardsEarnings:"Szerzett hűségpontok",rewardsEarningsSub:"Vásárlás után +{points} hűségpontot írunk jóvá.",proceedToCheckout:"Tovább a fizetéshez",totalText:"VÉGÖSSZEG",shippingFree:"INGYENES",itemTotal:"Összesen",shippingPromo:"Házhozszállítási díj",shippingTierNotice:"Az ingyenes házhozszállítás Arany (Gold Master) szintet igényel (1500+ pont)",freeForTiers:"INGYENES (Gold Master szint)",pointsDiscountRequiresSignIn:"🔒 A pontkedvezményhez bejelentkezett fiók és legalább Silver Guild (500+ pont) szint szükséges.",pointsDiscountRequiresSilver:"🔒 Érje el a Silver Guild szintet (500+ pont) a hűségpont kedvezmény beváltásához. Egyenleg: {points} pont.",pointsDiscountUnlocked:"Hűségpontok Beváltása ({points} pont elérhető)",goldFreeDeliveryNote:"🎉 INGYENES Házhozszállítás alkalmazva (Gold Master Tagi Előjog - 0 RON)",silverTierBenefitPts:"✓ Hűségpont beváltási lehetőség fizetéskor",goldTierBenefitDelivery:"✓ INGYENES Házhozszállítás Románia egész területén + Összeszerelés",selectCity:"Település",baseTierRestrictionTitle:"⚠️ Személyes átvétel a Fancy Furniture bemutatóteremben",baseTierRestrictionDesc:"Személyes átvételhez és fizetéshez kérjük válassza a Személyes Átvétel opciót, vagy kérjen Házhozszállítást bárhová!",signIn:"Bejelentkezés",register:"Regisztráció / Új Fiók",signInTitle:"Tagi Bejelentkezés",registerTitle:"Fiók Létrehozása",authSubtitle:"Csatlakozzon a Fancy Furniture klubhoz az exkluzív kedvezményekért és rendeléskövetésért.",emailLabel:"E-mail cím",passwordLabel:"Jelszó",fullNameLabel:"Teljes név",dontHaveAccount:"Nincs még fiókja? Regisztráljon",alreadyHaveAccount:"Már van fiókja? Bejelentkezés",quickDemoLogin:"⚡ Gyors Demo Bejelentkezés",quickAdminLogin:"⚡ Bejelentkezés Adminként (admin@fancyfurniture.com)",adminAccessRequired:"Adminisztrátori Hozzáférés Szükséges 🔒",adminAccessDesc:"Az adminisztrációs felület kizárólag a bejegyzett adminisztrátorok számára érhető el. Kérjük lépjen be admin fiókkal.",myAccount:"Fiókom",signOut:"Kijelentkezés",distanceLabel:"Távolság a Székelyudvarhelyi Bemutatóteremtől",shippingBreakdown:"150 RON alapdíj (50 km-ig) + 20% (+30 RON) minden további 30 km-es szakasz után.",loyaltyHeroDesc:"Minden elköltött 10 RON után 1 pontot kap. Váltsa be pontjait exkluzív kedvezményekre és ingyenes szállításra.",yourBalance:"Az Ön Egyenlege",currentLevel:"Jelenlegi Szint: {tier}",nextLevelGoal:"Következő Szint Cél: {nextPts} pont (még {remaining} pont)",maxLevelReached:"Elérte a Maximális Szintet! (Gold Master Tag)",tierBronze:"Bronze Guild",tierBronzeRange:"0 - 499 Pont",tierBronzeBenefit1:"✓ Alapértelmezett pontgyűjtés",tierBronzeBenefit2:"✓ Hozzáférés az AR szobavizualizálóhoz",tierBronzeBenefit3:"✓ Személyes átvétel Székelyudvarhelyen",tierSilver:"Silver Guild",tierSilverRange:"500 - 1 499 Pont",tierSilverBenefit1:"✓ Hűségpont beváltási lehetőség fizetéskor",tierSilverBenefit2:"✓ 1,2x pontbónusz tölgyfa bútorokra",tierSilverBenefit3:"✓ Elsőbbségi rendelésfeldolgozás",tierGold:"Gold Master",tierGoldRange:"1 500+ Pont",tierGoldBenefit1:"✓ INGYENES Házhozszállítás Románia egész területén",tierGoldBenefit2:"✓ Ingyenes Szállítás + Prémium Összeszerelés",tierGoldBenefit3:"✓ 1,5x pontszorzó minden vásárlásra",tierGoldBenefit4:"✓ Egyedi gravírozás tömörfába",recentOrdersTitle:"Legutóbbi Rendelései",noOrdersFound:"Nincsenek korábbi rendelései. Vásároljon most és gyűjtse a hűségpontokat!",orderItemsCount:"{count} termék",ptsEarnedText:"+{points} pont jóváírva",navAdmin:"Kereskedői Admin",handcraftedCollection:"Kézműves Kollekció",heroBannerTag:"Fancy Furniture Kézműves Kollekció",tryARVisualizer:"Kipróbálom az AR Visualizert",exploreCountPieces:"{count} Bútor Böngészése",searchPlaceholder:"Keresés tölgy, szék, asztal...",sortFeatured:"Kiemelt",sortPriceAsc:"Ár: Növekvő",sortPriceDesc:"Ár: Csökkenő",sortRating:"Legjobbra Értékelt",noProductsFound:"Nem található bútor",noProductsFoundSub:"Próbálja törölni a keresést vagy kategóriát váltani.",ptsShort:"p",pointsRewardTag:"Jutalom Pontok: +{points} pont",customerReviewsCount:"({count} vásárlói értékelés)",warehouseStock:"{stock} darab a Hargita raktárban",arViewBtn:"AR Nézet",noReviewsYet:"Még nincsenek értékelések. Legyen Ön az első!",reviewSubmittedAlert:"Köszönjük az értékelését!",pointsToGain:"Szerzendő pontok:",removeItem:"Eltávolítás",cityOther:"Egyéb Romániai Város (Egyedi Távolság)",signInPointsNote:"Jelentkezzen be a gyűjtött hűségpontok azonnali beváltásához.",signInRedeemPrompt:"Jelentkezzen be a gyűjtött hűségpontok azonnali beváltásához.",pointsLockedTitle:"🔒 Hűségpont Kedvezmény Zárolva",pointsValueDetail:"1 pont = 1 RON kedvezmény (a kosár részösszegéig)",usePointsLabel:"Pontok beváltása",shippingFeeLabel:"Szállítási Díj",shippingBaseFeeNote:"Alapdíj: 150 RON (0-50 km)",pointsDiscountLabel:"Hűségpont Kedvezmény",totalPayableLabel:"Fizetendő Végösszeg",freePickupLabel:"0 RON (INGYENES Átvétel)",freeGoldLabel:"0 RON (INGYENES Gold Master)",pickCollectNote:"🚚 Személyes átvétel a Fancy Furniture székelyudvarhelyi bemutatótermében (0 RON)",distBaseNote:"📍 Távolság: {dist} km (≤ 50 km). Alap szállítási díj: 150 RON. (Gold Master tagoknak INGYENES a házhozszállítás!)",distExtraNote:"📍 Távolság: {dist} km ({extraKm} km az 50 km-es határ felett). +{pct}% felár ({blocks} blokk × 30 RON = +{surcharge} RON). Teljes szállítási díj: {fee} RON.",orderInvoiceNotice:"A számla elkészült a {id} számú rendeléshez. A futárkövetés aktiválva!",analyticsSub:"Élő adatok a székelyudvarhelyi bemutatóteremből és az online felületről.",realtimeSyncActive:"Valós idejű Szinkronizáció",categoryDemandTitle:"Kategória Keresleti Megoszlás",categoryTablesOak:"Asztalok (Tarnava Tölgyfa)",categorySofasLounges:"Kanapék & Fotelok",categoryBedsBedroom:"Ágyak & Hálószoba",categoryChairsCabinets:"Székek & Szekrények",ofRevenue:"a bevételből",adminAddSub:"Új kézműves bútorok hozzáadása közvetlenül az élő katalógushoz.",itemTitleEn:"Terméknév (Angol)",itemTitleRo:"Terméknév (Román)",itemTitleHu:"Terméknév (Magyar)",categoryText:"Kategória",stockCountLabel:"Készlet Mennyiség",imageUrlLabel:"Kép URL",uploadLocalImageLabel:"Termékkép (Helyi Fájl Feltöltése vagy URL)",dragDropHint:"Kattintson a kiválasztáshoz vagy húzza ide a képet a számítógépről",supportedFormatsHint:"Támogatott: PNG, JPG, JPEG, WebP, GIF",uploadedSuccess:"Helyi fájl sikeresen feltöltve!",orEnterUrl:"Vagy adja meg / szerkessze közvetlenül a kép URL-jét:",materialLabel:"Anyag (EN)",arSpatialTitle:"3D Térbeli Szobavizualizáló",roomPhotoLabel:"Szoba Kép:",roomLiving:"Nappali",roomBedroom:"Hálószoba",roomStudio:"Stúdió",arRotateLabel:"Forgatás:",arScaleLabel:"Méretezés:",arDragHint:"Húzza a mozgatáshoz",arSelectPieceTitle:"Válasszon Bútort",arCamError:`Nem sikerült hozzáférni a kamerához: {err}
Átváltás szobaképekre.`,footerQuickNav:"Gyors Navigáció",footerGuaranteeTitle:"Kézműves Garancia",footerGuaranteeText:"100% Prémium Tömörfa és Designer Anyagok, fenntarthatóan készítve mesteri asztalosmunkával.",footerSupportTitle:"Ügyfélszolgálat",footerRights:"© 2026 SwenTech. Minden jog fenntartva."}};class D{constructor(){this.listeners=[];const t=localStorage.getItem("fancy_products");let e=t?JSON.parse(t):[];if(!Array.isArray(e)||e.length===0)e=A;else{const l=new Set(e.map(u=>u.id));A.forEach(u=>{l.has(u.id)||e.push(u)})}this.products=e,localStorage.setItem("fancy_products",JSON.stringify(this.products));const i=localStorage.getItem("fancy_reviews");this.reviews=i?JSON.parse(i):M;const a=localStorage.getItem("fancy_cart");this.cart=a?JSON.parse(a):[];const n=localStorage.getItem("fancy_orders");this.orders=n?JSON.parse(n):[];const d=localStorage.getItem("fancy_points");this.points=d?parseInt(d,10):320;const c=localStorage.getItem("fancy_lang");this.lang=c||"en";const s=localStorage.getItem("fancy_user");this.user=s?JSON.parse(s):null,this.theme="light",document.documentElement.classList.remove("dark"),this.activeTab="catalog",this.selectedCategory="All",this.searchQuery="",this.sortBy="featured",this.selectedProductId=null,this.isCheckoutOpen=!1,this.isOffline=!navigator.onLine,this.notifications=[{id:1,title:"Welcome to Fancy Furniture",text:"Earn 10% back in loyalty points on all solid oak items.",time:"Just now",read:!1},{id:2,title:"New Collection Released",text:"Check out the Transylvanian Walnut Boema Bed.",time:"1h ago",read:!1}],window.addEventListener("online",()=>{this.isOffline=!1,this.notify()}),window.addEventListener("offline",()=>{this.isOffline=!0,this.notify()})}subscribe(t){return this.listeners.push(t),()=>{this.listeners=this.listeners.filter(e=>e!==t)}}notify(){this.listeners.forEach(t=>t(this))}t(t,e={}){let a=(P[this.lang]||P.en)[t]||P.en[t]||t;return Object.keys(e).forEach(n=>{a=a.replace(new RegExp(`\\{${n}\\}`,"g"),e[n])}),a}setLang(t){this.lang=t,localStorage.setItem("fancy_lang",t),this.notify()}setTheme(t){this.theme=t,localStorage.setItem("fancy_theme",t),document.documentElement.setAttribute("data-theme",t),t==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),this.notify()}setActiveTab(t){this.activeTab=t,this.notify()}setCategory(t){this.selectedCategory=t,this.notify()}setSearchQuery(t){this.searchQuery=t,this.notify()}setSortBy(t){this.sortBy=t,this.notify()}selectProduct(t){this.selectedProductId=t,this.notify()}addToCart(t,e=1){const i=this.cart.find(a=>a.product.id===t.id);i?i.quantity+=e:this.cart.push({product:t,quantity:e}),localStorage.setItem("fancy_cart",JSON.stringify(this.cart)),this.notifications.unshift({id:Date.now(),title:"Added to Cart",text:`${t.name[this.lang]||t.name.en} added to your shopping bag.`,time:"Just now",read:!1}),this.notify()}updateCartQuantity(t,e){if(e<=0)this.cart=this.cart.filter(i=>i.product.id!==t);else{const i=this.cart.find(a=>a.product.id===t);i&&(i.quantity=e)}localStorage.setItem("fancy_cart",JSON.stringify(this.cart)),this.notify()}clearCart(){this.cart=[],localStorage.setItem("fancy_cart",JSON.stringify(this.cart)),this.notify()}addReview(t,e,i,a){const n={id:"rev_"+Date.now(),productId:t,userId:"user_current",userName:e||"Valued Guest",rating:Number(i),comment:a,date:new Date().toISOString(),verified:!0};this.reviews.unshift(n),localStorage.setItem("fancy_reviews",JSON.stringify(this.reviews)),this.notify()}addProduct(t){this.products.unshift(t),localStorage.setItem("fancy_products",JSON.stringify(this.products)),this.notify()}completeOrder(t){const e={id:"ORD-"+Math.floor(1e5+Math.random()*9e5),date:new Date().toISOString(),items:[...this.cart],total:t.total,shippingMethod:t.shippingMethod,city:t.city,address:t.address,fullName:t.fullName,phone:t.phone,earnedPoints:t.earnedPoints,status:"Processing"};return this.orders.unshift(e),localStorage.setItem("fancy_orders",JSON.stringify(this.orders)),this.points+=t.earnedPoints-(t.usedPoints||0),localStorage.setItem("fancy_points",this.points.toString()),this.clearCart(),this.notifications.unshift({id:Date.now(),title:"Order Placed Successfully!",text:`Order ${e.id} confirmed. Tracking activated.`,time:"Just now",read:!1}),this.notify(),e}loginUser({email:t,password:e,name:i}){const a={id:"usr_"+Date.now(),name:i||t.split("@")[0],email:t,role:t.includes("admin")?"admin":"customer"};return this.user=a,localStorage.setItem("fancy_user",JSON.stringify(a)),this.notifications.unshift({id:Date.now(),title:"Welcome Back 👋",text:`Logged in as ${a.name} (${a.email}).`,time:"Just now",read:!1}),this.notify(),a}registerUser({name:t,email:e,password:i}){const a={id:"usr_"+Date.now(),name:t||"Valued Member",email:e,role:"customer"};return this.user=a,localStorage.setItem("fancy_user",JSON.stringify(a)),this.points+=100,localStorage.setItem("fancy_points",this.points.toString()),this.notifications.unshift({id:Date.now(),title:"Account Created 🎉",text:`Welcome to Fancy Furniture, ${a.name}! 100 bonus loyalty points added.`,time:"Just now",read:!1}),this.notify(),a}logoutUser(){this.user=null,localStorage.removeItem("fancy_user"),this.notifications.unshift({id:Date.now(),title:"Signed Out",text:"You have logged out of your Fancy Furniture account.",time:"Just now",read:!1}),this.notify()}getFilteredProducts(){return this.products.filter(t=>{if(this.selectedCategory!=="All"&&t.category!==this.selectedCategory)return!1;if(this.searchQuery.trim()){const e=this.searchQuery.toLowerCase();if(!(Object.values(t.material||{}).some(a=>typeof a=="string"&&a.toLowerCase().includes(e))||Object.values(t.name||{}).some(a=>typeof a=="string"&&a.toLowerCase().includes(e))||t.category.toLowerCase().includes(e)))return!1}return!0}).sort((t,e)=>this.sortBy==="price-asc"?t.priceRON-e.priceRON:this.sortBy==="price-desc"?e.priceRON-t.priceRON:this.sortBy==="rating"?e.rating-t.rating:0)}getCartSubtotal(){return this.cart.reduce((t,e)=>t+e.product.priceRON*e.quantity,0)}getCartTotalPoints(){return this.cart.reduce((t,e)=>t+(e.product.pointsEarned||Math.floor(e.product.priceRON*.1))*e.quantity,0)}isAdmin(){return!!(this.user&&this.user.role==="admin")}getUserTier(){return this.points>=1500?"Gold Master":this.points>=500?"Silver Guild":"Bronze Guild"}canRedeemPoints(){return!!(this.user&&this.points>=500)}calculateShippingFee(t,e="Home Delivery"){if(e==="Pick & Collect")return{fee:0,baseFee:0,extraKm:0,blocks:0,surcharge:0,isPickup:!0,isGoldFree:!1};if(!!(this.user&&this.points>=1500))return{fee:0,baseFee:0,extraKm:0,blocks:0,surcharge:0,isPickup:!1,isGoldFree:!0};const a=150,n=50,d=Math.max(0,Number(t)||0);if(d<=n)return{fee:a,baseFee:a,extraKm:0,blocks:0,surcharge:0,isPickup:!1,isGoldFree:!1};const c=d-n,s=Math.ceil(c/30),l=s*(a*.2);return{fee:a+l,baseFee:a,extraKm:c,blocks:s,surcharge:l,isPickup:!1,isGoldFree:!1}}}const o=new D;class E{constructor(t,e){this.containerEl=t,this.store=e,this.stream=null,this.bgType="living",this.selectedProduct=e.products[0]||null,this.scale=1,this.rotation=0,this.posX=50,this.posY=60,this.isDragging=!1}init(){this.render()}destroy(){this.stopCamera()}async startCamera(){try{this.stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}),this.bgType="camera",this.render()}catch(t){alert("Could not access camera: "+t.message+`
Falling back to room photo backgrounds.`),this.bgType="living",this.render()}}stopCamera(){this.stream&&(this.stream.getTracks().forEach(t=>t.stop()),this.stream=null)}getBgSrc(){return this.bgType==="bedroom"?"images/room_bedroom.jpg":this.bgType==="studio"?"images/room_studio.jpg":"images/room_living.jpg"}getFallbackBgSrc(){return this.bgType==="bedroom"?"https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80":this.bgType==="studio"?"https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80":"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"}render(){if(!this.containerEl)return;const t=this.store.lang,e=n=>this.store.t(n),i=this.store.products;!this.selectedProduct&&i.length>0&&(this.selectedProduct=i[0]);const a=this.selectedProduct?this.selectedProduct.name[t]||this.selectedProduct.name.en:"";this.containerEl.innerHTML=`
      <div class="flex flex-col gap-6 max-w-6xl mx-auto p-4 sm:p-6">
        <!-- Header -->
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
          <div>
            <div class="flex items-center gap-2 text-amber-700 font-semibold text-sm mb-1 uppercase tracking-wider">
              <span>✨ ${e("arSpatialTitle")}</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-bold text-stone-900 font-serif">${e("arTitle")}</h1>
            <p class="text-stone-600 text-sm mt-1">${e("arSubtitle")}</p>
          </div>
          
          <div class="flex items-center gap-2 flex-wrap">
            <button id="ar-cam-btn" class="px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all shadow-sm ${this.bgType==="camera"?"bg-red-600 text-white hover:bg-red-700":"bg-amber-700 text-white hover:bg-amber-800"}">
              <span>📷</span>
              <span>${this.bgType==="camera"?e("arStopCam"):e("arStartCam")}</span>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <!-- Main AR Canvas Container -->
          <div class="lg:col-span-3 flex flex-col gap-4">
            <div id="ar-viewport" class="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-stone-900 rounded-2xl overflow-hidden shadow-lg border border-stone-200 select-none cursor-grab active:cursor-grabbing">
              ${this.bgType==="camera"?'<video id="ar-video" autoplay playsinline class="w-full h-full object-cover"></video>':`<img id="ar-bg-img" src="${this.getBgSrc()}" alt="Room Preview" class="w-full h-full object-cover pointer-events-none select-none" onerror="this.onerror=null; this.src='${this.getFallbackBgSrc()}';" />`}

              <!-- Grid overlay helper -->
              <div class="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>

              <!-- Draggable Furniture Overlay -->
              ${this.selectedProduct?`
                  <div id="ar-item-overlay" 
                    style="left: ${this.posX}%; top: ${this.posY}%; transform: translate(-50%, -50%) rotate(${this.rotation}deg) scale(${this.scale});"
                    class="absolute transition-transform duration-75 flex flex-col items-center group cursor-move">
                    <img src="${this.selectedProduct.image}" alt="${a}" class="max-w-[180px] sm:max-w-[260px] max-h-[180px] sm:max-h-[260px] object-contain filter drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] pointer-events-none select-none rounded-lg" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80';" />
                    
                    <!-- Bounding indicator -->
                    <div class="mt-2 px-3 py-1 bg-stone-900/90 backdrop-blur-md text-amber-400 text-xs font-semibold rounded-full shadow-lg border border-amber-500/30 flex items-center gap-1.5 opacity-90">
                      <span>📌 ${a}</span>
                    </div>
                  </div>
                `:""}

              <!-- Instruction hint -->
              <div class="absolute bottom-4 left-4 right-4 bg-stone-900/80 backdrop-blur-md text-stone-200 text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-stone-700/50 flex items-center justify-between gap-2 shadow-xl">
                <span>💡 ${e("arInstructions")}</span>
                <span class="text-amber-400 text-xs font-semibold uppercase hidden sm:inline">${e("arDragHint")}</span>
              </div>
            </div>

            <!-- Controls bar below AR viewport -->
            <div class="bg-white p-4 rounded-2xl border border-stone-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 shadow-sm w-full max-w-full min-w-0 overflow-hidden">
              <!-- Background preset switcher -->
              <div class="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 scrollbar-none max-w-full min-w-0">
                <span class="text-xs font-semibold uppercase text-stone-400 whitespace-nowrap flex-shrink-0">${e("roomPhotoLabel")}</span>
                <button data-bg="living" class="ar-bg-btn flex-shrink-0 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${this.bgType==="living"?"bg-amber-100 text-amber-900 font-bold":"bg-stone-100 text-stone-700 hover:bg-stone-200"}">${e("roomLiving")}</button>
                <button data-bg="bedroom" class="ar-bg-btn flex-shrink-0 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${this.bgType==="bedroom"?"bg-amber-100 text-amber-900 font-bold":"bg-stone-100 text-stone-700 hover:bg-stone-200"}">${e("roomBedroom")}</button>
                <button data-bg="studio" class="ar-bg-btn flex-shrink-0 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${this.bgType==="studio"?"bg-amber-100 text-amber-900 font-bold":"bg-stone-100 text-stone-700 hover:bg-stone-200"}">${e("roomStudio")}</button>
              </div>

              <!-- Furniture Rotation & Scale Sliders -->
              <div class="flex items-center justify-between sm:justify-start gap-4 w-full sm:w-auto max-w-full min-w-0 flex-shrink-0">
                <div class="flex items-center gap-2 min-w-0">
                  <span class="text-xs font-medium text-stone-500 whitespace-nowrap">🔄 ${e("arRotateLabel")}</span>
                  <input id="ar-rotate-slider" type="range" min="-180" max="180" value="${this.rotation}" class="w-20 sm:w-24 accent-amber-700" />
                  <span class="text-xs text-stone-600 w-8">${this.rotation}°</span>
                </div>
                <div class="flex items-center gap-2 min-w-0">
                  <span class="text-xs font-medium text-stone-500 whitespace-nowrap">🔍 ${e("arScaleLabel")}</span>
                  <input id="ar-scale-slider" type="range" min="0.5" max="2.0" step="0.1" value="${this.scale}" class="w-20 sm:w-24 accent-amber-700" />
                  <span class="text-xs text-stone-600 w-8">${Math.round(this.scale*100)}%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Product Picker Sidebar -->
          <div class="lg:col-span-1 bg-white p-5 rounded-2xl border border-stone-200 flex flex-col gap-4 shadow-sm h-fit">
            <h3 class="font-serif font-bold text-stone-900 text-lg border-b border-stone-200 pb-3">${e("arSelectPieceTitle")}</h3>
            
            <div class="flex flex-col gap-2 max-h-[480px] overflow-y-auto pr-1">
              ${i.map(n=>{const d=this.selectedProduct&&this.selectedProduct.id===n.id,c=n.name[t]||n.name.en;return`
                  <button data-prod-id="${n.id}" class="ar-prod-item p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${d?"border-amber-700 bg-amber-50 text-amber-900 ring-2 ring-amber-700/20 font-semibold":"border-stone-200 hover:border-stone-300 text-stone-800"}">
                    <img src="${n.image}" alt="${c}" class="w-12 h-12 object-cover rounded-lg bg-stone-100 flex-shrink-0" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=200&q=80';" />
                    <div class="min-w-0 flex-1">
                      <div class="font-semibold text-xs truncate text-stone-900">${c}</div>
                      <div class="text-amber-800 font-bold text-xs mt-0.5">${n.priceRON} RON</div>
                      <div class="text-[10px] text-stone-400 uppercase">${n.category}</div>
                    </div>
                  </button>
                `}).join("")}
            </div>

            ${this.selectedProduct?`
              <div class="mt-2 pt-4 border-t border-stone-200 flex flex-col gap-2">
                <button id="ar-add-cart-btn" class="w-full py-2.5 bg-amber-700 hover:bg-amber-800 text-white rounded-xl font-semibold text-sm transition-all shadow-sm flex items-center justify-center gap-2">
                  <span>🛒</span>
                  <span>${e("addToCart")} (${this.selectedProduct.priceRON} RON)</span>
                </button>
              </div>
            `:""}
          </div>
        </div>
      </div>
    `,this.attachEvents()}attachEvents(){const t=this.containerEl.querySelector("#ar-cam-btn");if(t&&(t.onclick=()=>{this.bgType==="camera"?(this.stopCamera(),this.bgType="living",this.render()):this.startCamera()}),this.bgType==="camera"&&this.stream){const d=this.containerEl.querySelector("#ar-video");d&&(d.srcObject=this.stream)}this.containerEl.querySelectorAll(".ar-bg-btn").forEach(d=>{d.onclick=c=>{this.stopCamera(),this.bgType=c.currentTarget.dataset.bg,this.render()}}),this.containerEl.querySelectorAll(".ar-prod-item").forEach(d=>{d.onclick=c=>{const s=c.currentTarget.dataset.prodId,l=this.store.products.find(u=>u.id===s);l&&(this.selectedProduct=l,this.render())}});const e=this.containerEl.querySelector("#ar-rotate-slider");e&&(e.oninput=d=>{this.rotation=parseInt(d.target.value,10),this.updateOverlayTransform()});const i=this.containerEl.querySelector("#ar-scale-slider");i&&(i.oninput=d=>{this.scale=parseFloat(d.target.value),this.updateOverlayTransform()});const a=this.containerEl.querySelector("#ar-add-cart-btn");a&&(a.onclick=()=>{this.selectedProduct&&this.store.addToCart(this.selectedProduct,1)});const n=this.containerEl.querySelector("#ar-viewport");if(n){const d=(c,s)=>{if(!this.isDragging)return;const l=n.getBoundingClientRect();let u=(c-l.left)/l.width*100,r=(s-l.top)/l.height*100;u=Math.max(10,Math.min(90,u)),r=Math.max(10,Math.min(90,r)),this.posX=u,this.posY=r;const m=this.containerEl.querySelector("#ar-item-overlay");m&&(m.style.left=`${this.posX}%`,m.style.top=`${this.posY}%`)};n.onmousedown=c=>{this.isDragging=!0,d(c.clientX,c.clientY)},window.onmousemove=c=>{this.isDragging&&d(c.clientX,c.clientY)},window.onmouseup=()=>{this.isDragging=!1},n.ontouchstart=c=>{c.touches.length===1&&(this.isDragging=!0,d(c.touches[0].clientX,c.touches[0].clientY))},window.ontouchmove=c=>{this.isDragging&&c.touches.length===1&&d(c.touches[0].clientX,c.touches[0].clientY)},window.ontouchend=()=>{this.isDragging=!1}}}updateOverlayTransform(){const t=this.containerEl.querySelector("#ar-item-overlay");t&&(t.style.transform=`translate(-50%, -50%) rotate(${this.rotation}deg) scale(${this.scale})`);const e=this.containerEl.querySelector("#ar-rotate-slider + span");e&&(e.textContent=`${this.rotation}°`);const i=this.containerEl.querySelector("#ar-scale-slider + span");i&&(i.textContent=`${Math.round(this.scale*100)}%`)}}class F{constructor(){this.root=document.getElementById("root"),this.arController=null,this.showNotifications=!1,this.showCartDrawer=!1,this.showCheckoutModal=!1,this.showSocialLoginModal=!1,this.showAuthModal=!1,this.authModalMode="signin",this.showUserMenu=!1,this.liveVisitors=18,setInterval(()=>{this.liveVisitors+=Math.floor(Math.random()*3)-1,this.liveVisitors<12&&(this.liveVisitors=12);const t=document.getElementById("analytics-live-visitors");t&&(t.textContent=this.liveVisitors)},4e3),o.setTheme(o.theme),o.subscribe(()=>this.render())}init(){this.render()}render(){if(!this.root)return;const t=(d,c)=>o.t(d,c),e=o.lang;o.theme;const i=o.cart.reduce((d,c)=>d+c.quantity,0),a=o.getCartSubtotal(),n=o.notifications.filter(d=>!d.read).length;this.root.innerHTML=`
      <!-- Top Bar / Header -->
      <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm transition-colors">
        ${o.isOffline?`
          <div class="bg-amber-800 text-white text-xs font-semibold py-1 px-4 text-center flex items-center justify-center gap-2">
            <span>📡 ${t("offlineTitle")}:</span>
            <span>${t("offlineText")}</span>
          </div>
        `:""}

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3">
          <!-- Logo -->
          <button id="nav-logo" class="flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none group flex-shrink-0">
            <div class="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden shadow-md shadow-amber-900/25 group-hover:scale-105 transition-all ring-2 ring-amber-700/50 bg-stone-950 flex items-center justify-center">
              <img src="images/logo.jpg" alt="Fancy Furniture Logo" class="w-full h-full object-cover" referrerPolicy="no-referrer" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=200&q=80';" />
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
          </button>

          <!-- Nav Tabs (Desktop lg+) -->
          <nav class="hidden lg:flex items-center gap-1 bg-stone-100 p-1.5 rounded-xl border border-stone-200 flex-shrink-0">
            <button data-tab="catalog" class="nav-tab-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${o.activeTab==="catalog"?"bg-amber-800 text-white shadow-sm font-bold":"text-stone-700 hover:text-stone-900 hover:bg-stone-200/70"}">${t("navCatalog")}</button>

            <button data-tab="ar" class="nav-tab-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${o.activeTab==="ar"?"bg-amber-800 text-white shadow-sm font-bold":"text-stone-700 hover:text-stone-900 hover:bg-stone-200/70"}">
              <span>👓</span>
              <span>${t("navAR")}</span>
            </button>

            <button data-tab="loyalty" class="nav-tab-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${o.activeTab==="loyalty"?"bg-amber-800 text-white shadow-sm font-bold":"text-stone-700 hover:text-stone-900 hover:bg-stone-200/70"}">
              <span>🏅</span>
              <span>${t("navLoyalty")}</span>
              <span class="${o.activeTab==="loyalty"?"bg-amber-950 text-amber-200":"bg-amber-100 text-amber-900 border border-amber-300/60"} px-2 py-0.5 rounded-full text-[10px] font-bold">${o.points} pts</span>
            </button>

            <button data-tab="analytics" class="nav-tab-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${o.activeTab==="analytics"?"bg-amber-800 text-white shadow-sm font-bold":"text-stone-700 hover:text-stone-900 hover:bg-stone-200/70"}">${t("navAnalytics")}</button>

            <button data-tab="admin" class="nav-tab-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${o.activeTab==="admin"?"bg-amber-800 text-white shadow-sm font-bold":"text-stone-700 hover:text-stone-900 hover:bg-stone-200/70"}">Merchant Admin</button>
          </nav>

          <!-- Action Utilities (Lang, Cart, Notifs, Auth) -->
          <div class="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <!-- Language Picker -->
            <div class="relative">
              <select id="lang-select" class="appearance-none bg-white border border-stone-300 rounded-lg px-2 sm:px-2.5 py-1.5 text-xs font-semibold text-stone-800 pr-5 sm:pr-6 cursor-pointer focus:outline-none hover:border-amber-700 transition-colors shadow-sm">
                <option value="en" ${e==="en"?"selected":""}>🇬🇧 EN</option>
                <option value="ro" ${e==="ro"?"selected":""}>🇷🇴 RO</option>
                <option value="hu" ${e==="hu"?"selected":""}>🇭🇺 HU</option>
              </select>
            </div>

            <!-- Notifications -->
            <div class="relative">
              <button id="notif-btn" class="p-1.5 sm:p-2 rounded-lg bg-white border border-stone-300 text-stone-700 hover:bg-stone-100 transition-colors relative shadow-sm">
                🔔
                ${n>0?`
                  <span class="absolute -top-1 -right-1 w-4 h-4 bg-amber-800 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                    ${n}
                  </span>
                `:""}
              </button>

              <!-- Notifications Dropdown -->
              ${this.showNotifications?`
                <div class="absolute right-0 mt-2 w-72 sm:w-80 bg-white rounded-2xl shadow-xl border border-stone-200 p-4 z-50 animate-in fade-in slide-in-from-top-2">
                  <div class="flex items-center justify-between pb-3 border-b border-stone-100">
                    <h4 class="font-bold text-sm text-stone-900">${t("notificationTitle")}</h4>
                    <span class="text-xs text-amber-800 font-semibold">${o.notifications.length} total</span>
                  </div>
                  <div class="divide-y divide-stone-100 max-h-64 overflow-y-auto my-2">
                    ${o.notifications.map(d=>`
                      <div class="py-2.5 px-1">
                        <div class="flex items-center justify-between text-xs font-semibold text-stone-800">
                          <span>${d.title}</span>
                          <span class="text-[10px] text-stone-400">${d.time}</span>
                        </div>
                        <p class="text-xs text-stone-500 mt-0.5">${d.text}</p>
                      </div>
                    `).join("")}
                  </div>
                </div>
              `:""}
            </div>

            <!-- User Account / Sign In / Register -->
            ${o.user?`
              <div class="relative">
                <button id="user-menu-btn" class="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-amber-50 border border-amber-200 hover:bg-amber-100 text-amber-900 text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all">
                  <span class="w-5 h-5 rounded-full bg-amber-800 text-white flex items-center justify-center text-[10px] font-bold">${o.user.name.charAt(0).toUpperCase()}</span>
                  <span class="max-w-[90px] truncate hidden sm:inline">${o.user.name}</span>
                </button>
                ${this.showUserMenu?`
                  <div class="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-stone-200 p-3 z-50 animate-in fade-in">
                    <div class="pb-2 border-b border-stone-100 mb-2">
                      <div class="font-bold text-xs text-stone-900 truncate">${o.user.name}</div>
                      <div class="text-[10px] text-stone-500 truncate">${o.user.email}</div>
                      <div class="mt-1.5 inline-flex items-center gap-1 bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        🏅 ${o.points} pts
                      </div>
                    </div>
                    <button id="user-orders-btn" class="w-full text-left text-xs font-semibold text-stone-700 hover:text-amber-800 py-1.5 px-2 rounded-lg hover:bg-stone-100 flex items-center gap-2">
                      📦 ${t("navLoyalty")} & Orders
                    </button>
                    <button id="user-signout-btn" class="w-full text-left text-xs font-semibold text-red-600 hover:text-red-700 py-1.5 px-2 rounded-lg hover:bg-red-50 flex items-center gap-2 mt-1">
                      🚪 ${t("signOut")}
                    </button>
                  </div>
                `:""}
              </div>
            `:`
              <button id="auth-modal-btn" class="px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-white border border-stone-300 hover:border-amber-700 text-stone-800 text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all hover:bg-stone-50">
                <span>👤</span>
                <span class="hidden sm:inline">${t("signIn")}</span>
              </button>
            `}

            <!-- Cart Trigger -->
            <button id="cart-drawer-btn" class="px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold flex items-center gap-1.5 sm:gap-2 shadow-sm transition-all active:scale-95">
              <span>🛒</span>
              <span class="hidden sm:inline">${t("navCart")}</span>
              <span class="bg-amber-950 px-1.5 sm:px-2 py-0.5 rounded-md font-bold text-[10px] sm:text-[11px]">${i} (${a} RON)</span>
            </button>
          </div>
        </div>

        <!-- Sub Navigation Bar (Responsive, contained within screen width) -->
        <div class="lg:hidden w-full max-w-full min-w-0 bg-stone-100 border-t border-stone-200 py-2 px-3 sm:px-6">
          <div class="flex items-center gap-1.5 overflow-x-auto scrollbar-none w-full max-w-full min-w-0">
            <button data-tab="catalog" class="nav-tab-btn flex-shrink-0 whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${o.activeTab==="catalog"?"bg-amber-800 text-white font-bold shadow-sm":"text-stone-700 hover:bg-stone-200/80"}">
              <span>🛋️</span>
              <span>${t("navCatalog")}</span>
            </button>
            <button data-tab="ar" class="nav-tab-btn flex-shrink-0 whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${o.activeTab==="ar"?"bg-amber-800 text-white font-bold shadow-sm":"text-stone-700 hover:bg-stone-200/80"}">
              <span>👓</span>
              <span>${t("navAR")}</span>
            </button>
            <button data-tab="loyalty" class="nav-tab-btn flex-shrink-0 whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${o.activeTab==="loyalty"?"bg-amber-800 text-white font-bold shadow-sm":"text-stone-700 hover:bg-stone-200/80"}">
              <span>🏅</span>
              <span>${t("navLoyalty")}</span>
              <span class="${o.activeTab==="loyalty"?"bg-amber-950 text-amber-200":"bg-amber-200 text-amber-900"} px-1.5 py-0.2 rounded-full text-[10px] font-bold">${o.points}p</span>
            </button>
            <button data-tab="analytics" class="nav-tab-btn flex-shrink-0 whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${o.activeTab==="analytics"?"bg-amber-800 text-white font-bold shadow-sm":"text-stone-700 hover:bg-stone-200/80"}">
              <span>📊</span>
              <span>${t("navAnalytics")}</span>
            </button>
            <button data-tab="admin" class="nav-tab-btn flex-shrink-0 whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${o.activeTab==="admin"?"bg-amber-800 text-white font-bold shadow-sm":"text-stone-700 hover:bg-stone-200/80"}">
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
            <div class="font-serif font-bold text-xl text-white mb-2">Fancy Furniture</div>
            <p class="text-xs text-stone-400 leading-relaxed">${t("heroSubtitle")}</p>
            <div class="mt-4 text-xs text-amber-500 font-semibold">📍 ${t("shopAddress")}</div>
          </div>
          <div>
            <h4 class="font-bold text-stone-200 text-sm mb-3">${t("footerQuickNav")}</h4>
            <ul class="space-y-2 text-xs">
              <li><button data-tab="catalog" class="nav-tab-btn hover:text-white">${t("navCatalog")}</button></li>
              <li><button data-tab="ar" class="nav-tab-btn hover:text-white">${t("navAR")}</button></li>
              <li><button data-tab="loyalty" class="nav-tab-btn hover:text-white">${t("navLoyalty")}</button></li>
              <li><button id="footer-account-btn" class="hover:text-white">${o.user?t("myAccount"):t("signIn")+" / "+t("register")}</button></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-stone-200 text-sm mb-3">${t("footerGuaranteeTitle")}</h4>
            <p class="text-xs text-stone-400">${t("footerGuaranteeText")}</p>
          </div>
          <div>
            <h4 class="font-bold text-stone-200 text-sm mb-3">${t("footerSupportTitle")}</h4>
            <div class="text-xs space-y-1">
              <div>📞 Phone: +40 266 123 456</div>
              <div>✉️ Email: contact@fancyfurniture.com</div>
              <div>📍 Showroom: Odorheiu Secuiesc</div>
            </div>
          </div>
        </div>

        <div class="max-w-7xl mx-auto border-t border-stone-800/80 pt-6 text-center text-xs text-stone-500 font-medium">
          ${t("footerRights")}
        </div>
      </footer>
    `,this.renderActiveTabContent(),this.renderModals(),this.attachHeaderEvents()}renderActiveTabContent(){const t=this.root.querySelector("#main-content");if(t)if(o.activeTab!=="ar"&&this.arController&&(this.arController.destroy(),this.arController=null),o.activeTab==="ar"){t.innerHTML='<div id="ar-container"></div>';const e=t.querySelector("#ar-container");this.arController=new E(e,o),this.arController.init()}else o.activeTab==="loyalty"?this.renderLoyaltyHub(t):o.activeTab==="analytics"?this.renderAnalyticsDashboard(t):o.activeTab==="admin"?this.renderAdminPanel(t):this.renderCatalog(t)}renderCatalog(t){const e=s=>o.t(s),i=o.lang,a=o.getFilteredProducts(),n=["All","Tables","Chairs","Sofas","Cabinets","Beds","Lighting","Armchairs","Decor"];t.innerHTML=`
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
              ${e("heroTitle")}
            </h1>
            <p class="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
              ${e("heroSubtitle")}
            </p>
            <div class="flex items-center gap-4 flex-wrap">
              <button data-tab="ar" class="nav-tab-btn px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm shadow-lg shadow-amber-900/30 transition-all flex items-center gap-2">
                <span>👓</span>
                <span>Try AR Visualizer</span>
              </button>
              <a href="#catalog-grid" class="px-5 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-sm border border-stone-700 transition-all">
                Explore ${o.products.length} Furniture Pieces
              </a>
            </div>
          </div>
        </div>
      </section>

      <div id="catalog-grid" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Controls Bar: Category Pills, Search, Sort -->
        <div class="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl border border-stone-200 shadow-sm w-full max-w-full min-w-0 overflow-hidden">
          <!-- Category Pills -->
          <div class="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none w-full lg:w-auto max-w-full min-w-0 flex-1">
            ${n.map(s=>{const l=s==="All"?"categoryAll":"category"+s,u=o.selectedCategory===s;return`
                <button data-cat="${s}" class="cat-pill px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap flex-shrink-0 transition-all ${u?"bg-amber-800 text-white shadow-sm":"bg-stone-100 text-stone-700 hover:bg-stone-200"}">
                  ${e(l)||s}
                </button>
              `}).join("")}
          </div>

          <!-- Search & Sort -->
          <div class="flex items-center gap-3 w-full lg:w-auto max-w-full min-w-0 flex-shrink-0">
            <!-- Search -->
            <div class="relative flex-1 lg:w-64 min-w-0">
              <input 
                id="search-input" 
                type="text" 
                placeholder="Search oak, chair, table..." 
                value="${o.searchQuery}"
                class="w-full bg-stone-100 border border-stone-200 rounded-xl px-3.5 py-2 pl-9 text-xs font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-700"
              />
              <span class="absolute left-3 top-2.5 text-stone-400 text-xs">🔍</span>
            </div>

            <!-- Sort -->
            <select id="sort-select" class="bg-stone-100 border border-stone-200 rounded-xl px-3 py-2 text-xs font-semibold text-stone-700 focus:outline-none cursor-pointer flex-shrink-0">
              <option value="featured" ${o.sortBy==="featured"?"selected":""}>Featured</option>
              <option value="price-asc" ${o.sortBy==="price-asc"?"selected":""}>Price: Low to High</option>
              <option value="price-desc" ${o.sortBy==="price-desc"?"selected":""}>Price: High to Low</option>
              <option value="rating" ${o.sortBy==="rating"?"selected":""}>Highest Rated</option>
            </select>
          </div>
        </div>

        <!-- Product Cards Grid -->
        ${a.length===0?`
          <div class="text-center py-20 bg-white rounded-2xl border border-stone-200 p-8">
            <div class="text-4xl mb-3">🪵</div>
            <h3 class="text-lg font-bold text-stone-800 mb-1">No furniture pieces found</h3>
            <p class="text-xs text-stone-500">Try clearing your search query or switching categories.</p>
          </div>
        `:`
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            ${a.map(s=>{const l=s.name[i]||s.name.en,u=s.description[i]||s.description.en,r=s.material?s.material[i]||s.material.en:"";return`
                <div class="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <!-- Image container -->
                    <div class="relative aspect-[4/3] bg-stone-100 overflow-hidden cursor-pointer open-prod-modal" data-prod-id="${s.id}">
                      <img src="${s.image}" alt="${l}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80';" />
                      
                      <div class="absolute top-3 left-3 flex flex-col gap-1">
                        <span class="px-2.5 py-1 bg-stone-900/80 backdrop-blur-md text-stone-200 text-[10px] font-bold uppercase rounded-lg border border-stone-700/50">
                          ${s.category}
                        </span>
                      </div>

                      <div class="absolute top-3 right-3">
                        <span class="px-2 py-1 bg-amber-500 text-stone-950 font-bold text-[10px] rounded-lg shadow-sm">
                          +${s.pointsEarned||Math.floor(s.priceRON*.1)} pts
                        </span>
                      </div>

                      <div class="absolute bottom-3 left-3 bg-stone-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-amber-400 text-xs font-semibold flex items-center gap-1">
                        <span>⭐ ${s.rating}</span>
                        <span class="text-stone-400 text-[10px]">(${s.reviewsCount})</span>
                      </div>
                    </div>

                    <!-- Details -->
                    <div class="p-5">
                      <h3 class="font-serif font-bold text-lg text-stone-900 group-hover:text-amber-800 transition-colors cursor-pointer open-prod-modal" data-prod-id="${s.id}">
                        ${l}
                      </h3>
                      <p class="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed">
                        ${u}
                      </p>

                      <div class="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600">
                        <span>🪵 ${r}</span>
                        <span>📏 ${s.dimensions}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Footer action -->
                  <div class="p-5 pt-0 flex items-center justify-between gap-3">
                    <div>
                      <span class="text-xs text-stone-400 uppercase block font-semibold">Price</span>
                      <span class="text-xl font-bold font-serif text-amber-800">${s.priceRON} RON</span>
                    </div>

                    <button data-add-prod-id="${s.id}" class="add-to-cart-btn px-4 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-amber-900/20 active:scale-95 transition-all">
                      <span>🛒</span>
                      <span>${e("addToCart")}</span>
                    </button>
                  </div>
                </div>
              `}).join("")}
          </div>
        `}
      </div>
    `,t.querySelectorAll(".cat-pill").forEach(s=>{s.onclick=l=>o.setCategory(l.currentTarget.dataset.cat)});const d=t.querySelector("#search-input");d&&(d.oninput=s=>o.setSearchQuery(s.target.value));const c=t.querySelector("#sort-select");c&&(c.onchange=s=>o.setSortBy(s.target.value)),t.querySelectorAll(".open-prod-modal").forEach(s=>{s.onclick=l=>o.selectProduct(l.currentTarget.dataset.prodId)}),t.querySelectorAll(".add-to-cart-btn").forEach(s=>{s.onclick=l=>{const u=l.currentTarget.dataset.addProdId,r=o.products.find(m=>m.id===u);r&&o.addToCart(r,1)}})}renderLoyaltyHub(t){const e=(s,l)=>o.t(s,l),i=o.points;let a=e("tierBronze"),n=0,d=500;i>=1500?(a=e("tierGold"),n=1500,d=3e3):i>=500&&(a=e("tierSilver"),n=500,d=1500);const c=Math.min(100,Math.max(0,(i-n)/(d-n)*100));t.innerHTML=`
      <div class="max-w-5xl mx-auto p-4 sm:p-6 flex flex-col gap-8">
        <!-- Header -->
        <div class="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-stone-800 relative overflow-hidden">
          <div class="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div class="text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
                ${e("loyaltyCard")}
              </div>
              <h1 class="text-3xl font-serif font-bold text-white mb-2">${a}</h1>
              <p class="text-stone-300 text-xs sm:text-sm max-w-lg">
                ${e("loyaltyHeroDesc")}
              </p>
            </div>

            <div class="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 text-center min-w-[180px]">
              <span class="text-xs uppercase text-stone-300 block font-semibold">${e("yourBalance")}</span>
              <span class="text-4xl font-bold font-serif text-amber-400">${i}</span>
              <span class="text-xs text-stone-300 block mt-0.5">${e("pointsText")}</span>
            </div>
          </div>

          <!-- Progress bar -->
          <div class="mt-8 pt-6 border-t border-white/10">
            <div class="flex items-center justify-between text-xs text-stone-300 mb-2 font-semibold">
              <span>${e("currentLevel",{tier:a})}</span>
              <span>${i>=1500?e("maxLevelReached"):e("nextLevelGoal",{nextPts:d,remaining:d-i})}</span>
            </div>
            <div class="w-full h-3 bg-stone-800 rounded-full overflow-hidden p-0.5 border border-white/10">
              <div class="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full transition-all duration-500" style="width: ${c}%"></div>
            </div>
          </div>
        </div>

        <!-- Tier Benefits Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white dark:bg-stone-900 p-6 rounded-2xl border ${i<500?"border-amber-500 ring-2 ring-amber-500/20":"border-stone-200 dark:border-stone-800"} shadow-sm">
            <div class="text-2xl mb-2">🥉</div>
            <h3 class="font-bold text-stone-900 dark:text-stone-100 mb-1 text-sm">${e("tierBronze")}</h3>
            <p class="text-xs text-stone-500 mb-4">${e("tierBronzeRange")}</p>
            <ul class="text-xs space-y-2 text-stone-600 dark:text-stone-400">
              <li>${e("tierBronzeBenefit1")}</li>
              <li>${e("tierBronzeBenefit2")}</li>
              <li>${e("tierBronzeBenefit3")}</li>
            </ul>
          </div>

          <div class="bg-white dark:bg-stone-900 p-6 rounded-2xl border ${i>=500&&i<1500?"border-amber-500 ring-2 ring-amber-500/20":"border-stone-200 dark:border-stone-800"} shadow-sm">
            <div class="text-2xl mb-2">🥈</div>
            <h3 class="font-bold text-stone-900 dark:text-stone-100 mb-1 text-sm">${e("tierSilver")}</h3>
            <p class="text-xs text-stone-500 mb-4">${e("tierSilverRange")}</p>
            <ul class="text-xs space-y-2 text-stone-600 dark:text-stone-400">
              <li>${e("tierSilverBenefit1")}</li>
              <li>${e("tierSilverBenefit2")}</li>
              <li>${e("tierSilverBenefit3")}</li>
            </ul>
          </div>

          <div class="bg-white dark:bg-stone-900 p-6 rounded-2xl border ${i>=1500?"border-amber-500 ring-2 ring-amber-500/20":"border-stone-200 dark:border-stone-800"} shadow-sm">
            <div class="text-2xl mb-2">🥇</div>
            <h3 class="font-bold text-stone-900 dark:text-stone-100 mb-1 text-sm">${e("tierGold")}</h3>
            <p class="text-xs text-stone-500 mb-4">${e("tierGoldRange")}</p>
            <ul class="text-xs space-y-2 text-stone-600 dark:text-stone-400">
              <li>${e("tierGoldBenefit1")}</li>
              <li>${e("tierGoldBenefit2")}</li>
              <li>${e("tierGoldBenefit3")}</li>
              <li>${e("tierGoldBenefit4")}</li>
            </ul>
          </div>
        </div>

        <!-- Order History -->
        <div class="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm">
          <h3 class="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 mb-4">${e("recentOrdersTitle")}</h3>
          ${o.orders.length===0?`
            <div class="text-center py-8 text-xs text-stone-500">
              ${e("noOrdersFound")}
            </div>
          `:`
            <div class="divide-y divide-stone-100 dark:divide-stone-800">
              ${o.orders.map(s=>`
                <div class="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="font-bold text-sm text-stone-900 dark:text-stone-100">${s.id}</span>
                      <span class="px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-[10px] font-bold uppercase">${s.status}</span>
                    </div>
                    <div class="text-xs text-stone-500 mt-0.5">
                      ${new Date(s.date).toLocaleDateString()} • ${e("orderItemsCount",{count:s.items.length})} • ${s.shippingMethod}
                    </div>
                  </div>
                  <div class="text-right">
                    <span class="font-serif font-bold text-base text-amber-700 dark:text-amber-400 block">${s.total} RON</span>
                    <span class="text-[10px] text-green-600 dark:text-green-400 font-semibold">${e("ptsEarnedText",{points:s.earnedPoints})}</span>
                  </div>
                </div>
              `).join("")}
            </div>
          `}
        </div>
      </div>
    `}renderAnalyticsDashboard(t){const e=r=>o.t(r),i=o.lang,a=o.orders.reduce((r,m)=>r+m.total,0)+48200,d=[{id:"Tables",icon:"🪵",label:{en:"Solid Oak Tables",ro:"Mese din Stejar Masiv",hu:"Tölgyfa Asztalok"},baseWeight:35,gradient:"from-amber-600 to-amber-500",barBg:"bg-amber-500",badgeClass:"bg-amber-100 text-amber-900 dark:bg-amber-950/80 dark:text-amber-200 border-amber-300 dark:border-amber-700"},{id:"Sofas",icon:"🛋️",label:{en:"Sofas & Lounges",ro:"Canapele & Fotolii",hu:"Kanapék & Bútorok"},baseWeight:26,gradient:"from-emerald-600 to-emerald-500",barBg:"bg-emerald-500",badgeClass:"bg-emerald-100 text-emerald-900 dark:bg-emerald-950/80 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700"},{id:"Beds",icon:"🛌",label:{en:"Beds & Bedroom",ro:"Paturi & Dormitoare",hu:"Ágyak & Hálószoba"},baseWeight:17,gradient:"from-indigo-600 to-indigo-500",barBg:"bg-indigo-500",badgeClass:"bg-indigo-100 text-indigo-900 dark:bg-indigo-950/80 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700"},{id:"Chairs",icon:"🪑",label:{en:"Dining Chairs",ro:"Scaun de Dining",hu:"Étkezőszékek"},baseWeight:9,gradient:"from-sky-600 to-sky-500",barBg:"bg-sky-500",badgeClass:"bg-sky-100 text-sky-900 dark:bg-sky-950/80 dark:text-sky-200 border-sky-300 dark:border-sky-700"},{id:"Cabinets",icon:"🗄️",label:{en:"Cabinets & Sideboards",ro:"Comode & Dulapuri",hu:"Szekrények & Tálalók"},baseWeight:7,gradient:"from-orange-600 to-orange-500",barBg:"bg-orange-500",badgeClass:"bg-orange-100 text-orange-900 dark:bg-orange-950/80 dark:text-orange-200 border-orange-300 dark:border-orange-700"},{id:"Armchairs",icon:"👑",label:{en:"Lounge Armchairs",ro:"Fotolii Sculptate",hu:"Faragott Fotelek"},baseWeight:3,gradient:"from-rose-600 to-rose-500",barBg:"bg-rose-500",badgeClass:"bg-rose-100 text-rose-900 dark:bg-rose-950/80 dark:text-rose-200 border-rose-300 dark:border-rose-700"},{id:"Lighting",icon:"💡",label:{en:"Pendant & Floor Lights",ro:"Corpuri de Iluminat",hu:"Világítótestek"},baseWeight:2,gradient:"from-yellow-500 to-amber-400",barBg:"bg-yellow-500",badgeClass:"bg-yellow-100 text-yellow-900 dark:bg-yellow-950/80 dark:text-yellow-200 border-yellow-300 dark:border-yellow-700"},{id:"Decor",icon:"🎨",label:{en:"Artisan Wall Decor",ro:"Decorațiuni Artizanale",hu:"Kézműves Dekorációk"},baseWeight:1,gradient:"from-teal-600 to-teal-500",barBg:"bg-teal-500",badgeClass:"bg-teal-100 text-teal-900 dark:bg-teal-950/80 dark:text-teal-200 border-teal-300 dark:border-teal-700"}].map(r=>{const m=o.products.filter(v=>v.category===r.id),b=m.length,p=m.reduce((v,h)=>v+(h.stock||0),0),w=b>0?Math.round(m.reduce((v,h)=>v+h.priceRON,0)/b):0;let x=0;o.orders.forEach(v=>{v.cart&&v.cart.forEach(h=>{h.product&&h.product.category===r.id&&(x+=h.quantity)})});const S=r.baseWeight+b*3+x*5;return{...r,prodCount:b,totalStock:p,avgPrice:w,salesCount:x,weight:S}}),c=d.reduce((r,m)=>r+m.weight,0),s=d.map(r=>{const m=Math.max(1,Math.round(r.weight/c*100)),b=Math.round(a*m/100);let p="✨ Steady Demand";return m>=20?p="🔥 Best Seller":m>=10?p="📈 High Demand":m>=5&&(p="🌟 Growing Category"),{...r,sharePct:m,estRevenue:b,statusTag:p}}).sort((r,m)=>m.sharePct-r.sharePct),l=o.products.length,u=o.products.reduce((r,m)=>r+(m.stock||0),0);t.innerHTML=`
      <div class="max-w-6xl mx-auto p-4 sm:p-6 flex flex-col gap-8">
        <div class="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">${e("analyticsTitle")}</h1>
            <p class="text-xs text-stone-500 mt-1">${e("analyticsSub")}</p>
          </div>
          <div class="flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>${e("realtimeSyncActive")}</span>
          </div>
        </div>

        <!-- Metric Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm">
            <div class="text-xs text-stone-400 font-semibold uppercase mb-1">${e("analyticsVisits")}</div>
            <div id="analytics-live-visitors" class="text-3xl font-serif font-bold text-amber-700 dark:text-amber-500">${this.liveVisitors}</div>
            <div class="text-[10px] text-emerald-600 mt-2">↑ 14% vs last hour</div>
          </div>

          <div class="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm">
            <div class="text-xs text-stone-400 font-semibold uppercase mb-1">${e("analyticsRevenue")}</div>
            <div class="text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">${a.toLocaleString()} RON</div>
            <div class="text-[10px] text-emerald-600 mt-2">↑ 22% monthly growth</div>
          </div>

          <div class="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm">
            <div class="text-xs text-stone-400 font-semibold uppercase mb-1">${e("analyticsConversion")}</div>
            <div class="text-3xl font-serif font-bold text-amber-700 dark:text-amber-500">4.8%</div>
            <div class="text-[10px] text-stone-400 mt-2">High conversion rate</div>
          </div>

          <div class="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm">
            <div class="text-xs text-stone-400 font-semibold uppercase mb-1">${e("analyticsCartAdd")}</div>
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
                  <span>${e("categoryDemandTitle")}</span>
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
                <div class="text-base font-extrabold text-stone-900 dark:text-stone-100">${l}</div>
              </div>
              <div class="h-8 w-px bg-stone-200 dark:bg-stone-700"></div>
              <div class="text-center px-2">
                <div class="text-[10px] font-bold text-stone-400 uppercase">Warehouse Stock</div>
                <div class="text-base font-extrabold text-emerald-600 dark:text-emerald-400">${u} units</div>
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
              ${s.map(r=>`
                <div 
                  class="h-full bg-gradient-to-r ${r.gradient} first:rounded-l-xl last:rounded-r-xl transition-all duration-500 relative group cursor-pointer" 
                  style="width: ${r.sharePct}%"
                  title="${r.id}: ${r.sharePct}% (${r.estRevenue.toLocaleString()} RON)"
                >
                  <div class="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap pointer-events-none z-20">
                    ${r.icon} ${r.id}: ${r.sharePct}% (${r.estRevenue.toLocaleString()} RON)
                  </div>
                </div>
              `).join("")}
            </div>

            <!-- Legend Pills -->
            <div class="flex flex-wrap items-center gap-2 pt-1">
              ${s.map(r=>`
                <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-[11px] font-bold text-stone-800 dark:text-stone-200">
                  <span class="w-2.5 h-2.5 rounded-full ${r.barBg}"></span>
                  <span>${r.icon} ${r.id}</span>
                  <span class="text-amber-700 dark:text-amber-400">(${r.sharePct}%)</span>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Comprehensive Category Demand Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            ${s.map(r=>{const m=r.label[i]||r.label.en;return`
                <div class="p-4 sm:p-5 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-800/50 hover:bg-white dark:hover:bg-stone-800 transition-all shadow-xs space-y-3">
                  <!-- Category Header -->
                  <div class="flex items-center justify-between gap-2">
                    <div class="flex items-center gap-2">
                      <span class="text-xl p-1.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 shadow-xs">${r.icon}</span>
                      <div>
                        <h3 class="font-bold text-sm text-stone-900 dark:text-stone-100">${m}</h3>
                        <span class="text-[10px] font-semibold text-stone-600 dark:text-stone-300">${r.statusTag}</span>
                      </div>
                    </div>
                    <span class="px-3 py-1 rounded-full text-xs font-extrabold border ${r.badgeClass}">
                      ${r.sharePct}% Share
                    </span>
                  </div>

                  <!-- High Visibility Progress Bar -->
                  <div>
                    <div class="flex justify-between text-xs font-extrabold text-stone-800 dark:text-stone-200 mb-1">
                      <span>Demand Weight</span>
                      <span class="text-amber-700 dark:text-amber-400">${r.estRevenue.toLocaleString()} RON est.</span>
                    </div>
                    <div class="w-full bg-stone-200 dark:bg-stone-700 h-4 rounded-full overflow-hidden shadow-inner p-0.5 border border-stone-300 dark:border-stone-600">
                      <div class="bg-gradient-to-r ${r.gradient} h-full rounded-full transition-all duration-700 flex items-center justify-end pr-1 text-[9px] font-extrabold text-white" style="width: ${Math.max(8,r.sharePct)}%">
                        ${r.sharePct}%
                      </div>
                    </div>
                  </div>

                  <!-- Category Statistics Breakdown -->
                  <div class="grid grid-cols-3 gap-2 pt-2 border-t border-stone-200/60 dark:border-stone-700/60 text-center">
                    <div class="bg-white dark:bg-stone-900 p-2 rounded-xl border border-stone-200 dark:border-stone-700">
                      <span class="text-[10px] text-stone-600 dark:text-stone-300 font-bold block">Catalog Items</span>
                      <span class="font-extrabold text-xs text-stone-900 dark:text-stone-100">${r.prodCount} pieces</span>
                    </div>
                    <div class="bg-white dark:bg-stone-900 p-2 rounded-xl border border-stone-200 dark:border-stone-700">
                      <span class="text-[10px] text-stone-600 dark:text-stone-300 font-bold block">Avg Price</span>
                      <span class="font-extrabold text-xs text-stone-900 dark:text-stone-100">${r.avgPrice} RON</span>
                    </div>
                    <div class="bg-white dark:bg-stone-900 p-2 rounded-xl border border-stone-200 dark:border-stone-700">
                      <span class="text-[10px] text-stone-600 dark:text-stone-300 font-bold block">In Stock</span>
                      <span class="font-extrabold text-xs text-emerald-600 dark:text-emerald-400">${r.totalStock} units</span>
                    </div>
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>
      </div>
    `}renderAdminPanel(t){const e=a=>o.t(a);if(!o.isAdmin()){t.innerHTML=`
        <div class="max-w-xl mx-auto p-4 sm:p-6 my-10">
          <div class="bg-white dark:bg-stone-900 p-8 sm:p-10 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-xl text-center">
            <div class="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 flex items-center justify-center text-3xl font-bold mx-auto mb-4 border border-amber-200 dark:border-amber-800">
              🔒
            </div>
            <h1 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">${e("adminAccessRequired")}</h1>
            <p class="text-xs text-stone-600 dark:text-stone-300 leading-relaxed max-w-md mx-auto mb-6">
              ${e("adminAccessDesc")}
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button id="admin-quick-login-btn" class="w-full sm:w-auto px-6 py-3 bg-amber-800 hover:bg-amber-900 text-white rounded-xl text-xs font-bold shadow-md shadow-amber-900/20 transition-all flex items-center justify-center gap-2">
                <span>⚡</span>
                <span>${e("quickAdminLogin")}</span>
              </button>
              <button id="admin-open-auth-btn" class="w-full sm:w-auto px-5 py-3 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 rounded-xl text-xs font-semibold transition-all">
                ${e("signIn")} / ${e("register")}
              </button>
            </div>
          </div>
        </div>
      `;const a=t.querySelector("#admin-quick-login-btn");a&&(a.onclick=()=>{o.loginUser({email:"admin@fancyfurniture.com",name:"Store Manager (Admin)"}),this.render()});const n=t.querySelector("#admin-open-auth-btn");n&&(n.onclick=()=>{this.showAuthModal=!0,this.authModalMode="signin",this.render()});return}t.innerHTML=`
      <div class="max-w-3xl mx-auto p-4 sm:p-6">
        <div class="bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-lg">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-stone-100 dark:border-stone-800">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-amber-700 text-white flex items-center justify-center text-xl font-bold">🛠️</div>
              <div>
                <h1 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">${e("adminAddProduct")}</h1>
                <p class="text-xs text-stone-500">${e("adminAddSub")}</p>
              </div>
            </div>
            <div class="px-3 py-1 bg-amber-100 dark:bg-amber-950/80 border border-amber-300 text-amber-900 dark:text-amber-200 rounded-full text-[11px] font-bold flex items-center gap-1.5 self-start sm:self-auto">
              <span>🔑</span>
              <span>Admin: ${o.user.email}</span>
            </div>
          </div>

          <form id="admin-add-form" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">${e("itemTitleEn")}</label>
                <input required type="text" name="name_en" placeholder="e.g. Oak Coffee Table" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs font-medium" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">${e("itemTitleRo")}</label>
                <input required type="text" name="name_ro" placeholder="e.g. Măsuță de Cafea" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs font-medium" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">${e("itemTitleHu")}</label>
                <input required type="text" name="name_hu" placeholder="e.g. DOHÁNYZÓASZTAL" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs font-medium" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">${e("priceText")} (RON)</label>
                <input required type="number" name="price" placeholder="1850" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs font-medium" />
              </div>

              <div>
                <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">${e("categoryText")}</label>
                <select name="category" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs font-medium">
                  <option value="Tables">${e("categoryTables")}</option>
                  <option value="Chairs">${e("categoryChairs")}</option>
                  <option value="Sofas">${e("categorySofas")}</option>
                  <option value="Cabinets">${e("categoryCabinets")}</option>
                  <option value="Beds">${e("categoryBeds")}</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">${e("stockCountLabel")}</label>
                <input required type="number" name="stock" value="5" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs font-medium" />
              </div>
            </div>

            <!-- Product Image Section (Upload from local computer or enter URL) -->
            <div class="space-y-2 p-4 rounded-2xl bg-stone-50/80 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800">
              <label class="block text-xs font-bold text-stone-800 dark:text-stone-200 flex items-center gap-1.5">
                <span>📷</span>
                <span>${e("uploadLocalImageLabel")}</span>
              </label>

              <!-- Drag & Drop Zone -->
              <div id="admin-dropzone" class="relative border-2 border-dashed border-stone-300 dark:border-stone-700 hover:border-amber-600 dark:hover:border-amber-500 bg-white dark:bg-stone-900 rounded-2xl p-4 transition-all text-center cursor-pointer group shadow-xs">
                <input type="file" id="admin-file-input" accept="image/*" class="hidden" />
                
                <div id="admin-dropzone-empty" class="flex flex-col items-center justify-center py-2 space-y-2">
                  <div class="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-200 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-xs border border-amber-300 dark:border-amber-800">
                    📤
                  </div>
                  <div>
                    <p class="text-xs font-bold text-stone-800 dark:text-stone-200">
                      ${e("dragDropHint")}
                    </p>
                    <p class="text-[10px] text-stone-600 dark:text-stone-300 mt-0.5 font-medium">
                      ${e("supportedFormatsHint")}
                    </p>
                  </div>
                </div>

                <!-- Preview Box -->
                <div id="admin-dropzone-preview" class="hidden flex items-center gap-3 text-left p-2 bg-stone-50 dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700">
                  <img id="admin-preview-img" src="" alt="Product Preview" class="w-16 h-16 object-cover rounded-lg border border-stone-300 dark:border-stone-600 shrink-0 bg-stone-200" />
                  <div class="flex-1 min-w-0">
                    <p id="admin-preview-filename" class="text-xs font-bold text-stone-900 dark:text-stone-100 truncate">Image Loaded</p>
                    <p id="admin-preview-status" class="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 mt-0.5">
                      <span>✓</span>
                      <span>${e("uploadedSuccess")}</span>
                    </p>
                  </div>
                  <button type="button" id="admin-remove-img-btn" class="px-3 py-1.5 text-xs font-bold text-rose-600 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-950/50 rounded-lg transition-colors border border-rose-200 dark:border-rose-900 shrink-0">
                    ${e("removeItem")}
                  </button>
                </div>
              </div>

              <!-- Fallback / Edit Image URL -->
              <div class="pt-1">
                <label class="block text-[11px] font-semibold text-stone-600 dark:text-stone-300 mb-1">
                  ${e("orEnterUrl")}
                </label>
                <input required type="text" name="image" id="admin-image-url" value="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-700" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">${e("materialLabel")}</label>
                <input type="text" name="material_en" value="Solid Transylvanian Oak" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs font-medium" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">${e("dimensionsText")}</label>
                <input type="text" name="dimensions" value="120 x 60 x 45 cm" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs font-medium" />
              </div>
            </div>

            <button type="submit" class="w-full py-3 bg-amber-700 hover:bg-amber-800 text-white rounded-xl font-semibold text-sm shadow-md transition-all">
              ${e("adminBtn")}
            </button>
          </form>
        </div>
      </div>
    `;const i=t.querySelector("#admin-add-form");if(i){const a=t.querySelector("#admin-dropzone"),n=t.querySelector("#admin-file-input"),d=t.querySelector("#admin-dropzone-empty"),c=t.querySelector("#admin-dropzone-preview"),s=t.querySelector("#admin-preview-img"),l=t.querySelector("#admin-preview-filename"),u=t.querySelector("#admin-image-url"),r=t.querySelector("#admin-remove-img-btn"),m=b=>{if(!b||!b.type.startsWith("image/"))return;const p=new FileReader;p.onload=w=>{const x=w.target.result;u&&(u.value=x),s&&(s.src=x),l&&(l.textContent=b.name+` (${(b.size/1024).toFixed(1)} KB)`),d&&d.classList.add("hidden"),c&&c.classList.remove("hidden")},p.readAsDataURL(b)};a&&n&&(a.onclick=b=>{b.target.closest("#admin-remove-img-btn")||n.click()},n.onchange=()=>{n.files&&n.files[0]&&m(n.files[0])},a.ondragover=b=>{b.preventDefault(),a.classList.add("border-amber-600","bg-amber-50/50","dark:bg-amber-950/30")},a.ondragleave=b=>{b.preventDefault(),a.classList.remove("border-amber-600","bg-amber-50/50","dark:bg-amber-950/30")},a.ondrop=b=>{b.preventDefault(),a.classList.remove("border-amber-600","bg-amber-50/50","dark:bg-amber-950/30"),b.dataTransfer&&b.dataTransfer.files&&b.dataTransfer.files[0]&&m(b.dataTransfer.files[0])}),r&&(r.onclick=b=>{b.stopPropagation(),n&&(n.value=""),u&&(u.value="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80"),s&&(s.src=""),c&&c.classList.add("hidden"),d&&d.classList.remove("hidden")}),u&&(u.oninput=()=>{const b=u.value.trim();b&&(b.startsWith("http")||b.startsWith("data:image"))&&(s&&(s.src=b),l&&(l.textContent="Custom Image URL"),d&&d.classList.add("hidden"),c&&c.classList.remove("hidden"))}),i.onsubmit=b=>{b.preventDefault();const p=new FormData(i),w=Number(p.get("price")),x={id:"prod_"+Date.now(),name:{en:p.get("name_en"),ro:p.get("name_ro"),hu:p.get("name_hu")},description:{en:"Handcrafted in Odorheiu Secuiesc with artisanal precision.",ro:"Realizat manual în Odorheiu Secuiesc cu precizie meșteșugărească.",hu:"Kézzel készült Székelyudvarhelyen mesteri precizitással."},priceRON:w,category:p.get("category"),image:p.get("image"),arOverlayType:"table",dimensions:p.get("dimensions"),material:{en:p.get("material_en"),ro:p.get("material_en"),hu:p.get("material_en")},stock:Number(p.get("stock")),rating:5,reviewsCount:1,pointsEarned:Math.floor(w*.1),createdAt:new Date().toISOString()};o.addProduct(x),alert(o.t("adminSuccess")),o.setActiveTab("catalog")}}}renderModals(){const t=this.root.querySelector("#modal-container");t&&(t.innerHTML="",o.selectedProductId&&this.renderProductDetailModal(t),this.showCartDrawer&&this.renderCartDrawer(t),this.showCheckoutModal&&this.renderCheckoutModal(t),this.showAuthModal&&this.renderAuthModal(t))}renderAuthModal(t){const e=s=>o.t(s),i=this.authModalMode==="register",a=document.createElement("div");a.className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in",a.innerHTML=`
      <div class="bg-white dark:bg-stone-900 rounded-3xl max-w-md w-full border border-stone-200 dark:border-stone-800 shadow-2xl p-6 sm:p-8 relative">
        <button id="close-auth-modal" class="absolute top-4 right-4 w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 font-bold flex items-center justify-center hover:bg-stone-200">
          ✕
        </button>

        <div class="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100 dark:border-stone-800">
          <div class="w-11 h-11 rounded-2xl bg-amber-800 text-white flex items-center justify-center text-xl font-bold shadow-md shadow-amber-900/20">
            ${i?"📝":"🔐"}
          </div>
          <div>
            <h2 class="font-serif font-bold text-xl text-stone-900 dark:text-stone-100">
              ${e(i?"registerTitle":"signInTitle")}
            </h2>
            <p class="text-xs text-stone-500">${e("authSubtitle")}</p>
          </div>
        </div>

        <form id="auth-form" class="space-y-4">
          ${i?`
            <div>
              <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">${e("fullNameLabel")}</label>
              <input required type="text" name="name" placeholder="e.g. Andrei Popescu" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-700" />
            </div>
          `:""}

          <div>
            <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">${e("emailLabel")}</label>
            <input required type="email" name="email" placeholder="customer@example.com" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-700" />
          </div>

          <div>
            <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">${e("passwordLabel")}</label>
            <input required type="password" name="password" placeholder="••••••••" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-700" />
          </div>

          <button type="submit" class="w-full py-3 bg-amber-800 hover:bg-amber-900 text-white rounded-xl font-bold text-xs shadow-md shadow-amber-900/20 transition-all">
            ${e(i?"register":"signIn")}
          </button>

          <!-- Toggle Mode -->
          <div class="text-center pt-2">
            <button type="button" id="toggle-auth-mode" class="text-xs font-semibold text-amber-800 hover:underline">
              ${e(i?"alreadyHaveAccount":"dontHaveAccount")}
            </button>
          </div>

          <!-- Quick Demo Sign In -->
          ${i?"":`
            <div class="pt-3 border-t border-stone-100 dark:border-stone-800 space-y-2 text-center">
              <button type="button" id="quick-demo-btn" class="w-full py-2 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 rounded-xl text-xs font-bold transition-all">
                ${e("quickDemoLogin")} (Customer: Andrei Popescu)
              </button>
              <button type="button" id="quick-admin-demo-btn" class="w-full py-2 bg-amber-800 hover:bg-amber-900 text-white rounded-xl text-xs font-bold transition-all">
                ${e("quickAdminLogin")}
              </button>
            </div>
          `}
        </form>
      </div>
    `,t.appendChild(a),a.querySelector("#close-auth-modal").onclick=()=>{this.showAuthModal=!1,this.render()},a.querySelector("#toggle-auth-mode").onclick=()=>{this.authModalMode=i?"signin":"register",this.render()};const n=a.querySelector("#quick-demo-btn");n&&(n.onclick=()=>{o.loginUser({email:"andrei.popescu@example.com",name:"Andrei Popescu"}),this.showAuthModal=!1,this.render()});const d=a.querySelector("#quick-admin-demo-btn");d&&(d.onclick=()=>{o.loginUser({email:"admin@fancyfurniture.com",name:"Store Manager (Admin)"}),this.showAuthModal=!1,this.render()});const c=a.querySelector("#auth-form");c&&(c.onsubmit=s=>{s.preventDefault();const l=new FormData(c),u=l.get("email"),r=l.get("password"),m=l.get("name");i?o.registerUser({name:m,email:u,password:r}):o.loginUser({email:u,password:r,name:m}),this.showAuthModal=!1,this.render()})}renderProductDetailModal(t){const e=r=>o.t(r),i=o.lang,a=o.products.find(r=>r.id===o.selectedProductId);if(!a)return;const n=a.name[i]||a.name.en,d=a.description[i]||a.description.en,c=a.material?a.material[i]||a.material.en:"",s=o.reviews.filter(r=>r.productId===a.id),l=document.createElement("div");l.className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in",l.innerHTML=`
      <div class="bg-white dark:bg-stone-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-stone-200 dark:border-stone-800 shadow-2xl relative">
        <button id="close-prod-modal" class="absolute top-4 right-4 w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 font-bold flex items-center justify-center hover:bg-stone-200 dark:hover:bg-stone-700 z-10 transition-colors">
          ✕
        </button>

        <div class="grid grid-cols-1 md:grid-cols-2">
          <!-- Image -->
          <div class="relative bg-stone-100 dark:bg-stone-800 min-h-[300px]">
            <img src="${a.image}" alt="${n}" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80';" />
            <div class="absolute bottom-4 left-4 bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-amber-400 font-bold text-xs">
              ${e("pointsRewardTag",{points:a.pointsEarned||Math.floor(a.priceRON*.1)})}
            </div>
          </div>

          <!-- Content -->
          <div class="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-500">${a.category}</span>
              <h2 class="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-1">${n}</h2>
              
              <div class="flex items-center gap-2 mt-2">
                <span class="text-amber-500 font-bold text-sm">⭐ ${a.rating}</span>
                <span class="text-xs text-stone-400">${e("customerReviewsCount",{count:a.reviewsCount})}</span>
              </div>

              <div class="text-3xl font-serif font-bold text-amber-700 dark:text-amber-500 my-4">
                ${a.priceRON} RON
              </div>

              <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                ${d}
              </p>

              <div class="space-y-2 text-xs bg-stone-50 dark:bg-stone-800/50 p-4 rounded-xl border border-stone-100 dark:border-stone-800 mb-6">
                <div><strong class="text-stone-700 dark:text-stone-300">${e("materialText")}:</strong> ${c}</div>
                <div><strong class="text-stone-700 dark:text-stone-300">${e("dimensionsText")}:</strong> ${a.dimensions}</div>
                <div><strong class="text-stone-700 dark:text-stone-300">${e("stockText")}:</strong> <span class="text-green-600 font-semibold">${e("warehouseStock",{stock:a.stock})}</span></div>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <button id="modal-add-cart" class="flex-1 py-3.5 bg-amber-700 hover:bg-amber-800 text-white rounded-xl font-semibold text-sm shadow-lg shadow-amber-900/20 transition-all flex items-center justify-center gap-2">
                <span>🛒</span>
                <span>${e("addToCart")} (${a.priceRON} RON)</span>
              </button>
              <button id="modal-try-ar" class="px-4 py-3.5 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 rounded-xl font-semibold text-sm transition-all flex items-center gap-1.5">
                <span>👓</span>
                <span>${e("arViewBtn")}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Customer Reviews Section -->
        <div class="p-6 sm:p-8 border-t border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/50">
          <h3 class="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 mb-4">${e("reviewsTitle")}</h3>

          <div class="space-y-4 mb-6">
            ${s.length===0?`
              <p class="text-xs text-stone-400">${e("noReviewsYet")}</p>
            `:s.map(r=>`
              <div class="bg-white dark:bg-stone-800 p-4 rounded-xl border border-stone-200/60 dark:border-stone-700/60">
                <div class="flex items-center justify-between mb-1">
                  <span class="font-bold text-xs text-stone-900 dark:text-stone-100">${r.userName}</span>
                  <span class="text-amber-500 text-xs font-semibold">{"⭐".repeat(r.rating)}</span>
                </div>
                <p class="text-xs text-stone-600 dark:text-stone-300">${r.comment}</p>
              </div>
            `).join("")}
          </div>

          <!-- Write Review Form -->
          <form id="review-form" class="bg-white dark:bg-stone-800 p-4 rounded-xl border border-stone-200/60 dark:border-stone-700/60 space-y-3">
            <h4 class="font-semibold text-xs text-stone-900 dark:text-stone-100">${e("writeReview")}</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input required type="text" name="name" placeholder="${e("yourName")}" class="p-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-xs" />
              <select name="rating" class="p-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-xs">
                <option value="5">⭐⭐⭐⭐⭐ 5 Stars</option>
                <option value="4">⭐⭐⭐⭐ 4 Stars</option>
                <option value="3">⭐⭐⭐ 3 Stars</option>
              </select>
            </div>
            <textarea required name="comment" rows="2" placeholder="${e("commentText")}" class="w-full p-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-xs"></textarea>
            <button type="submit" class="px-4 py-2 bg-amber-700 text-white font-semibold text-xs rounded-lg hover:bg-amber-800">
              ${e("submitReview")}
            </button>
          </form>
        </div>
      </div>
    `,t.appendChild(l),l.querySelector("#close-prod-modal").onclick=()=>o.selectProduct(null),l.querySelector("#modal-add-cart").onclick=()=>{o.addToCart(a,1),o.selectProduct(null)},l.querySelector("#modal-try-ar").onclick=()=>{o.selectProduct(null),o.setActiveTab("ar")};const u=l.querySelector("#review-form");u&&(u.onsubmit=r=>{r.preventDefault();const m=new FormData(u);o.addReview(a.id,m.get("name"),m.get("rating"),m.get("comment")),alert("Thank you for your review!")})}renderCartDrawer(t){const e=(l,u)=>o.t(l,u),i=o.lang,a=o.cart,n=o.getCartSubtotal(),d=o.getCartTotalPoints(),c=document.createElement("div");c.className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in",c.innerHTML=`
      <div class="w-full max-w-md bg-white dark:bg-stone-900 h-full flex flex-col justify-between p-6 border-l border-stone-200 dark:border-stone-800 shadow-2xl relative">
        <div>
          <div class="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-stone-800">
            <div class="flex items-center gap-2">
              <span class="text-xl">🛒</span>
              <h2 class="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">${e("cartSummary")}</h2>
            </div>
            <button id="close-cart-btn" class="w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 font-bold flex items-center justify-center hover:bg-stone-200">
              ✕
            </button>
          </div>

          <!-- Items list -->
          <div class="divide-y divide-stone-100 dark:divide-stone-800 max-h-[60vh] overflow-y-auto my-4 pr-1">
            ${a.length===0?`
              <div class="text-center py-16">
                <div class="text-4xl mb-2">🪵</div>
                <h4 class="font-bold text-stone-800 dark:text-stone-200 text-sm">${e("cartEmptyTitle")}</h4>
                <p class="text-xs text-stone-500 mt-1">${e("cartEmptySub")}</p>
              </div>
            `:a.map(l=>{const u=l.product.name[i]||l.product.name.en;return`
                <div class="py-4 flex items-center gap-3">
                  <img src="${l.product.image}" alt="${u}" class="w-16 h-16 object-cover rounded-xl bg-stone-100 dark:bg-stone-800 flex-shrink-0" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=200&q=80';" />
                  <div class="flex-1 min-w-0">
                    <h4 class="font-semibold text-xs text-stone-900 dark:text-stone-100 truncate">${u}</h4>
                    <div class="text-amber-700 dark:text-amber-500 font-bold text-xs mt-0.5">${l.product.priceRON} RON</div>
                    <div class="flex items-center gap-2 mt-2">
                      <button data-qty-id="${l.product.id}" data-qty-val="${l.quantity-1}" class="cart-qty-btn w-6 h-6 rounded bg-stone-100 dark:bg-stone-800 text-xs font-bold">-</button>
                      <span class="text-xs font-bold w-4 text-center">${l.quantity}</span>
                      <button data-qty-id="${l.product.id}" data-qty-val="${l.quantity+1}" class="cart-qty-btn w-6 h-6 rounded bg-stone-100 dark:bg-stone-800 text-xs font-bold">+</button>
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="font-bold text-sm text-stone-900 dark:text-stone-100">${l.product.priceRON*l.quantity} RON</div>
                    <button data-remove-id="${l.product.id}" class="remove-cart-btn text-[10px] text-red-500 font-semibold hover:underline mt-2">${e("removeItem")}</button>
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>

        ${a.length>0?`
          <div class="pt-4 border-t border-stone-200 dark:border-stone-800 space-y-3">
            <div class="flex justify-between text-xs text-stone-500">
              <span>${e("subtotalText")}</span>
              <span class="font-bold text-stone-900 dark:text-stone-100">${n} RON</span>
            </div>

            <div class="flex justify-between text-xs text-emerald-600 font-semibold bg-emerald-50 dark:bg-emerald-950/40 p-2.5 rounded-xl">
              <span>${e("pointsToGain")}</span>
              <span>+${d} pts</span>
            </div>

            <button id="proceed-checkout-btn" class="w-full py-3.5 bg-amber-700 hover:bg-amber-800 text-white rounded-xl font-semibold text-sm shadow-lg shadow-amber-900/20 transition-all flex items-center justify-center gap-2">
              <span>🔒</span>
              <span>${e("proceedToCheckout")} (${n} RON)</span>
            </button>
          </div>
        `:""}
      </div>
    `,t.appendChild(c),c.querySelector("#close-cart-btn").onclick=()=>{this.showCartDrawer=!1,this.render()},c.querySelectorAll(".cart-qty-btn").forEach(l=>{l.onclick=u=>{const r=u.currentTarget.dataset.qtyId,m=parseInt(u.currentTarget.dataset.qtyVal,10);o.updateCartQuantity(r,m)}}),c.querySelectorAll(".remove-cart-btn").forEach(l=>{l.onclick=u=>{const r=u.currentTarget.dataset.removeId;o.updateCartQuantity(r,0)}});const s=c.querySelector("#proceed-checkout-btn");s&&(s.onclick=()=>{this.showCartDrawer=!1,this.showCheckoutModal=!0,this.render()})}renderCheckoutModal(t){const e=(g,y)=>o.t(g,y),i=o.getCartSubtotal(),a=o.getCartTotalPoints(),n=o.points,d={"Odorheiu Secuiesc":0,"Cristuru Secuiesc":26,Sighișoara:48,"Miercurea Ciuc":52,"Târgu Mureș":78,Brașov:110,Sibiu:135,"Cluj-Napoca":180,Bucharest:300,Timișoara:380,Other:100};let c="Odorheiu Secuiesc",s=0,l="Home Delivery",u=!1;const r=document.createElement("div");r.className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in",r.innerHTML=`
      <div class="bg-white dark:bg-stone-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-stone-200 dark:border-stone-800 shadow-2xl p-6 sm:p-8 relative">
        <button id="close-checkout" class="absolute top-4 right-4 w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 font-bold flex items-center justify-center hover:bg-stone-200">
          ✕
        </button>

        <div class="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100 dark:border-stone-800">
          <div class="w-10 h-10 rounded-xl bg-amber-700 text-white flex items-center justify-center text-xl font-bold">💳</div>
          <div>
            <h2 class="font-serif font-bold text-xl text-stone-900 dark:text-stone-100">${e("checkoutTitle")}</h2>
            <p class="text-xs text-stone-500">${e("checkoutSub")}</p>
          </div>
        </div>

        <form id="checkout-form" class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-amber-950 dark:text-stone-200 mb-1.5 flex items-center gap-1">
                <span>👤</span>
                <span>${e("fullName")}</span>
              </label>
              <input required type="text" name="fullName" value="${o.user?o.user.name:""}" placeholder="e.g. Andrei Popescu" class="w-full p-2.5 rounded-xl border border-amber-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs" />
            </div>

            <div>
              <label class="block text-xs font-bold text-amber-950 dark:text-stone-200 mb-1.5 flex items-center gap-1">
                <span>📞</span>
                <span>${e("phoneNumber")}</span>
              </label>
              <input required type="tel" name="phone" placeholder="+40 712 345 678" class="w-full p-2.5 rounded-xl border border-amber-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-amber-950 dark:text-stone-200 mb-1.5 flex items-center gap-1">
                <span>🏙️</span>
                <span>${e("selectCity")}</span>
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
                <option value="Other" class="bg-white text-stone-900 dark:bg-stone-900 dark:text-stone-100 font-medium">${e("cityOther")}</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-bold text-amber-950 dark:text-stone-200 mb-1.5 flex items-center gap-1">
                <span>🚚</span>
                <span>${e("shippingMethod")}</span>
              </label>
              <select id="checkout-shipping" name="shippingMethod" class="w-full p-2.5 rounded-xl border border-amber-300 dark:border-amber-700/60 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 text-xs font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs">
                <option value="Home Delivery" class="bg-white text-stone-900 dark:bg-stone-900 dark:text-stone-100 font-medium">${e("deliveryLocal")}</option>
                <option value="Pick & Collect" class="bg-white text-stone-900 dark:bg-stone-900 dark:text-stone-100 font-medium">${e("deliveryCollect")}</option>
              </select>
            </div>
          </div>

          <!-- Distance Calculation Control -->
          <div id="distance-container" class="p-3.5 bg-amber-50/90 dark:bg-stone-800 rounded-2xl border border-amber-200/80 dark:border-stone-700 space-y-2.5 shadow-sm">
            <div class="flex items-center justify-between gap-2">
              <label class="text-xs font-bold text-amber-950 dark:text-stone-100 flex items-center gap-1.5">
                <span>📍</span>
                <span>${e("distanceLabel")}</span>
              </label>
              <div class="flex items-center gap-1.5 bg-white dark:bg-stone-900 px-2.5 py-1 rounded-xl border border-amber-300 dark:border-stone-600 shadow-xs">
                <input id="checkout-dist-num" type="number" min="0" max="1000" value="0" class="w-16 text-center font-bold text-xs text-stone-900 dark:text-stone-100 bg-transparent focus:outline-none" />
                <span class="text-xs font-extrabold text-amber-700 dark:text-amber-400">km</span>
              </div>
            </div>
            <input id="checkout-dist-range" type="range" min="0" max="500" value="0" class="w-full accent-amber-600 cursor-pointer h-2 bg-amber-200/60 dark:bg-stone-700 rounded-lg" />
            <div class="text-[11px] text-stone-700 dark:text-stone-200 leading-relaxed bg-white/90 dark:bg-stone-900/80 p-2.5 rounded-xl border border-amber-100 dark:border-stone-700 font-medium">
              ℹ️ ${e("shippingBreakdown")}
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">${e("deliveryAddress")}</label>
            <input required type="text" name="address" placeholder="Strada Principală nr. 45" class="w-full p-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-xs font-medium" />
          </div>

          <!-- Points Discount Checkbox / Lock Status -->
          ${o.user?o.canRedeemPoints()?`
            <div class="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-2xl border border-amber-200 dark:border-amber-800 flex items-center justify-between">
              <div>
                <span class="text-xs font-bold text-amber-900 dark:text-amber-200 block">${e("pointsDiscountUnlocked",{points:n})}</span>
                <span class="text-[10px] text-amber-700 dark:text-amber-300">${e("pointsValueDetail")}</span>
              </div>
              <label class="flex items-center gap-2 cursor-pointer">
                <input id="use-pts-checkbox" type="checkbox" class="w-4 h-4 accent-amber-600 rounded" />
                <span class="text-xs font-semibold text-amber-900 dark:text-amber-200">${e("usePointsLabel")}</span>
              </label>
            </div>
          `:`
            <div class="p-3.5 bg-stone-100 dark:bg-stone-800/80 rounded-2xl border border-stone-200 dark:border-stone-700 text-xs">
              <div class="flex items-center gap-2 mb-1">
                <span class="text-amber-800 dark:text-amber-400 font-bold">🔒 ${e("pointsLockedTitle")}</span>
                <span class="px-2 py-0.5 bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 text-[10px] font-bold rounded-md">${e("tierBronze")}</span>
              </div>
              <span class="text-[11px] text-stone-600 dark:text-stone-300 block">
                ${e("pointsDiscountRequiresSilver",{points:n})}
              </span>
            </div>
          `:`
            <div class="p-3.5 bg-amber-50/70 dark:bg-amber-950/30 rounded-2xl border border-amber-200 dark:border-amber-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div>
                <span class="font-bold text-amber-900 dark:text-amber-200 block mb-0.5">${e("pointsDiscountRequiresSignIn")}</span>
                <span class="text-[11px] text-amber-800/80 dark:text-amber-300/80">${e("signInRedeemPrompt")}</span>
              </div>
              <button type="button" id="checkout-open-auth-btn" class="px-3 py-1.5 bg-amber-800 hover:bg-amber-900 text-white rounded-xl text-xs font-bold transition-all shrink-0">
                ${e("signIn")} / ${e("register")}
              </button>
            </div>
          `}

          <!-- Order Summary Box -->
          <div class="bg-stone-50 dark:bg-stone-800 p-4 rounded-xl border border-stone-200 dark:border-stone-700 space-y-2 text-xs">
            <div class="flex justify-between text-stone-600 dark:text-stone-300">
              <span>${e("subtotalText")}:</span>
              <span class="font-bold">${i} RON</span>
            </div>

            <div class="flex justify-between text-stone-600 dark:text-stone-300">
              <span>${e("shippingFeeLabel")}:</span>
              <span id="shipping-fee-val" class="font-bold text-amber-800 dark:text-amber-400">150 RON</span>
            </div>

            <div id="shipping-breakdown-note" class="text-[11px] text-stone-600 dark:text-stone-300 bg-white dark:bg-stone-900 p-2 rounded-lg border border-stone-200 dark:border-stone-800 font-mono">
              ${e("shippingBaseFeeNote")}
            </div>

            <div id="points-discount-row" class="hidden justify-between text-emerald-600 font-semibold">
              <span>${e("pointsDiscountLabel")}:</span>
              <span id="points-discount-val">-0 RON</span>
            </div>

            <div class="flex justify-between text-amber-700 dark:text-amber-400 font-bold pt-2 border-t border-stone-200 dark:border-stone-700 text-sm">
              <span>${e("totalPayableLabel")}:</span>
              <span id="payable-total-text">${i+150} RON</span>
            </div>
          </div>

          <button type="submit" class="w-full py-3.5 bg-amber-700 hover:bg-amber-800 text-white rounded-xl font-semibold text-sm shadow-lg shadow-amber-900/20 transition-all flex items-center justify-center gap-2">
            <span>🚀</span>
            <span>${e("placeOrder")}</span>
          </button>
        </form>
      </div>
    `,t.appendChild(r);const m=r.querySelector("#close-checkout");m&&(m.onclick=()=>{this.showCheckoutModal=!1,this.render()});const b=r.querySelector("#checkout-open-auth-btn");b&&(b.onclick=()=>{this.showCheckoutModal=!1,this.showAuthModal=!0,this.authModalMode="signin",this.render()});const p=r.querySelector("#checkout-city"),w=r.querySelector("#checkout-shipping"),x=r.querySelector("#checkout-dist-num"),S=r.querySelector("#checkout-dist-range"),v=r.querySelector("#use-pts-checkbox"),h=()=>{const g=o.calculateShippingFee(s,l),y=u&&o.canRedeemPoints()?Math.min(i,n):0,f=r.querySelector("#shipping-fee-val"),k=r.querySelector("#shipping-breakdown-note"),z=r.querySelector("#points-discount-row"),C=r.querySelector("#points-discount-val"),L=r.querySelector("#payable-total-text"),T=r.querySelector("#distance-container");if(l==="Pick & Collect")T&&(T.style.display="none"),f&&(f.textContent=e("freePickupLabel"),f.className="font-bold text-emerald-600"),k&&(k.textContent=e("pickCollectNote"));else if(g.isGoldFree)T&&(T.style.display="block"),f&&(f.textContent=e("freeGoldLabel"),f.className="font-bold text-emerald-600"),k&&(k.textContent=`🎉 ${e("goldFreeDeliveryNote")}`);else if(T&&(T.style.display="block"),f&&(f.textContent=`${g.fee} RON`,f.className="font-bold text-amber-800 dark:text-amber-400"),k)if(g.extraKm<=0)k.textContent=e("distBaseNote",{dist:s});else{const O=g.blocks*20;k.textContent=e("distExtraNote",{dist:s,extraKm:g.extraKm,pct:O,blocks:g.blocks,surcharge:g.surcharge,fee:g.fee})}y>0?(z&&(z.style.display="flex"),C&&(C.textContent=`-${y} RON`)):z&&(z.style.display="none");const B=Math.max(0,i+g.fee-y);L&&(L.textContent=`${B} RON`)};p&&(p.onchange=g=>{c=g.target.value,s=d[c]??100,x&&(x.value=s),S&&(S.value=s),h()}),x&&(x.oninput=g=>{s=Math.max(0,Number(g.target.value)||0),S&&(S.value=Math.min(500,s)),h()}),S&&(S.oninput=g=>{s=Number(g.target.value),x&&(x.value=s),h()}),w&&(w.onchange=g=>{l=g.target.value,h()}),v&&(v.onchange=g=>{u=g.target.checked,h()}),h();const R=r.querySelector("#checkout-form");R&&(R.onsubmit=g=>{g.preventDefault();const y=new FormData(R),f=o.calculateShippingFee(s,l),k=u?Math.min(i,n):0,z=Math.max(0,i+f.fee-k),C=o.completeOrder({fullName:y.get("fullName"),phone:y.get("phone"),city:y.get("city"),address:y.get("address"),distanceKm:s,shippingFee:f.fee,shippingMethod:l,subtotal:i,total:z,earnedPoints:a,usedPoints:k});this.showCheckoutModal=!1,alert(`${e("orderSuccess")}

Invoice generated for order ${C.id}. Courier tracking activated!`),o.setActiveTab("loyalty")})}attachHeaderEvents(){this.root.querySelectorAll(".nav-tab-btn").forEach(u=>{u.onclick=r=>{const m=r.currentTarget.dataset.tab;o.setActiveTab(m)}});const t=this.root.querySelector("#nav-logo");t&&(t.onclick=()=>o.setActiveTab("catalog"));const e=this.root.querySelector("#lang-select");e&&(e.onchange=u=>o.setLang(u.target.value));const i=this.root.querySelector("#notif-btn");i&&(i.onclick=()=>{this.showNotifications=!this.showNotifications,this.render()});const a=this.root.querySelector("#cart-drawer-btn");a&&(a.onclick=()=>{this.showCartDrawer=!0,this.render()});const n=this.root.querySelector("#auth-modal-btn");n&&(n.onclick=()=>{this.showAuthModal=!0,this.authModalMode="signin",this.render()});const d=this.root.querySelector("#user-menu-btn");d&&(d.onclick=()=>{this.showUserMenu=!this.showUserMenu,this.render()});const c=this.root.querySelector("#user-orders-btn");c&&(c.onclick=()=>{this.showUserMenu=!1,o.setActiveTab("loyalty")});const s=this.root.querySelector("#user-signout-btn");s&&(s.onclick=()=>{this.showUserMenu=!1,o.logoutUser()});const l=this.root.querySelector("#footer-account-btn");l&&(l.onclick=()=>{o.user?o.setActiveTab("loyalty"):(this.showAuthModal=!0,this.authModalMode="signin",this.render())})}}const N=new F;document.addEventListener("DOMContentLoaded",()=>N.init());(document.readyState==="interactive"||document.readyState==="complete")&&N.init();
