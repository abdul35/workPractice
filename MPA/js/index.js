document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('#burger'),
    headerInfo = document.querySelector('.header__info');
    
    
    burger.addEventListener('click', (e) => {
        headerInfo.classList.toggle("header__info_show")
        document.querySelector('.header__logo').classList.toggle('logo_hidden')
        document.querySelector('.header').classList.toggle('header_margin_res')
    })

})