function headerBanner() {
  const scrollYPosition = window.scrollY;
  const banner = document.querySelector('.banner');
  if(scrollYPosition < 100) {
    banner.classList.add('show-banner');
  } else {
    banner.classList.remove('show-banner');
  }
}
document.addEventListener('scroll', headerBanner);

const getYear = new Date();
document.querySelector('#copyright-year').innerHTML = getYear.getFullYear();

const menuButton = document.querySelector('#open-mobile-menu');
const mobileMenu = document.querySelector('#mobile-menu');
const navbar = document.querySelector('#navbar');
menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('active');
  if (mobileMenu.classList.contains('show')) {
    mobileMenu.classList.remove('show');
    mobileMenu.classList.add('hidden');
    navbar.classList.remove('hidden');
  } else {
    navbar.classList.add('hidden');
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('show');
  }
});