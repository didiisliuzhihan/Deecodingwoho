var x = 40;
var y = 40;
var yv = 1;
var xy = 1;
var xv = 1;
var xz = 1;
var c = 1;
var cJ = 1;
var angel = 1;

function setup() {
  createCanvas(500, 500);
  textSize(64);

  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  colorChange();
  fill(c);

  ellipseMode(CENTER);
  ellipse(x, y, 100);
  push();

  translate(x, y);
  rotate(angel);
  angel = angel + 0.05;
  console.log(angel);
  text("👻", 0, 0);
  pop();
  move();
  if (angel > 360) {
    angel = 0;
  }
}
function colorChange() {
  if (cJ == 1 || c <= 0) {
    c += 10;
  }
  if (cJ == -1 || c > 254) {
    c -= 10;
  }
}

function move() {
  if (x >= width - 40 || x < 40) {
    xz = -xz;
    cJ = -1 * cJ;
    angel = -angel;
  }
  if (y >= height - 40 || y < 40) {
    xy = -xy;
    cj = -cJ;
    angel = -angel;
  }
  xv = xz * 8;
  yv = xy * 2;

  x += xv;
  y += yv;
}
