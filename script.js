const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  
    if (burger) {
      burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        navLinks.forEach((link, index) => {
          if (link.style.animation) {
            link.style.animation = '';
          } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
          }
        });
      });
    }
  };
  
  document.addEventListener('DOMContentLoaded', navSlide);
  

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const message = document.getElementById('form-message');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.reset();
      form.style.display = 'none';
      message.classList.remove('d-none');
    });
  });