let genNumber = 0;
let genTime = 0;

function generateStartPosition() {
    for (let h = 0; h < gridHeight; h++) {
        for (let w = 0; w < gridWidth; w++) {
            let val = Math.random();
            fieldGrid[h][w] =  val < 0.5 ? null : 1;
        }
    }
    console.log(fieldGrid)
    resetGame();
}

function nextGen() {


    let start = new Date().getTime();
    let nextGenGrid = [] //Array.from(fieldGrid, (row) => row)
    for (let h = 0; h < gridHeight; h++) {
        nextGenGrid[h] = [];
        for (let w = 0; w < gridWidth; w++) {
            let neighboursNumber = getNeighboursNumber(h, w);
            if (fieldGrid[h][w]) {
            }
            if (!fieldGrid[h][w] && neighboursNumber === 3) {
                nextGenGrid[h][w] = 1;
            } else if (fieldGrid[h][w] && (neighboursNumber === 2 || neighboursNumber === 3)) {
                nextGenGrid[h][w] = 1;
            } else {
                nextGenGrid[h][w] = null;
            }

        }
    }
    fieldGrid = Array.from(nextGenGrid, (row) => row);
    genNumber++;
    document.getElementById('gen-title').innerText = `Поколение: ${genNumber}`;
    drawField();

    let end = new Date().getTime();
    genTime = end - start;

    document.getElementById('gen-time').innerText = `Время: ${genTime / 1000}s`;


}

function getNeighboursNumber(h, w) {
    let neighbours =  [
        [h === 0 ? gridHeight - 1 :  h - 1, w === 0 ? gridWidth - 1 : w - 1],
        [h === 0 ? gridHeight - 1 :  h - 1, w],
        [h === 0 ? gridHeight - 1 :  h - 1, w === gridWidth - 1 ? 0 : w + 1],
        [h, w === 0 ? gridWidth - 1 : w - 1],
        [h, w === gridWidth - 1 ? 0 : w + 1],
        [h === gridHeight - 1 ? 0 :  h + 1, w === 0 ? gridWidth - 1 : w - 1],
        [h === gridHeight - 1 ? 0 :  h + 1, w],
        [h === gridHeight - 1 ? 0 :  h + 1, w === gridWidth - 1 ? 0 : w + 1]
    ];
    let neighboursNumber = 0;
    neighbours.forEach(item => {

        if (fieldGrid[item[0]][item[1]]) {

            neighboursNumber++
        }
    })

    return neighboursNumber
}

function resetGame() {
    genNumber = 0;
    genTime = 0;
    document.getElementById('gen-title').innerText = `Поколение: ${genNumber}`;
    document.getElementById('gen-time').innerText = `Время: ${genTime / 1000}s`;
    drawField();
}

