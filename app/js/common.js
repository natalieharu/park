import '@js/modules/slider';
import '@js/modules/modal';
import '@js/modules/validation';
import '@js/modules/hamburger';
import '@js/modules/parallax-bg';

import '@css/common.css';

const projectSliders = document.querySelectorAll('.slider-projects .swiper-slide');

projectSliders.forEach(slider => {
    const moreButton = slider.querySelector('.more-btn');

    moreButton.addEventListener('click', () => {
        const projectInfo = slider.querySelector('.project-info');
        const projectInfoHeight = projectInfo.scrollHeight;

        if(projectInfo.classList.contains('opened')) {
            projectInfo.style.height = '48px';
            moreButton.textContent = 'Читать полностью';
        } else {
            projectInfo.style.height = projectInfoHeight + 'px';
            moreButton.textContent = 'Свернуть';
        }
        projectInfo.classList.toggle('opened');
    }); 
});

if(module && module.hot) {
    module.hot.accept();
}