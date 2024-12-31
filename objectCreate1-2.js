/* 
	apa yang membedakan antara object literal,
	function declaration, dan constructor function
	apa ada kekurangan, lebih baik menggunakan yang mana
*/
//! 1. Object Literal
//! PROBLEM - kurang efektif untuk object yang banyak
/* 
	tidak cocok untuk membuat object dengan skala besar
	ketika object banyak akan memakan banyak resource 
	karena melakukan sesuatu yang sama berulang-ulang 
	(walaupun value dari property berbeda)
*/
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

//! 2. function declaration
//! solusi terpisah dari function declaration
//* membuat object literal khusus method,
//* object disimpan dalam memori
// object pendukung
const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, Selamat makan!`);
  },

  main: function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, Selamat bermain!`);
  },

  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`Halo ${this.nama}, Selamat tidur!`);
  },
};

// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   mahasiswa.makan = methodMahasiswa.makan;
//   mahasiswa.main = methodMahasiswa.main;
//   mahasiswa.tidur = methodMahasiswa.tidur;

//   return mahasiswa;
// }

/* 
	walaupun melakukan instansiasi pada object
	ternyata dibelakang layar 2 method didalam nya tetap
	disimpan kedalam memori 
	(duplicate pada masing-masing object)
*/
// let gemadp = Mahasiswa("Gema Dodi Pranata", 15);
// gemadp.makan(5);
// gemadp.main(10);
// console.log(gemadp);
//* jika menggunakan function declaration, method akan selalu dibuat kembali ketika object diinstansiasi (duplicatenya)

//! object.create()
// object inti
function Mahasiswa(nama, energi) {
  //* membuat object baru (Mahasiswa) sambil bawa object lain (methodMahasiswa) - inheritance/pewarisan
  let mahasiswa = object.create(methodMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
  return mahasiswa;
}

let sandhika = Mahasiswa("Sandhika", 20);
