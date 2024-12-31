//! Callback

//! Synchronous Callback
//* function yang dikirimkan sebagai parameter pada function lain
//* Contoh ke-1
// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt("Masukkan Nama : ");
//   callback(nama);
// }

// tampilkanPesan((nama) => alert(`Halo, ${nama}`));

//* Contoh ke-2
// anggap saja kedepannya sebuah json (array of object)
// const mhs = [
//   {
//     nama: "Sandhika Galih",
//     nrp: "043040023",
//     email: "sandhikagalih@unpas.ac.id",
//     jurusan: "Teknik Informatika",
//     idDosenWali: 1,
//   },
//   {
//     nama: "Doddy Ferdiansyah",
//     nrp: "133040123",
//     email: "doddy@gmail.com",
//     jurusan: "Teknik Informatika",
//     idDosenWali: 2,
//   },
//   {
//     nama: "Erik",
//     nrp: "104040001",
//     email: "sandhikagalih@unpas.ac.id",
//     jurusan: "Teknik Industri",
//     idDosenWali: 2,
//   },
// ];

//? menampilkan semua nama mahasiswa saja kedalam console browser
// hof sudah menerima parameter berupa callback
console.log("mulai");
mhs.forEach((m) => console.log(m.nama));
// mhs.forEach((m) => {
//   for (let i = 0; i < 100000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });
console.log("selesai");

//! Asynchronous Callback
//* membuat sebuah function, ketika function dijalankan dia akan me-request data dengan ajax

function getDataMahasiswa(url, success, error) {
  let xhr = new XMLHttpRequest();

  console.log(xhr);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };
  xhr.open("get", url);
  xhr.send();
}

console.log("mulai");
getDataMahasiswa(
  "data/mahasiswa.json",
  (results) => {
    const mhs = JSON.parse(results);
    mhs.forEach((m) => console.log(m.nama));
  },
  () => {}
);
console.log("selesai");

//! Ajax with jQuery
// console.log("mulai");
// $.ajax({
//   url: "data/mahasiswa.son",
//   success: (mhs) => {
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   error: (e) => {
//     console.log(e.responseText);
//   },
// });
// console.log("selesai");
