// cesta.js

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
