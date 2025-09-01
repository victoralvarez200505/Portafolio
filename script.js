document.addEventListener('DOMContentLoaded', function() {
    const nombre = document.getElementById('name');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const formulario = document.getElementById('contactForm'); // <- aquí el cambio

    formulario.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que la página se recargue
        console.log('Nombre:', nombre.value);
        console.log('Email:', email.value);
        console.log('Mensaje:', mensaje.value);
        nombre.value = '';
        email.value = '';
        mensaje.value = '';
        alert('Formulario enviado. Revisa la consola para ver los datos.');
    });
}); 

// Menú hamburguesa 
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('nav-list--open');
    });
});



