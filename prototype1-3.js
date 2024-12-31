//! prototype
// Versi Object
// function Mahasiswa(nama, energi) {
//   //* let this = Object.create(Mahasiswa.prototype);
//   this.nama = nama;
//   this.energi = energi;
//   //* return this;
// }

//todo mengelola methodnya  sebelumnya Object.prototype(methodMahasiswa)
// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama}, Selamat makan!`;
// };

// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Halo ${this.nama}, Selamat bermain!`;
// };

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `Halo ${this.nama}, Selamat tidur!`;
// };

//* Prototypal Inheritance (Pewarisan menggunakan prototype)

//! Versi kelas
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, Selamat makan!`;
  }
  main(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, Selamat bermain!`;
  }
  tidur(jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, Selamat tidur!`;
  }
}

let gemadp = new Mahasiswa("Gema Dodi Pranata", 20);
let sandhika = new Mahasiswa("Sandhika", 15);
gemadp.makan(5);
console.log(gemadp);

/* 
	versi kelas dibelakang layar ialah 
	yang dijalankan prototype
	kelas dibuat agar lebih mudah 
*/

//* Paham prototype = jadi bisa paham bahwa tipe data merupakan bungkusan dari object __PROTO__

// let angka = [];
// let angka = new Array(); //* constructor function
// Array() sebuah object yang sudah membawa prototype

// function Array() { //* dibelakang layar seperti ini
// let this = Object.create(Array.prototype);
// 	...
// }

// array angka sudah mewarisi semua property/method dari object Array
