# Pokémon React App

## Deskripsi

Aplikasi ini adalah aplikasi **Pokémon** yang dibangun menggunakan **React** dan **React Router**. Aplikasi ini memungkinkan pengguna untuk melihat daftar Pokémon, menampilkan detail Pokémon, serta memilih layout tampilan (satu kolom atau dua kolom) menggunakan **React Hooks** untuk mengelola state lokal. Aplikasi ini juga menyediakan fitur penyortiran berdasarkan beberapa kategori.

---

## Teknologi yang Digunakan

* **React**: Library JavaScript untuk membangun user interface.
* **React Router**: Untuk menangani routing antar halaman (navigasi).
* **CSS**: Untuk styling dan pengaturan tata letak aplikasi.
* **React Hooks**: Untuk menangani state lokal dalam komponen, seperti `useState` di **Home.js**.

---

## Struktur Proyek

```bash
pokemon-app/
├── public/
│   └── index.html        # Template HTML untuk aplikasi
├── src/
│   ├── components/
│   │   ├── Navbar.js     # Komponen Navbar
│   │   ├── PokemonCard.js  # Komponen kartu Pokémon
│   │   ├── SortMenu.js   # Komponen menu pengurutan dan layout
│   │   ├── Pokemon.js     # Komponen untuk menampilkan informasi Pokémon
│   │   ├── PokemonName.js # Komponen untuk menampilkan nama Pokémon
│   │   ├── PokemonStatus.js # Komponen untuk menampilkan status Pokémon
│   ├── pages/
│   │   ├── Home.js       # Halaman Home
│   │   ├── PokemonDetail.js    # Halaman Detail Pokémon
│   ├── App.js            # Konfigurasi routing utama
│   ├── index.js          # Entry point aplikasi React
│   └── index.css         # Styling untuk aplikasi
├── .gitignore            # File untuk mengecualikan file tertentu dari Git
├── package.json          # Konfigurasi proyek dan dependensi
└── README.md             # Dokumentasi aplikasi
```

---

## 1. **App.js**

### Deskripsi Fungsi

Fungsi ini mengatur routing aplikasi menggunakan **React Router** untuk navigasi antar halaman. Menentukan rute dari halaman utama (Home) ke halaman detail Pokémon, serta menampilkan **Navbar** di seluruh halaman.

### Input:

* Tidak ada input yang diterima oleh fungsi ini.

### Output:

* Menentukan rute aplikasi dan mengarahkan pengguna ke halaman **Home** atau halaman **PokemonDetail** berdasarkan rute.

### Contoh:

```javascript
// Menambahkan Routes untuk navigasi
<Route path="/" element={<Home />} />
<Route path="/pokemon/:id" element={<PokemonDetail />} />
```

---

## 2. **Home.js**

### Deskripsi Fungsi

Fungsi ini menampilkan daftar Pokémon yang dapat dipilih untuk melihat detailnya, serta mengatur layout menggunakan **React Hooks** (`useState`) untuk mengubah tampilan menjadi satu kolom atau dua kolom. Menggunakan **SortMenu** untuk memilih cara menyortir Pokémon.

### Input:

* **isSingleColumn**: State untuk menentukan layout satu kolom atau dua kolom (tipe data: **boolean**).
* **setIsSingleColumn**: Fungsi untuk mengubah layout tampilan (tipe data: **function**).

### Output:

* Menampilkan daftar Pokémon sesuai dengan layout yang dipilih (tampilan satu kolom atau dua kolom).

### Inspected Result:

* Daftar Pokémon akan ditampilkan dalam tampilan satu kolom atau dua kolom tergantung pada status **isSingleColumn**.

### Contoh:

```javascript
const pokemonList = [
  { id: 1001, name: 'Bulbasaur', type: 'Grass', image: '/OnePokemon/bulbasaur.png' },
  { id: 1002, name: 'Kabuto', type: 'Rock', image: '/OnePokemon/pokemon.png' },
  ...
];
```

---

## 3. **PokemonDetail.js**

### Deskripsi Fungsi

Fungsi ini menampilkan detail Pokémon berdasarkan ID yang diterima dari URL. Menggunakan **useParams** dari React Router untuk mendapatkan ID Pokémon dan mencari informasi terkait dari daftar Pokémon.

### Input:

* **id**: ID Pokémon yang diterima melalui URL (tipe data: **string**).

### Output:

