let container = document.querySelector('.container')
let grid = 10;
let gridSize = grid * grid;
let inputColor = document.querySelector('#colorPicker');
let color = 'black';
function getColor() {
    inputColor.addEventListener('input', ()=> {
        color = inputColor.value
        console.log(color)
    })
}
getColor()

var mouseDown = 0;
document.body.onmousedown = function() { 
  mouseDown = 1;
}
document.body.onmouseup = function() {
  mouseDown = 0;
}

for(i=0; i< gridSize; i++) {
    div = document.createElement('div')
    div.setAttribute("class", `div_${i}`)
    container.appendChild(div) 
    let currentDiv = container.querySelector(`.div_${i}`)
    currentDiv.addEventListener('mouseover', ()=> {
        if(mouseDown == 1)
            currentDiv.style.background = `${color}`
    }) 
}


let styleRoot = document.querySelector(":root")
function gridRowSize() {
    styleRoot.style.setProperty('--width', `${500 / grid}px`)
}

gridRowSize()

