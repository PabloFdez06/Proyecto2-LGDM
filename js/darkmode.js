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
  