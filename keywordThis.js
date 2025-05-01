// this
// var a = 10;
// console.log(this);
// console.log(this.a);
// console.log(window.a);

























// membuat object

// cara 1 - function declaration 
// didalamnya dapat menyimpan variable objek kosong
function halo() {
    console.log(this);
    console.log("halo");
}
halo();
// this mengembalikkan objek global

// cara 2 - object literal
var obj = {nama : "gema"};
obj.halo = function() {
    console.log(this);
    console.log("halo");
}
obj.halo();
// this, mengembalikkan objek yang bersangkutan

// cara 3 - constructor
// function Halo() {
//     console.log(this);
//     console.log("halo");
// }
// var obj1 = new Halo();
// var obj2 = new Halo();