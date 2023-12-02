let gridSize = 24;
let squareCount = gridSize ** 2;
let stylesheet = document.styleSheets[0];
let squareSizePercent = 100 / gridSize;
squareSizePercent.toString();
const grid = document.getElementById('grid');

function createGridSquare() {
    let square = document.createElement('div');
    square.className = 'square';
    square.style.height = squareSizePercent + '%';
    square.style.width = squareSizePercent + '%';
    const label = document.getElementById('sliderLabel');
    label.textContent = 'Grid Size: ' + gridSize + ' X ' + gridSize
    return square;
}

let i = 0;
while (i < squareCount) {
    grid.appendChild(createGridSquare());
    i++;
}

const slider = document.getElementById("slider");

slider.addEventListener("input", function() { 
    const oldSquares = document.querySelectorAll('.square');
    oldSquares.forEach(node => node.parentNode.removeChild(node));  
    gridSize = slider.value;
    squareCount = gridSize ** 2;
    squareSizePercent = 100 / gridSize;
    squareSizePercent.toString();
    let i = 0;
    while (i < squareCount) {
        grid.appendChild(createGridSquare());
        i++;
    }
});

grid.addEventListener('mouseover', function(event) {
    // Check if the hovered element is a node
    if (event.target.classList.contains('square')) {
        // event.target is the hovered node
        event.target.style.backgroundColor = 'red';
    }
});