// const p3 = document.querySelector('.p3');

// function ubahWarna() {
//     p2.style.backgroundColor = 'lightblue';
// }

// const p2 = document.querySelector('.p2');

// p2.onclick = ubahWarna;

// const p4 = document.querySelector('section#b p');

// function createNewElement(elemen, isi) {
//     const elemenBaru = document.createElement(elemen);
//     const isiElemen = document.createTextNode(isi);

//     elemenBaru.append(isiElemen);
//     return elemenBaru;
// }

// p4.addEventListener('click', function() {
//     const ul = document.getElementsByTagName('ul')[0];
//     ul.append(createNewElement('li', 'New Item'));
// })

const sectionA = document.getElementById('a');

sectionA.addEventListener('click', function() {
    sectionA.classList.toggle('biru-muda');
})


 