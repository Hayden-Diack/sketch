const DEFAULT_COLOR = '#333333';
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = 'color';

let currentColor = DEFAULT_COLOR;

function setCurrentColor(newColor) {
    currentColor = newColor
}

const grid = document.getElementById('grid');
const colorBtn = document.getElementById('colorBtn');

let mousedown = false; // when page loads you cant draw on grid accidentally
document.body.onmousedown = () => (mouseDown = true); // can draw
document.body.onmouseup = () => (mouseDown = false); // cant draw

function createGrid(gridSize) {
    //grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`; 
    //grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const gridElement = document.createElement('div');
        grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`; 
        grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        gridElement.classList.add('grid-element');
        grid.appendChild(gridElement);
    }
}

function colorChoice() {
    const grids = grid.querySelectorAll('.grid-element');
    
    colorBtn.textContent = 'Colour Button'; // applies colour button name text via DOM

    colorBtn.addEventListener = ('click' , () => {
        let Rnum
    })

}

function colorRandom () {

}

window.onload = () => {
    createGrid(DEFAULT_SIZE);
}