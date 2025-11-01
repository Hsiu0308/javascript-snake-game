const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const unit = 20;
const row = canvas.height / unit;
const col = canvas.width / unit;

let snake = [];
function createSnake() {
  snake[0] = {
    x: 80,
    y: 0,
  };
  snake[1] = {
    x: 60,
    y: 0,
  };
  snake[2] = {
    x: 40,
    y: 0,
  };
  snake[3] = {
    x: 20,
    y: 0,
  };
}

class Fruit {
  constructor() {
    this.x = Math.floor(Math.random() * col) * unit;
    this.y = Math.floor(Math.random() * row) * unit;
  }

  drawFruit() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, unit, unit);
  }

  pickLocation() {
    let overlap = false;
    let newX;
    let newY;

    function checkOverlap(newX, newY) {
      for (let i = 0; i < snake.length; i++) {
        if (newX == snake[i].x && newY == snake[i].y) {
          overlap = true;
          return;
        } else {
          overlap = false;
        }
      }
    }

    do {
      overlap = false;
      newX = Math.floor(Math.random() * col) * unit;
      newY = Math.floor(Math.random() * row) * unit;
      checkOverlap(newX, newY);
    } while (overlap);

    this.x = newX;
    this.y = newY;
  }
}
createSnake();
let myFruit = new Fruit();

window.addEventListener("keydown", changeDirection);
let d = "Right";

function changeDirection(event) {
  if (event.key == "ArrowLeft" && d != "Right") {
    d = "Left";
  } else if (event.key == "ArrowUp" && d != "Down") {
    d = "Up";
  } else if (event.key == "ArrowRight" && d != "Left") {
    d = "Right";
  } else if (event.key == "ArrowDown" && d != "Up") {
    d = "Down";
  }

  window.removeEventListener("keydown", changeDirection);
}

let highestScore;
loadHighestScore();
let score = 0;
document.getElementById("myScore").innerHTML = "遊戲分數: " + score;
document.getElementById("myScore2").innerHTML = "最高分數: " + highestScore;
function draw() {
  for (let i = 0; i < snake.length; i++) {
    if (snake[i].x == snake[0].x && snake[i].y == snake[0].y && i != 0) {
      clearInterval(myGame);
      window.alert("Game Over");
      return;
    }
  }

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  myFruit.drawFruit();

  for (let i = 0; i < snake.length; i++) {
    if (i == 0) {
      ctx.fillStyle = "lightgreen";
    } else {
      ctx.fillStyle = "lightblue";
    }
    ctx.strokeStyle = "white";

    if (snake[i].x >= canvas.width) snake[i].x = 0;
    if (snake[i].x < 0) snake[i].x = canvas.width - unit;
    if (snake[i].y >= canvas.height) snake[i].y = 0;
    if (snake[i].y < 0) snake[i].y = canvas.height - unit;

    ctx.fillRect(snake[i].x, snake[i].y, unit, unit);
    ctx.strokeRect(snake[i].x, snake[i].y, unit, unit);
  }

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (d == "Left") snakeX -= unit;
  if (d == "Up") snakeY -= unit;
  if (d == "Right") snakeX += unit;
  if (d == "Down") snakeY += unit;

  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  if (myFruit.x == snakeX && myFruit.y == snakeY) {
    myFruit.pickLocation();
    score++;
    saveHighestScore(score);
    document.getElementById("myScore").innerHTML = "遊戲分數: " + score;
    document.getElementById("myScore2").innerHTML = "最高分數: " + highestScore;
  } else {
    snake.pop();
  }

  snake.unshift(newHead);
  window.addEventListener("keydown", changeDirection);
}

let myGame = setInterval(draw, 150);

function loadHighestScore() {
  if (localStorage.getItem("highestScore") == null) {
    highestScore = 0;
  } else {
    highestScore = Number(localStorage.getItem("highestScore"));
  }
}

function saveHighestScore() {
  if (score > highestScore) {
    highestScore = score;
    localStorage.setItem("highestScore", highestScore);
  }
}
