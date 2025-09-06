document.addEventListener('DOMContentLoaded', function() {
    // Formulario
    const nombre = document.getElementById('name');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const formulario = document.getElementById('contactForm');

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Nombre:', nombre.value);
        console.log('Email:', email.value);
        console.log('Mensaje:', mensaje.value);
        nombre.value = '';
        email.value = '';
        mensaje.value = '';
        alert('Formulario enviado. Revisa la consola para ver los datos.');
    });

    // Menú hamburguesa
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('nav-list--open');
    });

    // Cierra el menú al hacer clic en un enlace
    navList.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            navList.classList.remove('nav-list--open');
        });
    });
});