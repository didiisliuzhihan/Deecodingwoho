let x=10

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(155,22,30);
  circle(mouseX,mouseY,x);
}

function mousePressed(){
  
  fill(0);
  x=random(30,80);
}