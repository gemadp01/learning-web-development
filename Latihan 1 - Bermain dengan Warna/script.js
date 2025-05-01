const tUbahWarna = document.getElementById('tUbahWarna');

tUbahWarna.addEventListener('click', function() {
    // document.body.setAttribute('class', 'bgBiru');
    document.body.classList.toggle('biru-muda');
})

let createNewButton = function(elemen, isi) {
    const newElement = document.createElement(elemen);
    const newText = document.createTextNode(isi);
    newElement.append(newText);
    newElement.setAttribute('type', 'button');
    return newElement;
}

let createNewElement = function(elemen, isi) {
    const newElement = document.createElement(elemen);
    const newText = document.createTextNode(isi);
    newElement.append(newText);
    return newElement;
}

const tAcakWarna = createNewButton('button','Acak Warna');

tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});

// const sMerah = document.querySelector('input[name=sMerah]');
// const sHijau = document.querySelector('input[name=sHijau]');
// const sBiru = document.querySelector('input[name=sBiru]');


// sMerah.addEventListener('input', function() {
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
// });

// sHijau.addEventListener('input', function() {
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
// });

// sBiru.addEventListener('input', function() {
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
// });

const sInput = document.querySelectorAll('input');
    
const nElementWarnaMerah = document.createElement('p');
const nElementWarnaHijau = document.createElement('p');
const nElementWarnaBiru = document.createElement('p');
const nWarnaMerah = document.createTextNode(sInput[0].value);
const nWarnaHijau = document.createTextNode(sInput[1].value);
const nWarnaBiru = document.createTextNode(sInput[2].value);
nElementWarnaMerah.appendChild(nWarnaMerah)
nElementWarnaHijau.appendChild(nWarnaHijau)
nElementWarnaBiru.appendChild(nWarnaBiru)


    


for(let i = 0; i < sInput.length; i++) {

    sInput[i].addEventListener('input', function() {
        const r = sInput[0].value;
        const g = sInput[1].value;
        const b = sInput[2].value;

        nElementWarnaMerah.innerHTML = sInput[0].value;
        nElementWarnaHijau.innerHTML = sInput[1].value;
        nElementWarnaBiru.innerHTML = sInput[2].value;
        sInput[0].after(nElementWarnaMerah);
        sInput[1].after(nElementWarnaHijau);
        sInput[2].after(nElementWarnaBiru);

        document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
    })

}



// menangkap body
document.body.addEventListener('mousemove', function(event) {
    // posisi mouse 
    // console.log(event.clientX);
    // ukuran browser
    // console.log(window.innerWidth);
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);

    document.body.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +', 100)';
    
})