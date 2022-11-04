const DEFAULT_COLOR = '#333333';
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = 'color';

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

function setCurrentColor(newColor) {
    currentColor = newColor
}

function setCurrentMode(newMode) {
    currentMode = newMode
}

const grid = document.getElementById('grid');
const colorBtn = document.getElementById('colorBtn');

colorPicker.oninput = (e) => setCurrentColor(e.target.value);
colorBtn.onclick = () => setCurrentMode('color');

let mousedown = false; // when page loads you cant draw on grid accidentally
document.body.onmousedown = () => (mouseDown = true); // can draw
document.body.onmouseup = () => (mouseDown = false); // cant draw

function createGrid(gridSize) {
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`; 
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover' , changeColor)
        gridElement.addEventListener('mousedown' , changeColor)
        grid.appendChild(gridElement);
    }
}

function colorChoice(e) { // e is the let value that holds the colour
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor;
    }

    //const grids = grid.querySelectorAll('.grid-element');
    
    //colorBtn.textContent = 'Colour Button'; // applies colour button name text via DOM

    //colorBtn.addEventListener = ('click' , () => {
    //    let Rnum
    //})

}

function colorRandom () {

}

window.onload = () => {
    createGrid(DEFAULT_SIZE);
    //activateButton(DEFAULT_MODE);
}