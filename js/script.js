// ------------------- //
// APARTADO 1 PROYECTO //
// ------------------- //


// 1. Seleccionar con getElementById (por id)
const botonContacto = document.getElementById('botonContacto');
console.log(botonContacto);  

// 2. Seleccionar con querySelector (primer elemento que coincide con el selector)
const primerMenuLink = document.querySelector('.header__menu-link');
console.log(primerMenuLink);  

// 3. Seleccionar con querySelectorAll (todos los elementos que coinciden con el selector)
const todosMenuLinks = document.querySelectorAll('.header__menu-link');
console.log(todosMenuLinks);  

// Recorremos la NodeList y mostramos su contenido
todosMenuLinks.forEach(link => {
    console.log(link.textContent);  // Muestra el texto de cada enlace en el menu
});

// 4. Seleccionar con getElementsByClassName (todos los elementos con la clase proporcionada)
const caracteristicasItems = document.getElementsByClassName('caracteristicas__item');
console.log(caracteristicasItems);  // Muestra una HTMLCollection con todos los <li> con la clase "caracteristicas__item"

// ------------------- //
// APARTADO 2 PROYECTO //
// ------------------- //

// ---- CAMBIO DE TITULO ----//

// Accedemos al titulo con querySelector
const bienvenidaTitle = document.querySelector('.bienvenida__title');

// Cambiamos el contenido del titulo
bienvenidaTitle.textContent = "Bienvenido a BLETETECH: Innovacion tecnologica";
console.log(bienvenidaTitle);  // Veras el nuevo contenido en la consola


// ---- CAMBIO DE ESTILO EN BOTON ----

// Seleccionamos el boton y la seccion de bienvenida
const a = document.getElementById('changeColorButton');
const bienvenidaSection = document.querySelector('.bienvenida__cta');

// Añadimos un evento de clic al boton
a.addEventListener('click', () => {
    // Cambiamos el color de fondo de la seccion
    bienvenidaSection.style.backgroundColor = '#022B3A'; // Cambio a color primario
    console.log('Color de fondo cambiado');
});

// ---- ELIMINO ULTIMO PRODUCTO ---- //

// Seleccionamos la lista de productos
const listaProductos = document.querySelector('.products__flex');

// Seleccionamos el ultimo producto
const ultimoProducto = listaProductos.lastElementChild;

// Eliminamos el ultimo producto
ultimoProducto.remove();
console.log('Producto eliminado');

// ---- AGREGAMOS UN NUEVO PRODUCTO ---- //

// Creamos un nuevo elemento <li> para el producto
const nuevoProducto = document.createElement('li');
nuevoProducto.classList.add('product-card');  // Asignamos la misma clase de los demas productos

// Añadimos el contenido interno del nuevo producto
nuevoProducto.innerHTML = `
    <h3 class="product-card__title">Samsung Galaxy S24</h3>
    <img src="./assets/img/products/silla.png" alt="Silla Gaming AjXm" class="product-card__image">
    <a href="https://www.pccomponentes.com/samsung-galaxy-s24" class="product-card__link">Ver mas</a>
`;

// Lo añadimos al final de la lista de productos
listaProductos.appendChild(nuevoProducto);

console.log(nuevoProducto); // Para verificar que se ha añadido correctamente

