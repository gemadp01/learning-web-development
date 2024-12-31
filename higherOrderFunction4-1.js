//* internationalization;

let total = 0;
let count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}

//* Fungsi untuk menghasilkan array dari start ke end
function range(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

//* Fungsi untuk menjumlahkan elemen dalam array
function sum(numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

// Contoh penggunaan
console.log(sum(range(1, 10))); // Output: 55
