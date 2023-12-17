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

const grid = document.getElementById("container");

grid.addEventListener("mouseover", e => {
  if (e.target && e.target.matches(".grid-cell")) {
    const hoveredCell = e.target;
    hoveredCell.style.backgroundColor = "red"
  }
});