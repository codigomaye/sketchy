function createGrid(gridNumber) {

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


function drawGrid() {
    // create variable "grids" with value Dom element of class "grid"
    let grids = document.querySelectorAll(".grid");
    
    // for each "grid" in "grids"
    grids.forEach((grid) => {
        // when a grid is hovered, chage its background color to gray 
        grid.addEventListener("mouseover", () => grid.setAttribute("style", "background-color: gray"))
    });
    
}

createGrid(100);
drawGrid();