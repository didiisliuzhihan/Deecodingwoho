let video;
let bodyPose;
let connections;
let poses = [];
var buttonOne;
var buttonText;

// stages
let stage = 1;

// nose
let noseXp;
let noseYp;
let changeW = false;
let score = 0;
let happyImage;
let twenty = [];

// timers
let stage2StartTime = 0;
let stage3StartTime = 0;
let restartButton;

function preload() {
  console.log("this ran");
  happyImage = loadImage("project1p5js/image 2.png");
  bodyPose = ml5.bodyPose("MoveNet", { flipped: true });
}

function gotPoses(results) {
  poses = results;
}

function setup() {
  console.log("this ran");
  buttonText = "!!Switch!!";
  createCanvas(windowWidth - 50, windowHeight - 50).parent("sketch-container");
  background(1, 1, 1);
  fillTheArray(); // fill values for stage 1
  video = createCapture(VIDEO, { flipped: true });
  video.hide();
  bodyPose.detectStart(video, gotPoses);
  buttonOne = createButton(buttonText);
  buttonOne.mousePressed(changeS);
}

function changeS() {
  changeW = !changeW;
}

function detectS() {
  if (changeW) {
    buttonText = "Be Normal";
  } else {
    buttonText = "Be Happy";
  }
}

function draw() {
  image(video, 0, 0);
  background(1, 1, 1, 100);
  showScoreRabbit();

  // 控制不同阶段的切换
  if (stage === 1 && score >= 10) {
    stage = 2;
    fillTheArray(); // 切换到第二阶段，重新生成物品
    stage2StartTime = millis(); // 初始化第二阶段计时器
  } else if (stage === 2) {
    handleStage2();
  } else if (stage === 3) {
    handleStage3();
  }

  toShowArray();
  basketCreat();
}

// 第二阶段逻辑
function handleStage2() {
  if (stage2StartTime === 0) stage2StartTime = millis();

  let elapsedTime = (millis() - stage2StartTime) / 1000;
  textSize(30);
  fill(255);
  text(`Time Left: ${30 - Math.floor(elapsedTime)}s`, width - 200, 50);

  if (score <= -3 || elapsedTime >= 30) {
    stage = 3;
    fillTheArray(); // 切换到第三阶段，重新生成物品
    stage3StartTime = millis(); // 初始化第三阶段计时器
  }
}

// 第三阶段逻辑
function handleStage3() {
  if (stage3StartTime === 0) stage3StartTime = millis();

  let elapsedTime = (millis() - stage3StartTime) / 1000;
  textSize(30);
  fill(255);
  text(`Time Left: ${20 - Math.floor(elapsedTime)}s`, width - 200, 50);

  if (elapsedTime >= 20) {
    if (score >= 15) {
      textSize(50);
      fill(0, 255, 0);
      textAlign(CENTER, CENTER);
      text("You Win!", width / 2, height / 2);
      showRestartButton();
      noLoop(); // 停止游戏
    } else if (score >= 12) {
      textSize(30);
      fill(0, 255, 0);
      textAlign(CENTER, CENTER);
      text("Wow! Lots of candy to take home!", width / 2, height / 2);
      showRestartButton();
      noLoop(); // 停止游戏
    } else {
      textSize(30);
      fill(255, 0, 0);
      textAlign(CENTER, CENTER);
      text("Woohoo! Not enough candy points!", width / 2, height / 2);
      showRestartButton();
      noLoop(); // 停止游戏
    }
  }
}

// 显示分数和表情
function showScoreRabbit() {
  textSize(40);
  fill(255);
  text("Score: " + score, 10, 50);
  textSize(200);
  if (!changeW) {
    text("💀", noseXp - 100, noseYp + 25);
  } else {
    image(happyImage, noseXp - 85, noseYp - 150, 190, 225);
  }
}

// 篮子跟随鼻子移动
function basketCreat() {
  if (poses.length > 0) {
    let pose = poses[0];
    noseXp = pose.nose.x;
    noseYp = pose.nose.y;
  }

  textSize(50);
  text("🧺", noseXp - 25, noseYp + 25);

  testBall();
}

class Creat20Qiu {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.type = 0;

    if (stage === 2) {
      this.type = 1; // 第二阶段全是炸弹
    } else if (stage === 3) {
      this.type = random([0, 1]); // 第三阶段随机
    }
  }

  show() {
    detectS();

    textSize(this.d * 1.5);
    if (this.type === 0) {
      // 糖果
      if (changeW) {
        text("🍖", this.x - this.d / 2, this.y + this.d / 2);
      } else {
        text("🍭", this.x - this.d / 2, this.y + this.d / 2);
      }
    } else if (this.type === 1) {
      // 炸弹
      text("💣", this.x - this.d / 2, this.y + this.d / 2);
    }

    this.y += 2;
    if (this.y > height + this.d / 2) {
      this.y = 0 - this.d / 2;
    }
  }

  detectKill(px, py, pi) {
    try {
      let nN = dist(px, py, this.x, this.y);
      if (nN < this.d / 2) {
        if (this.type === 0) {
          // 接到糖果，加分
          score++;
        } else if (this.type === 1) {
          // 接到炸弹，扣分
          score--;
        }
        twenty.splice(pi, 1); // 移除当前物品
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function fillTheArray() {
  twenty = []; // 清空数组
  for (let i = 0; i < 20; i++) {
    let x = random(0, width);
    let y = random(-height, 0);
    let d = random(30, 50);
    let item = new Creat20Qiu(x, y, d);
    twenty.push(item);
  }
}

function testBall() {
  for (let i = twenty.length - 1; i >= 0; i--) {
    twenty[i].detectKill(noseXp, noseYp, i);
  }
}

function toShowArray() {
  for (let i = 0; i < twenty.length; i++) {
    twenty[i].show();
  }
}

function mousePressed() {
  // 空函数，防止重复定义
}

function touchStarted() {
  changeW = !changeW;
}

function showRestartButton() {
  restartButton = createButton("Restart");
  restartButton.position(width / 2 - 50, height - 100);
  restartButton.mousePressed(restartGame);
}

function restartGame() {
  stage = 1;
  score = 0;
  stage2StartTime = 0;
  stage3StartTime = 0;
  fillTheArray();
  loop(); // 重新开始游戏循环
  restartButton.remove();
}
