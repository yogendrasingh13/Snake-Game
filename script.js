let direction = { x: 0, y: 0 };
let foodSound = new Audio('food.mp3');
let gameOverSound = new Audio('gameover.mp3');
let moveSound = new Audio('move.mp3');
let musicSound = new Audio('music.mp3');
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    { x: 13, y: 15 }
]
food = { x: 13, y: 15 };

function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();

}

function gameEngine() {
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridROwStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add('snake');
        if(index ===0) {
            snakeElement.classList.add('head');
        }
        board.appendChild(snakeElement);
    });

    foodElement = document.createElement('div');
    foodElement.style.gridColumnStart = food.x;
    foodElement.style.gridROwStart = food.y;
    foodElement.classList.add('food')
    board.appendChild(foodElement);
}




window.requestAnimationFrame(main);