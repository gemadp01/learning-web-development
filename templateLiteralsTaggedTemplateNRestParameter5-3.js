//! Tagged Templates
const nama = "Sandhika Galih";
const umur = 33;
const email = "sandhikagalih@unpas.ac.id";

// function coba(strings, nama, umur) {
//   // jika terdapat parameter lanjutan tanpa argument yang dikirimkan, maka 'error'
//   return strings[0] + nama + strings[1] + umur + strings[2];
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

//! rest parameter (menampung semua expression yang ada pada template literal)
// modern javascript
//* menggabungkan/merangkai strings dan ...args
// function coba(strings, ...args) {
//   //?Cara mudah
//   // let result = "";

//   // strings.forEach((str, i) => {
//   //   result += `${str}${args[i] || ""}`;
//   // });

//   // return result;

//   //? menggunakan hof reduce
//   return strings.reduce(
//     (result, str, i) => `${result}${str}${args[i] || ""}`,
//     ""
//   );
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

//* highlight
// function highlight(strings, ...args) {
//   return strings.reduce(
//     (result, str, i) =>
//       `${result}${str}<span class="hl">${args[i] || ""}</span>`,
//     ""
//   );
// }

// const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah : ${email}.`;
// // console.log(str);
// document.body.innerHTML = str;

//* Escaping / Sanitize HTML Tags
// function sanitize(strings, ...values) {
//   return DOMPurify.sanitize(aboutMe);
// }

// const name = "petyr baelish";
// const aboutMe = `I love to do evil <img src="http://unsplash.it/100/100?random" onload="alert('I hacked you. Haha');" />`;

// const html = sanitize`
// 	<h3>${name}</h3>
// 	<p>${aboutMe}</p>
// `;

// console.log(html);

//*Translation & Internationalization
// const html = i18n`Hello ${name}, you have ${amount}:c in your bank account.`;
// Hallo Steffen, Sie haben US$ 1,250.33 auf Ihrem Bankkonto.

//* Styled Components
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;
