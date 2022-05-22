// get argument "gridNumber" with default value 16
function createGrid(gridNumber = 16) {
    
    // create variable "container" as HTMLDOMELEMENT
    let container;

    // set "container" value to DOMELEMENT with class "container"

    container = document.querySelector(".container");

    // create variable "grid" as HTMLDOMELEMENT
    let grid;

    // set "grid" value to a new DOMELEMENT of type "div"
    grid = document.createElement("div");

    // set "grid" class attribute to "grid"
    grid.classList.add("grid");

    // START loop for i = 0, while i is smaller thant gridNumber, increment i
    for(let i = 0; i < gridNumber**2; i++){
        
            // append a clone of "grid" in "container"
        container.appendChild(grid.cloneNode(true));
    }
    // END loop

}