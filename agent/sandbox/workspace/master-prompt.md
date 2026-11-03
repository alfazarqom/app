MASTER PROMPT — ASRI STORE
Professional E-Commerce Storefront | React + Vite + TypeScript + Supabase + Duitku POP
Prompt ini dirancang sebagai instruksi utama untuk AI Coding Agent seperti Cursor, Claude Code, Windsurf, Bolt, atau Lovable.

Tujuannya adalah membangun Asri Store, sebuah aplikasi toko online profesional dengan desain storefront UI, sistem guest checkout, backend Supabase, dan integrasi pembayaran Duitku POP yang mengikuti dokumentasi serta persyaratan merchant Duitku.

1. PROJECT OVERVIEW
Nama aplikasi: Asri Store

Jenis aplikasi: E-Commerce Storefront

Konsep: Modern, minimalis, profesional, responsif, dan user-friendly.

Technology Stack
Layer

Teknologi

Frontend

React

Build Tool

Vite

Language

TypeScript

Styling

Tailwind CSS

UI Components

shadcn/ui

Icons

Lucide React

Routing

React Router

State Management

Zustand

Data Fetching

TanStack Query

Form Validation

React Hook Form + Zod

Backend

Supabase

Database

PostgreSQL

Server Functions

Supabase Edge Functions

Storage

Supabase Storage

Payment Gateway

Duitku POP

Currency

Indonesian Rupiah (IDR)

Language

Bahasa Indonesia

Prinsip Utama
Asri Store merupakan aplikasi storefront yang hanya berfokus pada pengalaman pelanggan.

Fitur yang tidak boleh dibuat:

Admin dashboard.

Admin login.

Customer login.

Customer registration.

User account dashboard.

Sistem autentikasi pelanggan.

Fitur yang wajib dibuat:

Homepage.

Product catalog.

Product detail.

Shopping cart.

Guest checkout.

Duitku POP payment.

Order tracking.

Payment status.

Store information.

Merchant policy pages.

Pelanggan harus bisa berbelanja dari awal hingga selesai tanpa membuat akun.

2. DESIGN SYSTEM & STOREFRONT UI
Buat tampilan toko online dengan standar desain e-commerce modern.

Design Direction
Premium minimalist.

Clean storefront.

Modern typography.

Elegant whitespace.

Professional product presentation.

Mobile-first responsive.

Smooth micro-interactions.

Consistent component design.

Color Palette
Elemen

Warna

Primary

#245C45

Secondary

#DDE8DC

Background

#FFFFFF

Surface

#F7F8F6

Text

#202820

Muted

#7C857D

Accent

#D8A75B

UI Components
Buat reusable components:

Navbar.

Announcement bar.

Search bar.

Product card.

Product gallery.

Category card.

Cart drawer.

Checkout form.

Payment modal integration.

Breadcrumb.

Footer.

Notification toast.

Loading skeleton.

Empty state.

Error state.

Confirmation dialog.

Pastikan seluruh halaman memiliki konsistensi visual.

3. HOMEPAGE
Buat homepage yang profesional dan menarik.

Struktur Homepage
Announcement bar.

Header dan logo Asri Store.

Navigation menu.

Search product.

Shopping cart.

Hero banner.

Promotional banner.

Product categories.

Featured products.

Best-selling products.

New arrivals.

Special offers.

Why Choose Asri Store.

Store advantages.

FAQ preview.

Newsletter jika sistem pengiriman email tersedia.

Complete footer.

Navbar
Navbar harus memiliki:

Logo Asri Store.

Home.

Shop.

Categories.

About Us.

Contact.

Search.

Cart.

Mobile navigation menggunakan hamburger menu.

Footer
Footer harus menampilkan:

Nama usaha.

Deskripsi usaha.

Alamat usaha.

Email resmi.

Nomor WhatsApp.

Jam operasional.

Link halaman kebijakan.

Link sosial media resmi jika tersedia.

