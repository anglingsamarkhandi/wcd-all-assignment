// Fungsi untuk menghitung diameter, keliling, dan area dari lingkaran
function calculateCircleProperties(radius: number): { diameter: number, circumference: string, area: number } {
  let diameter = 2 * radius;
  let circumference = 2 * Math.PI * radius;
  let area = Math.PI * Math.pow(radius, 2);

  return {
    diameter: diameter,
    circumference: circumference.toFixed(4),
    area: Math.floor(area * 1000) / 1000
  };
}

// Ekspor fungsi dengan default agar bisa diimpor di file lain
export default calculateCircleProperties;