// Fungsi untuk mengonversi antara cm dan km
function convertCMtoKm(number, unit) {
  if (unit === "cm") {
    return number / 100000 + " km"; // Mengonversi cm ke km
  } else if (unit === "km") {
    return number * 100000 + " cm"; // Mengonversi km ke cm
  } else {
    return "unit yang dimasukkan salah"; // Error handling
  }
}

// Ekspor fungsi dengan default agar bisa diimpor di file lain
export default convertCMtoKm;
