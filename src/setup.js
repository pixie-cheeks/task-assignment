const setupHamMenu = () => {
  const hamMenuBtn = document.querySelector('.js-ham-menu');
  const navContent = document.querySelector('.js-nav-content');

  const onHamBtnClick = () => {
    hamMenuBtn.classList.toggle('active');
    navContent.classList.toggle('visible');
  };

  hamMenuBtn.addEventListener('click', onHamBtnClick);
};

const setupTopScroll = () => {
  const scrollButton = document.querySelector('.js-scroll-button');

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollButton.classList.add('scroll-button--active');
    } else {
      scrollButton.classList.remove('scroll-button--active');
    }
  };

  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  window.addEventListener('scroll', scrollFunction);
  scrollButton.addEventListener('click', topFunction);
};

const setupEverything = () => {
  setupHamMenu();
  setupTopScroll();
};

export { setupEverything };
