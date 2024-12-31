//! for...of vs for...in (Looping baru pada modern javascript)
//* for...of - khusus iterable object
/* 
  string,
  array,
  arguments/nodelist,
  typed array,
  map,
  set,
  user-defined iterables
*/

//todo for...of - looping array
// const mhs = ["Sandhika", "Doddy", "Erik"];

//? ragam mencetak array
// // for
// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// // forEach
// mhs.forEach((m) => console.log(m));

// // for...of (karena array iterable object)
// for (const m of mhs) {
//   console.log(m);
// }

//todo for...of - looping string
// const nama = "Sandhika";
// for (const n of nama) {
//   console.log(n);
// }
// // - forEach khusus array saja

// //? menampilkan index pada forEach (menggunakan object mhs sebelumnya)
// mhs.forEach((m, i) => console.log(`${m} adalah mahasiswa ke-${i + 1}`));

// //? secara default for...of tidak mempunyai index
// for (const m of mhs) {
//   console.log(m);
// }

// for (const m of mhs.entries()) {
//   console.log(m); // output: > (2) [0, "Sandhika"], > (2) [1, "Doddy"], (2) [2, "Erik"]
// }

// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

//todo for...of - looping nodelist (ketika query pada object)
// const liNama = document.querySelectorAll(".nama");
// liNama.forEach((n) => console.log(n.innerHTML));
// for (const n of liNama) {
//   console.log(n.textContent);
// }

//todo for...of - looping arguments (variabel special pada function)
function jumlahkanAngka() {
  // return arguments.reduce((a, i) => a + i);
  // return [1, 2, 3, 4, 5].reduce((a, i) => a + 1);
  //? dengan forEach
  // let jumlah = 0;
  // arguments.forEach((a) => (jumlah += a));
  // return jumlah;
  //? hanya bisa dengan for...of
  // let jumlah = 0;
  // for (const a of arguments) {
  //   jumlah += a;
  // }
  // return jumlah;
}
// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

//* for...in - khusus untuk object (enumerable ialah property pada object)
//todo for...in
const mhs = {
  nama: "Sandhika",
  umur: 33,
  email: "sandhikagalih@unpas.ac.id",
};

for (m in mhs) {
  console.log(m);
}

// mencetak value dari property pada object
for (m in mhs) {
  console.log(mhs[m]);
}
