// Smooth scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal elements on scroll
window.addEventListener('scroll', reveal);

function reveal() {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < windowHeight - revealPoint) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us, ' + document.getElementById('name').value + '!');
});
