
if(window.innerWidth > 1024) {
    const parallaxBg = document.querySelectorAll('[data-parallax]');
    parallaxBg.forEach(bg => {
        window.addEventListener('scroll', () => {
            const speed = 4.5;
            const xPos = '50%';
            const yPos = window.scrollY / speed;
            const coords = `${xPos} -${yPos}px`;
            bg.style.backgroundPosition = coords;
        });
    });
}