const grid = document.querySelector(".container");
const button = document.querySelector(".btnSize");
const btnReset = document.querySelector(".btnReset");


function createGrid(size) {
  grid.innerHTML = '';
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.style.width = `${554 / size}px`;
      cell.style.height = `${554 / size}px`;
      grid.appendChild(cell);
    }
  }
  colorGrid();
}

function colorGrid () {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "red";
    });
    });
}

function clearColors () {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
      cell.style.backgroundColor = "";
    });
    };


createGrid(16);


button.addEventListener('mouseup', (e) => {
  const squareNumber = window.prompt("Size?");
  if (squareNumber>100){
    window.prompt("Please enter a size below 100");
  }
  else {
    createGrid(squareNumber);
  }
});

  btnReset.addEventListener('mouseup', () => {
    clearColors ();
  });