// Membuat object bertipe Constructor
function Angkot(sopir, trayek, kas, penumpang) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.kas = kas;
    this.penumpang = penumpang;

    this.penumpangNaik = function(namaPenumpang) {
        if(this.penumpang.length == 0) {
            this.penumpang.push(namaPenumpang);
            return this.penumpang;
        } else {
            for(var i = 0; i < this.penumpang.length; i++) {
                if(this.penumpang[i] == undefined) {
                    this.penumpang[i] = namaPenumpang;
                    return this.penumpang;
                } else if(this.penumpang[i] === namaPenumpang) {
                    console.log(this.penumpang[i] + " sudah ada di dalam Angkot!");
                    return this.penumpang;
                } else if(i == this.penumpang.length - 1) {
                    this.penumpang.push(namaPenumpang);
                    return this.penumpang;
                }
            }
        }
    }
    
    this.penumpangTurun = function(namaPenumpang, bayar) {
        if(this.penumpang.length == 0) {
            console.log("Angkot masih kosong!");
        } else {
            for(var i = 0; i < this.penumpang.length; i++) {
                if(this.penumpang[i] === namaPenumpang) {
                    this.penumpang[i] = undefined;
                    this.kas += bayar;
                    return this.penumpang;
                } else if(i == this.penumpang.length - 1) {
                    console.log(namaPenumpang + " tidak ada di dalam Angkot!");
                    return this.penumpang;
                }
            }
        }
    }
};

var angkot1 = new Angkot("Sandhika Galih", ["Cicaheum", "Cibiru"], 0, []);