// 定义全局变量
let faceSize = 180; // 脸部的初始大小
let backgroundcolorR = 60;
let backgroundcolorG = 60;
let backgroundcolorB = 60;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // 背景颜色
  background(backgroundcolorR, backgroundcolorG, backgroundcolorB);
  
  // 绘制脸部
  fill(255, 230, 200); // 脸部的颜色
  ellipse(mouseX, mouseY, faceSize, faceSize); // 脸部跟随鼠标移动
  
  // 左眼
  fill(255);
  ellipse(mouseX - faceSize / 5, mouseY - faceSize / 10, faceSize / 4, faceSize / 4); // 根据脸部大小调整眼睛大小
  fill(0);
  ellipse(mouseX - faceSize / 5, mouseY - faceSize / 10, faceSize / 8, faceSize / 8);

  // 右眼
  fill(255);
  ellipse(mouseX + faceSize / 5, mouseY - faceSize / 10, faceSize / 4, faceSize / 4);
  fill(0);
  ellipse(mouseX + faceSize / 5, mouseY - faceSize / 10, faceSize / 8, faceSize / 8);
  
  // 嘴巴
  noFill();
  stroke(0);
  strokeWeight(3);
  arc(mouseX, mouseY + faceSize / 6, faceSize / 4, faceSize / 10, 0, PI, CHORD);
}

function mousePressed() {
  // 随机更改脸部大小
  faceSize = random(50, 200); // 脸的大小会在50到200之间变化
  
  // 随机更改背景颜色
  backgroundcolorR = random(1, 190);
  backgroundcolorG = random(1, 190);
  backgroundcolorB = random(1, 190);
}
