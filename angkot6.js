// latihan 6
// angkot 1-6 beroperasi dengan baik
// angkot 7-10 sedang tidak beroperasi
// angkot no.5 mulai lembur
// angkot no.8 dan no.10 sudah bisa mulai beroperasi
// munculkan pesan "Angkot no.5 sedang lembur."
// munculkan pesan "Angkot no.8 sedang lembur."
// munculkan pesan "Angkot no.10 sedang lembur."

let jmlAngkot = 10;
let angkotBeroperasi = 6;

for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
  } else if (noAngkot === 8 || noAngkot === 10) {
    console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
  } else {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
  }
}
