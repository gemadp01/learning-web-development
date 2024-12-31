//! Template Literals / Template String

const nama = "Sandhika";
const umur = 33;
console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);

//? sebelum menggunakan template literal (menggunakan kutip 1 atau kutip 2)
console.log("Halo, nama saya " + nama + ", dan saya " + umur + " tahun.");

//*  Embedded Expressions
console.log(`${1 + 1}`);
console.log(`${alert("halo!")}`);

const x = 10;
console.log(`${x % 2 == 0 ? "Genap" : "Ganjil"}`);

//* HTML Fragments
const mhs = {
  nama: "Sandhika Galih",
  umur: 33,
  nrp: "043040023",
  email: "sandhikagalih@unpas.ac.id",
};

const el = `<div class="mhs">
	<h2>${mhs.nama}</h2>
	<span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);
