const DEFAULT_COLOR = '#333333';
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = 'color';

const grid = document.getElementById('grid');

function createGrid(gridSize) {
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`; 
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        grid.appendChild(gridElement);
    }
}

window.onload = () => {
    createGrid(DEFAULT_SIZE);
}