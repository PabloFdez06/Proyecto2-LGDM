// -------------------------------------------------------------- //
// DARKMODE
// -------------------------------------------------------------- //
document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
  
    // Verifica si el usuario tiene una preferencia guardada
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      body.classList.add("dark-mode");
    }
  
    // Alternar modo oscuro y claro
    darkModeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
  
      // Guarda la preferencia del usuario
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  });
  
// -------------------------------------------------------------- //
// -------------------------------------------------------------- //
// -------------------------------------------------------------- //

// -------------------------------------------------------------- //
// BOTON DECORATIVO ASISTENTE
// -------------------------------------------------------------- //

document.addEventListener("DOMContentLoaded", () => {
    const chatbotButton = document.querySelector(".chatbot-button");
  
    // Función para alternar la visibilidad del chatbot
    const toggleChatbot = () => {
        chatbotButton.classList.toggle("hidden");
        
        // Cambiar el icono cuando se oculta o se muestra el chatbot
        if (chatbotButton.classList.contains("hidden")) {
            chatbotButton.textContent = "💬"; // Cambiar a un icono que indique que puede abrirse
        } else {
            chatbotButton.textContent = "💬"; // Volver al icono de chat
        }
    };
  
    // Al hacer clic en el botón, alternamos su visibilidad
    chatbotButton.addEventListener("click", toggleChatbot);
  
    const newsletterSection = document.querySelector(".section-newsletter");
  
    const handleScroll = () => {
        const sectionTop = newsletterSection.getBoundingClientRect().top;
        const sectionHeight = newsletterSection.offsetHeight;
        const windowHeight = window.innerHeight;
  
        // Calcular cuánto de la sección está visible
        const visiblePercentage = Math.min(
            Math.max((windowHeight - sectionTop) / sectionHeight, 0),
            1
        );
  
        // Aplicar opacidad y transformación
        newsletterSection.style.opacity = visiblePercentage;
        newsletterSection.style.transform = `translateY(${50 - 50 * visiblePercentage}px)`;
    };
  
    // Escuchar el evento de scroll
    window.addEventListener("scroll", handleScroll);
  
    // Llamar la función al cargar la página
    handleScroll();
  });

// -------------------------------------------------------------- //
// -------------------------------------------------------------- //
// -------------------------------------------------------------- //
  

// -------------------------------------------------------------- //
// FUNCIONALIDAD: Diseñar un formulario con validación dinámica que muestre mensajes de error
//  o éxito según la interacción del usuario.
// -------------------------------------------------------------- //
document.addEventListener('DOMContentLoaded', () => {



document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Limpiar los mensajes de error anteriores
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach((errorMessage) => {
      errorMessage.classList.remove('show');
      errorMessage.innerHTML = '';
    });
  
    // Obtenemos los valores de los campos
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const city = document.getElementById('city').value.trim();
    const email = document.getElementById('email').value.trim();
  
    // Validaciones de los campos
    let valid = true;
  
    // Validación del nombre
    if (firstName === '') {
      valid = false;
      const firstNameError = document.getElementById('firstNameError');
      firstNameError.classList.add('show');
      firstNameError.innerHTML = '<p>El nombre es obligatorio.</p>';
    }
  
    // Validación de los apellidos
    if (lastName === '') {
      valid = false;
      const lastNameError = document.getElementById('lastNameError');
      lastNameError.classList.add('show');
      lastNameError.innerHTML = '<p>Los apellidos son obligatorios.</p>';
    }
  
    // Validación de la ciudad
    if (city === '') {
      valid = false;
      const cityError = document.getElementById('cityError');
      cityError.classList.add('show');
      cityError.innerHTML = '<p>La ciudad es obligatoria.</p>';
    }
  
    // Validación del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      valid = false;
      const emailError = document.getElementById('emailError');
      emailError.classList.add('show');
      emailError.innerHTML = '<p>El correo electrónico es obligatorio.</p>';
    } else if (!emailRegex.test(email)) {
      valid = false;
      const emailError = document.getElementById('emailError');
      emailError.classList.add('show');
      emailError.innerHTML = '<p>El correo electrónico no es válido.</p>';
    }
  
    // Si las validaciones son correctas
    if (valid) {
      alert('¡Te has suscrito correctamente!');
      // Aquí puedes agregar el código para enviar los datos al servidor
      // Por ejemplo: enviarFormulario(firstName, lastName, city, email);
    }
  });
});
  
// -------------------------------------------------------------- //
// -------------------------------------------------------------- //
// -------------------------------------------------------------- //

// --------------------------------------------------------------------------------------------------------------------------------------------- //
// FUNCIONALIDAD: LIBRE. 
// CESTA DE LA COMPRA: SE AGREGAN ELEMENTOS (Imagen incluida)
// SE ELIMINAN 1 POR 1
// O BIEN SE VACIA POR COMPLETO
// CUMPLE CON REQUISITOS DE GALERÍA: Crear un sistema de galería interactiva donde las imágenes puedan añadirse o eliminarse dinámicamente. (Al insertar un objetos estamos insertando tambien la imagen, y al eliminarlo tambien estamos eliminando la imagen.)
// SE USAN EN SERVICIOS Y CESTA
// --------------------------------------------------------------------------------------------------------------------------------------------- //

