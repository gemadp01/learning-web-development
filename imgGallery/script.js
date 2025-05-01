// const imgJumbo = document.querySelector('.jumbo');

// const thumbnail = document.querySelector('.thumbnail');

// thumbnail.addEventListener('click', function(e) {
//     let imgThumb = e.target.getAttribute('src');
//     imgJumbo.setAttribute('src', imgThumb);
// })

const container = document.querySelector('.container');

const imgJumbo = document.querySelector('.jumbo');

const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function (e) {
  // console.log(e);

  // cek apakah yang diklik adalah element dengan class="thumb"
  if (e.target.className == 'thumb') {
    imgJumbo.src = e.target.src;
    // console.log(imgJumbo.src);
    imgJumbo.classList.add('fade');

    setTimeout(function () {
      imgJumbo.classList.remove('fade');
    }, 500);

    thumbs.forEach(function (thumb) {
      // if(thumb.classList.contains('active')) {
      //     thumb.classList.remove('active');
      // }

      thumb.className = 'thumb';
    });

    e.target.classList.add('active');
  }
});
