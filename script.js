// DOM Selection
// 1. document.getElementById() -> teknik CamelCase 
// mengembalikkan elemen
// const judul = document.getElementById('judul');  
// "Javascript tolong carikan elemen dengan tag id 'judul' 
// pada dokumen (isi html) lalu tampung kedalam variabel 'judul'"
// judul menyimpan objek dokumen
// judul.style.color = 'red';
// maka akan otomatis menambah inline css 'color = 'red';'
// apabila lebih dari "satu" kata, menggunakan teknik camelCase
// judul.style.backgroundColor = '#ccc';
// judul.innerHTML = "Sandhika";


// 2. document.getElementsByTagName() -> mengembalikkan HTMLCollection
// const p = document.getElementsByTagName('p');
// akan menghasilkan HTML Collection mirip 'array'
// hasil HTMLCollection(length) [isi] -> karena tidak peduli ada dimana 
// tag dengan p pokoknya ada 4
// index: elemen
// length: total -> ada berapa elemen yang terpilih

// p.style.backgroundColor = 'lightblue';
// p = array, yang bisa di warnai hanya element, tidak bisa set property bg dari array

// dengan menambahkan index pada akhir pendeklarasian ('p')[index]
// p[0].style.backgroundColor = 'lightblue';
// p[1].style.backgroundColor = 'lightblue';
// p[2].style.backgroundColor = 'lightblue';
// p[3].style.backgroundColor = 'lightblue';

// atau dengan looping (untuk mengganti semua elemen p yang terpilih)
// for(let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }

// walaupun yang kita ambil elemen yang tag nya hanya 'satu', menggunakan tagname
// const h1 = document.getElementsByTagName('h1');
// akan menghasilkan HTMLCollection
// const h1 = document.getElementsByTagName('h1')[0];
// membuat h1 menjadi elemen, agar lebih gampang menuliskan index di akhir pendeklarasian
// cara baca "ambil semua elemen, lalu ambil yang indexnya '0'/elemen pertama"
// h1.style.fontSize = '50px';

// 3. document.getElementsByClassName() -> mengembalikkan HTMLCollection
// const p1 = document.getElementsByClassName('p1')[0];
// karena bentuknya HTMLCollection (mirip array),
// untuk mengganti style harus memakai index
// p1.innerHTML = 'Ini diubah dari Javascript';



// // 4. document.querySelector();
// // query -> menanyakan mengenai 'Selector' 
// // Selector -> selector pada 'CSS'  
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// // yang dikembalikkan hanya element 'p' yang pertama kali ditemukan/paling atas
// const p = document.querySelector('p');
// p.innerHTML = 'Ini diubah melalui Javascript';

// document.querySelectorAll()
// const p = document.querySelectorAll('p');
// for(let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }




// Mengubah Node root 
// salah satu cara agar lebih efektif
// menyeleksi dom


// const p4 = document.getElementsByTagName('p')[3];
// p4.style.backgroundColor = 'lightblue';

// const p4 = document.querySelectorAll('p');
// p4[3].style.backgroundColor = 'lightblue';

// Mengubah node document
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');

const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange';