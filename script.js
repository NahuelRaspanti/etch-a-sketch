var transparent = 10;

var header = document.createElement('div');
header.className = 'header';
var gridButton = document.createElement('button');
gridButton.textContent = 'Generate Grid';
gridButton.addEventListener('click', (event) => {
    document.getElementsByClassName('container')[0].remove();
    generateGrid(prompt("Ingresé un valor para generar la grilla de X y X"));
})
header.appendChild(gridButton);
document.body.appendChild(header);

function generateGrid(gridLength) {
    var container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);
    for (let i = 0; i < gridLength; i++) {
        var gridRow = document.createElement('div');
        gridRow.className = 'grid-row';
        container.appendChild(gridRow);
        for (let j = 0; j < gridLength; j++) {
            var gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            gridItem.addEventListener('mouseover', (event) => {
                setBackgroundColor(event);
            });
            gridRow.appendChild(gridItem);
        }
    }

}

function setBackgroundColor(event) {
    if(event.type === 'mouseover'){
        var randomColor = colorRandomizer();
        event.target.style.backgroundColor = `rgba(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]}, ${transparent}%)`;
        transparent = Math.min(transparent + 10, 100);
    }
}

function colorRandomizer() {
    var red = mathRandomizer(255);
    var green = mathRandomizer(255);
    var blue = mathRandomizer(255);

    return [red, green, blue];
}

function mathRandomizer(max) {
    return Math.floor(Math.random() * max);
}

generateGrid(16);