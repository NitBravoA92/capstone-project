function headerBanner() {
  const scrollYPosition = window.scrollY;
  const banner = document.querySelector('.banner');
  if (scrollYPosition < 100) {
    banner.classList.add('show-banner');
  } else {
    banner.classList.remove('show-banner');
  }
}
document.addEventListener('scroll', headerBanner);

const getYear = new Date();
document.querySelector('#copyright-year').innerHTML = getYear.getFullYear();

const menuButton = document.querySelector('#open-mobile-menu');
const mobileMenu = document.querySelector('.navbar-menu');
menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});