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

function deleteGrid() {

    let grids = document.querySelector(".container");

    while (grids.firstChild) {
        grids.removeChild(grids.lastChild);
    }
}

function newGrid() {

    let newGrid = document.querySelector(".newGrid");

    // create variable "gridNumber" as number
    let gridNumber = 0;

    newGrid.addEventListener("click", () => {

        gridNumber = prompt("Insert a number between 1 - 100");

        if (typeof (parseInt(gridNumber)) == 'number' && gridNumber > 0 && gridNumber <= 100) {

            deleteGrid();

            createGrid(gridNumber);

            drawGrid();
        }
        else {
            alert("You have to insert a number between 1 and 100");
        }
    })

}


function game(){
    createGrid(16);
    drawGrid();
    newGrid();
}

game();