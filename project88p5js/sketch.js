function setup() {
  createCanvas(400, 400);
  
 console.log("My name is Dee-Zhihanliu,\nPartner name is Nadia-Yuehu,\nNadia used English language saying  that a week ago, she lost her ducky pendant. It is yellow with a body. and has round black eyes and an orange-red triangular beak. It has two very small wings on either side of its body and it has no feet.\nIn my imagination, it's a tradional plastic yellow duck with cartoon style.\nInitially, I was scared by the face of duck due to the extremely big dark eyes, which gave me an uncanny valley effect. However, since she definitely thinks the duck was cute though her words I received, I tried again and haved a cute yellow duck. But actually it's not pure yellow but adding some orange, because I felt yellow color with orange is more near the duck in fact than a simple describtion.\nFinally, I added a water map making the view more holistic. I wish the missing duck will love it.")
}

 //water
function draw() {
  background(135,206,235);
  
  
  //name
  textSize(30);
  fill(255);
  textAlign(CENTER,CENTER);
  text('Dee',width/2,height/2);
  
  fill(255,165,0);
  text('Nadia',0.8*width/4,height/4);
  
  //bubble effect
  circle(mouseY, mouseX, random(25));
  circle(400 - mouseY, 400 - mouseX, random(25));
  
  //necklace

  line(110,320,40,0);
  line(150,320,220,0);
  
  //shadow
  push();
  stroke(120,190,220);
  strokeWeight(2);
  fill(120,190,220);
  ellipse(130,350,100,20);
  pop();
  
  
  //duck

  //wing-1
  fill(255,165,0)
  ellipse(89,300,50,30);
  ellipse(171,300,50,30);
  
  //faceandbody
  stroke(0);
  fill(255,165,0);
  ellipse(130,310,120,80);
  circle(130,262,70);
  fill(255,165,0);

  

  //eyes
  fill(0,0,0);
  circle(110,262,13);
  circle(148,262,13);

  //mouth
  fill(265,100,0);
  triangle(113,275,128,288,143,275);
  
  //wing-2
  push();
  noStroke();
  fill(255,165,0)
  ellipse(90,300,50,30);
  ellipse(170,300,50,30);
  pop();

  //wave
  push();
  noFill();
  stroke(255);
  strokeWeight(4);
  bezier(240,340,250,320,260,360,270,340);
  bezier(270,340,280,320,290,360,300,340);
  bezier(300,340,310,320,320,360,330,340);
  bezier(270,280,280,260,290,300,300,280);
  bezier(300,280,310,260,320,300,330,280);
  bezier(330,280,340,260,350,300,360,280);
  bezier(30,350,40,330,50,370,60,350);
  bezier(60,350,70,330,80,370,90,350);


  pop();
  
}