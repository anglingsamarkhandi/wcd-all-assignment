# JavaScript Functions for Various Tasks

## 1. **Calculate Area of Rectangle (JavaScript)**

### Deskripsi Fungsi

Fungsi ini digunakan untuk menghitung **area** dari sebuah **rectangle** (persegi panjang) berdasarkan panjang dan lebar yang diberikan.

### Input:

* **length**: Panjang rectangle (tipe data: **int**).
* **width**: Lebar rectangle (tipe data: **int**).

### Output:

* Mengembalikan **area** rectangle (tipe data: **int**).

### Inspected Result:

* Fungsi ini mengembalikan hasil perkalian panjang dan lebar untuk menghitung area rectangle.

### Contoh:

```javascript
const length = 5;
const width = 3;
console.log(calculateArea(length, width)); // Output: 15
```

---

## 2. **Calculate Circle Properties (JavaScript)**

### Deskripsi Fungsi

Fungsi ini digunakan untuk menghitung **diameter**, **keliling**, dan **area** dari sebuah **lingkaran** berdasarkan radius yang diberikan.

### Input:

* **radius**: Jari-jari lingkaran (tipe data: **int**).

### Output:

* **diameter**: Diameter lingkaran (tipe data: **float**).
* **circumference**: Keliling lingkaran (tipe data: **float**).
* **area**: Luas lingkaran (tipe data: **float**).

### Inspected Result:

* Fungsi ini mengembalikan objek yang berisi nilai diameter, keliling, dan luas lingkaran yang dihitung dengan tepat menggunakan rumus matematika.

### Contoh:

```javascript
const radius = 5;
const circle = calculateCircleProperties(radius);
console.log(circle.diameter);  // Output: 10
console.log(circle.circumference);  // Output: 31.4159
console.log(circle.area);  // Output: 78.539
```

---

## 3. **Find Triangle Angles (JavaScript)**

### Deskripsi Fungsi

Fungsi ini digunakan untuk menghitung **sudut ketiga** dari sebuah **segitiga** jika dua sudut lainnya diketahui.

### Input:

* **angle1**: Sudut pertama dalam derajat (tipe data: **int**).
* **angle2**: Sudut kedua dalam derajat (tipe data: **int**).

### Output:

* **angle3**: Sudut ketiga segitiga (tipe data: **int**).

### Inspected Result:

* Fungsi ini mengembalikan sudut ketiga dengan rumus **180 - (angle1 + angle2)**.

### Contoh:

```javascript
let angle3 = findAngles(80, 65);
console.log(angle3);  // Output: 35
```

---

## 4. **Calculate Days Difference (JavaScript)**

### Deskripsi Fungsi

Fungsi ini digunakan untuk menghitung **selisih hari** antara dua **tanggal** tanpa memperhitungkan perbedaan tahun dan bulan yang memiliki 28 hari.

### Input:

* **date1**: Tanggal pertama dalam format `YYYY-MM-DD` (tipe data: **string**).
* **date2**: Tanggal kedua dalam format `YYYY-MM-DD` (tipe data: **string**).

### Output:

* **result**: Selisih hari antara dua tanggal (tipe data: **int**).

### Inspected Result:

* Fungsi ini mengembalikan jumlah hari yang berbeda antara kedua tanggal yang diberikan.

### Contoh:

```javascript
console.log(calculateDays("2025-01-25", "2025-02-05"));  // Output: 11
```

---

## 5. **Initial Name (JavaScript)**

### Deskripsi Fungsi

Fungsi ini digunakan untuk mengambil **inisial** dari **nama lengkap** yang diberikan.

### Input:

* **name**: Nama lengkap yang terdiri dari dua kata atau lebih (tipe data: **string**).

### Output:

* **initial**: Inisial nama dalam huruf kapital (tipe data: **string**).

### Inspected Result:

* Fungsi ini mengembalikan inisial dari nama yang dimasukkan dengan mengonversi huruf pertama dari setiap kata menjadi huruf kapital.

### Contoh:

```javascript
const hasil = initialName("Angling Samarkhandi");
console.log(hasil); // Output: "AS"
``