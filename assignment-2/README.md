# JavaScript Functions for Various Tasks

## 1. Convert Fahrenheit to Celsius (JavaScript)

### Deskripsi Fungsi

Fungsi ini mengonversi suhu dari Fahrenheit ke Celsius menggunakan rumus konversi yang tepat.

### Input:

* **fahrenheit**: Suhu dalam derajat Fahrenheit (tipe data: **int**).

### Output:

* Mengembalikan suhu dalam derajat Celsius (tipe data: **float**).

### Inspected Result:

* Fungsi ini mengembalikan hasil konversi suhu dalam format angka dengan dua angka desimal.

### Contoh:

```javascript
const inputFahrenheit = 32; // Input: 32°F
const celsius = fahrenheitToCelsius(inputFahrenheit); // Output: 0°C
```

---

## 2. Convert CM to KM (JavaScript)

### Deskripsi Fungsi

Fungsi ini mengonversi jarak dari centimeter (cm) ke kilometer (km) atau sebaliknya, tergantung pada unit yang diberikan.

### Input:

* **number**: Nilai yang akan dikonversi (tipe data: **int**).
* **unit**: Satuan unit untuk konversi, dapat berupa `"cm"` atau `"km"` (tipe data: **string**).

### Output:

* Mengembalikan hasil konversi dalam satuan kilometer atau centimeter (tipe data: **string**).

### Inspected Result:

* Mengembalikan nilai dengan satuan yang sesuai seperti "km" atau "cm".

### Contoh:

```javascript
const number = 5000;
const unit = "cm";
console.log(convertCMtoKm(number, unit)); // Output: 0.05 km
```

---

## 3. Check if Number is Even or Odd (JavaScript)

### Deskripsi Fungsi

Fungsi ini memeriksa apakah sebuah angka merupakan angka genap atau ganjil.

### Input:

* **n**: Angka yang akan diperiksa (tipe data: **int**).

### Output:

* Mengembalikan `true` jika angka genap, dan `false` jika angka ganjil (tipe data: **boolean**).

### Inspected Result:

* Mengembalikan nilai boolean berdasarkan apakah angka tersebut genap atau ganjil.

### Contoh:

```javascript
let n = 1001;
console.log(`hasil: ${checkNumber(n)}`); // Output: false
```

---

## 4. Remove First Occurrence of a String (JavaScript)

### Deskripsi Fungsi

Fungsi ini menghapus kemunculan pertama dari sebuah string yang dicari dalam teks.

### Input:

* **text**: Teks yang akan diproses (tipe data: **string**).
* **searchString**: String yang ingin dihapus dari teks (tipe data: **string**).

### Output:

* Mengembalikan teks yang telah dihapus kemunculan pertama dari string yang dicari (tipe data: **string**).

### Inspected Result:

* Menghapus hanya kemunculan pertama dari string yang dicari.

### Contoh:

```javascript
const text = "Hello Friends!";
const searchStringToRemove = "end";
console.log(removeFirstOccurrence(text, searchStringToRemove)); // Output: "Hello Fri!"
```

---

## 5. Check Palindrome (JavaScript)

### Deskripsi Fungsi

Fungsi ini memeriksa apakah sebuah kata atau frasa merupakan palindrome, yaitu jika kata tersebut dibaca sama dari kiri ke kanan maupun kanan ke kiri.

### Input:

* **str**: Kata atau frasa yang akan diperiksa (tipe data: **string**).

### Output:

* Mengembalikan `true` jika kata tersebut merupakan palindrome, dan `false` jika tidak (tipe data: **boolean**).

### Inspected Result:

* Mengembalikan nilai boolean berdasarkan apakah kata tersebut palindrome atau tidak.

### Contoh:

```javascript
let word = "elles";
console.log(`Palindrome: ${isPalindrome(word)}`); // Output: true
```