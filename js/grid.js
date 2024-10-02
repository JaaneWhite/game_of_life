let gridWidth = 10;
let gridHeight = 10;
let fieldGrid = [];

applyFieldSettings(gridWidth, gridHeight);


function applyFieldSettings(width, height) {
    gridWidth = width;
    gridHeight = height;
    fieldGrid.length = gridHeight;

    for (let h = 0; h < gridHeight; h++) {
        fieldGrid[h] = [];
        fieldGrid[h].length = gridWidth;
        for (let w = 0; w < gridWidth; w++) {
            fieldGrid[h][w] = null;
        }
    }
    resetGame();


}



function drawField() {
    let field = document.getElementById('field');
    let fieldHTML = '';
    let screenWidth = window.screen.width;
    let maxItemSize = screenWidth / gridWidth;
    let itemSize = maxItemSize >= 50 ? '50px' : Math.floor(maxItemSize) + 'px';


    for (let h = 0; h < gridHeight; h++) {
        let currentRow = `<div class="row field-row">`
        for (let w = 0; w < gridWidth; w++) {
            currentRow = currentRow +
                `<button class="field-item ${fieldGrid[h][w] ? 'true' : 'false'}" 
                         id="item-${h}-${w}" 
                         onclick="setItemValue(${h}, ${w})"  
                         style="width: ${itemSize}; height: ${itemSize};"
                         ></button>`
        }
        currentRow = currentRow + `</div>`
        fieldHTML = fieldHTML + currentRow;
    }
    field.innerHTML = fieldHTML
}

function setItemValue(h, w) {
    let item = document.getElementById(`item-${h}-${w}`);
    item.classList.remove(fieldGrid[h][w] ? 'true' : 'false')
    fieldGrid[h][w] = fieldGrid[h][w] ? null : 1;
    item.classList.add(fieldGrid[h][w] ? 'true' : 'false')

}
