let timer=0
let size=100

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  timer +=deltaTime;
  let mappedMouseX=map(mouseX,0,400,100,300,true);
  
 if (timer>1000){
   background(255,204,0);
 }
  else if (timer>3000) {
    background(140,210,0);
  }
  else {
    background(220,230,0);
    
  }
  fill(140,210,0);
  circle(200,200,size);
  circle(mappedMouseX,350,50);
  

  if (timer>2000){
    noFill()
    stroke(140,210,0)
    strokeWeight(3)
    circle(200,200,size +=20);
    timer=0
  }
else if (size>200){
  size=100
  
}
 
}