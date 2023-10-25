var loader = document.getElementById("preloader");
var content = document.querySelector('.content'); 

window.addEventListener("load", function() {
  loader.style.display = "none";
});

var typed1 = new Typed(".aftertext", {
  strings: ["Blue", "Artur"],
  typeSpeed: 150,
  backSpeed: 100,
  backDelay: 2000,
  startDelay: 100,
  loop: true,
  cursorChar: '_',
});

var typed2 = new Typed(".learning", {
  strings: ["javascript", "css", "html"],
  typeSpeed: 100,
  backDelay: 3000,
  startDelay: 50,
  loop: true,
  cursorChar: '', 
  fadeOut: true,
});

function updateProgressBar() {
  const progressBar = document.querySelector('.progress-bar');
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (window.pageYOffset / totalHeight) * 100;
  progressBar.style.width = progress + '%';
}


updateProgressBar(); 
window.addEventListener('scroll', updateProgressBar);
window.addEventListener('resize', updateProgressBar);

const aboutMe = document.querySelector('.aboutme');

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function handleScroll() {
  if (isElementInViewport(aboutMe)) {
    aboutMe.classList.add('show');
    window.removeEventListener('scroll', handleScroll);
  }
}

window.addEventListener('scroll', handleScroll); 
