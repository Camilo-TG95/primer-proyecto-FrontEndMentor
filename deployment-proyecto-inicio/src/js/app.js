
const botonMenu = document.querySelector(".icono-hamburguesa");
const movilMenu = document.querySelector(".movil-menu");



function movilNav() {


}

botonMenu.onclick = function () {

    const overlay = document.createElement('DIV');
    overlay.appendChild (movilMenu);
    overlay.classList.add('overlay');

    const body =document.querySelector('body');
    body.appendChild(overlay);
    movilMenu.classList.add('movil-menu-activo');
}


const cerrarMenu = document.querySelector(".cerrar-menu");

function cerrarMovilMenu() {
    const overlay = document.querySelector(".overlay");
    overlay.classList.remove('overlay');
    movilMenu.classList.remove('movil-menu-activo');
}


cerrarMenu.addEventListener("click", cerrarMovilMenu);