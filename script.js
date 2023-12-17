function createGrid(size) {
  const container = document.getElementById("container");
  
  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.className = "row";

    for (let j = 1; j <= size; j++) {
      let cell = document.createElement("div");
      cell.className = "grid-cell";
      // cell.innerText = (i * size) + j;
      row.appendChild(cell);
    }

    container.appendChild(row);
  }
}

createGrid(16);