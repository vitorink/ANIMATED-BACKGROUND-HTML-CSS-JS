// Função para criar os elementos de forma aleatória e animá-los
function createShapes() {
    const shapesContainer = document.querySelector('.background');
    
    for (let i = 0; i < 10; i++) {
        const shape = document.createElement('div');
        shape.classList.add('shape', 'square');
        
        shape.style.top = `${Math.random() * 100}vh`;
        shape.style.left = `${Math.random() * 100}vw`;

        // Aplica animações aleatórias
        shape.style.animationDelay = `${Math.random() * 3}s`;
        shape.style.animationDuration = `${Math.random() * 2 + 3}s`;

        shapesContainer.appendChild(shape);
    }
}

// Chama a função para criar formas aleatórias no fundo
createShapes();
