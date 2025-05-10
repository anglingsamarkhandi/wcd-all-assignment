
# **Perubahan dan Perbaikan pada Kode HTML dan CSS**

Pada versi terbaru dari kode HTML dan CSS, beberapa perbaikan dan perubahan dilakukan untuk meningkatkan struktur, konsistensi, dan desain halaman. Di bawah ini adalah daftar perubahan yang dilakukan baik pada **HTML** maupun **CSS**, beserta penjelasan masing-masing.

---

## **Perubahan pada HTML**

### **1. Perubahan pada Path Gambar**

#### **Sebelum:**
```html
<img src="./imgs/logo.svg" alt="workoutaja logo">
<img src="./imgs/whatsapp-icon.svg" alt="whatsapp icon">
<img src="./imgs/woman.svg" alt="illustration of a woman doing workout on a gym">
<img id="balls" src="./imgs/balls.svg" alt="decorative balls on the bottom left os the page">
```

#### **Sesudah:**
```html
<img src="./images/logo.svg" alt="workoutaja logo">
<img src="./images/whatsapp-icon.svg" alt="whatsapp icon">
<img src="./images/woman.svg" alt="illustration of a woman doing workout on a gym">
<img id="balls" src="./images/balls.svg" alt="decorative balls on the bottom left of the page">
```

#### **Penjelasan:**
Perubahan ini mengganti folder `imgs` menjadi `images` pada atribut `src` untuk path gambar. Hal ini mungkin dilakukan untuk konsistensi dalam penamaan folder atau karena perubahan struktur direktori.

---

### **2. Perubahan Atribut `href` pada Tag `<a>`**

#### **Sebelum:**
```html
<a href="#" id="logo" href="#">
```

#### **Sesudah:**
```html
<a href="#" id="logo">
```

#### **Penjelasan:**
Pada versi sebelumnya, terdapat dua atribut `href` pada tag `<a>` yang tidak perlu. Perubahan ini menghapus salah satu atribut `href` yang berlebihan, sehingga hanya ada satu atribut `href="#"`, yang sudah cukup untuk memberikan tautan kosong.

---

### **3. Perubahan pada Atribut `button`**

#### **Sebelum:**
```html
<button alt="go to whatsapp">
```

#### **Sesudah:**
```html
<button type="button" alt="go to whatsapp">
```

#### **Penjelasan:**
Pada versi sebelumnya, atribut `type` pada tag `<button>` tidak disertakan. Untuk memastikan tombol berfungsi dengan baik dan sesuai standar HTML, atribut `type="button"` ditambahkan. Atribut `type="button"` menjelaskan bahwa tombol ini adalah tombol biasa yang tidak mengirimkan form.

---

### **4. Perubahan Teks pada Paragraf**

#### **Sebelum:**
```html
<p>We create <strong>exclusive and unique</strong> workouts for you. <br>
  Invest in your body and get <strong>much more performance</strong><br>and quality of life.</p>
```

#### **Sesudah:**
```html
<p>We create <strong>exclusive and unique workouts</strong> for you. <br>
  Invest in your body and <strong>get much more performance</strong><br>and quality of life.</p>
```

#### **Penjelasan:**
Pada bagian ini, hanya ada sedikit perubahan teks untuk memperbaiki penempatan kata-kata agar lebih jelas dan mudah dibaca. Tidak ada perubahan signifikan di sini selain dari format penulisan.

---

### **5. Perbaikan pada Teks Alt pada Gambar**

#### **Sebelum:**
```html
<img id="balls" src="./imgs/balls.svg" alt="decorative balls on the bottom left os the page">
```

#### **Sesudah:**
```html
<img id="balls" src="./images/balls.svg" alt="decorative balls on the bottom left of the page">
```

#### **Penjelasan:**
Pada versi sebelumnya, ada kesalahan ketik pada teks `alt` yaitu kata "os" yang seharusnya "of". Perbaikan ini mengubah `os` menjadi `of` untuk menjelaskan posisi dekorasi bola di halaman secara lebih jelas.

---

## **Perubahan pada CSS**

### **1. Penambahan Properti `box-sizing`**

#### **Sebelum:**
```css
* {
  margin: 0;
  padding: 0;
}
```

#### **Sesudah:**
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

#### **Penjelasan:**
Penambahan properti `box-sizing: border-box;` memastikan bahwa padding dan border dihitung dalam ukuran total elemen, yang membuat perhitungan lebar dan tinggi lebih mudah dan akurat. Ini mencegah elemen menjadi lebih besar dari ukuran yang diinginkan ketika padding atau border diterapkan.

---

### **2. Perubahan pada Pengaturan Font pada Body**

#### **Sebelum:**
```css
body {
  background: linear-gradient(180deg, rgba(227, 255, 248, 0) 82.08%, rgba(227, 255, 248, 0.38) 100%);
  min-height: 100vh;
}
```

#### **Sesudah:**
```css
body {
  background: linear-gradient(180deg, rgba(227, 255, 248, 0) 82.08%, rgba(227, 255, 248, 0.38) 100%);
  font-family: 'Open Sans', sans-serif; /* Fallback font for the body */
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
}
```

