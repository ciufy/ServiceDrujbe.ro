const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active'); 
  nav.classList.toggle('active');       
});
