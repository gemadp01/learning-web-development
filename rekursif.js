function cetakAngka(n) {
    if(n === 0) return;
    console.log(n);
    cetakAngka(n-1);
}

function faktorial(n) {
    if(n === 0) return 1;
    console.log(n);
    return n * faktorial(n-1);
}


cetakAngka(10);
console.log("\n");
console.log(faktorial(5));