var penumpang = [];
var tambahPenumpang = function(namaPenumpang) {
    // Jika angkot kosong
    if(penumpang.length == 0) {
        // Tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // Kembalikan isi array & keluar dari function
        return penumpang;
    }
    // else
    else{
        // Telusuri seluruh kursi dari awal
        for(var i = 0; i < penumpang.length; i++) {

            // Jika ada kursi kosong
            if(penumpang[i] == undefined) {

                // Tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;

                // Kembalikan isi array & keluar dari function
                return penumpang;
            
            // Jika sudah ada nama yang sama
            }else if(namaPenumpang == penumpang[i]) {

                // Tampilkan pesan kesalahannya
                console.log(namaPenumpang + " sudah ada di dalam angkot!");

                // Kembalikan isi array & keluar dari function
                return penumpang;

            // Jika seluruh kursi terisi
            }else if(i == penumpang.length - 1) {

                // Tambah penumpang di akhir array
                penumpang.push(namaPenumpang);

                // Kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }          
}

var hapusPenumpang = function(namaPenumpang) {
    
    // Jika angkot kosong
    if(penumpang.length == 0) {
        
        // Tampilkan pesan bahwa angkot kosong, dan
        // "Angkot masih kosong!"
        console.log("Angkot masih kosong!");
        // tidak mungkin ada penumpang turun
        
        // kembalikan isi array & keluar dari function
        return penumpang;
    
    // else
    }else{
        
        // Telusuri seluruh kursi dari awal
        for(var i = 0; i < penumpang.length; i++) {
            
            // Jika nama penumpang sesuai
            if(penumpang[i] === namaPenumpang) {

                // hapus penumpang dengan mengubah namanya,
                // menjadi undefined
                penumpang[i] = undefined;

                // kembalikan isi array & keluar dari function
                return penumpang;

            }else if(i == penumpang.length - 1){

            // Jika tidak ada nama yang sesuai

                // tampilkan pesan kesalahannya
                // "namaPenumpang + tidak ada di dalam Angkot."
                console.log(namaPenumpang + " tidak ada di dalam Angkot.");

                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }
}