Jangan menggunakan informasi bisnis fiktif.

4. PRODUCT CATALOG
Buat katalog produk yang terhubung dengan Supabase.

Fitur
Product listing.

Category filtering.

Product search.

Price filtering.

Sorting.

Newest products.

Popular products.

Discount products.

Stock availability.

Pagination.

Product Information
Setiap produk memiliki:

Product ID.

Product name.

Slug.

SKU.

Description.

Product images.

Category.

Regular price.

Sale price.

Stock quantity.

Product variants.

Product weight.

Product specifications.

Product status.

Product Card
Tampilkan:

Product image.

Product name.

Regular price.

Sale price.

Discount badge.

Stock availability.

Add to Cart.

View Details.

Semua produk harus berasal dari database Supabase.

Jangan menggunakan hardcoded product data untuk production.

5. PRODUCT DETAIL PAGE
Buat halaman detail produk dengan informasi lengkap.

Fitur:

Image gallery.

Product title.

Product description.

SKU.

Regular price.

Discount price.

Variant selection.

Quantity selector.

Stock information.

Product specifications.

Product weight.

Shipping information.

Add to Cart.

Buy Now.

Related products.

Validasi stok dan varian produk sebelum checkout.

6. SHOPPING CART
Implementasikan shopping cart tanpa autentikasi.

Fitur
Add product.

Remove product.

Update quantity.

Select products.

Subtotal.

Discount.

Shipping estimate.

Final total.

Persist cart menggunakan localStorage.

Gunakan Zustand untuk pengelolaan cart.

PENTING:

Harga yang tersimpan di browser tidak boleh dipercaya.

Backend wajib mengambil harga, diskon, varian, dan stok terbaru dari Supabase sebelum membuat pesanan.

7. GUEST CHECKOUT
Guest checkout merupakan fitur utama Asri Store.

Pelanggan tidak perlu:

Login.

Registrasi.

Membuat password.

Membuat akun.

Customer Information
Form checkout wajib memiliki:

Nama lengkap.

Email aktif.

Nomor WhatsApp.

Nomor telepon jika berbeda.

Shipping Information
Provinsi.

Kota/Kabupaten.

Kecamatan.

Kelurahan/Desa.

Kode pos.

Alamat lengkap.

Catatan pengiriman.

Order Summary
Tampilkan:

Nama produk.

Gambar produk.

Varian.

Harga produk.

Quantity.

Subtotal.

Diskon.

Ongkos kirim.

Total pembayaran.

Checkout Validation
Validasi:

Nama pelanggan wajib diisi.

Email harus valid.

Nomor telepon harus valid.

Alamat lengkap wajib diisi.

Produk harus tersedia.

Stok harus mencukupi.

Quantity harus valid.

Total pembayaran harus dihitung ulang oleh backend.

Tambahkan checkbox persetujuan:

Terms and Conditions.

Privacy Policy.

Shipping Policy.

Return and Refund Policy.

Simpan persetujuan pelanggan beserta timestamp pada transaksi.

Order Creation
Ketika pelanggan menekan tombol Buat Pesanan:

Frontend mengirim data checkout.

Backend memvalidasi seluruh data.

Backend mengambil harga produk dari database.

Backend memvalidasi stok.

Backend menghitung subtotal.

Backend menghitung diskon.

Backend menghitung ongkir.

Backend menghitung total pembayaran.

Backend membuat nomor pesanan unik.

Backend membuat secure guest order token.

Backend menyimpan pesanan dengan status pending payment.

Gunakan token acak berkualitas kriptografis, bukan ID pesanan sebagai rahasia akses.

8. DUITKU POP PAYMENT GATEWAY
Ini merupakan modul paling penting dalam aplikasi.

Integrasikan Duitku POP sesuai dokumentasi resmi:

https://docs.duitku.com/pop/id/ 

Payment Architecture
Frontend:

Checkout form.

