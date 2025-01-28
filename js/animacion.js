/* CHAT-GPT */

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
