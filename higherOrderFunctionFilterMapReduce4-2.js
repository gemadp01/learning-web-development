//! Higher Order Function
//! Filter, Map, dan Reduce

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

//todo mencari angka >= 3
//* for
// const newAngka = [];
// for (let i = 0; i <= angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

//* filter
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

//todo kalikan semua angka dengan 2
//* map
// const newAngka = angka.map((a) => a * 2);
// console.log(newAngka);

//todo jumlahkan seluruh element pada array
//* reduce
// -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// reduce((accumulator, currentValue) => statement, defaultValue);
// const newAngka = angka.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
// console.log(newAngka);

//* Method Chaining (Metode Berantai)
// menggabungkan fungsi-fungsi pada HOF dalam satu eksekusi tanpa perlu menyimpan ke variable terlebih dahulu
//todo cari angka > 5
//todo kalikan 3
//todo jumlahkan
const hasil = angka
  .filter((a) => a > 5) // 8, 9, 9
  .map((a) => a * 3) // 24, 27, 27
  .reduce((acc, curr) => acc + curr, 0); // 78
// bisa dilakukan berulang seperti .map().map() lagi dkk
console.log(hasil);
