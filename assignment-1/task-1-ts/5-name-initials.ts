// Fungsi untuk mendapatkan inisial nama lengkap
function initialName(name: string): string {
  const splitName = name.split(" ");
  
  // Mendapatkan inisial nama
  let initial = "";
  for (let i = 0; i < splitName.length; i++) {
    initial += splitName[i].charAt(0).toUpperCase();  // Mengambil huruf pertama dari setiap kata dan mengubahnya menjadi huruf kapital
  }

  return initial;
}

// Ekspor fungsi dengan default agar bisa diimpor di file lain
export default initialName;