Create order request.

Receive payment reference.

Load official Duitku POP JavaScript.

Open Duitku POP.

Display payment feedback.

Backend:

Validate checkout.

Calculate final amount.

Create order.

Generate merchantOrderId.

Generate Duitku signature.

Call Create Invoice API.

Save payment reference.

Handle callback.

Verify callback signature.

Update payment status.

Update order status.

Environment Variables

env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=

SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=

DUITKU_MERCHANT_CODE=
DUITKU_API_KEY=
DUITKU_ENVIRONMENT=sandbox
Catatan: SUPABASE_SERVICE_ROLE_KEY, DUITKU_API_KEY, dan seluruh kredensial rahasia hanya boleh berada di environment backend, bukan environment frontend. Jangan gunakan prefix VITE_ untuk rahasia.

Duitku API Endpoint
Sandbox:


text
https://api-sandbox.duitku.com/api/merchant/createInvoice
Production:


text
https://api-prod.duitku.com/api/merchant/createInvoice
Payment Request
Implementasikan parameter sesuai dokumentasi Duitku yang berlaku:

merchantCode.

paymentAmount.

merchantOrderId.

productDetails.

email.

phoneNumber.

customerVaName.

itemDetails.

customerDetail.

callbackUrl.

returnUrl.

expiryPeriod.

signature.

paymentMethod jika diperlukan.

Duitku POP JavaScript
Gunakan library resmi:

Sandbox:

<script src="https://app-sandbox.duitku.com/lib/js/duitku.js"></script>
Production:

<script src="https://app-prod.duitku.com/lib/js/duitku.js"></script>
Contoh pemanggilan POP:


typescript
window.checkout.process(reference, {
  defaultLanguage: "id",

  successEvent: function (result) {
    // Informasi tampilan saja.
    // Periksa status aktual melalui backend.
  },

  pendingEvent: function (result) {
    // Tampilkan status menunggu pembayaran.
  },

  errorEvent: function (error) {
    // Tampilkan informasi kesalahan.
  },

  closeEvent: function (result) {
    // Popup ditutup.
    // Jangan langsung menganggap transaksi gagal.
  }
});
reference harus diperoleh dari respons Create Invoice backend.

Payment Workflow
Customer mengirim checkout.

Backend memvalidasi data.

Backend menghitung total transaksi.

Backend memvalidasi stok.

Backend membuat order pending.

Backend menghasilkan merchantOrderId unik.

Backend membuat invoice Duitku.

Backend menyimpan reference Duitku.

Backend mengirim reference ke frontend.

Frontend membuka Duitku POP.

Customer memilih metode pembayaran.

Customer menyelesaikan pembayaran.

Duitku mengirim HTTP callback.

Supabase Edge Function menerima callback.

Backend memverifikasi signature.

Backend memverifikasi merchantOrderId dan nominal.

Backend memproses status pembayaran.

Backend memperbarui order.

Backend mencatat payment event.

Customer dapat melihat status pesanan.

Security Requirements
Wajib menerapkan:

Signature verification.

HMAC SHA256 sesuai dokumentasi resmi.

Secure server-side API requests.

Idempotency.

Duplicate callback protection.

Amount verification.

Merchant code verification.

Merchant order ID verification.

Payment reference validation.

Payment event logging.

Transaction-safe database updates.

Jangan pernah menganggap redirect browser sebagai bukti pembayaran berhasil.

Jangan pernah memperbarui status pembayaran hanya berdasarkan JavaScript callback.

Hanya callback server-to-server yang berhasil diverifikasi atau verifikasi transaksi server-side yang otoritatif yang boleh mengubah status pembayaran.

9. ORDER TRACKING
Buat halaman:


text
/track-order
Pelanggan dapat mencari pesanan menggunakan:

Nomor pesanan.

Email yang digunakan saat checkout.

Backend harus memverifikasi kedua data tersebut.

