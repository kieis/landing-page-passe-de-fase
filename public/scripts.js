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