#### **Penjelasan:**
Font pada tag `body` ditambahkan menggunakan `font-family: 'Open Sans', sans-serif;`. Ini memastikan bahwa seluruh teks di dalam body menggunakan font fallback 'Open Sans'. Selain itu, properti `width: 100%` dan `margin: 0 auto` ditambahkan untuk memastikan body memanfaatkan seluruh lebar layar.

---

### **3. Perubahan Ukuran dan Penataan Halaman (`.page`)**

#### **Sebelum:**
```css
.page {
  width: 1040px;
  margin: 0px auto;
  padding-top: 64px;
}
```

#### **Sesudah:**
```css
.page {
  width: 1280px;
  margin: 0px auto;
  padding-top: 64px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
```

#### **Penjelasan:**
Ukuran `.page` diperbesar dari `1040px` menjadi `1280px` untuk memberikan ruang lebih banyak pada layout. Selain itu, properti `position: relative`, `display: flex`, dan penataan menggunakan flexbox (`justify-content`, `align-items`, dan `flex-direction`) ditambahkan untuk membuat halaman lebih responsif dan fleksibel dalam penataan konten.

---

### **4. Perubahan Penataan dan Tampilan Navbar**

#### **Sebelum:**
```css
nav ul li a {
}
```

#### **Sesudah:**
```css
nav ul li a {
  text-decoration: none; /* Remove underline from links */
  color: #333; /* Default color (dark gray) for all menu items */
  font-weight: 400; /* Default font-weight (normal) */
  transition: color 0.3s ease; /* Smooth color transition on hover */
}
```

#### **Penjelasan:**
Penataan link di dalam navbar diperbaiki dengan menghapus garis bawah dari link menggunakan `text-decoration: none;`, memberikan warna default yang lebih gelap (`color: #333`), dan menambahkan efek transisi warna pada hover (`transition: color 0.3s ease`).

---

### **5. Hover Effect pada Navbar Links**

#### **Sebelum:**
```css
nav ul li a:hover {
  
}
```

#### **Sesudah:**
```css
nav ul li a:hover {
  color: #4cb3c1; /* Hover effect on links */
  font-size: 1.2rem;
}
```

#### **Penjelasan:**
Pada saat hover, link di navbar akan berubah warna menjadi `#4cb3c1` dan ukuran font bertambah menjadi `1.2rem` untuk memberikan efek interaktif yang lebih menarik.

---

### **6. Perubahan Penataan dan Ukuran pada Teks dan Button di Main**

#### **Sebelum:**
```css
.text button {
  font-family: 'Open Sans', sans-serif;
  display: flex;
  gap: 8px;
}
```

#### **Sesudah:**
```css
.text button {
  font-family: 'Open Sans', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #69b99d;
  padding: 1rem 1.25rem; /* Made button larger */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 2.75rem; /* Added margin to give space between text and button */
  transition: background-color 0.3s ease;
  width: 169px;
  font-size: 16px;
}

.text button:hover {
  background-color: #128C7E; /* Change color on hover */
}
```

#### **Penjelasan:**
Button sekarang lebih besar dan memiliki padding lebih banyak untuk meningkatkan kegunaan dan tampilannya. `background-color`, `border-radius`, dan `cursor` ditambahkan untuk memberikan gaya pada tombol. Efek hover juga ditambahkan untuk mengubah warna tombol saat pengguna mengarahkannya.

---

### **7. Perbaikan Penataan Footer**

#### **Sebelum:**
```css
footer {
  font-family: 'Open Sans', sans-serif; 
}
```

#### **Sesudah:**
```css
footer {
  font-family: 'Open Sans', sans-serif; 
  text-align: center;
  color: #333;
  font-size: 14px;
}
```

#### **Penjelasan:**
Footer sekarang diberi properti `text-align: center` untuk memusatkan teks, serta penambahan warna dan ukuran font untuk membuatnya lebih jelas dan terbaca.

---

### **8. Perubahan Posisi Gambar Dekoratif (`#balls`)**

#### **Sebelum:**
```css
#balls {
  position: fixed;
  bottom: 0px;
  right: 0px;
}
```

#### **Sesudah:**
```css
#balls {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 10;
}
```

#### **Penjelasan:**
Perubahan dari `position: fixed` menjadi `position: absolute` memungkinkan gambar dekoratif untuk lebih fleksibel dalam penempatannya di halaman. `z-index: 10` ditambahkan untuk memastikan gambar tetap berada di atas elemen lain.

---

## **Kesimpulan**

Perubahan-perubahan ini dilakukan untuk:
1. Meningkatkan konsistensi penamaan folder dan path gambar.
2. Memperbaiki duplikasi atribut pada HTML.
3. Menambahkan atribut yang diperlukan pada elemen seperti button.
4. Meningkatkan gaya dan responsivitas halaman dengan CSS, termasuk penataan navbar, button, dan footer.