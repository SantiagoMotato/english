const iconoMenu = document.querySelector('icono-menu'),
    menu = document.querySelector('menu');

iconoMenu.addEventListener('click', (e) => {

    menu.classList.toggle('active');

    document.body.classList.toggle('opacity');

    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == 'icons/menu-regular-24.png'){
        e.target.setAttribute('src', 'icons/menu-regular-24.png');
    }else{
        e.target.setAttribute('src', 'icons/menu-regular-24.png');
    }
})