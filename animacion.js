document.addEventListener("DOMContentLoaded", () => {
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
  