* Menampilkan detail informasi Pokémon seperti nama, gambar, dan status.

### Inspected Result:

* Menampilkan informasi yang sesuai dengan Pokémon yang dipilih.

### Contoh:

```javascript
const { id } = useParams();
const pokemon = pokemonList.find(p => p.id === parseInt(id));
```

---

## 4. **Navbar.js**

### Deskripsi Fungsi

Fungsi ini menampilkan Navbar dengan logo aplikasi Pokémon yang dapat digunakan untuk bernavigasi antar halaman.

### Input:

* Tidak ada input yang diterima oleh fungsi ini.

### Output:

* Menampilkan **Navbar** dengan logo aplikasi.

### Inspected Result:

* Navbar muncul di bagian atas halaman dengan logo aplikasi.

### Contoh:

```javascript
<div className="navbar-logo">
  <img src="/OnePokemon/navbar-pokemon.png" alt="Logo" className="logo" />
</div>
```

---

## 5. **PokemonCard.js**

### Deskripsi Fungsi

Fungsi ini menampilkan kartu Pokémon dengan ID, nama, dan tipe. Setiap kartu Pokémon dapat diklik untuk membuka halaman detail Pokémon.

### Input:

* **pokemon**: Objek Pokémon yang berisi ID, nama, tipe, dan gambar (tipe data: **object**).

### Output:

* Menampilkan kartu Pokémon dengan informasi ID, nama, tipe, dan gambar.

### Inspected Result:

* Kartu Pokémon ditampilkan dengan informasi yang benar.

### Contoh:

```javascript
<div className="pokemon-card-header">
  <span className="pokemon-card-type">{pokemon.type}</span>
  <span className="pokemon-card-id">#{pokemon.id}</span>
</div>
```

---

## 6. **SortMenu.js**

### Deskripsi Fungsi

Fungsi ini menampilkan menu untuk menyortir daftar Pokémon dan mengubah layout tampilan (satu kolom atau dua kolom).

### Input:

* **setIsSingleColumn**: Fungsi untuk mengubah status tampilan satu kolom atau dua kolom (tipe data: **function**).

### Output:

* Menampilkan dropdown untuk memilih opsi penyortiran dan dua ikon untuk mengubah layout tampilan.

### Inspected Result:

* Menampilkan menu dropdown dan ikon untuk memilih layout.

### Contoh:

```javascript
<select value={sortOption} onChange={handleSortChange} className="sort-dropdown">
  <option value="">Sort by</option>
  <option value="name">Name</option>
  <option value="date">Date</option>
  <option value="popularity">Popularity</option>
</select>
```

---

## 7. **index.js**

### Deskripsi Fungsi

Fungsi ini merender aplikasi dan memulai aplikasi dengan **ReactDOM**. Aplikasi di-render dalam elemen dengan ID `root`.

### Input:

* Tidak ada input yang diterima oleh fungsi ini.

### Output:

* Menampilkan aplikasi ke dalam DOM.

### Inspected Result:

* Aplikasi dirender di dalam elemen dengan ID `root`.

### Contoh:

```javascript
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## Fitur Aplikasi

### 1. **Routing**

Aplikasi ini memiliki dua halaman utama:

* **HomePage**: Halaman utama yang menampilkan daftar Pokémon.
* **PokemonDetailPage**: Halaman detail Pokémon yang menampilkan informasi lengkap tentang Pokémon yang dipilih.

### 2. **Navbar**

Navbar disertakan di setiap halaman yang memungkinkan pengguna untuk bernavigasi antara **HomePage** dan **PokemonDetailPage**.

### 3. **Sorting and Layout**

Pengguna dapat mengatur layout tampilan Pokémon antara satu kolom atau dua kolom, serta memilih metode penyortiran daftar Pokémon berdasarkan nama, tanggal, atau popularitas.

---

## Cara Menjalankan Aplikasi

### Langkah-langkah:

1. **Clone repository** ke mesin lokal:

   ```bash
   git clone https://github.com/username/pokemon-app.git
   ```

2. **Masuk ke direktori aplikasi**:

   ```bash
   cd pokemon-app
   ```

3. **Install dependensi** menggunakan npm atau yarn:

   ```bash
   npm install
   ```

4. **Jalankan aplikasi**:

   ```bash
   npm start
   ```

Aplikasi akan berjalan di [http://localhost:3000](http://localhost:3000).

---