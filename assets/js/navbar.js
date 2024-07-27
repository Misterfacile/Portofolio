function toggleMenu() {
    var menu = document.getElementById('nav-menu');
    menu.classList.toggle('show');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = window.innerWidth <= 600 ? 60 : 120; // 60 for mobile, 120 for larger devices
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = targetElement.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Hide menu on link click (for mobile)
            var menu = document.getElementById('nav-menu');
            menu.classList.remove('show');
        }
    });
});