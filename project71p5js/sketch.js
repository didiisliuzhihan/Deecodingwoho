let faceSizeLarge=300;
let faceSizeSmall=100;
let faceSize=faceSizeLarge;
let islarge=true;
let beans=[];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(230,130,0);
  
  fill(230,0,0);
  noStroke();
  arc(mouseX,mouseY,faceSize,faceSize,radians(60),radians(500),PIE);
  
  fill(230,130,0);
  ellipse(mouseX,mouseY,faceSize/4,faceSize/4);
  
  fill(0);
  ellipse(mouseX-faceSize/188,mouseY+faceSize/5,faceSize/33,faceSize/11);
   fill(0);
  ellipse(mouseX-faceSize/60,mouseY+faceSize/3,faceSize/33,faceSize/9);
  fill(0);
  ellipse(mouseX+faceSize/10,mouseY+faceSize/3,faceSize/33,faceSize/9);
  
  //bean
  for (let i=beans.length -1;i >= 0;i--){
    let bean=beans[i];
    {fill(0);
     ellipse(bean.x,bean.y,10,10);
     bean.x+=2;
      
    }
  }
  
}
function mousePressed() {

  if (islarge) {
    faceSize = faceSizeSmall; 
  } else {
    faceSize = faceSizeLarge; 
  }
  islarge = !islarge; 
  
  beans.push({x: mouseX + faceSize / 2, y: mouseY});
}