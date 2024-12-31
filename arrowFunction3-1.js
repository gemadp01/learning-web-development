//! arrow function
//* mengubah function expression menjadi arrow function
// let tampilPesan = function(nama) {
// 	alert("Halo" + nama);
// }

// let tampilPesan = (nama) => {
//   alert("Halo" + nama);
// };

// tampilPesan("Test");

//* jika mempunyai 2 atau lebih parameter (wajib memakai kurung buka & tutup)
// let tampilPesan = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}`;
// };

// console.log(tampilPesan("Pagi", "Gema"));

//* jika hanya mempunyai satu parameter kurung buka & tutup bisa ditiadakan
// let tampilPesan = nama => {
//   return `Halo ${nama}`;
// };

//* jika isi function hanya return saja, kita tidak perlu menuliskan keyword return-nya
// let tampilPesan = nama => `Halo ${nama}`;

//* tanpa parameter wajib menuliskan kurung buka & tutup
// let tampilPesan = () => `Hello world!`;

//* arrow function dengan menggunakan map() -> untuk memetakkan sebuah function ke dalam array
let mahasiswa = ["Sandhika", "Doddy", "Erik"];

//? function biasa
// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });

//? arrow function
// let jumlahHuruf = mahasiswa.map(nama => nama.length);

//? arrow function tapi mengembalikannya dalam bentuk object bukan array lagi
// let jumlahHuruf = mahasiswa.map(nama => ( {nama: nama,jmlHuruf: nama.length,} ));

//? new, mengembalikkan objecy yang nama property === value tidak perlu menulis keduanya
// let jumlahHuruf = mahasiswa.map((nama) => ({ nama, jmlHuruf: nama.length }));
// console.log(jumlahHuruf);

//todo agar rapih dapat menggunakan console.table();
console.table(jumlahHuruf);
