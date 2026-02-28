function show(id, element) {
    const bubble = document.getElementById('comic-bubble');
    const arrow = document.getElementById('bubble-arrow');
    
    // Mostrar el contenedor
    bubble.style.display = 'block';

    // Calcular posición del botón para mover el pico
    const rect = element.getBoundingClientRect();
    const containerRect = element.parentElement.getBoundingClientRect();
    
    // El punto central del botón relativo al contenedor de botones
    const positionX = (rect.left + rect.width / 2) - containerRect.left;
    
    // Mover el pico
    arrow.style.left = positionX + "px";

    // Mostrar contenido correspondiente
    document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';

    // Scroll suave hacia la sección
    window.scrollTo({
        top: bubble.offsetTop - 50,
        behavior: 'smooth'
    });
}