Tambahkan rate limiting untuk mencegah pencarian pesanan secara massal.

Alternatif akses adalah menggunakan secure guest order token.

Informasi yang ditampilkan
Order number.

Order date.

Customer name.

Product details.

Quantity.

Payment status.

Order status.

Total amount.

Shipping information.

Tracking number jika tersedia.

Jangan menampilkan alamat lengkap atau nomor telepon pelanggan pada halaman publik tanpa otorisasi yang benar.

10. PAYMENT STATUS PAGES
Buat halaman status pembayaran:


text
/payment/success
/payment/pending
/payment/failed
/payment/expired
/payment/return
Success
Tampilkan:

Pembayaran berhasil.

Nomor pesanan.

Total pembayaran.

Detail pesanan.

Informasi proses selanjutnya.

Pending
Tampilkan:

Pembayaran sedang menunggu konfirmasi.

Instruksi pembayaran jika tersedia.

Tombol cek status pembayaran.

Failed
Tampilkan:

Pembayaran tidak berhasil.

Informasi tindakan berikutnya.

Opsi mencoba pembayaran kembali jika masih diperbolehkan.

Expired
Tampilkan:

Informasi transaksi kedaluwarsa.

Opsi membuat pembayaran baru apabila memenuhi ketentuan.

Semua status harus diambil dari backend.

Jangan percaya parameter URL sebagai penentu pembayaran berhasil.

11. HALAMAN WAJIB UNTUK KELENGKAPAN MERCHANT DUITKU
Buat halaman yang lengkap dan dapat diakses tanpa login.

Halaman ini sangat penting untuk profesionalitas website dan proses peninjauan merchant.

A. About Us
Route:


text
/about
Isi:

Nama resmi Asri Store.

Profil usaha.

Deskripsi bisnis.

Jenis produk.

Informasi operasional.

Alamat usaha.

B. Contact Us
Route:


text
/contact
Isi:

Nama usaha.

Alamat lengkap.

Nomor WhatsApp.

Nomor telepon.

Email resmi.

Jam operasional.

Contact form.

C. Privacy Policy
Route:


text
/privacy-policy
Isi:

Informasi data yang dikumpulkan.

Penggunaan data pelanggan.

Pengolahan pesanan.

Integrasi pembayaran Duitku.

Perlindungan data.

Retensi data.

Hak pelanggan.

Kontak privasi.

D. Terms and Conditions
Route:


text
/terms
Isi:

Ketentuan penggunaan website.

Aturan pembelian.

Harga produk.

Ketersediaan produk.

Proses transaksi.

Pembayaran.

Pembatalan pesanan.

Tanggung jawab pelanggan.

Ketentuan layanan.

E. Shipping Policy
Route:


text
/shipping-policy
Isi:

Area pengiriman.

Metode pengiriman.

Biaya pengiriman.

Waktu pemrosesan.

Estimasi pengiriman.

Tracking pesanan.

Kendala pengiriman.

F. Return and Refund Policy
Route:


text
/refund-policy
Isi:

Ketentuan pengembalian.

Produk rusak.

Produk tidak sesuai.

Syarat retur.

Batas waktu pengajuan.

Proses pengajuan.

Proses refund.

Estimasi pengembalian dana.

G. FAQ
Route:


text
/faq
Pertanyaan:

Bagaimana cara berbelanja?

Apakah harus membuat akun?

Bagaimana cara melakukan pembayaran?

Metode pembayaran apa saja yang tersedia?

Bagaimana cara memeriksa pesanan?

Berapa lama pengiriman?

Bagaimana mengajukan pengembalian?

Bagaimana proses refund?

Merchant Information Requirements
Jangan mengarang:

Legalitas usaha.

NIB.

NPWP.

Nama badan hukum.

Alamat usaha.

Nomor telepon.

Email resmi.

Informasi rekening.

Sertifikasi usaha.

Gunakan konfigurasi merchant yang dapat diisi pemilik toko.

