// without function
// let kubusSatu = 8;
// let kubusDua = 3;

// let volumeKubusSatu = kubusSatu ** 3;
// let volumeKubusDua = kubusDua ** 3;

// let hasil = volumeKubusSatu + volumeKubusDua;
// console.log(hasil);


// with function
function volumeKubus(a, b) {
    let volumeA, volumeB;
    let hasil;

    volumeA = a ** 3;
    volumeB = b ** 3;

    hasil = volumeA + volumeB;

    return hasil;
}

console.log(volumeKubus(8, 3))