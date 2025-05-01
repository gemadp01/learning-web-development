// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Gema Dodi Pranata</em>'

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "<div><p>Hello World</p></div>"




// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

// const judul = document.getElementsByTagName('h1')[0];
// const a = document.querySelector('section#a a');

// judul.setAttribute('name', 'Gema Dodi Pranata');
// a.setAttribute('id', 'link');

// console.log(a.getAttribute('href'));
// ambilkan atribut dari element 'a'

// a.removeAttribute('href')


// const p2 = document.querySelector('.p2');
// p2.setAttribute('class', 'label')
// class label akan menimpa class yang sudah ada di element



// element.classList -> untuk mengelola class
const p2 = document.querySelector('.p2');
// element.classList.add()
p2.classList.add('label');
// element.classList.remove()
p2.classList.remove('label');
// element.classList.toggle()
p2.classList.toggle();
// element.classList.item() -> untuk mengetahui nama class tertentu dalam sebuah element
// element.classList.contains() -> cek/menanyakan, adakah class di element tertentu
// element.classList.replace() -> mengganti class