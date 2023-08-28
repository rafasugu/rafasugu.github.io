const nav = document.querySelector('nav');
const mobileNav = document.querySelector('nav.mobile-nav');
const menuIcon = document.querySelector('.icon-menu');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');


window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('sticky');
    mobileNav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
    mobileNav.classList.remove('sticky');
  }
});

// Add a click event listener to the menu icon
menuIcon.addEventListener('click', () => {
  mobileMenuContainer.classList.toggle('active');
});

// Add click event listeners to all links in the mobile menu container
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-container a');

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuContainer.classList.remove('active');
  });
});

// Add smooth scroll effect to all anchor links with class "smooth-scroll"
const smoothScrollLinks = document.querySelectorAll(".smooth-scroll");

smoothScrollLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            const targetOffset = target.getBoundingClientRect().top;
            window.scrollTo({
                top: targetOffset + window.scrollY,
                behavior: "smooth" // Smooth scrolling effect
            });
        }
    });
});