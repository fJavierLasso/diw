//when dom content loaded
document.addEventListener("DOMContentLoaded", function() {
    const menuAmigos = document.querySelector('.menuAmigos');
    const menuOptions = document.querySelector('.menu-options');
    const ranking = document.querySelector('.ranking');

    menuAmigos.addEventListener('click', function (event) {
        // Mostrar el menú
        menuOptions.style.display = 'block';

        // Posicionar el menú debajo del cursor
        const x = event.pageX;
        const y = event.pageY;

        menuOptions.style.left = `${x}px`;
        menuOptions.style.top = `${y}px`;
    });

    ranking.addEventListener('click', function (event) {
           // Mostrar el menú
           menuOptions.style.display = 'block';

           // Posicionar el menú debajo del cursor
           const x = event.pageX;
           const y = event.pageY;
   
           menuOptions.style.left = `${x}px`;
           menuOptions.style.top = `${y}px`;
       });


    document.addEventListener('click', function (event) {
        // Ocultar el menú al hacer clic fuera del contenedor
        if (!menuAmigos.contains(event.target) && !ranking.contains(event.target)) {
            menuOptions.style.display = 'none';
        }
    });

    
});