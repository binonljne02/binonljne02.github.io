const container = document.querySelector('.carolsel-container');
const slider = container.querySelector('.carolsel-slide');
const sliderImages = container.querySelectorAll('.carolsel-slide img')

const leftBtn = document.querySelector('.leftBtn');
const rightBtn = document.querySelector('.rightBtn');

let counter = 1;
const width = sliderImages[0].clientWidth;  


slider.style.transform = 'translateX(' + (-width * counter) + 'px)';

rightBtn.addEventListener('click', ()=>{
  if(counter >= sliderImages.length -1) return;
  slider.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  slider.style.transform = 'translateX(' + (-width * counter) + 'px)';
});

leftBtn.addEventListener('click', ()=>{
  if(counter <= 0) return;
  slider.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  slider.style.transform = 'translateX(' + (`${-width * counter}`) + 'px)';
});

slider.addEventListener('transitionend', ()=>{
  
  if(sliderImages[counter].id === 'lastClone'){
    slider.style.transition = 'none';
    counter = sliderImages.length-2;
    slider.style.transform = 'translateX(' + (`${-width * counter}`) + 'px)';
  }
  if(sliderImages[counter].id === 'firstClone'){
    slider.style.transition = 'none';
    counter = sliderImages.length - counter;
    slider.style.transform = 'translateX(' + (`${-width * counter}`) + 'px)';  
  }
});




