let faceSizeLarge = 200; 
let faceSizeSmall = 100;
let faceSize = faceSizeLarge; 
let isLarge = true; 
let beans = [];
 let colorR= 60
   let colorG=60  
   let colorB=60;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0); 
  
 //face
  fill(255, 204, 0); 
  noStroke();
  
  //mouth
  arc(mouseX, mouseY, faceSize, faceSize, radians(45), radians(325), PIE); 
  
  // eyes
  fill(0); 
  ellipse(mouseX + faceSize / 5, mouseY - faceSize / 5, faceSize / 10, faceSize / 10);

  // bean
  for (let i = beans.length - 1; i >= 0; i--) {
    let bean = beans[i];
    {fill(bean.r, bean.g, bean.b);
    ellipse(bean.x, bean.y, 10, 10); 
    bean.x += random(1, 4); 
    
  }
  }
}

function mousePressed() {

  if (isLarge) {
    faceSize = faceSizeSmall; 
  } else {
    faceSize = faceSizeLarge; 
  }
  isLarge = !isLarge; 
 
beans.push({
  x: mouseX + faceSize / 2,
  y: mouseY + random(-10, 10),  
  r: random(100, 255),          
  g: random(100, 255),         
  b: random(0, 255)           
});


 
   
}
