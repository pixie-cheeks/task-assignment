const hamMenuBtn = document.querySelector('.js-ham-menu');
const navContent = document.querySelector('.js-nav-content');

const onHamBtnClick = () => {
  hamMenuBtn.classList.toggle('active');
  navContent.classList.toggle('visible');
};

hamMenuBtn.addEventListener('click', onHamBtnClick);
