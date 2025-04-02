const aboutVideo = document.querySelector('.about__video');
const aboutViedeoPlay = document.querySelector('.about__video-play');
const aboutVideoPreview = document.querySelector('.about__video-preview');

aboutViedeoPlay.addEventListener('click', () => {
  aboutVideoPreview.style.display = 'none';
  aboutViedeoPlay.style.display = 'none';
  aboutVideo.style.display = 'block';
  aboutVideo.src += '?autoplay=1';
});
