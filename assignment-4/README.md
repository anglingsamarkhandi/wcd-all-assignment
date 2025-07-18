   # React Application with Chakra UI and React Router

  ## Deskripsi

  Aplikasi ini adalah sebuah aplikasi **React** yang menggunakan **Chakra UI** sebagai library UI dan **React Router** untuk routing halaman. Aplikasi ini terdiri dari dua halaman utama: **HomePage** dan **ContactPage**. Di setiap halaman, terdapat **Navbar** di bagian atas dan **Footer** di bagian bawah yang dapat digunakan untuk navigasi antar halaman.

  ---

  ## Teknologi yang Digunakan

  * **React**: Library JavaScript untuk membangun user interface.
  * **React Router**: Untuk menangani routing antar halaman.
  * **Chakra UI**: Library UI untuk React yang menyediakan komponen yang dapat digunakan untuk membangun antarmuka pengguna yang responsif dan dapat disesuaikan.
  * **CSS**: Untuk styling dan pengaturan tata letak aplikasi.

  ---

  ## Struktur Proyek

  ### 1. **src/App.js**

  File ini adalah tempat utama untuk mengonfigurasi routing dan pengaturan layout aplikasi. Menggunakan **React Router** untuk menentukan rute antara **HomePage** dan **ContactPage**, serta menambahkan **Navbar** dan **Footer**.

  ```javascript
  import React from "react";
  import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
  import HomePage from "./pages/Home";
  import ContactPage from "./pages/Contact";
  import Navbar from "./components/NavBar";
  import CallToActionFooter from "./components/Footer";

  const App = () => {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <CallToActionFooter />
        </div>
      </Router>
    );
  };

  export default App;
  ```

  ### 2. **src/index.js**

  File ini adalah tempat untuk merender aplikasi React ke dalam elemen DOM di file **public/index.html**. Di sini juga mengonfigurasi **ChakraProvider** untuk memastikan Chakra UI dapat digunakan di seluruh aplikasi.

  ```javascript
  import React from "react";
  import ReactDOM from "react-dom/client";
  import "./index.css";
  import App from "./App";
  import reportWebVitals from "./reportWebVitals";
  import { ChakraProvider } from "@chakra-ui/react";
  import { system } from "@chakra-ui/react/preset";

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <ChakraProvider value={system}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  );

  reportWebVitals();
  ```

  ### 3. **package.json**

  File ini mengonfigurasi dependensi dan skrip untuk aplikasi React. Ini juga mencakup dependensi utama seperti **Chakra UI**, **React Router**, dan lainnya.

  ```json
  {
    "name": "my-app",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
      "@chakra-ui/icons": "^2.2.4",
      "@chakra-ui/react": "^3.15.1",
      "@emotion/react": "^11.14.0",
      "@emotion/styled": "^11.14.0",
      "@testing-library/react": "^16.3.0",
      "react": "^19.1.0",
      "react-router-dom": "^7.5.0",
      "react-scripts": "5.0.1"
    },
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject"
    }
  }
  ```

  ### 4. **public/index.html**

  File HTML ini adalah template yang digunakan untuk aplikasi React. Semua skrip yang dibundel oleh React akan dimasukkan di bagian bawah `<body>`.

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>React App</title>
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>
    </body>
  </html>
  ```

  ---

  ## Fitur Aplikasi

  ### 1. **Routing**

  Aplikasi ini memiliki dua halaman utama:

  * **HomePage**: Halaman utama yang ditampilkan pada route `/`.
  * **ContactPage**: Halaman kontak yang ditampilkan pada route `/contact`.

  ### 2. **Navbar**

  Navbar disertakan di setiap halaman yang memungkinkan pengguna untuk bernavigasi antara **HomePage** dan **ContactPage**.

  ### 3. **Footer**

  Footer juga disertakan di setiap halaman untuk memberikan informasi tambahan dan ajakan bertindak.

  ### 4. **Chakra UI**

  Chakra UI digunakan untuk mendesain antarmuka aplikasi, memberikan kemudahan dalam penggunaan komponen UI yang responsif dan dapat disesuaikan.

  ---

  ## Cara Menjalankan Aplikasi

  ### Langkah-langkah:

  1. **Clone repository** ke mesin lokal:

    git clone https://github.com/username/my-app.git

  2. **Masuk ke direktori aplikasi**:

    cd my-app

  3. **Install dependensi** menggunakan npm atau yarn:

    npm install

  4. **Jalankan aplikasi**:

    npm start 

  Aplikasi akan berjalan di [http://localhost:3000](http://localhost:3000).

  ---

  ## Struktur Folder

 ```bash
assignment-4/
├── public/
│   ├── index.html        # Template HTML untuk aplikasi
├── src/
│   ├── components/
│   │   ├── About.jsx      # Komponen untuk bagian About
│   │   ├── Footer.jsx     # Komponen Footer
│   │   ├── HeroBanner.jsx # Komponen Hero Banner
│   │   ├── Input.jsx      # Komponen Input Form
│   │   ├── NavBar.jsx     # Komponen Navbar
│   │   ├── scrollToTop.jsx # Komponen Scroll to Top
│   │   ├── Testimonials.jsx # Komponen Testimonials
│   │   ├── Work.jsx       # Komponen untuk daftar pekerjaan
│   │   └── WorkRow.jsx    # Komponen untuk baris daftar pekerjaan
│   ├── pages/
│   │   ├── App.js         # Main App file, mengonfigurasi routing
│   │   ├── index.js       # Entry point aplikasi
│   ├── index.css          # Styling untuk aplikasi secara umum
│   ├── logo.svg           # Logo aplikasi
│   ├── reportWebVitals.js # File untuk melaporkan metrik performa aplikasi
│   └── setupTests.js      # File setup untuk testing aplikasi
├── .gitignore             # File untuk mengecualikan file tertentu dari version control
├── package-lock.json      # Lock file untuk dependensi npm
├── package.json           # Konfigurasi proyek dan dependensi
└── README.md              # Dokumentasi aplikasi
```

---