Jika informasi belum lengkap, tampilkan indikator konfigurasi belum siap di lingkungan development.

Jangan mempublikasikan informasi placeholder atau identitas palsu pada production.

12. DATABASE SUPABASE
Buat database PostgreSQL dengan tabel:

store_settings

categories

products

product_images

product_variants

inventory

orders

order_items

payments

payment_events

shipping_methods

shipping_zones

coupons

coupon_usages

contact_messages

reviews

Database Requirements
UUID primary keys.

Foreign key relationships.

Appropriate indexes.

Unique constraints.

Check constraints.

NUMERIC monetary values.

UTC timestamps.

Updated_at triggers.

Referential integrity.

Transaction-safe order processing.

Gunakan tipe NUMERIC untuk nominal uang, bukan floating-point.

Simpan snapshot nama produk, SKU, harga, dan varian pada order_items agar riwayat pesanan tidak berubah ketika katalog diperbarui.

Jangan menggunakan tabel autentikasi pelanggan.

13. SUPABASE EDGE FUNCTIONS
Buat fungsi backend:


text
supabase/functions/
    create-order/
    create-duitku-payment/
    duitku-callback/
    check-payment-status/
    track-order/
    submit-contact/
create-order
Tugas:

Validasi checkout.

Validasi produk.

Validasi stok.

Hitung harga.

Hitung ongkir.

Hitung diskon.

Membuat pesanan.

Membuat guest token.

create-duitku-payment
Tugas:

Validasi order.

Generate merchantOrderId.

Generate signature.

Memanggil Duitku API.

Menyimpan reference.

Mengembalikan informasi pembayaran.

duitku-callback
Tugas:

Menerima HTTP POST dari Duitku.

Verifikasi signature.

Verifikasi nominal.

Verifikasi merchantOrderId.

Mencegah callback duplikat.

Update payment.

Update order.

Mencatat event.

check-payment-status
Tugas:

Mengambil status pembayaran dari database.

Memverifikasi akses guest.

Mengembalikan status minimal yang diperlukan.

track-order
Tugas:

Memvalidasi nomor pesanan.

Memvalidasi email.

Menerapkan rate limiting.

Mengembalikan data pesanan yang aman.

14. ROW LEVEL SECURITY
Aktifkan RLS pada semua tabel.

Public Read
Pengunjung boleh membaca:

Published products.

Active categories.

Public product images.

Public store information.

Active shipping methods.

Restricted Operations
Pengunjung tidak boleh melakukan direct write terhadap:

Orders.

Payments.

Payment events.

Inventory.

Product prices.

Store settings.

Semua operasi sensitif melalui Edge Functions.

Gunakan service role hanya di server-side Edge Functions.

Jangan menggunakan service role key pada frontend.

Jangan membuka akses SELECT seluruh pesanan kepada publik.

Jangan mengandalkan ID pesanan sebagai satu-satunya pengaman data pelanggan.

15. SHIPPING SYSTEM
Buat sistem pengiriman fleksibel.

Dukung:

Manual shipping.

Flat shipping rate.

Regional shipping.

Free shipping threshold.

Estimated delivery.

Shipping notes.

Biaya pengiriman harus divalidasi ulang oleh backend.

Struktur kode harus memungkinkan integrasi API ekspedisi di masa mendatang.

Jangan menampilkan tarif ekspedisi real-time jika belum terhubung ke penyedia layanan resmi.

16. SEO AND WEBSITE TRUST
Implementasikan:

SEO title.

Meta description.

Open Graph.

Canonical URL.

Sitemap.xml.

Robots.txt.

Product schema.

Organization schema.

Breadcrumb.

Responsive metadata.

Semantic HTML.

Tambahkan favicon dan logo resmi.

Pastikan website:

Menggunakan HTTPS.

Memiliki custom domain.

Tidak memiliki broken links.

