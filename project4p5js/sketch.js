let dropY = 400;  // Y
let dropYY = 410;
let dropYYY = 420;
  let dropSpeed = 1.1; 
  let dropSpeed1 = 0.9; 

let eyeX = 480;  
let eyeY = 380;  
let eyeSpeed = 2; 

function setup() {
  createCanvas(600, 600);
  background(135, 206, 235); 
  
}

function draw() {
  
  background(135, 206, 235);

  drawHair();
  drawFace();
  drawLeg();
  drawMushroomRoot();  
   
  drawTrapezoidShape();
  drawArms();
  moveEye();
  drawEye();
  
  
  
  
  // drop
  fill(255, 0, 0);  
  ellipse(120, dropY, 10, 20);  
  ellipse(100, dropYY, 8, 18);  
  ellipse(135, dropYYY, 8, 18);  

  // move
  dropY += dropSpeed; 
  dropYY +=dropSpeed;
  dropYYY +=dropSpeed1;

  if (dropYYY > height) {
    dropY = 400; 
    dropYY =410; 
    dropYYY =420; 
  }
}

function moveEye() {
  if (keyIsDown(LEFT_ARROW) && eyeX > 465) {  // left limitate
    eyeX -= eyeSpeed;
  }
  if (keyIsDown(RIGHT_ARROW) && eyeX < 495) {  // right limitate
    eyeX += eyeSpeed;
  }
  if (keyIsDown(UP_ARROW) && eyeY > 365) {  // up limitate
    eyeY -= eyeSpeed;
  }
  if (keyIsDown(DOWN_ARROW) && eyeY < 395) {  // down limitate
    eyeY += eyeSpeed;
  }
}

function drawLeg(){
  fill(154, 205, 50);
  stroke(0);
  strokeWeight(2);
  
   beginShape();
  vertex(350); 
  bezierVertex(330, 520, 350, 540, 380, 540);  // up
  bezierVertex(380, 540, 350, 540, 320,540);  // down
  endShape(CLOSE);
  
   beginShape();
  vertex(330 ); 
  bezierVertex(320, 520, 310, 540, 300, 560);  // up
  bezierVertex(300, 560, 310, 540, 320,540);  // down
  endShape(CLOSE);
  
    beginShape();
  vertex(300); 
  bezierVertex(280, 520, 260, 540, 240, 540);  // up
  bezierVertex(240, 540, 260, 540, 280,540);  // down
  endShape(CLOSE);
}


function drawMushroomRoot() {
  
  stroke(0);
  strokeWeight(4);
  fill(30, 80, 260);

  let rootTopY = 400; 
  let rootBottomY = rootTopY + 1 * (300 - 150);  // clothes's 2/3
  let rootWidth = (1 / 2) * (400 - 200);  
  // marhsroom's shape
  beginShape();
  vertex(250, rootTopY);  
  vertex(350, rootTopY);  
  bezierVertex(360, rootTopY + 30, 360, rootBottomY - 20, 300, rootBottomY);  
  bezierVertex(240, rootBottomY - 20, 240, rootTopY + 30, 250, rootTopY);   
  endShape();
}

function drawEye() {
  // center
  let eyeCenterX = 480;
  let eyeCenterY = 380;

  // whiteeyes
  fill(255);
  ellipse(eyeCenterX, eyeCenterY, 50, 50);  
  
  
  fill(0);
  ellipse(eyeX, eyeY, 20, 20);  
}


function drawTrapezoidShape() {
  // clothes
  fill(255);
  stroke(255, 0, 0);
  strokeWeight(3);


  // 4 points
  beginShape();
  vertex(240, 203);  // 左上角
  vertex(360, 203);  // 右上角
  vertex(420, 400);  // 右下角
  vertex(180, 400);  // 左下角
  endShape(CLOSE);

  // wave
 push();
  noFill();
  stroke(255,0,0);
  strokeWeight(4);
  bezier(180, 400, 190, 380, 200, 420, 210, 400);

  bezier(200, 400, 210, 380, 220, 420, 230, 400);
  bezier(220, 400, 230, 380, 240, 420, 250, 400);
  bezier(250, 400, 260, 380, 270, 420, 280, 400);
  bezier(280, 400, 290, 380, 300, 420, 310, 400);
  bezier(310, 400, 320, 380, 330, 420, 340, 400);
  bezier(340, 400, 350, 380, 360, 420, 370, 400);
  bezier(370, 400, 380, 380, 390, 420, 400, 400);
  bezier(400, 400, 410, 380, 420, 420, 420, 400);
  pop();
  
  //blood stains
   fill(255, 0, 0); 
  noStroke();
  beginShape();
  vertex(300, 300);  
  bezierVertex(320, 320, 330, 330, 330, 320);  
  //bezierVertex(130, 450, 135, 430, 130, 400);  
  endShape(CLOSE);
}




function drawFace() {
  //blue face
  stroke(0);
  strokeWeight(4);
  fill(30, 80, 260); 
  ellipse(300, 150, 150, 100);  

  // transition
  fill(255);
  ellipse(300, 130, 60, 30);  

  // eyes
  fill(255);
  ellipse(270, 130, 40, 40);  
  ellipse(330, 130, 40, 40);  

  // pupils
  fill(0);
  ellipse(270, 130, 15, 15);  
  ellipse(330, 130, 15, 15);  
  
  // nose
  fill(0);
  ellipse(300, 155, 20, 20);  
  

  // mouth
  noFill();
  stroke(0);
  strokeWeight(4);
  arc(300, 160, 80, 40, 0, PI);  
}

function drawHair() {
  
  fill(0, 0, 240);
    stroke(0);
  strokeWeight(4);
  //stroke(0, 0, 255);
  //strokeWeight(5);

  beginShape();
  vertex(240, 100);  
  bezierVertex(200, 50, 350, 0, 420, 100);  
  bezierVertex(440, 130, 380, 170, 300, 180);  
  bezierVertex(440, 130, 450, 160, 350, 200); 
   endShape(CLOSE);
 
}

function drawArms() {
  // arms
    fill(30, 80, 260);
  stroke(0);
  strokeWeight(4);

  
  beginShape();
  vertex(220, 250); // since
  bezierVertex(180, 300, 160, 340, 130, 380);  // up
  bezierVertex(140, 390, 180, 370, 220, 250);  // down
  endShape(CLOSE);

  // right one
  beginShape();
  vertex(380, 250); 
  bezierVertex(420, 300, 440, 340, 470, 380);  
  bezierVertex(460, 390, 420, 370, 380, 250); 
  endShape(CLOSE);
  
   // dead head
  fill(255, 224, 189);
  ellipse(120, 380, 100, 100); 
  fill(255);
  ellipse(480, 380, 50, 50);  //dead pupil
  
  //dead eye
  line(100, 360, 140, 390);
  line(140, 360, 100, 390);
  
  //Tongue
    fill(255, 0, 0); 
  noStroke();
  beginShape();
  vertex(110, 400);  
  bezierVertex(115, 430, 125, 450, 120, 470); 
  bezierVertex(130, 450, 135, 430, 130, 400);  
  endShape(CLOSE);
}

