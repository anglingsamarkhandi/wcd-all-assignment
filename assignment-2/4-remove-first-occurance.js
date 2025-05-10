// Fungsi untuk menghapus kemunculan pertama dari sebuah string
function removeFirstOccurrence(text, searchString) {
  return text.replace(searchString, ""); // Menghapus pertama kali munculnya searchString
}

// Ekspor fungsi dengan default agar bisa diimpor di file lain
export default removeFirstOccurrence;
