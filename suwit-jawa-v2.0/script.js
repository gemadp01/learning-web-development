function getPilihanComputer() {
    var comp = Math.random();

    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, player) {

    if (player == comp) return 'SERI';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (player == 'semut') return (comp == 'orang') ? 'KALAH!' : 'MENANG!';
    
}


function putar() {
  const imgComputer = document.querySelector('.img-komputer');
  const gambar = ['gajah', 'orang', 'semut'];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function() {
    if(new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png')
    if(i == gambar.length) i = 0;
  }, 100)
}

let komputerSkor = 0;
let playerSkor = 0;
function infoSkor(hasil){
    if( hasil == 'MENANG!') return playerSkor += 1;
    if( hasil == 'KALAH!') return komputerSkor += 1;
    if( hasil == 'SERI!') return playerSkor, komputerSkor;
}


const pilihan = document.querySelectorAll('li img');

pilihan.forEach(function(pil) {
  pil.addEventListener('click', function() {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    
    putar();
    infoSkor(hasil);

    setTimeout(function() {
      const imgComputer = document.querySelector('.img-komputer');
      imgComputer.setAttribute('src', 'img/' + pilihanComputer + ".png");

      const info = document.getElementsByClassName('info')[0];
      // console.log(info)
      info.innerHTML = hasil;

      const skorPlayer = document.querySelector('.skorPlayer').innerHTML = playerSkor;

      const skorComp = document.querySelector('.skorComp').innerHTML = komputerSkor;
      
  
    }, 1000);

    


  // console.log('Computer : ' + pilihanComputer);
  // console.log('Player : ' + pilihanPlayer);
  // console.log('Hasil : ' + hasil);
  })
})



// const pGajah = document.querySelector('.gajah');



// pGajah.addEventListener('click', function() {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector('.img-komputer');
//   imgComputer.setAttribute('src', 'img/' + pilihanComputer + ".png");

//   const info = document.getElementsByClassName('info')[0];
//   // console.log(info)
//   info.innerHTML = hasil;


//   // console.log('Computer : ' + pilihanComputer);
//   // console.log('Player : ' + pilihanPlayer);
//   // console.log('Hasil : ' + hasil);
// })


// const pOrang = document.querySelector('.orang');

// pOrang.addEventListener('click', function() {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector('.img-komputer');
//   imgComputer.setAttribute('src', 'img/' + pilihanComputer + ".png");

//   const info = document.getElementsByClassName('info')[0];
//   // console.log(info)
//   info.innerHTML = hasil;


//   // console.log('Computer : ' + pilihanComputer);
//   // console.log('Player : ' + pilihanPlayer);
//   // console.log('Hasil : ' + hasil);
// })

// const pSemut = document.querySelector('.semut');

// pSemut.addEventListener('click', function() {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector('.img-komputer');
//   imgComputer.setAttribute('src', 'img/' + pilihanComputer + ".png");

//   const info = document.getElementsByClassName('info')[0];
//   // console.log(info)
//   info.innerHTML = hasil;


//   // console.log('Computer : ' + pilihanComputer);
//   // console.log('Player : ' + pilihanPlayer);
//   // console.log('Hasil : ' + hasil);
// })