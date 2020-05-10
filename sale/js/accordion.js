const accordionBtn = document.querySelector('#accordion'),
    accordionList = document.querySelector('.accordion__socials-list'),
    dots = document.querySelector('#dots'),
    accordionDotList = document.querySelector('.accordion__dots-list');
dots.addEventListener('click', () => accordionDotList.classList.toggle('accordion__dots-list--active'))
accordionBtn.addEventListener('click', () => accordionList.classList.toggle('accordion__socials-list--active'))
