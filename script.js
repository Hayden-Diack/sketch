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
    modeChangeClick(newMode)
    currentMode = newMode
}

const grid = document.getElementById('grid');
const colorBtn = document.getElementById('colorBtn');
const randomBtn = document.getElementById('randomBtn');

colorPicker.oninput = (e) => setCurrentColor(e.target.value);
colorBtn.onclick = () => setCurrentMode('color');
randomBtn.onclick = () => setCurrentMode('random' && console.log(setCurrentMode));

let mouseDown = false; // when page loads you cant draw on grid accidentally
document.body.onmousedown = () => (mouseDown = true); // can draw
document.body.onmouseup = () => (mouseDown = false); // cant draw

function createGrid(gridSize) {
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`; 
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover' , (colorChoice || colorRandom)) // both event listeners to update bground colour
        gridElement.addEventListener('mousedown' , (colorChoice || colorRandom))
        grid.appendChild(gridElement);
    }
}

function colorChoice(e) { // e is the let value that holds the colour
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor;
    } else if (currentMode === 'random') {
        let randomN = Math.floor(Math.random() * 255);
        e.target.style.backgroundColor = `rgb(${randomN}, ${randomN}, ${randomN})`;
    }

}



function modeChangeClick(newMode) {
    if (currentMode === 'random') {
        console.log(currentMode)
    } else if (currentMode === 'color') {
        console.log(currentMode)
    } 

    if (newMode === 'random') {
        console.log(newMode)
    } else if (newMode === 'color') {
        console.log(newMode)
    }
}

window.onload = () => {
    createGrid(DEFAULT_SIZE);
    console.log(currentMode);
    modeChangeClick(DEFAULT_MODE);
}