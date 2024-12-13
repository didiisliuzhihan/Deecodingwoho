let time = 0.0; 
let amp = 20.0; 

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  let numRows = 10; 
  let numCols = 10; 
  let circleSize = width / numCols; 
  
  
  //rotation and movement
  let interactiveAmp = map(mouseY, 0, height, 5, 40);
  let speed = map(mouseX, 0, width, 0.05, 0.5);

  //for positioning and drawing
  for (let row = 0; row < numRows; row++) {
  for (let col = 0; col < numCols; col++) {
    
  // circle‘s position
  let baseX = col * circleSize + circleSize / 2;
  let baseY = row  * circleSize + circleSize / 2;

  // movement effect 
  let offsetX = cos(time + (row + col) * 20)  * interactiveAmp;
  let offsetY = sin(time + (row + col) * 20) * interactiveAmp;

  // final position
  let x = baseX + offsetX;
  let y = baseY + offsetY;

  // Draw concentric circles at each position
  push();
  translate(x, y);
  drawConcentricCircles(circleSize);
  pop();
    }
  }

  time += speed;
}

// Function to draw circles
function drawConcentricCircles(size) {
  let numCircles = 5; 
  // Spacing between each circle
  let spacing = size / (numCircles * 2); 

  for (let i = 0; i < numCircles; i++) {
    let currentSize = size - i * 2 * spacing;
    stroke(220, 60, 60);
    strokeWeight(4);
    noFill();
    ellipse(0, 0, currentSize, currentSize);
  }
}