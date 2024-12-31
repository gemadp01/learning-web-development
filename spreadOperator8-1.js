//! Spread Operator vs. Rest Parameter
//* keduanya direpresentasikan dengan ...variable
//* notasi sama tapi keduanya berbeda

//! Spread Operator, memecah iterables menjadi single element

//todo memecah iterables menjadi single element
// const mhs = ["Sandhika", "Doddy", "Erik"];

// console.log(mhs); // (3) ["Sandhika", "Doddy", "Erik"]
// console.log(...mhs); // "Sandhika Doddy Erik"
// console.log(...mhs[0]); // "S a n d h i k a"

//? kapan menggunakan spread operator?
//* menggabungkan 2 array atau lebih (pemisah antara array ialah koma)
// const mhs = ["Sandhika", "Doddy", "Erik"];
// const dosen = ["Ade", "Hendra", "Wanda"];
// const orang = [...mhs, ...dosen];
// console.log(orang); // (6) ["Sandhika", ..., "Wanda"]
// const orang = mhs.concat(dosen);
// console.log(orang);

// const orang = [...mhs, "raziq", ...dosen];
// console.log(orang);

//* meng-copy array
// const mhs = ["Sandhika", "Doddy", "Erik"];
// const mhs1 = mhs;
// mhs1[0] = "Fajar"; // harusnya hanya array copy dengan index 0 yang keubah tapi keduanya (mhs, mhs1) ikut keubah

// const mhs1 = [...mhs];
// mhs1[0] = "Fajar"; // hanya array mhs1 dengan index 0 yang terganti

//* mengambil value element dengan javascript lalu disimpan kedalam array
// const liMhs = document.querySelectorAll("li");
// let mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);
// }

// let mhs = [...liMhs].map((m) => m.textContent);

// console.log(mhs);

//* hover kata perhuruf
//todo ambil element
const nama = document.querySelector(".nama");

//todo pecah kata dan looping dengan hof map() lalu ubah ke string
let huruf = [...nama.textContent].map((n) => `<span>${n}</span>`).join("");
// console.log(huruf);

//todo timpa isi dari nama denngan tag span pada variabel huruf
nama.innerHTML = huruf;

//todo mengubah css (bukan element dengan class nama lagi yang dihover melainkan tag span-nya)
//! pada css stylenya
