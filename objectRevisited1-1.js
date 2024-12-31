//todo Object Revisited
//! 1. Object Literal
// let mahasiswa = {
//   nama: "Gema Dodi Pranata",
//   energi: 20,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, Selamat makan`);
//   },
// };

// mahasiswa.makan(2); //* energi bertambah 22
// console.log(mahasiswa); //* output: {nama: 'Gema Dodi Pranat', energi: 22, makan: f}

// let mahasiswa2 = {
//   nama: "Sandhika",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, Selamat makan`);
//   },
// };

//* recap object literal, Object Literal -> instansiasi object

//! 2. function declaration
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, Selamat makan!`);
//   };

//   //* Menambah method baru
//   mahasiswa.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, Selamat bermain!`);
//   };

//   //* keyword return diperlukan jika menggunakan function declaration
//   return mahasiswa;
// }

// let gemadp = Mahasiswa("Gema Dodi Pranata", 15);
// gemadp.makan(5);
// gemadp.main(10);
// console.log(gemadp);
//* jika menggunakan function declaration, method akan selalu dibuat kembali ketika object diinstansiasi (duplicatenya)

//! 3. constructor function - yang akan digunakan kedepannya
//! mempermudah ketika membuat prototype dan lebih jelas ketika membuat object create
//* mirip seperti function declaration
//* yang membedakan tanpa deklarasi variable dan return otomatis dibuat oleh javascript
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, Selamat makan!`);
  };

  this.main = function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, Selamat bermain!`);
  };
}

//* sebelumnya tanpa keyword 'new' akan di kira mendeklarasikan function declaration, secara otomatis mencari deklarasi variabel dan keyword return - output undefined
// let sandhika = Mahasiswa("Sandhika", 20);
//* cara memanggilnya wajib menggunakan 'new'
let sandhika = new Mahasiswa("Sandhika", 20);
console.log(sandhika);
