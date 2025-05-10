// Fungsi untuk memeriksa apakah sebuah angka genap atau ganjil
function checkNumber(n) {
  const result = n % 2 === 0;
  return result; // Mengembalikan true jika angka genap, false jika ganjil
}

// Ekspor fungsi dengan default agar bisa diimpor di file lain
export default checkNumber;
