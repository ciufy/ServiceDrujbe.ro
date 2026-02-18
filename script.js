// Toggle meniu hamburger
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); 
    nav.classList.toggle('active');       
});

// Banner legal GDPR
const legalBanner = document.getElementById('legal-banner');
const acceptLegal = document.getElementById('accept-legal');

// Ascunde bannerul dacă clientul a acceptat deja
if(localStorage.getItem('legalAccepted') === 'true'){
    legalBanner.style.display = 'none';
}

// Când clientul apasă Accept
acceptLegal.addEventListener('click', () => {
    localStorage.setItem('legalAccepted', 'true');
    legalBanner.style.display = 'none';
});
