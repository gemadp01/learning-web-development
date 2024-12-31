//! Destructuring Function

//! destructuring return value dari function
function penjumlahanPerkalian(a, b) {
  return [a + b, a * b];
}
// console.log(penjumlahanPerkalian(2, 3));

// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];
// console.log(jumlah);
// console.log(kali);

//* dengan destructuring langsung membuat variabel berupa array (dibongkar)
// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

//? bagaimana jika return value bertambah?
// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// const [jumlah, kurang, kali, bagi] = penjumlahanPerkalian(2, 3);

//* ketika kita return sebuah array dan melakukan destructuring
//* urutan variabel pada destructuring harus sesuai dengan urutan pada array yang direturn (jangan sampai tertukar)
//* karena variabel destructuring berasosiasi dengan array index yang di return
// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// const [jumlah, kurang, kali, bagi] = penjumlahanPerkalian(2, 3);
// const [kali, kurang, bagi, jumlah] = penjumlahanPerkalian(2, 3);
// console.log(kurang); // -1

//* agar urutan tidak berpengaruh, return harus berupa object (jangan array)
// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { bagi, tambah, kali, kurang } = kalkulasi(2, 3);
// console.log(kurang); // -1, posisi "kurang" pada variabel destructuring terakhir,yang mana property urutan kedua (urutan tidak berpengaruh)

//! Destructuring Function argument
// const mhs1 = {
//   nama: "Sandhika Galih",
//   umur: 33,
//   email: "sandhikagalih@unpas.ac.id",
// };

//* function untuk mencetak sebuah string berdasarkan property yang ada pada object
//? Cara pertama
// function cetakMhs(nama, umur) {
//   return `Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
// }
// console.log(cetakMhs(mhs1.nama, mhs1.umur));

//? Cara kedua
// function cetakMhs(mhs) {
//   return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`;
// }
// console.log(cetakMhs(mhs1));

//* menggunakan destructuring
// function cetakMhs({ nama, umur }) {
//   return `Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
// }
// console.log(cetakMhs(mhs1));

//* jika object sangat kompleks (object didalam object)
const mhs1 = {
  nama: "Sandhika Galih",
  umur: 33,
  email: "sandhikagalih@unpas.ac.id",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 80,
  },
};

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}`;
}
console.log(cetakMhs(mhs1));
