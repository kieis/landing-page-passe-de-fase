const doc = document;

function preSlide() {
    const nodeList = doc.querySelectorAll('.slide');
    let i = 0;
    nodeList.forEach((e) => {
        i++;
        if(i !== 1){
            e.style.display = 'none';
        }
    });
};
preSlide();

function onChangeSlide(id) {
    const nodeList = doc.querySelectorAll('.slideDot');
    let i = 0;
    nodeList.forEach((e) => {
        i++;
        const svg = e.querySelector('svg');
        const curSlide = doc.querySelector(`#slide${i}`)
        if(i === id) {          
            svg.classList.add('active');
            curSlide.style.display = 'grid';
        }else{
            svg.classList.remove('active');
            curSlide.style.display = 'none';
        }
    });
}

function onScroll() {
    const navMobile = doc.querySelector('.nav-mobile');
    if(navMobile.offsetWidth !== 0){     
        const block = doc.querySelector('.block');
        const logo = navMobile.querySelector('.logo');
        const navMenu = doc.querySelector('.nav-mobile-menu')
        if(scrollY > 0) {
            navMobile.setAttribute('style', 'position: fixed;');
            block.setAttribute('style', 'display: none;');
            logo.setAttribute('style', 'bottom: 0;');
            navMenu.style.position = 'fixed';
            navMenu.style.width = '100%';
            navMenu.style.top = '8rem';
        }else {
            navMobile.setAttribute('style', 'position: initial;');
            block.setAttribute('style', 'display: block;');
            logo.setAttribute('style', 'bottom: 70%;'); 
            navMenu.style.position = 'initial';
            navMenu.style.top = '0';
        }
    }
}

function onWhatsWindow() {
    const whatsWindow = doc.querySelector('#whatswindow');
    if(whatsWindow) {
        if(whatsWindow.classList.contains('visible')){
            whatsWindow.classList.remove('visible');
            whatsWindow.classList.remove('anim-fade');
        }else{
            whatsWindow.classList.add('visible');
            whatsWindow.classList.add('anim-fade');
        }
    }
}

function onOpenMenu() {
    const mobileMenu = doc.querySelector('.nav-mobile-menu');
    mobileMenu.style.display = 'block';

    const buttonOpen = doc.querySelector('.navigation-button-open');
    buttonOpen.style.display ='none';

    const buttonClose = doc.querySelector('.navigation-button-close');
    buttonClose.style.display = 'flex';
}

function onCloseMenu() {
    const mobileMenu = doc.querySelector('.nav-mobile-menu');
    mobileMenu.style.display = 'none';

    const buttonOpen = doc.querySelector('.navigation-button-open');
    buttonOpen.style.display ='flex';

    const buttonClose = doc.querySelector('.navigation-button-close');
    buttonClose.style.display = 'none';
}

window.addEventListener('resize', function(event){
    const clientWidth = doc.querySelector('body').clientWidth;

    /*mobile */
    if(clientWidth > 1024){
        const col_items = doc.querySelector('.col-items').setAttribute('style', `padding-left: 28%`);

        onCloseMenu();

        const navMobile = doc.querySelector('.nav-mobile');
        if(navMobile.offsetWidth === 0){     
            const block = doc.querySelector('.block');
            block.setAttribute('style', 'display:block');
        }
    }else {
        const col_items = doc.querySelector('.col-items').setAttribute('style', `padding-left: ${15 * clientWidth / 1024}%`);
    }
});