// let angka = prompt('Masukkan angka : ');

// switch (angka) {
//   case '1':
//     alert('Anda memasukkan angka 1');
//     break;
//   case '2':
//     alert('Anda memasukkan angka 2');
//     break;
//   case '3':
//     alert('Anda memasukkan angka 3');
//     break;
//   default:
//     alert('Angka yang anda masukkan salah!');
//     break;
// }

// latihan program sederhana
// memilih makanan/minuman
// user memasukkan sebuah nama makanan/minuman
// nantinya program melakukan pengecekan
// "apakah makanan/minuman sehat/tidak?"

let item = prompt('Masukkan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)');

switch (item) {
  case 'nasi':
    alert('Makanan / Minuman SEHAT!');
    break;
  case 'daging':
    alert('Makanan / Minuman SEHAT!');
    break;
  case 'susu':
    alert('Makanan / Minuman SEHAT!');
    break;
  case 'hamburger':
    alert('Makanan / Minuman TIDAK SEHAT!');
    break;
  case 'softdrink':
    alert('Makanan / Minuman TIDAK SEHAT!');
    break;
  default:
    alert('anda memasukkan nama makanan / minuman yang salah!');
    break;
}
