let mySound;
let fartData = [11, 5, 7, 5, 10, 4];  
let week = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];  
let img;
let currentHeight = [];
let allStopped = false; 
let Xfart = 40;
let Yfart = 30;

function setup() {
  createCanvas(600, 600);
  img = loadImage('screenshot-20241018-001516.png');
  frameRate(18); 
  
  // Initialize column heights
  for (let i = 0; i < fartData.length; i++) {
    currentHeight[i] = 0;
  }

  mySound = loadSound('fart.m4a', function() {
    mySound.play(); 
  });
}

function draw() {
  background(255, 225, 187);  
  
  // title
  fill(255, 189, 89);  
  textSize(24); 
  textAlign(CENTER);  
  text("My Amount of Farts in A Week", width / 2, 40);  

  image(img, 100, 100);

  allStopped = true; 

  for (let i = 0; i < fartData.length; i++) {
    let targetHeight = map(fartData[i], 0, 12, 0, height - 40);

    if (currentHeight[i] < targetHeight) {
      currentHeight[i] += 2;
      allStopped = false;  
    } else {
      currentHeight[i] = targetHeight;
    }

    
    fill(255, 189, 89);  
    stroke(87, 204, 184);

    
    rect(50 + i * 90, height - currentHeight[i] - 45, 50, currentHeight[i]);

   
    fill(255, 189, 89); 
    textSize(17);
    stroke(0, 0, 60);
    text(week[i], 75 + i * 90, height - 15); 
    fill(87, 204, 184);
    text(fartData[i] + " times", 70 + i * 90, height - currentHeight[i] - 55);  
  }

  // resetcolumns animation
  if (allStopped) {
    resetColumns();  // 所有柱子达到目标高度后重置
  }
}

function resetColumns() {
  for (let i = 0; i < fartData.length; i++) {
    currentHeight[i] = 0;  
  }
  mySound.play();
}
