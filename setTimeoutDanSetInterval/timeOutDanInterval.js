// setTimeout()
// setInterval()


































// Program hitung mundur
// 1. Kapan waktu tersebut
// (Waktu tujuan) -> cara mendapatkan waktunya

// getTime() -> menampilkan detik berdasarkan milisecond
const tanggalTujuan = new Date('May 10, 2023 16:34:00').getTime();

const hitungMundur = setInterval(function() {

    const sekarang = new Date().getTime();

    // Mencari selisih diantara kedua hal tersebut
    // agar diketahui berapa jam, menit, dll
    // intinya dari detik selisih
    const selisih = tanggalTujuan - sekarang;

    // mengubah hasil detik(milidetik) yang dihasilkan selisih menjadi format yang diinginkan
    // misalnya berapa hari, berapa jam, berapa menit, berapa detik, dll
    // hari = selisih / (1 detik = 1000 milisecond * 60 detik * 60 menit * 24 jam)
    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));

    // mencari jam (sisa dari selisih)
    const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

    // mencari menit
    const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));

    // mencari detik
    const detik = Math.floor(selisih % (1000 * 60) / 1000);

    const teks = document.getElementById('teks');
    teks.innerHTML = 'Waktu anda tinggal' + hari + ' hari ' + jam + ' jam ' + menit + ' menit ' + detik + ' detik lagi!';

    if(selisih == 0) {
        clearInterval(hitungMundur);
        teks.innerHTML = 'WAKTU ANDA HABIS!';
    }

}, 1000);