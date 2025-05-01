let tanya = 'true';

while (tanya) {
  // Menangkap pilihan player
  let p = prompt('Pilih : gajah, semut, orang');

  // Menangkap pilihan komputer (menggunakan bilangan random)
  // Membangkitkan bilangan random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = 'gajah';
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = 'orang';
  } else {
    comp = 'semut';
  }

  // menentukan rules
  let hasil = '';
  if (p == comp) {
    hasil = 'SERI';
  } else if (p == 'gajah') {
    //   if (comp == 'orang') {
    //     hasil = 'MENANG';
    //   } else {
    //     hasil = 'KALAH';
    //   }
    hasil = comp == 'orang' ? 'MENANG!' : 'KALAH!';
  } else if (p == 'orang') {
    hasil = comp == 'gajah' ? 'KALAH!' : 'MENANG!';
  } else if (p == 'semut') {
    hasil = comp == 'orang' ? 'KALAH!' : 'MENANG!';
  } else {
    hasil = 'Memasukkan pilihan yang salah!!';
  }

  // tampilkan hasilnya
  alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

  tanya = confirm('Ingin mencoba lagi?');
}

alert('Terimakasih sudah bermain.');
