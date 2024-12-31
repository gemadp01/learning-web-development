//! Closure
// function init() {
//   let nama = "test";

//   function tampilNama() {
//     //* function tampilNama bukan lagi closure karena tidak menggunakan lexical scope
//     //* jika tidak mengakses parentnya
//     // let nama = "test inner";
//     console.log(nama);
//   }

//   //* function tampilNama membutuhkan variabel yang ada diparent scopenya
//   //* maka function tampilNama ini disebut dengan Closure
//   // tampilNama();

//   //* dengan cld (dir) menampilkan struktur objectnya
//   // console.dir(tampilNama);
//   return tampilNama;
// }

// // init();
// console.log(panggilNama);
// var panggilNama = init();
// console.log(panggilNama);

//! meringkas code sebelumnya
// function init() {
//   return function (nama) {
//     console.log(nama);
//   };
// }

// let panggilNama = init();
// console.dir(panggilNama);
// panggilNama("Gema");

//! 1. function factories
function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, Selamat ${waktu}, Semoga harimu menyenangkan!`);
  };
}
let selamatPagi = ucapkanSalam("Pagi");
console.dir(selamatPagi);
selamatPagi("Gema");

//! 2. Method private
let counter = 0;
let add = function () {
  return ++counter;
};

// console.log(add());
// console.log(add());
