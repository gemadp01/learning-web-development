// latihan 4
// angkot 1-6 beroperasi dengan baik
// angkot 7-10 sedang tidak beroperasi
// angkot no.8 sudah bisa mulai beroperasi
// munculkan pesan "Angkot no.8 sedang lembur."

let jmlAngkot = 10;
let angkotBeroperasi = 6;

for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
  } else if (noAngkot === 8) {
    console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
  } else {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
  }
}
