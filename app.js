function createGrid(gridNumber = 16) {

    let container;


    container = document.querySelector(".container");

    let grid;

    grid = document.createElement("div");

    grid.classList.add("grid");

    for (let i = 0; i < gridNumber ** 2; i++) {

        container.appendChild(grid.cloneNode(true));
    }

    container.setAttribute("style", `grid-template-columns: repeat(${gridNumber}, 1fr);`);


}

createGrid();