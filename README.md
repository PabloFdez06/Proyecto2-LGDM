
# Proyecto BleteTech

## Descripción

BleteTech es un sitio web dedicado a la venta de productos tecnológicos, como portátiles, componentes, periféricos, smartphones, y más. El sitio también ofrece servicios y una interfaz de contacto donde los usuarios pueden comunicarse con la empresa directamente. Además, cuenta con una sección de suscripción a un boletín de noticias y actualizaciones sobre las ofertas y novedades de la tienda.

Este proyecto fue diseñado con un enfoque moderno y accesible, utilizando tecnologías web como HTML, CSS, y JavaScript.

---

## Tecnologías Utilizadas

- **HTML**: Estructura básica del contenido de las páginas.
- **CSS**: Diseño visual y estilización de la interfaz.
- **JavaScript**: Interactividad de la página, incluyendo el modo oscuro y funcionalidades adicionales.
- **Font Awesome**: Iconos para mejorar la experiencia visual.
- **Google Fonts**: Uso de la fuente Montserrat para la tipografía.

---

## Características del Proyecto

### Páginas Principales

1. **Página de Inicio (index.html)**: Página principal con un acceso directo a los productos y servicios ofrecidos.
2. **Página de Productos (productos.html)**: Muestra una variedad de productos disponibles en la tienda con imágenes representativas y enlaces para más detalles.
3. **Página de Servicios (servicios.html)**: Presenta los servicios tecnológicos ofrecidos por BleteTech.
4. **Página de Contacto (contacto.html)**: Permite a los usuarios enviar mensajes a través de un formulario de contacto, además de permitirles editar su perfil personal.

### Funcionalidades Especiales

- **Modo Oscuro**: Los usuarios pueden activar o desactivar el modo oscuro para mejorar la experiencia visual.
- **Boletin de Suscripción**: Los usuarios pueden suscribirse a un boletín de noticias con ofertas exclusivas y actualizaciones.
- **Formulario de Contacto**: Los usuarios pueden enviar consultas o preguntas directamente a la empresa.
- **Mapa de Localización**: Muestra la ubicación de la tienda física en Google Maps.

### Etiquetas HTML Utilizadas

A continuación se presentan las principales etiquetas HTML utilizadas en el desarrollo de este proyecto:

- **Estructura Básica**:
  - `<html>`, `<head>`, `<body>`

- **Navegación y Contenido**:
  - `<header>`, `<nav>`, `<article>`, `<footer>`

- **Secciones de la Página**:
  - `<section>`, `<h1>`, `<h2>`, `<h3>`

- **Formularios**:
  - `<form>`, `<input>`, `<textarea>`, `<button>`, `<label>`

- **Enlaces y Listas**:
  - `<a>`, `<ul>`, `<li>`

- **Imágenes**:
  - `<img>`

- **Multimedia y Contenido Externo**:
  - `<iframe>`

- **Estilos y Diseño**:
  - `<span>`

- **Fuentes Externas y Scripts**:
  - `<link>`, `<script>`

Cada una de estas etiquetas juega un papel crucial en la organización y funcionalidad de las páginas, garantizando una experiencia de usuario fluida y accesible.


### Diseño Responsivo

El diseño de las páginas es totalmente adaptativo para que el sitio sea accesible y visualmente atractivo en dispositivos móviles y de escritorio.

---
```
BleteTech/
├── assets/
│   └── img/               # Imágenes utilizadas en el proyecto
├── css/
│   └── style.css          # Archivo de estilo principal
├── js/
│   ├── darkmode.js        # Script para el cambio entre modo claro y oscuro
│   └── animacion.js       # Animaciones para los botones y transiciones
│   └── script.js          # Script de la segunda parte del proyecto
├── index.html             # Página de inicio
├── productos.html         # Página de productos
├── servicios.html         # Página de servicios
├── contacto.html          # Página de contacto
└── README.md              # Este archivo
```

#### PRUEBA DE VALIDACIÓN DEL CSS

# Proyecto 3 | Fase 2

En este proyecto aplicamos...

Selección de Elementos en el DOM: Se utilizan diferentes métodos para acceder a elementos de la página, incluyendo getElementById, querySelector, querySelectorAll y getElementsByClassName. Estos permiten seleccionar elementos de manera eficiente y manipular su contenido o estilos.

Manipulación del DOM: Se aplican modificaciones dinámicas, como cambiar el texto de un título, alterar los estilos de un botón al hacer clic, eliminar elementos de la página y agregar nuevos elementos dinámicamente.

## Apartado 1: Selección de Elementos en el DOM

- **1. Selección por ID:**

```javascript
const botonContacto = document.getElementById('botonContacto');
console.log(botonContacto);
```
- **2. Selección con querySelector (primer elemento que coincide con el selector):**

```javascript
const primerMenuLink = document.querySelector('.header__menu-link');
console.log(primerMenuLink);
```

- **3. Selección con querySelectorAll (todos los elementos que coinciden con el selector):**

```javascript
const todosMenuLinks = document.querySelectorAll('.header__menu-link');
console.log(todosMenuLinks);

todosMenuLinks.forEach(link => {
    console.log(link.textContent);  // Muestra el texto de cada enlace en el menu
});
```

- **4. Selección con getElementsByClassName (colección de elementos con la clase especificada):**

```javascript
const caracteristicasItems = document.getElementsByClassName('caracteristicas__item');
console.log(caracteristicasItems);
```

## Apartado 2: Manipulación del DOM

- **1. Cambio de Contenido de Título**

```javascript
const bienvenidaTitle = document.querySelector('.bienvenida__title');
bienvenidaTitle.textContent = "Bienvenido a BLETETECH: Innovación Tecnológica";
console.log(bienvenidaTitle);
```

- **2. Cambio de Estilo en un Botón**

```javascript
const a = document.getElementById('changeColorButton');
const bienvenidaSection = document.querySelector('.bienvenida__cta');

a.addEventListener('click', () => {
    bienvenidaSection.style.backgroundColor = '#022B3A'; // Cambio a color primario
    console.log('Color de fondo cambiado');
});
```

- **3. Eliminación de Elementos (Eliminar el último producto)**

```javascript
const listaProductos = document.querySelector('.products__flex');
const ultimoProducto = listaProductos.lastElementChild;

if (ultimoProducto) {
    ultimoProducto.remove();
    console.log('Producto eliminado');
}
```

- **4. Agregar un Nuevo Producto Dinámicamente**

```javascript
const nuevoProducto = document.createElement('li');
nuevoProducto.classList.add('product-card');  

nuevoProducto.innerHTML = `
    <h3 class="product-card__title">Samsung Galaxy S24</h3>
    <img src="./assets/img/products/silla.png" alt="Silla Gaming AjXm" class="product-card__image">
    <a href="https://www.pccomponentes.com/samsung-galaxy-s24" class="product-card__link">Ver más</a>
`;

listaProductos.appendChild(nuevoProducto);
console.log(nuevoProducto);
```

## Autor
Este proyecto fue desarrollado por Pablo Fernandez, creador de BleteTech.
