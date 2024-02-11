let container = document.querySelector('.container')
width = container.offsetWidth
let grid = prompt('How large do you want your canvas to be? [max 100]');
if (grid > 100) {
    grid = 100
}
let gridSize = grid * grid

function generateGrid(){
// Generates a grid
for(i=0; i< gridSize; i++) {
    div = document.createElement('div')
    div.setAttribute("class", `div_${i}`)
    container.appendChild(div) 
    let currentDiv = container.querySelector(`.div_${i}`)
    currentDiv.addEventListener('mouseover', ()=> {
        if(rainbowMode == 1 && mouseDown == 1) {
            currentDiv.style.background = `${getRandomHexColor(getRandomHexColor)}`
        } else if (mouseDown == 1 && rainbowMode == 0) {
            currentDiv.style.background = `${color}`
        }
    }) 
}
}
generateGrid()
let inputColor = document.querySelector('#colorPicker');
let color = 'black';
let rainbowMode = 0;
function getColor() {
    inputColor.addEventListener('input', ()=> {
        color = inputColor.value
    })
}
getColor()

// Verifies if click is being pressed down or not
var mouseDown = 0;
document.body.onmousedown = function() { 
  mouseDown = 1;
}
document.body.onmouseup = function() {
  mouseDown = 0;
}

function currentColor() {
    rainbowMode = 0;
    color = inputColor.value
}

let styleRoot = document.querySelector(":root")
function gridRowSize() {
    styleRoot.style.setProperty('--width', `${width / grid}px`)
}
gridRowSize()

// Adds eraser function by changing the background color to white
function eraser() {
    rainbowMode = 0;
    color = 'white'
}
function clearCanvas() {
  for(i=0; i< gridSize; i++) {
    container.children[i].style.background = 'white'
  }
}

function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      hexColor += letters[Math.floor(Math.random() * 16)];
    }
    return color = hexColor;
  }

function rainbowModeOn() {
    rainbowMode = 1;
}
