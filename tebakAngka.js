// sederhana menggunakan pop-up & control flow
// tebak angka 1-10
// membangkitkan bilangan random (1-10) bukan 0-1 !bilangan bulat bukan pecahan
// 3 kesempatan

// Menampilkan guide
alert('Tebak angka dari 1 - 10 \nKamu punya 3 kesempatan.');

// Menangkap inputan komputer
let comp = Math.random();

if (comp >= 0.1 && comp < 0.2) {
  comp = 1;
} else if (comp >= 0.2 && comp < 0.3) {
  comp = 2;
} else if (comp >= 0.3 && comp < 0.4) {
  comp = 3;
} else if (comp >= 0.4 && comp < 0.5) {
  comp = 4;
} else if (comp >= 0.5 && comp < 0.6) {
  comp = 5;
} else if (comp >= 0.6 && comp < 0.7) {
  comp = 6;
} else if (comp >= 0.7 && comp < 0.8) {
  comp = 7;
} else if (comp >= 0.8 && comp < 0.9) {
  comp = 8;
} else if (comp >= 0.9 && comp < 1) {
  comp = 9;
} else {
  comp = 10;
}
// console.log(comp);
let kesempatan = 3;
let tebak = true;
let hasil = '';
// Menangkap inputan player
while (tebak) {
  
  let p = parseInt(prompt('Masukkan angka tebakan : '));
// Menentukan rules
  if (p == comp) {

    hasil = 'Anda benar!';
    alert(hasil + '\nAngka yang dicari adalah : ' + comp)
    tebak = false;

  } else if (p < comp) {

    hasil = 'TERLALU RENDAH!';
    kesempatan -= 1;
    
    if(kesempatan == 0) {
      alert(hasil + '\nkesempatan anda habis!');
      hasil = 'Anda GAGAL!';
      alert(hasil + '\nAngka yang dicari adalah : ' + comp)
      tebak = false;
    } else if(kesempatan > 0){
      alert(hasil + '\nAyo masih ada ' + kesempatan + ' kesempatan');
    }

  } else if (p > comp) {

    hasil = 'TERLALU TINGGI!';
    kesempatan -= 1;
    
    if(kesempatan == 0) {
      alert(hasil + '\nkesempatan anda habis!');
      hasil = 'Anda GAGAL!';
      alert(hasil + '\nAngka yang dicari adalah : ' + comp)
      tebak = false;
    } else if(kesempatan > 0){
      alert(hasil + '\nAyo masih ada ' + kesempatan + ' kesempatan');
    }

  }
  
}
// end
alert('Terimakasih!');

// #2
// var lagi = true;

// while (lagi) {
//   //Komputer membangkitkan angka random
//   var random = Math.floor(Math.random() * 10) + 1;
//   console.log(random);

//   // Player melakukan input (menebak)
//   var guess = prompt("Pilihlah angka antara 1-10! \n(Anda memiliki tiga kali kesempatan)");

//   // Alur Permainan
//   var hasil = "";
//   for (var chance = 3; chance >= 1; chance--) {
//     if (guess == random) {
//       hasil = "BENAR";
//       alert("Angka tebakan anda " + hasil + ".");
//       break;
//     } else if (guess != random && chance > 1) {
//       hasil = guess < random ? "terlalu RENDAH" : "terlalu TINGGI";

//       guess = prompt("Angka tebakan anda " + hasil + ". \nCoba tebak lagi");
//     } else if (guess != random && chance == 1) {
//       hasil = "SALAH";
//       alert("Angka tebakan anda " + hasil + ". \nKesempatan anda sudah habis.");
//     }
//   }

//   lagi = confirm("Apakah anda ingin main lagi?");
// }

// alert("Terimakasih sudah bermain!");