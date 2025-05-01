let angka = prompt('Masukkan angka : ');

if (angka % 2 === 0) {
  console.log(angka + ' adalah bilangan GENAP');
} else if (angka % 2 === 1) {
  console.log(angka + ' adalah bilangan GANJIL');
} else {
  console.log('yang anda masukkan bukan angka!');
}
