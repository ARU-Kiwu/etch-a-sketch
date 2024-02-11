let grid = prompt("Enter a number less than 100")
let gridSize = grid * grid
let container = document.querySelector(".container")
let div
for(i=0; i< gridSize; i++) {
    div = document.createElement('div')
    div.setAttribute("class", `div_${i}`)
    container.appendChild(div) 
    let currentDiv = container.querySelector(`.div_${i}`)
    currentDiv.addEventListener('mouseover', ()=> {
        currentDiv.style.background = 'white'
    })
}


let styleRoot = document.querySelector(":root")
function gridRowSize() {
    styleRoot.style.setProperty('--width', `${grid * 10}px`)
}

gridRowSize()
console.log(container.children)