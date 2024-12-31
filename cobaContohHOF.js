//! Latihan HOF (Filter, Map, Reduce)

//* Algoritma (langkah-langkah yang akan kita lakukan)
//todo ambil semua elemen video (dengan DOM selection)
const myVideos = document.querySelectorAll("ul li");

//todo pilih hanya yang "JAVASCRIPT LANJUTAN"
const videoSelection = Array.from(myVideos).filter(
  (videoSelection) =>
    videoSelection.textContent.trim().includes("JAVASCRIPT LANJUTAN")
  // if (video.textContent.trim().includes("JAVASCRIPT LANJUTAN")) {
  //   return video.getAttribute("data-duration");
  // }
);

const videoDuration = videoSelection
  .map((videoDuration) => {
    //todo ambil durasi masing-masing video
    const duration = videoDuration.getAttribute("data-duration").split(":");
    const conversion = parseInt(duration[0]) * 60 + parseInt(duration[1]);
    return conversion;
    //todo ubah durasi menjadi int, ubah menit menjadi detik (karena value data-duration itu string)
  })
  //todo jumlahkan semua detik
  .reduce((acc, curr, index, array) => {
    const totalDetik = acc + curr;

    let isLastIteration = index === array.length - 1;

    // Tampilkan log jika sudah iterasi terakhir
    if (isLastIteration) {
      let jam = Math.floor(totalDetik / 3600);
      let sisaDetik = totalDetik % 3600;
      let menit = Math.floor(sisaDetik / 60);
      let detik = sisaDetik % 60;
      let hasil = `${jam}:${menit}:${detik}`;
      return hasil;
    }

    return totalDetik;
  }, 0);

//todo simpan di DOM
const jumlahVideo = document.querySelector("ol li .jumlah-video");
jumlahVideo.innerHTML = videoSelection.length;

const totalDuration = document.querySelector("ol li .total-durasi");
totalDuration.innerHTML = videoDuration;
