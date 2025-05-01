// latihan 3
// menampilkan pesan yang sama seperti latihan 2/angkot2.js
// tapi hanya tampil menggunakan perulangan for
// didalamnya ada pengkondisian
// noAngkot 1-6 beroperasi dengan baik
// noAngkot 7-10 sedang tidak beroperasi

let jmlAngkot = 10;
let angkotBeroperasi = 6;

for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
  } else {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
  }
}
