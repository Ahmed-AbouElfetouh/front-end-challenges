// Create The Slider
const sliderBullets = document.querySelectorAll('#controls li');
const sliderContent = document.querySelectorAll('#content li');

sliderBullets.forEach((bullet) => {
  bullet.addEventListener('click', (e) => {
    sliderBullets.forEach((bullet) => {
      bullet.classList.remove('active');
    });
    e.target.classList.add('active');

    sliderContent.forEach((element) => {
      element.classList.remove('active');
    });
    document.querySelector(e.target.dataset.slide).classList.add('active')
  });
});
