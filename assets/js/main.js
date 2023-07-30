
//*========== NAVBAR TOGGLE WITH GSAP ANIMATION ==========*//
const navbarItems = document.querySelector('.navbar-items');
const hamburger = document.querySelector('.hamburger');
const mediaQuery = window.matchMedia('(max-width: 500px)');

let t1;

const initTimelineAnimation = () => {
  t1 = gsap.timeline({ paused: true });
  t1.fromTo(".navbar-items", { top: "-1000%" }, { top: "0", duration: 1, ease: "expo.out", borderBottomRightRadius: "0", borderBottomLeftRadius: "0" });
  t1.fromTo(".navbar-link", { y: "50%", opacity: 0 }, { y: "0", opacity: 1, duration: 0.3, stagger: 0.2, ease: "Expo.easeInOut" });
  t1.fromTo(".navbar-link-credit", { y: "50%" }, { y: "0", opacity: 1, duration: 0.3, stagger: 0.2, ease: "Expo.easeInOut" });
};

// Function to handle navbar link visibility and animation
const handleNavbarLink = () => {
  if (mediaQuery.matches) {
    gsap.set(".navbar-link", { y: "50%", opacity: 0 });
    gsap.set(".navbar-link-credit", { y: "50%", opacity: 0 });
  } else {
    gsap.set(".navbar-link", { y: "0", opacity: 1 });
    gsap.set(".navbar-link-credit", { y: "0", opacity: 1 });
  }
};

// Function to handle menu open/close animation
const handleMenuAnimation = () => {
  navbarItems.classList.toggle('active');

  if (navbarItems.classList.contains('active')) {
    t1.play().timeScale(1);
  } else {
    t1.timeScale(2);
    t1.reverse();
  }
};

// Initialize the timeline animation
initTimelineAnimation();

// Check navbar link visibility and animation on page load
handleNavbarLink();

hamburger.addEventListener('change', handleMenuAnimation);

window.addEventListener('resize', () => {
  if (!navbarItems.classList.contains('active')) {
    initTimelineAnimation();
    handleNavbarLink();
  }
});

// HIDE AND SHOW NAVBAR WHEN SCROLLING
const navbar = document.getElementById('nav')
const navbar_Items = document.querySelector('.navbar-items');
let previousScrollPosition = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset;

  if (!navbar_Items.classList.contains('active')) {
    if (currentScrollPosition > previousScrollPosition) {
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
    }
  }

  previousScrollPosition = currentScrollPosition;
});
//*========== END ==========*//


/*========== DARK LIGHT MODE ==========*/
const themeToggle = document.querySelector('.switch input');
const darkThemeClass = 'dark-theme';

const toggleDarkTheme = () => {
  document.body.classList.toggle(darkThemeClass);
  if (document.body.classList.contains(darkThemeClass)) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
};

const selectedTheme = localStorage.getItem('theme');
if (selectedTheme === 'dark') {
  document.body.classList.add(darkThemeClass);
  themeToggle.checked = true;
}

themeToggle.addEventListener('change', toggleDarkTheme);
//*========== END ==========*//