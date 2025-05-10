// Fungsi untuk menghitung selisih hari antara dua tanggal tanpa memperhitungkan perbedaan tahun dan bulan yang 28 hari
let month: number[] = [31, 28, 30, 31, 30, 31, 30, 31, 30, 31, 30, 30];

function calculateDays(date1: string, date2: string): number {
    let result = 0;
    
    // Ekstrak nilai bulan dan hari dari tanggal sebagai integer
    const m1 = parseInt(date1.split("-")[1], 10);
    const m2 = parseInt(date2.split("-")[1], 10);
    const d1 = parseInt(date1.split("-")[2], 10);
    const d2 = parseInt(date2.split("-")[2], 10);
    
    // Jika tanggal berada di bulan yang sama, cukup kurangi hari-harinya
    if (m1 === m2) {
         result = d2 - d1;
    } else {
         // Tambahkan sisa hari di bulan pertama
         result = month[m1 - 1] - d1;
         
         // Tambahkan hari-hari penuh di antara bulan m1 dan m2
         for (let i = m1; i < m2 - 1; i++) {
              result += month[i];
         }
         
         // Tambahkan hari-hari di bulan terakhir hingga hari2
         result += d2;
    }
    
    return result;
}

// Ekspor fungsi dengan default agar bisa diimpor di file lain
export default calculateDays;