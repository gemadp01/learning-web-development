// latihan 2
// menampilkan "Angkot No. 1-6 beroperasi dengan baik." -dengan perulangan while
// menampilkan "Angkot No. 7-10 sedang tidak beroperasi" -dengan for
// tambahkan variabel baru "angkotBeroperasi = 6"

let jmlAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
  console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
  noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
  console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
}
