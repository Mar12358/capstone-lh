let home = document.querySelectorAll('.toggle-blur');
const ham = document.querySelector('.ham-link');
let menuList = document.querySelector('.popup-menu');
let restOfPage = document.querySelectorAll('.toggle-selection');

function clickMenu() {
  for (let i = 0; i < home.length; i += 1) {
    home[i].classList.toggle('blend-mode');
  }
  
  menuList.classList.toggle('invisible');
  for (let i = 0; i < restOfPage.length; i += 1) {
    restOfPage[i].classList.toggle('invisible');
  }
}

ham.addEventListener('click', clickMenu);