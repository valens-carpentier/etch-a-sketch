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

function colorGrid() {
  const cells = document.querySelectorAll('.cell');
  let isMouseDown = false;

  cells.forEach((cell) => {
    cell.addEventListener("mousedown", (event) => {
      isMouseDown = true;
      let currentColor = event.target.style.backgroundColor;

      if (currentColor === "" || currentColor === "transparent"){
        event.target.style.backgroundColor = randomColors();
        event.target.style.opacity = 1;
      } else {
        let currentOpacity = parseFloat(event.target.style.opacity);
        if (currentOpacity > 0) {
          event.target.style.opacity = currentOpacity - 0.1;
        }
      }        
    });

    cell.addEventListener("mousemove", (event) => {
      if (isMouseDown) {
      let currentColor = event.target.style.backgroundColor;

      if (currentColor === "" || currentColor === "transparent"){
        event.target.style.backgroundColor = randomColors();
        event.target.style.opacity = 1;
      } else {
        let currentOpacity = parseFloat(event.target.style.opacity);
        if (currentOpacity > 0) {
          event.target.style.opacity = currentOpacity - 0.1;
        }
      }           
      }
    });

    cell.addEventListener("mouseup", () => {
      isMouseDown = false;
    });

    cell.addEventListener("mouseleave", (event) => {
      if (isMouseDown) {
      let currentColor = event.target.style.backgroundColor;

      if (currentColor === "" || currentColor === "transparent"){
        event.target.style.backgroundColor = randomColors();
        event.target.style.opacity = 1;
      } else {
        let currentOpacity = parseFloat(event.target.style.opacity);
        if (currentOpacity > 0) {
          event.target.style.opacity = currentOpacity - 0.1;
        }
      }      

      }
    });
  });

  document.body.addEventListener("mouseup", () => {
    isMouseDown = false;
  });
}

function clearColors () {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
      cell.style.backgroundColor = "";
      cell.style.opacity = 1;
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

  function randomColors () {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let randomColor = `rgb(${r}, ${g}, ${b})`;
    return randomColor;
  };