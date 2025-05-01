// DOM Manipulation
// buat element baru
const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('Paragraf Baru');
// simpan tulisan ke dalam paragraf
pBaru.appendChild(textPBaru);


// simpan pBaru di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

function createElementBaru(element, isi) {
    const elementBaru = document.createElement(element);
    const isiElement = document.createTextNode(isi);

    elementBaru.appendChild(isiElement);

    return elementBaru;
}

const liBaru = document.createElement('li');
const itemBaru = document.createTextNode('Item Baru')

liBaru.appendChild(itemBaru);

const sectionB = document.getElementById('b');
const ul = sectionB.getElementsByTagName('ul')[0];
const li2 = sectionB.querySelector('ul li:nth-child(2)');

ul.insertBefore(createElementBaru('li', 'Item Baru'), li2);


// menghapus child dari sebuah parent
// const sectionA = document.getElementById('a');
const link = sectionA.getElementsByTagName('a')[0];

sectionA.removeChild(link);



// replace child dari sebuah parent
// const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector('p');

const h2Baru = createElementBaru('h2', 'Judul Baru!');

sectionB.replaceChild(h2Baru, p4);


// menandai element yang baru, agar keliatan bedanya
pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';




