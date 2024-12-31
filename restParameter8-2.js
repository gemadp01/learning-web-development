//! Spread Operator vs. Rest Parameter
//! Rest Parameter (Rest = sisa)

//* mengambil sisa argument yang dikirimkan
// function myFunc(a, b, ...myArgs) {
//   return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
// }

//* mengambil semua argument
// function myFunc(...myArgs) {
//   return myArgs; // (5)[1,2,3,4,5] langsung berbentuk array
// }

//* rest parameter tidak dapat disimpan di awal/pembuka parameter
// function myFunc(...myArgs, a) {
// 	return myArgs;
// }

//* Mengubah value arguments (berbentuk object) pada function menjadi array
// function myFunc() {
//   //todo dengan cara manual
//   // return Array.from(arguments);
//   //todo dengan spread operator
//   // return [...arguments];
// }
// console.log(myFunc(1, 2, 3, 4, 5));

//* Menjumlahkan setiap angka pada array menggunakan rest parameter
// function jumlahkan() {
//   let jumlah = 0;
//   let konversi = [...arguments];
//   for (const a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }

// function jumlahkan(...angka) {
//   let total = 0;
//   for (const a of angka) {
//     total += a;
//   }
//   return total;
// }

// function jumlahkan(...angka) {
//   return angka.reduce((a, b) => (a += cv), 0);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));

//* array destructuring
// const kelompok1 = ["Sandhika", "Doddy", "Erik", "Fajar", "Hendra"];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

//* object destructuring
// const team = {
//   pm: "Sandhika",
//   frontEnd1: "Doddy",
//   frontEnd2: "Erik",
//   backEnd: "Fajar",
//   ux: "Hendra",
//   devOps: "Ferry",
// };

// const { pm, ...myTeam } = team;
// for (const a in myTeam) {
//   console.log(myTeam[a]);
// }

//* filtering (memfilter berdasarkan tipe datanya, nilai-nilainya dikirimkan pada argument)
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(filterBy("number", 1, 2, "Sandhika", false, 10, true, "Doddy"));
console.log(typeof "halo");