document.addEventListener('DOMContentLoaded', () => {

// Inicializar el carrito desde localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Función para actualizar la visualización del carrito
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const emptyCartMessage = document.getElementById('empty-cart-message');

    // Limpiar el contenido actual
    cartItemsContainer.innerHTML = '';

    // Si el carrito está vacío, mostrar el mensaje de "vacío"
    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
    } else {
        emptyCartMessage.style.display = 'none';
    }

    let totalPrice = 0;

    // Mostrar los productos en el carrito
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
        <div class="cart-item__image-wrapper">
            <img src="${item.imagen}" alt="${item.nombre}" class="cart-item__image" />
        </div>
        <div class="cart-item__details">
            <h4 class="cart-item__name">${item.nombre}</h4>
            <p class="cart-item__price">${item.precio}€</p>
            <button class="remove-item" data-id="${item.id}">Eliminar</button>
        </div>
    `;
    
    
        cartItemsContainer.appendChild(cartItem);
        totalPrice += parseFloat(item.precio);
    });

    // Actualizar el total
    totalPriceElement.textContent = `${totalPrice.toFixed(2)}€`;

    // Agregar la funcionalidad de eliminar producto
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', removeItemFromCart);
    });
}

// Función para agregar un producto al carrito
function addItemToCart(event) {
    const button = event.target;
    const product = {
        id: button.getAttribute('data-id'),
        nombre: button.getAttribute('data-nombre'),
        precio: button.getAttribute('data-precio'),
        imagen: button.getAttribute('data-imagen')
    };

    // Verificar si el producto ya está en el carrito
    const existingProduct = cart.find(item => item.id === product.id);

    if (!existingProduct) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    } else {
        alert('Este servicio ya está en tu carrito.');
    }
}

// Función para eliminar un producto del carrito
function removeItemFromCart(event) {
    const button = event.target;
    const productId = button.getAttribute('data-id');

    // Filtrar el carrito para eliminar el producto
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Función para vaciar el carrito
function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Agregar evento de click en los botones de "Añadir al carrito" de la página de servicios
const addToCartButtons = document.querySelectorAll('.services__page--cta-link');
addToCartButtons.forEach(button => {
    button.addEventListener('click', addItemToCart);
});

// Agregar evento de click en el botón de vaciar carrito
const clearCartButton = document.getElementById('clear-cart');
if (clearCartButton) {
    clearCartButton.addEventListener('click', clearCart);
}

// Llamar a la función para actualizar el carrito cuando se carga la página
updateCart();

});

/* ----------------------------------------- */
// -----------------------------------------
/* ----------------------------------------- */

/* ----------------------------------------- */
// FUNCIONALIDAD: Implementar un sistema de filtros que permita mostrar u ocultar elementos de la página
//  (por ejemplo, productos o entradas de blog) según criterios seleccionados por el usuario.
/* ----------------------------------------- */

document.addEventListener('DOMContentLoaded', function () {

    // Obtener los grupos de filtros
    const filtrosPrecio = document.querySelectorAll('input[name="precio"]');
    const filtrosYear   = document.querySelectorAll('input[name="year"]');
    const filtrosOS     = document.querySelectorAll('input[name="os"]');
    const filtrosTipo   = document.querySelectorAll('input[name="tipo"]');

    // Obtener todos los productos
    const productos = document.querySelectorAll('.contenedor_imagen');

    // Función que aplica los filtros
    function aplicarFiltros() {
        // Convertir NodeList a Array para usar filter
        let productosVisibles = Array.from(productos);

        // Filtrar por Precio
        const preciosSeleccionados = Array.from(filtrosPrecio)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
        if (preciosSeleccionados.length) {
            productosVisibles = productosVisibles.filter(producto => {
                const precio = parseFloat(producto.getAttribute('data-price'));
                let coincide = false;
                preciosSeleccionados.forEach(rango => {
                    if (rango === 'bajo' && precio < 500) { coincide = true; }
                    else if (rango === 'medio' && precio >= 500 && precio <= 1000) { coincide = true; }
                    else if (rango === 'alto' && precio > 1000) { coincide = true; }
                });
                return coincide;
            });
        }

        // Filtrar por Año
        const yearsSeleccionados = Array.from(filtrosYear)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
        if (yearsSeleccionados.length) {
            productosVisibles = productosVisibles.filter(producto => {
                const year = parseInt(producto.getAttribute('data-year'), 10);
                let coincide = false;
                yearsSeleccionados.forEach(rango => {
                    if (rango === 'nuevo' && year >= 2020) { coincide = true; }
                    else if (rango === 'medio' && year >= 2015 && year < 2020) { coincide = true; }
                    else if (rango === 'antiguo' && year < 2015) { coincide = true; }
                });
                return coincide;
            });
        }

        // Filtrar por Sistema Operativo
        const osSeleccionados = Array.from(filtrosOS)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
        if (osSeleccionados.length) {
            productosVisibles = productosVisibles.filter(producto => {
                const os = producto.getAttribute('data-os').toLowerCase();
                return osSeleccionados.includes(os);
            });
        }

        // Filtrar por Tipo (Portátil o Escritorio)
        const tipoSeleccionados = Array.from(filtrosTipo)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
        if (tipoSeleccionados.length) {
            productosVisibles = productosVisibles.filter(producto => {
                const tipo = producto.getAttribute('data-tipo').toLowerCase();
                return tipoSeleccionados.includes(tipo);
            });
        }

        // Ocultar todos los productos
        productos.forEach(producto => {
            producto.style.display = 'none';
        });
        // Mostrar solo los productos filtrados
        productosVisibles.forEach(producto => {
            producto.style.display = 'block';
        });
    }

    // Agregar un listener "change" a cada checkbox de filtros
    [filtrosPrecio, filtrosYear, filtrosOS, filtrosTipo].forEach(group => {
        group.forEach(checkbox => {
            checkbox.addEventListener('change', aplicarFiltros);
        });
    });

    // Aplicar los filtros al cargar la página (por si algunos están activos por defecto)
    aplicarFiltros();
});


/* ----------------------------------------- */
// -----------------------------------------
/* ----------------------------------------- */
