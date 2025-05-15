document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title');

const observer = new IntersectionObserver((items, observer) => {
       items.forEach(item => {
      if (item.isIntersecting) {
        item.target.classList.add('show');
        observer.unobserve(item.target); // para parar de observar após aparecer
      }
    });
  },  {
    threshold: 0.2, // quando 20% do elemento estiver visível
  });

observer.observe(title)
})