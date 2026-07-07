// main.js
console.log('Constructora Integral Landing - Loaded successfully');

document.addEventListener('DOMContentLoaded', () => {
  // Animación de entrada progresiva para las tarjetas de clientes
  const clientCards = document.querySelectorAll('.client-card');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Obtenemos el elemento
        const card = entry.target;
        // Aplicamos retraso basado en su orden
        const delay = card.dataset.index * 100;
        
        setTimeout(() => {
          card.classList.add('visible');
        }, delay);
        
        observer.unobserve(card);
      }
    });
  }, observerOptions);

  // Inicializar estado y observar
  clientCards.forEach((card, index) => {
    card.dataset.index = index;
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    
    // Crear clase helper en CSS dinámicamente
    observer.observe(card);
  });

  // Agregar estilos CSS para la animación dinámicamente
  const style = document.createElement('style');
  style.textContent = `
    .client-card.visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
});
