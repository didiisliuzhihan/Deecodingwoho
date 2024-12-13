let x=10
let backgroundcolorR=60
let backgroundcolorG=60
let backgroundcolorB=60

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(backgroundcolorR,backgroundcolorG,backgroundcolorB);
    
  fill(255,230,20);
  circle(mouseX,mouseY,x);
  fill(0);
  circle(400 -mouseX,400-mouseY,x);
  
}


function mousePressed(){
  
  fill(0);
  x=random(30,80);
  backgroundcolorR=random(1,190);
   backgroundcolorG=random(1,190);
   backgroundcolorB=random(1,190);
    
  
  
}
