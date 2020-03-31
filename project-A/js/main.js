
// JS for nav

window.onscroll = function() {scrollFunction()};
var nav = document.getElementById('nav')
var sticky = nav.offsetTop
// function scrollFunction()
// {
//     if(document.body.scrollTop>200 || document.documentElement.scrollTop>200)
//     {
//         document.getElementById('nav').classList="nav fade-down"
//         document.getElementById('logo').style.maxWidth="60%"
//     }
//     else
//     {
//         document.getElementById('nav').classList="nav"
//         document.getElementById('logo').style.maxWidth="40%"

//     }
// }

function scrollFunction()
{
    if(window.pageYOffset >=sticky+sticky)
    {
        nav.classList.add('fade-down');
        document.getElementById('logo').style.maxWidth='40%';
        nav.style.borderBottom="0.5px solid #eeeeee";
        
    }
    else
    {
        nav.classList.remove('fade-down');
        document.getElementById('logo').style.maxWidth='50%'
        nav.style.borderBottom="";

    }
}




// js for carousel




const container = document.querySelector('.carolsel-container');
const slider = container.querySelector('.carolsel-slide');
const sliderImages = container.querySelectorAll('.carolsel-slide img')

const leftBtn = document.querySelector('#prevBtn');
const rightBtn = document.querySelector('#nextBtn');

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




