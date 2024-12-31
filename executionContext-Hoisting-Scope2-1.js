//todo EXECUTION CONTEXT, HOISTING & SCOPE

// var nama = 'Sandhika';
// console.log(nama);

//! execution context pada creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

//! execution context pada execution phase
// console.log(sayHello());
// var nama = "Sandhika";
// var umur = 33;

// function sayHello() {
//   console.log(`Halo, nama saya ${nama}, saya ${umur} tahun.`);
// }

// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// punya akses ke window & arguments (object khusus memiliki sifat mirip array)
// hoisting (local)

// contoh lain
function a() {
  console.log("ini a");

  function b() {
    console.log("ini b");

    function c() {
      console.log("ini c");
    }

    c();
  }

  b();
}

a();

//
var nama = "Gema";
var username = "@gema";

// function cetakURL(username) {
//   var instagramURL = "http://instagram.com/";
//   return instagramURL + username;
// }

//* bagaimana jika parameter tidak ada tapi mengirimkan argument?
function cetakURL() {
  console.log(arguments[0]);
  var instagramURL = "http://instagram.com/";
  //* username akan mencari di local jika tidak ada mencari ke global jika masih tidak ada reference error
  return instagramURL + username;
}

// console.log(cetakURL(username)); // http://instagram.com/@gema
console.log(cetakURL("@sandhika")); // http://instagram.com/@sandhika

//! Latihan
function satu() {
  var nama = "Sandhika";
  console.log(nama);
}

function dua() {
  console.log(nama);
}

/* 
  1. Hoisting (Global) pada function dan variable
*/

console.log(nama); // undefined
var nama = "Erik"; // nama diisi dengan "Erik"
satu(); // Sandhika
dua("Doddy"); // Sandhika
console.log(nama); // Erik
