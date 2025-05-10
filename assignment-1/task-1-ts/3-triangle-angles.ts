// Fungsi untuk menghitung sudut ketiga segitiga jika dua sudut lainnya diketahui
function findAngles(angle1: number, angle2: number): number {
  let result = 180 - (angle1 + angle2);  // Menghitung sudut ketiga
  return result;
}

// Ekspor fungsi dengan default agar bisa diimpor di file lain
export default findAngles;