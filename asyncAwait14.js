//! Async Await
//* new Promise

//? Promise langsung resolved
// const coba = new Promise((resolve) => {
//   resolve("selesai");
// });
// console.log(coba);

//? Promise tidak langsung resolved melainkan menunggu beberapa waktu
// const coba = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("selesai");
//   }, 2000);
// });
// coba.then(() => console.log(coba));

//? Menerapkan async await
function cobaPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("selesai");
    }, 2000);
  });
}

// first
// const coba = cobaPromise();
// coba.then(() => console.log(coba));

// second
// async function cobaAsync() {
//   const coba = await cobaPromise();
//   console.log(coba);
// }

// cobaAsync();

//? Melakukan error handling pada async await
function cobaPromise() {
  return new Promise((resolve) => {
    const waktu = 3000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("selesai");
      }, waktu);
    }
  });
}

// first
// const coba = cobaPromise();
// coba.then(() => console.log(coba)).catch(() => console.log(coba));

// second
async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (err) {
    console.error(err);
  }
}

cobaAsync();
