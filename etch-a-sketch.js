//number of squares in each row/column in the grid canvas
let gridSize = 24;
//total number of squares in the grid
let squareCount = gridSize ** 2;
//creates te size of each square then converts it into a string to be used in square.style.height/width 
let squareSizePercent = 100 / gridSize;
squareSizePercent.toString();
//grid container used in the while loops that create the grid, and in the addEventListener that changes the squares colors
const grid = document.getElementById('grid');

//function that creates each square for the grid
function createGridSquare() {
    let square = document.createElement('div');
    square.className = 'square';
    square.style.height = squareSizePercent + '%';
    square.style.width = squareSizePercent + '%';
    const label = document.getElementById('sliderLabel');
    label.textContent = 'Grid Size: ' + gridSize + ' X ' + gridSize;
    return square;
}
//loops until each square for the grid is created
let i = 0;
while (i < squareCount) {
    grid.appendChild(createGridSquare());
    i++;
}

//slider used to change the grid size
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

let bgColor = 'black';
//changes the color of the squares when the mouse is placed over them
grid.addEventListener('mouseover', function(event) {
    // Check if the hovered element is a node
    if (event.target.classList.contains('square')) {
        // event.target is the hovered node
        event.target.style.backgroundColor = bgColor;
    }
});

const clear = document.getElementById('clear');

clear.addEventListener('click', function() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(node => node.style.backgroundColor = 'white');
})

// Select the button and the element
let button = document.getElementById('mode');
let element = document.querySelector('body');

// Add the default class to the element initially
element.classList.add('lightMode');
grid.classList.add('gridLight');
// Add an event listener to the button
button.addEventListener('click', function() {
    // Check if the element currently has the default class
    if (element.classList.contains('lightMode')) {
        // Switch to the new class
        element.classList.replace('lightMode', 'darkMode');
        grid.classList.replace('gridLight', 'gridDark');
        button.src = 'light-mode.png';
    } else {
        // Switch back to the default class
        element.classList.replace('darkMode', 'lightMode');
        grid.classList.replace('gridDark', 'gridLight');
        button.src = 'dark-mode.png';
    }
});