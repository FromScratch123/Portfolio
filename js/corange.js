'use strict';

$(function () {



{

  const images = [
    './../images/corange/pic01.png',
    './../images/corange/pic02.png',
    './../images/corange/pic03.png',
    './../images/corange/pic04.png',
    './../images/corange/pic05.png',
    './../images/corange/pic06.png',
    './../images/corange/pic07.png',
    './../images/corange/pic09.png',
    './../images/corange/pic10.png',
    './../images/corange/pic11.png',
    './../images/corange/pic12.png',
    './../images/corange/pic13.png',
    './../images/corange/pic14.png',
    './../images/corange/pic15.png',
  ]

  let currentIndex = 0;

  const mainImage = document.getElementById('main');

  mainImage.src = images[currentIndex];
  images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;

    const li = document.createElement('li');
    if (index === currentIndex) {
      li.classList.add('current');
    }
    li.addEventListener('click', () => {
      mainImage.src = image;
      const thumbnails = document.querySelectorAll('.thumbnails > li');
      thumbnails[currentIndex].classList.remove('current');
      currentIndex = index;
      thumbnails[currentIndex].classList.add('current');
    });
    li.appendChild(img);
    document.querySelector('.thumbnails').appendChild(li);
  });

  const next = document.getElementById('next');
  next.addEventListener('click', () => {
    let target = currentIndex + 1;
    if (target === images.length) {
      target = 0;
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
  });

  const prev = document.getElementById('prev');
  prev.addEventListener('click', () => {
    let target = currentIndex - 1;
    if (target < 0) {
      target = imgages.length - 1;
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
  });

  let timeoutId;

  function playSlideshow() {
    timeoutId = setTimeout(() => {
      next.click();
      playSlideshow();
    }, 2000);
  }

  let isPlaying = false;

  const play = document.getElementById('play'); 
  play.addEventListener('click', () => {
    if (isPlaying === false) {
      playSlideshow();
      play.textContent = 'Pause';
    } else {
      clearTimeout(timeoutId);
      play.textContent = 'Play';
    }
    isPlaying = !isPlaying;
  }); 

}

})