Tidak memiliki tombol yang tidak berfungsi.

Tidak menampilkan data palsu.

Tidak memiliki halaman kosong.

Tidak menggunakan placeholder pada production.

17. TESTING
Buat automated tests untuk:

Product catalog.

Search and filtering.

Cart calculations.

Checkout validation.

Price validation.

Stock validation.

Order creation.

Duitku Create Invoice.

POP integration.

Callback signature verification.

Duplicate callback.

Payment status.

Guest order tracking.

RLS policies.

Unauthorized access.

Gunakan Duitku Sandbox untuk seluruh pengujian pembayaran.

Jangan menggunakan transaksi produksi dalam automated tests.

18. DEPLOYMENT
Frontend:

- Vercel atau Netlify.

Backend:

- Supabase.

Database:

- Supabase PostgreSQL.

Storage:

- Supabase Storage.

Functions:

- Supabase Edge Functions.

Domain:

- Custom domain resmi Asri Store.

Pastikan konfigurasi:

Production environment variables.

HTTPS.

CORS.

Duitku callback URL.

Duitku return URL.

Supabase project URL.

Production Duitku endpoint.

Production merchant credentials.

Callback harus dapat diakses publik melalui HTTPS oleh server Duitku.

19. DUITKU MERCHANT WEBSITE READINESS CHECKLIST
Sebelum aplikasi dinyatakan siap diajukan, pastikan seluruh poin berikut telah diverifikasi.

Website

Website sudah online.

Website menggunakan domain resmi.

Homepage lengkap.

Website responsive.

Navigasi berjalan.

Semua link berfungsi.

Tidak ada halaman kosong.
Business Information

Nama usaha jelas.

Profil usaha tersedia.

Deskripsi usaha tersedia.

Alamat usaha tersedia.

Nomor WhatsApp tersedia.

Email resmi tersedia.

Jam operasional tersedia.

Informasi legalitas sesuai jenis merchant.
Product Information

Produk benar-benar tersedia.

Foto produk sesuai.

Deskripsi produk jelas.

Harga produk terlihat.

Harga menggunakan IDR.

Informasi stok sesuai.
Policies

About Us.

Contact Us.

Privacy Policy.

Terms and Conditions.

Shipping Policy.

Return and Refund Policy.

FAQ.
Payment

Duitku POP terintegrasi.

Create Invoice berhasil.

Payment popup berfungsi.

Callback URL dapat diakses.

Signature verification berfungsi.

Payment status diperbarui server-side.

Duplicate callback ditangani.

Return URL berfungsi.

Sandbox testing berhasil.
Security

API key tidak terekspos.

Service role tidak terekspos.

RLS aktif.

Guest checkout tervalidasi.

Guest order tracking aman.

Tidak ada akses publik ke seluruh data pesanan.
PENTING:

Checklist ini merupakan persiapan teknis dan kelengkapan website, bukan daftar persyaratan resmi yang menjamin persetujuan Duitku.

Verifikasi persyaratan terbaru melalui Duitku.

20. DEVELOPMENT EXECUTION PLAN
Kerjakan secara bertahap.

PHASE 1 — Architecture
Analisis kebutuhan.

Buat system architecture.

Buat database ERD.

Buat route map.

Buat component hierarchy.

Buat design system.

PHASE 2 — Frontend Foundation
Setup Vite.

Setup React.

Setup TypeScript.

Setup Tailwind.

Setup shadcn/ui.

Setup React Router.

Setup Zustand.

Setup TanStack Query.

PHASE 3 — Supabase
Database schema.

SQL migrations.

RLS policies.

Storage buckets.

Seed data.

Edge Functions foundation.

PHASE 4 — Storefront
Homepage.

Navbar.

Footer.

Product catalog.

Category pages.

Product detail.

Search.

Filtering.

PHASE 5 — Cart and Checkout
Shopping cart.

Cart persistence.

Checkout form.

Guest information.

Shipping.

