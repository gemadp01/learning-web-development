// Function Expression

// var jumlahDuaBilangan = function(a, b) {
//     var total;
//     total = a + b;
//     return total;
// }

// console.log(jumlahDuaBilangan(1,1));

var penumpang = [];
penumpang.push("Test Penumpang")
console.log(penumpang);
var tambahPenumpang = function(namaPenumpang) {
    penumpang.push(namaPenumpang);
    return penumpang;
}
var test = tambahPenumpang("gema");
console.log(test);