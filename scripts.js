const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');
const links = document.querySelectorAll('a[href^="#"]'); 
const sections = document.querySelectorAll('.section');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('open');
    navbar.classList.toggle('active');
});

function showSection(sectionId) {
    sections.forEach(section => {
        section.classList.remove('active');
    });
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

links.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection && targetSection.classList.contains('section')) {
            e.preventDefault();
            showSection(targetId);

            history.pushState(null, null, '#' + targetId);

            menuIcon.classList.remove('open');
            navbar.classList.remove('active');
        }
    });
});

showSection('inicio');
