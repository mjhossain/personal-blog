


// Smooth Scrolling Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    });
});


//Typing Effect
var typed = new Typed("#talent", {
  strings: ["Web Developer", "Graphics Designer", "Photographer"],
  typeSpeed: 50,
  backSpeed: 40,
  loop: true
});
