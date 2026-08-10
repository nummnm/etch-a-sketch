const gridSide = 960;
let squareSize = 32;


const container = document.querySelector('#container');
const buttonContainer = document.querySelector('#button-container');
const resizeBtn = document.querySelector('#resizeBtn');
const sizeDisplay = document.querySelector('#sizeDisplay');

sizeDisplay.textContent = `${resizeBtn.value} x ${resizeBtn.value} (Resolution)`;
container.style.width = `${gridSide}px`;
container.style.height = `${gridSide}px`;

function changebgColor() {
  this.style.backgroundColor = 'black';
}

function createGrid(size) {
  squareSize = Number(size);
  const numSquare = (squareSize * squareSize);
  const widthHeight = `${(gridSide / squareSize) - 2}px`
  
  for (let i = 0; i < (numSquare); i++) {
    const box = document.createElement('div');
    box.classList.add('boxCell');

    box.style.width = box.style.height = widthHeight;

    container.appendChild(box);

    box.addEventListener('mouseover', changebgColor);
 
  }
}
function clearGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

resizeBtn.oninput = function (){
  let txt = `${this.value} x ${this.value} (Resolution)`
  sizeDisplay.innerHTML = txt;
  clearGrid();
  createGrid(this.value);
}

createGrid(32);


