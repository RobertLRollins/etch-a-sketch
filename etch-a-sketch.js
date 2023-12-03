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
    label.textContent = gridSize + ' X ' + gridSize;
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

let penColor = 'black';
let bgColor = 'white';
//changes the color of the squares when the mouse is placed over them
grid.addEventListener('mouseover', function(event) {
    // Check if the hovered element is a node
    if (event.target.classList.contains('square')) {
        let checkbox = document.getElementById('shading')
        if (!checkbox.checked) {
            event.target.style.backgroundColor = penColor;
            event.target.style.opacity = 1;
        }
        if (checkbox.checked) {
            event.target.style.backgroundColor = penColor;
            currentOpacity = parseFloat(event.target.style.opacity);
            if (isNaN(currentOpacity)) {
                currentOpacity = 0;
            }
            if (currentOpacity < 1) {
                event.target.style.opacity = currentOpacity + 0.1;
            }
        }
    }
});

function clear() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(node => node.style.backgroundColor = bgColor);
    squares.forEach(node => node.style.opacity = 0);
}

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', clear);

// Select the button and the element
let button = document.getElementById('mode');
let element = document.querySelector('body');

// Add the default class to the element initially
element.classList.add('lightMode');
grid.classList.add('gridLight');
let mainColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color').trim();
let secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim();
// Add an event listener to the button
button.addEventListener('click', function() {
    // Check if the element currently has the default class
    if (element.classList.contains('lightMode')) {
        // Switch to the new class
        element.classList.replace('lightMode', 'darkMode');
        grid.classList.replace('gridLight', 'gridDark');
        document.documentElement.style.setProperty('--main-color', 'black');
        document.documentElement.style.setProperty('--secondary-color', 'white');
        penColor = 'white';
        bgColor = 'black';
        clear();
        button.src = 'light-mode.png';
    } else {
        // Switch back to the default class
        element.classList.replace('darkMode', 'lightMode');
        grid.classList.replace('gridDark', 'gridLight');
        document.documentElement.style.setProperty('--main-color', 'white');
        document.documentElement.style.setProperty('--secondary-color', 'black');
        penColor = 'black';
        bgColor = 'white';
        clear();
        button.src = 'dark-mode.png';
    }
});