window.onload = function () {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');
  const openIcon = document.querySelector('.open-icon');
  const closeIcon = document.querySelector('.close-icon');

  if (hamburger && nav && openIcon && closeIcon) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('active');

      if (nav.classList.contains('active')) {
        openIcon.style.display = 'none';
        closeIcon.style.display = 'block';
      } else {
        openIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }
    });
  } else {
    console.error("❌ Missing hamburger or icon elements");
  }
};

// Smooth scroll to sections on nav click
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('data-target');
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
