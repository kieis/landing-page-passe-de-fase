const doc = document;

function onChangeSlide(id) {
    const nodeList = doc.querySelectorAll('.slideDot');
    let i = 0;
    nodeList.forEach((e) => {
        i++;
        const svg = e.querySelector('svg');
        if(i === id) {          
            svg.classList.add('active');
        }else{
            svg.classList.remove('active');
        }
    });
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
    mobileMenu.setAttribute('style', 'display: block');

    const buttonOpen = doc.querySelector('.navigation-button-open');
    buttonOpen.setAttribute('style', 'display: none');

    const buttonClose = doc.querySelector('.navigation-button-close');
    buttonClose.setAttribute('style', 'display: flex');
}

function onCloseMenu() {
    const mobileMenu = doc.querySelector('.nav-mobile-menu');
    mobileMenu.setAttribute('style', 'display: none');

    const buttonOpen = doc.querySelector('.navigation-button-open');
    buttonOpen.setAttribute('style', 'display: flex');

    const buttonClose = doc.querySelector('.navigation-button-close');
    buttonClose.setAttribute('style', 'display: none');
}

window.addEventListener('resize', function(event){
    const clientWidth = doc.querySelector('body').clientWidth;

    /*mobile */
    if(clientWidth > 1024){
        const col_items = doc.querySelector('.col-items').setAttribute('style', `padding-left: 28%`);

        onCloseMenu();
    }else {
        const col_items = doc.querySelector('.col-items').setAttribute('style', `padding-left: ${15 * clientWidth / 1024}%`);
    }
});