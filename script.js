function createGrid(size) {
  const container = document.getElementById("container");
  
  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.className = "row";

    for (let j = 1; j <= size; j++) {
      let cell = document.createElement("div");
      cell.className = "grid-cell";
      row.appendChild(cell);
    }

    container.appendChild(row);
  }
}
createGrid(16);

function resetGrid(size) {
  if (typeof Number(size) !== "number" || size <= 0 || size > 100) {
    alert("Please enter a number between 1 and 100");
  }
  else {
    const container = document.getElementById("container");
    container.innerHTML = ""; // Clear existing grid
    createGrid(size);
  } 
}

const grid = document.getElementById("container");
grid.addEventListener("mouseover", e => {
  if (e.target && e.target.matches(".grid-cell")) {
    const hoveredCell = e.target;
    hoveredCell.style.backgroundColor = "red"
  }
});

const newCanvasButton = document.getElementById("reset-grid");
newCanvasButton.addEventListener("click", e => {
  const gridSize = prompt("Enter a grid size (max. 100)");
  resetGrid(gridSize);
})