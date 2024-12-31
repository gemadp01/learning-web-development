//! Latihan HOF (Filter, Map, Reduce)

//* Algoritma (langkah-langkah yang akan kita lakukan)
//todo ambil semua elemen video (dengan DOM selection)
const videos = Array.from(document.querySelectorAll("[data-duration]"));

//todo pilih hanya yang "JAVASCRIPT LANJUTAN"
let jsLanjut = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))

  //todo ambil durasi masing-masing video
  .map((item) => item.dataset.duration)

  //todo ubah durasi menjadi float, ubah menit menjadi detik (karena value data-duration itu string)
  .map((waktu) => {
    // 10:30 -> [10, 30] split
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  //todo jumlahkan semua detik
  .reduce((total, detik) => total + detik, 0);

//todo ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

//todo simpan di DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

const jmlVideo = videos.filter((video) =>
  video.textContent.includes("JAVASCRIPT LANJUTAN")
).length;
const pJmlVideo = document.querySelector(".jumlah-video");
pJmlVideo.textContent = `${jmlVideo} Video.`;

console.log(jmlVideo);
