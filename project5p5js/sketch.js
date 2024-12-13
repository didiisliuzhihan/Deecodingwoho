let angle = 0; 
let deeCounter = 0; 
let isDay = true; 


function setup() {
  createCanvas(600, 600); 
  angleMode(DEGREES); 
}

function draw() {


  // millis Deecounter
  let time = millis();
  if (time % 3000 < 50) { 
    angle += 90; 
    deeCounter += 1; 
    
     
    if (isDay) {
      background (0,0,59); 
    }else { 
      background (135, 206, 250); 
    }
    isDay = !isDay; 

    if (deeCounter >= 360) {
      deeCounter = 0; 
    }
  }
  

  push();

  translate(width / 2, height / 2);

  rotate(angle);

  drawHourglassShape();
  pop();

  // Deecounter
  fill(0);
  textSize(16); 
  textAlign(LEFT, TOP);
  text(deeCounter + " Dee", 20, 20); 
  
    fill(0);
  textAlign(RIGHT,TOP);
  text(" HOURGLASS",580,580);
}

// hourglass
function drawHourglassShape() {
  noFill();
  stroke(30);
  strokeWeight(10);

  // up
  beginShape();
  vertex(300 - width / 2, 50 - height / 2);
  bezierVertex(500 - width / 2, 50 - height / 2, 500 - width / 2, 300 - height / 2, 300 - width / 2, 300 - height / 2);
  bezierVertex(100 - width / 2, 300 - height / 2, 100 - width / 2, 50 - height / 2, 300 - width / 2, 50 - height / 2);
  endShape(CLOSE);
  
  // down
  beginShape();
  vertex(300 - width / 2, 300 - height / 2);
  bezierVertex(500 - width / 2, 300 - height / 2, 500 - width / 2, 550 - height / 2, 300 - width / 2, 550 - height / 2);
  bezierVertex(100 - width / 2, 550 - height / 2, 100 - width / 2, 300 - height / 2, 300 - width / 2, 300 - height / 2);
  endShape(CLOSE);

  // central
  noStroke();
  fill(135, 206, 250);
  ellipse(300 - width / 2, 300 - height / 2, 60, 100); 


  // dayscene
  drawDayScene();
  
}

// dayscene
function drawDayScene() {
  // 
  let topBoundaryY = 50 - height / 2;
  let bottomBoundaryY = 300 - height / 2;
  
  // dayscene
  noStroke();
  fill(135, 206, 250); 
noStroke();
fill(135, 206, 250);
ellipse(300 - width / 2, 175 - height / 2, 300, 250); 


// big
   fill(255); 
noStroke();
beginShape();
ellipse(333 - width / 2, 200 - height / 2, 53, 53);  
ellipse(360 - width / 2, 190 - height / 2, 67, 67); 
ellipse(400 - width / 2, 200 - height / 2, 53, 53);  
ellipse(380 - width / 2, 200 - height / 2, 80, 40); 
endShape(CLOSE);
  
  //sun
  fill(255, 223, 0); 
  ellipse(250 - width / 2, 150 - height / 2, 50, 50); 
  
  //night
  noStroke();
fill(0,0,59); 
ellipse(300 - width / 2, 425- height / 2, 300, 250); 
  
fill(255, 223, 0); 
noStroke();

// moon
ellipse(300 - width / 2, 420 - height / 2, 80, 80); 

fill(0, 0, 139); 
ellipse(320 - width / 2, 420 - height / 2, 70, 70); 

  //star
fill(255, 204, 0); 
let starSize = 50 * 6 / 27; 
let centerX = 250 - width / 2;
let centerY = 460 - height / 2;

triangle(centerX, centerY - starSize, 
         centerX - starSize / 2, centerY, 
         centerX + starSize / 2, centerY); 


triangle(centerX, centerY + starSize, 
         centerX - starSize / 2, centerY, 
         centerX + starSize / 2, centerY); 

triangle(centerX - starSize, centerY, 
         centerX, centerY - starSize / 2, 
         centerX, centerY + starSize / 2);


triangle(centerX + starSize, centerY, 
         centerX, centerY - starSize / 2, 
         centerX, centerY + starSize / 2); 

}
