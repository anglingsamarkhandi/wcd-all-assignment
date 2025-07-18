# Situs Web Portofolio Pribadi

Ini adalah **situs web portofolio pribadi** saya, dibangun menggunakan **React.js** dan **Vite.js**. Situs web ini menampilkan keterampilan, proyek, dan pengalaman saya sebagai seorang mahasiswa di bidang Ilmu Komputer yang sedang mengembangkan keterampilan di berbagai bidang IT. Situs web ini dirancang untuk memperlihatkan pekerjaan atau proyek saya, informasi pribadi, dan cara menghubungi saya.

Versi live dari portofolio saya dapat langsung diakses di sini:

**Demo Langsung**: [https://website-portfolio-mu-flax.vercel.app/](https://website-portfolio-mu-flax.vercel.app/)

---

## Tentang

Situs web ini dibuat sebagai **portofolio pribadi** untuk memamerkan keterampilan dan pengalaman saya sebagai **pengembang front-end**. Situs web ini mencakup bagian tentang latar belakang saya, proyek yang telah saya kerjakan, keterampilan saya, dan informasi kontak. Situs web ini sepenuhnya responsif dan terlihat bagus di perangkat desktop dan seluler.

Saya membangun situs web ini menggunakan teknologi JavaScript modern seperti **React.js** untuk front-end, **Vite.js** untuk alat build, dan **CSS3** untuk styling. Situs web ini dirancang untuk menjadi sederhana, bersih, dan mudah dinavigasi.

---

## TBahasa Pemrograman yang Digunakan

- **React.js**: Sebuah pustaka JavaScript untuk membangun antarmuka pengguna, terutama aplikasi satu halaman.
- **Vite.js**: Alat build modern yang menyediakan pengembangan yang cepat dan build produksi yang dioptimalkan.
- **HTML5**: Digunakan untuk struktur situs web.
- **CSS3**: Digunakan untuk styling komponen-komponen situs web.
- **JavaScript (ES6+)**: JavaScript digunakan untuk membuat konten interaktif dan dinamis di situs.

---

## Struktur File

Berikut adalah gambaran struktur file dari proyek ini:

```
wcd-uas-assignment/react-portfolio
├── node_modules/                  # Dependensi yang diinstal dengan npm
├── public/
│   ├── assets/                   # Menyimpan gambar dan aset lainnya untuk situs
│   └── vite.svg                  # Logo atau gambar statis yang digunakan dalam proyek
├── src/
│   ├── components/               # Komponen React yang dapat digunakan kembali (App.jsx, data.js)
│   ├── App.jsx                   # Komponen utama aplikasi yang berisi layout dan logika
│   ├── data.js                   # Menyimpan data untuk proyek, keterampilan, dan detail pribadi
│   ├── index.css                 # CSS global untuk styling situs
│   └── main.jsx                  # Titik masuk untuk aplikasi React
├── .gitignore                    # Menentukan file dan direktori yang harus diabaikan oleh Git
├── eslint.config.js              # Konfigurasi ESLint untuk menjaga kualitas kode
├── index.html                    # Template HTML utama untuk situs web
├── package-lock.json             # Menjamin pemasangan dependensi yang konsisten di berbagai lingkungan
├── package.json                  # Berisi metadata tentang proyek dan dependensinya
├── README.md                     # File ini, yang berisi informasi tentang proyek
└── vite.config.js                # Konfigurasi untuk alat build Vite
```

---

## Instruksi Instalasi

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut:

1. **Clone repositori**:

   Pertama, clone repositori ini ke mesin lokal Anda menggunakan perintah berikut:

   ```bash
   git clone https://github.com/your-username/react-portfolio.git
   ```

2. **Masuk ke direktori proyek**:

   Pindah ke folder proyek:

   ```bash
   cd react-portfolio
   ```

3. **Instal dependensi**:

   Pastikan Anda sudah menginstal **Node.js**. Anda dapat memverifikasi dengan menjalankan `node -v` di terminal Anda. Setelah itu, instal dependensi proyek menggunakan **npm**:

   ```bash
   npm install
   ```

4. **Jalankan server pengembangan**:

   Setelah dependensi diinstal, jalankan server pengembangan:

   ```bash
   npm run dev
   ```

5. Buka browser Anda dan kunjungi [http://localhost:3000](http://localhost:3000) untuk melihat situs web berjalan secara lokal.

---

## Penggunaan

- Situs web ini memiliki beberapa bagian, termasuk:

  - **Home**: Menampilkan pengenalan dan gambaran umum tentang pengembang.
  - **Proyek**: Menampilkan beberapa proyek utama yang telah dikerjakan.
  - **Keterampilan**: Daftar keterampilan teknis dan teknologi yang digunakan.
  - **Kontak**: Informasi untuk menghubungi melalui email atau media sosial.

- Konten situs web dapat dengan mudah diperbarui dengan mengedit file `data.js`, yang berisi informasi tentang proyek, data pribadi, dan keterampilan.

- **Desain Responsif**: Situs web ini ramah seluler dan menyesuaikan dengan berbagai ukuran layar.

---
