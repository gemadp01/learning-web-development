//! Konsep this pada arrow function

//* Context this pada constructor function
// const Mahasiswa = function () {
//   this.nama = "Sandhika";
//   this.umur = 33;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
// };

// const sandhika = new Mahasiswa();

//* mengubah constructor function sebelumnya menjadi arrow function
// const Mahasiswa = function () {
//   this.nama = "Sandhika";
//   this.umur = 33;
//   this.sayHello = () => {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
// };

// const sandhika = new Mahasiswa();

//* Object Literal
// const mhs1 = {
//   nama: "Sandhika",
//   umur: 33,
//   sayHello: () => {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
// 		console.log(window); //ke object global (window) karena tidak mempunyai context this (arrow function)
//   },
// };

//* this jika menggunakan ol dan arrow function akan mencari ke context global
// const Mahasiswa = function () {
//   this.nama = "Sandhika";
//   this.umur = 33;
//   this.sayHello = () => {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };

// const sandhika = new Mahasiswa();

// coba context
// function siapaAku() {
//   console.log(this.nama);
// }

// const objekA = { nama: "Alice", siapaAku };
// const objekB = { nama: "Bob", test: function () {} };

// // Pemanggilan dalam konteks objek
// objekA.siapaAku(); // Output: "Alice"
// objekB.siapaAku = siapaAku;
// objekB.siapaAku(); // Output: "Bob"

// // Pemanggilan tanpa konteks objek
// siapaAku(); // Output: undefined (atau "window" di browser jika tidak strict mode)

// Contoh this pada arrow function
const box = document.querySelector(".box");
box.addEventListener("click", function () {
  //todo 1 mengakali this pada function anonymous (function expression)
  // let that = this;

  //todo 2 agar animasi tidak terbalik (caption -> size)
  let satu = "size";
  let dua = "caption";

  // jika diklik menambah kelas baru
  // this.classList.toggle("size");

  //todo 2.3
  if (this.classList.contains(satu)) {
    //* satu jadi dua, dua jadi satu dengan mengisi variable tersebut dengan variable sementara
    // satu = temp;
    // satu = dua;
    // dua = temp;

    // dengan syntax baru
    [satu, dua] = [dua, satu];
  }

  //todo 2.2
  this.classList.toggle(satu);

  // kita aka nmenunggu selama .6  detik, karena animsi berjalan .3 dan .3
  setTimeout(() => {
    //todo 1.1 yang terjadi that reference ke variabel diluar
    // console.log(that);

    // this.classList.toggle("caption");

    //todo 2.1
    this.classList.toggle(dua);
  }, 600);
});
//* dengan kode diatas animasi berjalan dengan baik tetapi setelah klik pertama
//* dan pada klik kedua menghilangkan animasi terbalik harusnya caption lalu size
