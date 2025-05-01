// Manipulasi Array

// 1. Menambah isi array
// var arr = ["a", 1, true];
// console.log(arr);

// var arr = [];
// arr[0] = "Gema";
// arr[1] = "Dodi";
// arr[3] = "Pranata";
// maka arr dengan index [2] bernilai "undefined"


// 2. Menghapus isi array
// var arr = ["Sandhika", "Galih", "Nofa"];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi array
var arr = ["Sandhika", "Galih", "Nofa"];

arr.push = "GEMA";
// console.log(arr);
// for(var i = 0; i < arr.length; i++) {
//     console.log("Mahasiswa ke-" + (i+1) + " " + arr[i]);
// }

// Memanfaatkan method untuk mempermudah cara diatas

// 1. length

// 2. JOin
// console.log(arr.join(" - "));

// 3. push & pop
// arr.push("Gema", "Naufal");
// arr.pop();

// 4. unshift & shift
// arr.unshift("Dodi");
// arr.shift();


// 5. splice (menyisipkan elemen di tengah-tengah)
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// mauDihapusberapa (optional), elemenBaru (optional)
// arr.splice(1, 0, "Gema")
// console.log(arr.join(" - "));


// 6. slice (mengiris sebuah array menjadi array baru)
// slice(awal, akhir);
// var arr = ["Sandhika", "Galih", "Nofa", "Doddy", "Fitri"];
// var arr2 = arr.slice(1, 4);
// console.log(arr.join(" - "));
// console.log(arr2.join(" - "));

// 7. forEach();
// var angka = [1,2,3,4,5,6,7,8];

// var cetak = function(e) {
//     console.log(e);
// }
// angka.forEach(cetak);


// angka.forEach(function(e) {
//     console.log(e);
// })

// 8. map() -> mengembalikkan array sedangkan foreach() tidak
// var angka = [1,2,5,3,6,8,4];

// var angka2 = angka.map(function(e) {
//     return e * 2;
// });
// console.log(angka2.join(" - "));


// 9. sort -> mengurutkan array
// var angka = [1,2,10,5,20,3,6,8,4];
// // console.log(angka.join(" - "));
// angka.sort(function(a,b) {
//     return a-b;
// });
// console.log(angka.join(" - "));


// 10. Filter & Find (digunakan untuk mencari nilai pada array)
// Find, mengembalikkan "satu" nilai
// Filter, mengembalikkan "banyak" nilai


































