// Membuat Object
// Object Literal, pasangan key dan value
// key = properti dari object
// var mhs = {
//     nama : "Sandhika Galih",
//     nrp : "043040023",
//     email : "sandhikagalih@unpas.ac.id",
//     jurusan : "Teknik Informatika"
// }

// var mhs2 = {
//     nama : "Doddy",
//     nrp : "033040007",
//     email : "doddy@gmail.com",
//     jurusan : "Teknik Industri",
//     halo : function(nama : "test") {
//         console.log(this);
//         console.log("halo");
//     }
// }
// mhs2.halo();


// Function Declaration
// function buatObjectMahasiswa(nama, nrp, email, jurusan) {
//     var mhs = {};
//     mhs.nama = nama;
//     mhs.nrp = nrp;
//     mhs.email = email;
//     mhs.jurusan = jurusan;
//     return mhs;
// };
// var mhs3 = buatObjectMahasiswa("Gema Dodi Pranata", 19111038, "gema.dp@student.unibi.ac.id", "Teknik Informatika")

// Constructor 
// (sama halnya function declaration 
// tapi tanpa deklarasi var object & return karena otomatis dibuatkan)
function Mahasiswa(nama, nrp, email, jurusan) {
    // var this = {};
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
    console.log(this.nama);
    // return this;
}
var mhs4 = new Mahasiswa("Gema Dodi Pranata", 19111038, "gemadp01@gmail.com", "Informatika")


