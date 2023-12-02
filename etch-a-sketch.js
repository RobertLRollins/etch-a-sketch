let gridSize = 24;
let squareCount = gridSize ** 2;
var stylesheet = document.styleSheets[0];
let squareSizePercent = 100 / gridSize;
squareSizePercent.toString();
const grid = document.getElementById('grid');
function createGridSquare() {
    let square = document.createElement('div');
    square.className = 'square';
    square.style.height = squareSizePercent + '%';
    square.style.width = squareSizePercent + '%';
    return square;
}

let i = 0;
while (i < squareCount) {
    grid.appendChild(createGridSquare());
    i++;
}