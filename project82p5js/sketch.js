let colors=[];
let idx=0;
let circleSize=200;

function setup() {
  createCanvas(400, 400);
  colors=[color(155, 246, 255),
            color(160, 196, 255),
            color(255, 173, 173),
            color(166, 153, 242),
            color(203, 255, 191),
         color(0, 255, 191)]
}

function draw() {
  background(colors[idx]);
  
  
  fill(colors[colors.length - idx -1]);
  circle(width/2,height/2,circleSize);
}

function mousePressed() {
  idx++;
  
  if (idx>=colors.length){
    idx=0;
  }
  
}