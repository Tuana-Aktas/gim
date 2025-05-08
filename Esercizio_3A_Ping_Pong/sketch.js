let posX, posY;
let velX, velY;
let ballColor;

let paddleWidth = 15;
let paddleHeight = 80;

let paddle1X = 20;
let paddle1Y;

let paddle2X;
let paddle2Y;

let paddleSpeed = 5;

function setup() {
  createCanvas(500, 400);
  posX = width / 2;
  posY = height / 2;
  velX = 4;
  velY = 4;
  ballColor = color(random(255), random(255), random(255));

  paddle1Y = height / 2 - paddleHeight / 2;
  paddle2X = width - 20 - paddleWidth;
  paddle2Y = height / 2 - paddleHeight / 2;
}

function draw() {
  background(0);

  // Movimento pallina
  posX += velX;
  posY += velY;

  // Rimbalzo su pareti alto/basso
  if (posY <= 0 || posY >= height) {
    velY *= -1;
    changeBallColor();
  }

  // Collisione con paddle sinistro
  if (
    posX - 12 <= paddle1X + paddleWidth &&
    posY > paddle1Y &&
    posY < paddle1Y + paddleHeight
  ) {
    velX *= -1;
    posX = paddle1X + paddleWidth + 12;
    changeBallColor();
  }

  // Collisione con paddle destro
  if (
    posX + 12 >= paddle2X &&
    posY > paddle2Y &&
    posY < paddle2Y + paddleHeight
  ) {
    velX *= -1;
    posX = paddle2X - 12;
    changeBallColor();
  }

  // Reset se la pallina esce dai lati
  if (posX < 0 || posX > width) {
    posX = width / 2;
    posY = height / 2;
    velX = random([-4, 4]);
    velY = random([-3, 3]);
    changeBallColor();
  }

  // Controlli paddle sinistro - W/S
  if (keyIsDown(87)) {
    paddle1Y -= paddleSpeed;
  }
  if (keyIsDown(83)) {
    paddle1Y += paddleSpeed;
  }

  // Controlli paddle destro - ↑/↓
  if (keyIsDown(UP_ARROW)) {
    paddle2Y -= paddleSpeed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    paddle2Y += paddleSpeed;
  }

  // Limita paddle entro lo schermo
  paddle1Y = constrain(paddle1Y, 0, height - paddleHeight);
  paddle2Y = constrain(paddle2Y, 0, height - paddleHeight);

  // Disegna pallina
  fill(ballColor);
  noStroke();
  ellipse(posX, posY, 25);

  // Disegna paddle sinistro
  fill(255);
  rect(paddle1X, paddle1Y, paddleWidth, paddleHeight);

  // Disegna paddle destro
  rect(paddle2X, paddle2Y, paddleWidth, paddleHeight);
}

function changeBallColor() {
  ballColor = color(random(255), random(255), random(255));
}