Order summary.

Order creation.

PHASE 6 — Duitku POP
Duitku configuration.

Create Invoice.

POP JavaScript.

Callback.

Signature verification.

Payment status.

Idempotency.

PHASE 7 — Customer Experience
Order tracking.

Payment success.

Payment pending.

Payment failed.

Payment expired.

Order information.

PHASE 8 — Merchant Pages
About Us.

Contact Us.

Privacy Policy.

Terms.

Shipping Policy.

Refund Policy.

FAQ.

PHASE 9 — QA
Functional testing.

Security testing.

Payment sandbox testing.

Responsive testing.

SEO.

Performance optimization.

PHASE 10 — Production
Deployment.

Custom domain.

HTTPS.

Environment configuration.

Production payment configuration.

Website verification checklist.

21. FINAL INSTRUCTION TO AI CODING AGENT
You must build Asri Store as a complete, working e-commerce storefront.

The application must follow this customer journey:


text
VISIT ASRI STORE
       |
       v
BROWSE PRODUCTS
       |
       v
VIEW PRODUCT DETAILS
       |
       v
ADD TO CART
       |
       v
GUEST CHECKOUT
       |
       v
CREATE ORDER
       |
       v
DUITKU POP PAYMENT
       |
       v
PAYMENT CALLBACK
       |
       v
ORDER STATUS
       |
       v
ORDER TRACKING
STRICT RULES:

No customer login.

No customer registration.

No admin dashboard.

No fake payment processing.

No hardcoded production products.

No exposed secret credentials.

No insecure public order queries.

No frontend-only payment verification.

No fabricated business information.

No unfinished critical features.

Prioritize:

Excellent storefront UI.

Complete guest checkout.

Secure Supabase backend.

Reliable Duitku POP integration.

Merchant website completeness.

Payment security.

Database integrity.

Production readiness.

Start by producing the architecture, database ERD, application routes, and implementation plan.

Then implement the project incrementally, testing each critical feature before proceeding.

The final deliverable must be a professional, fully functional Indonesian e-commerce application named ASRI STORE.

END OF MASTER PROMPT.

4. Referensi resmi dan dokumentasi
Gunakan dokumentasi resmi sebagai sumber utama selama proses implementasi.

Dokumentasi

URL

Duitku POP

https://docs.duitku.com/pop/id/ 

Duitku API

https://docs.duitku.com/ 

Duitku FAQ

https://www.duitku.com/frequently-asked-questions/ 

Supabase

https://supabase.com/docs 

Supabase Edge Functions

https://supabase.com/docs/guides/functions 

Supabase RLS

https://supabase.com/docs/guides/database/postgres/row-level-security 

React

https://react.dev/ 

Vite

https://vite.dev/ 

TypeScript

https://www.typescriptlang.org/docs/ 

5. Catatan penting sebelum production
Ada empat hal yang perlu diperhatikan:

Persetujuan Duitku: Kelengkapan halaman website membantu proses peninjauan, tetapi keputusan akhir tetap berada pada tim Duitku. Pastikan informasi usaha, produk, dan dokumen sesuai kondisi sebenarnya.

Guest checkout: Tidak membutuhkan autentikasi pelanggan, tetapi harus memiliki mekanisme secure order token untuk mengamankan akses informasi pesanan.

Payment gateway: Gunakan callback server-to-server yang diverifikasi untuk mengonfirmasi pembayaran. Jangan percaya status pembayaran dari browser.

Kebijakan toko: Kebijakan retur, refund, pengiriman, dan privasi harus sesuai praktik operasional Asri Store, bukan sekadar halaman formalitas.

Hasil akhir yang ditargetkan: Asri Store menjadi toko online profesional dengan storefront UI modern, guest checkout tanpa login, backend Supabase, integrasi Duitku POP, dan kelengkapan halaman informasi merchant yang dipersiapkan untuk proses verifikasi Duitku.
