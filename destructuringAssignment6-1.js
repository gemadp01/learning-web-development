//! Destructuring Assignment / Destructuring Variable (Fitur unik pada modern javascript)

//* Perkenalan Destructuring Array
// const coba = ["satu", "dua", "tiga"];

//? cara sebelumnya
// const a = coba[0];
// const b = coba[1];
// const c = coba[2];

//? modern javascript
// const [a, b, c] = coba;
// console.log(a);
// console.log(b);
// console.log(c);

//* Destructuring Array
// const perkenalan = ["Halo", "nama", "saya", "Sandhika Galih"];

// const [salam, satu, dua, nama] = perkenalan;

//? jika ingin melompati elemen-element pada array (skipping items)
// const [salam, , , nama] = perkenalan;

//? swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

//? return value pada function
// function coba() {
//   return [1, 2];
// }

// const a = coba();
// console.log(a[0]); // 1
// const [a, b] = coba();
// console.log(a);

//? Membongkar banyak nilai dari arraynya, tapi kita tidak tahu akan ada berapa element didalam arraynya
//? Rest Parameter
// const [a, b] = [1, 2, 3, 4, 5]; // value array lebihnya harus kita tampung (3, 4, 5)
// const [a, ...values] = [1, 2, 3, 4, 5];

//* Perkenalan Destructuring Object
// const mhs = {
//   nama: "Sandhika Galih",
//   umur: 33,
//   email: "sandhikagalih@unpas.ac.id",
// };

// const { nama, umur, email } = mhs;
// console.log(nama); // "Sandhika Galih"
// console.log(umur); // 33
// console.log(email); // "sandhikagalih@unpas.ac.id"

//* Destructuring Object
// const mhs = {
//   nama: "Sandhika Galih",
//   umur: 33,
// };

//todo menangkap property pada object (cara biasa)
// const nama = mhs.nama;
// const umur = mhs.umur;
// const {nama, umur} = mhs;

//* langsung melakukan destructuring tanpa melakukan deklarasi object (sebelumnya const mhs = {...}; -> object literal)
//todo assignment tanpa deklarasi object
// ({ nama, umur } = {
//   nama: "Sandhika Galih",
//   umur: 33,
// });
// console.log(nama);

//todo Assign ke Variabel baru (nama property pada object di assign ke variabel baru)
// const mhs = {
//   nama: "Sandhika Galih",
//   umur: 33,
// };

// const { nama: n, umur: u } = mhs;
// console.log(n);
// console.log(u);

//todo Memberikan Default Value (sama halnya pada php, parameter pada function dapat diberi default Value)
// const mhs = {
//   nama: "Sandhika Galih",
//   umur: 33,
// };

// const { nama, umur, email = "sandhikagalih@unpas.ac.id" } = mhs;
// console.log(email);

//todo Memberikan nilai default & assign ke variabel baru (gabungan)
// const mhs = {
//   nama: "Sandhika Galih",
//   umur: 33,
//   email: "sandhikagalih@unpas.ac.id",
// };

// const { nama: n, umur: u, email: e = "email@default.com" } = mhs;

//todo memberikan rest parameter pada destructuring object
// const mhs = {
//   nama: "Sandhika Galih",
//   umur: 33,
//   email: "sandhikagalih@unpas.ac.id",
// };

// const { nama, ...values } = mhs;
// console.log(values);

//todo mengambil field pada object, setelah dikirm sebagai parameter untuk function
//* misal telah mengambil data dari API (datanya biasanya terdapat property id)
const mhs = {
  id: 123,
  nama: "Sandhika Galih",
  umur: 33,
  email: "sandhikagalih@unpas.ac.id",
};

//? cara normal
function getIdMhs(mhs) {
  return mhs.id;
}
console.log(getIdMhs(mhs));

//? menggunakan destructuring, simpan parameter bukan object
//? (karena yang dikirim itu object tapi yang ditangkap pada paramter hanya id saja, sisanya diabaikan)
function getIdMhs({ id }) {
  return id;
}
console.log(getIdMhs(mhs));
