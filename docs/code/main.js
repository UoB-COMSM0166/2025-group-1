let player, animations = {}, gunImage;

let menuState = 'main';
let firstPlay = true; // 记录是否是第一次进入游戏
let highlightOffset = 0;
let highlightDir = 1;
let settings = { sound: 50, brightness: 50, contrast: false };
let bgImage;
let storyImage1, storyImage2, storyImage3, storyImage4, storyImage5, storyImage6, storyImage7, storyImage8;
let currentStoryImage = 0;

let gameState = 'menu'; // 添加游戏状态管理

function preload() {
  bgImage = loadImage('GAME_DESIGN/1.png');
  storyImage1 = loadImage('GAME_DESIGN/10.png');
  storyImage2 = loadImage('GAME_DESIGN/11.png');
  storyImage3 = loadImage('GAME_DESIGN/12.png');
  storyImage4 = loadImage('GAME_DESIGN/13.png');
  storyImage5 = loadImage('GAME_DESIGN/14.png');
  storyImage6 = loadImage('GAME_DESIGN/15.png');
  storyImage7 = loadImage('GAME_DESIGN/16.png');
  storyImage8 = loadImage('GAME_DESIGN/17.png');
  animations.idle = new Animation([loadImage('Asset/Stand.png', )], 200, true);
  animations.run = new Animation(loadFrames('Asset/Run.png', 2, 35, 35), 100, true);
  animations.shoot = new Animation([
    loadImage('Asset/6.png'),
    loadImage('Asset/7.png'),
    loadImage('Asset/8.png'),
    loadImage('Asset/9.png'),
    loadImage('Asset/10.png'),
  ], 80, false); // 非循环播放
  
  animations.jump = animations.idle; // 或者 animations.run

  gunImage = loadImage('Asset/1_1.png'); 
  console.log(animations);
  
   
}

function loadFrames(spriteSheetPath, frameCount, frameWidth, frameHeight) {
  let frames = [];
  let spriteSheet = loadImage(spriteSheetPath, img => {
    img.loadPixels();
    for (let i = 0; i < frameCount; i++) {
      frames.push(img.get(i * frameWidth, 0, frameWidth, frameHeight));
    }
  });
  return frames;
}

// ==== p5.js主程序 ====
function setup() {
  createCanvas(1600, 900);
  noLoop(); // 确保不会出现重复绘制导致的UI问题
   initializeGame();
  player = new Player(225, 70, animations);

   brightnessSlider = createSlider(0, 100, 50);
  volumeSlider = createSlider(0, 100, 50);
   brightnessSlider.position(width / 2 - 60, 355); // Centered horizontally, adjusted vertically
 volumeSlider.position(width / 2 - 60, 415); // Centered horizontally, adjusted vertically
  brightnessSlider.style('width', '120px');
  volumeSlider.style('width', '120px');
  brightnessSlider.hide(); 
  volumeSlider.hide(); 
  
  
 initPortal();//关卡切换

}

function draw() {
  if (gameState === 'menu') {
    drawMenu();
  } else if (gameState === 'game') {
    drawGame();
  } else if (gameState === "story") {
    drawStoryScene(); // 绘制故事界面
  }
}

function drawMenu() {
  background(settings.contrast ? 0 : 30);
  image(bgImage, 0, 0, width, height); // 绘制背景图片
  animateHighlight();

  if (menuState === 'main') {
    drawMainMenu();
  } else if (menuState === 'startGame') {
    drawStartGameMenu();
  } else if (menuState === 'setting') {
    drawSettingMenu();
  } else if (menuState === 'story') {
    drawStoryImages();
  }
}

function drawGame() {
  
  if (playerHealth < 0) {
        gameOver = true;
  }
    if (gameOver) return showGameOver();
  
  background(220);
  
  if (!isPaused) {
  // 绘制平台
  platforms.forEach(p => p.display());
  //关卡切换part
    if (currentPortal) currentPortal.display();
    checkPortalTransition();

     // 更新玩家
    player.update(platforms, enemies);
     // 在玩家更新后添加
    checkLevelTransition();


    // 绘制玩家
    player.display();
      // 更新并绘制每个敌人
  for (let enemy of enemies) {
    enemy.update();
    enemy.display();
  }
 
  updateEnemyBullets(player);
  // 更新并绘制远程敌人发射的子弹
    
   // **先绘制故事碎片**
  for (let fragment of storyFragments) {
    fragment.show();
  }
   // **最后进行触发检测**
  checkPlayerCollision();
  
  // 添加光照效果
  drawLightEffectWithDecay(1);
  
  // 显示血量
  drawHealth();
  
  
  // 更新无敌状态计时
  if (isInvincible && invincibleTimer-- <= 0) {
    isInvincible = false;
  }
    } else if (showSettings) {
    drawSettingsMenu1();
  } else {
    drawMenu1();
    highlightMenu();
  }
}


function updateEnemyBullets(player) {
  for (let i = enemyBullets.length - 1; i >= 0; i--) {
    if (enemyBullets[i].update(platforms, player)) {
      enemyBullets.splice(i, 1); // 移除需要消失的子弹
    } else {
      enemyBullets[i].display();
    }
  }
}

// ==== 辅助函数 ====
function keyPressed() {
 // 只在游戏结束时响应R键
  if (gameOver && keyCode === 82) { // 82是R键的keyCode
    resetGame();
  }
  
  if (key === 'A' || key === 'a') {
    player.move(false);
  } else if (key === 'D' || key === 'd') {
    player.move(true);
  } else if (key === 'W' || key === 'w') {
    player.jump();
  }
  
  if (key === 'P' || key === 'p') {
    if (!isPaused && !showSettings) {
      isPaused = true;
    } else if (showSettings) {
      hideSettings();
    } else {
      isPaused = false;
    }
  }
  if (key === 'E' || key === 'e') {
    if (gameState === "game" && activeStory) {
      gameState = "story"; // 切换到故事界面
    } else if (gameState === "story") {
      gameState = "game"; // 返回游戏界面
    }
  }
}

function keyReleased() {
  if (key === 'd' || key === 'a') player.stop();
}



function drawPortals() {
  fill(0, 255, 0, 100);
  noStroke();
  rect(1550, 800, 50, 50);
  fill(255);
  textSize(20);
  text("NEXT LEVEL", 1550, 820);
}

// 在main.js的draw循环中调用
function animateHighlight() {
  highlightOffset += highlightDir * 0.3;
  if (highlightOffset > 5 || highlightOffset < -5) {
    highlightDir *= -1;
  }
}

function drawBackgroundBox(items, yOffset = 0, boxWidth = 400) {
  let menuHeight = items.length * 90 + 70;
  fill(255, 255, 255, 180);
  rect(width / 2 - boxWidth / 2, height / 2 - menuHeight / 2 + yOffset, boxWidth, menuHeight, 20);
}

function drawMainMenu() {
  clear();
  image(bgImage, 0, 0, width, height);
  let menuItems = ["START GAME", "SETTING", "HELP", "QUIT"];
  drawBackgroundBox(menuItems, 0, 400);

  for (let i = 0; i < menuItems.length; i++) {
    drawMenuOption(menuItems[i], width / 2, height / 2 - (menuItems.length * 80 + 20) / 2 + 80 * i + 50, () => {
      if (i === 0) {
        menuState = 'startGame';
      } else if (i === 1) {
        menuState = 'setting';
      } else if (i === 2) {
        alert('Help Menu Placeholder');
      } else if (i === 3) {
        alert('Quit Game Placeholder');
      }
      redraw();
    });
  }
}

function drawStartGameMenu() {
  clear();
  image(bgImage, 0, 0, width, height);
  let menuItems = ["CONTINUE", "NEW GAME", "BACK"];
  drawBackgroundBox(menuItems);

  for (let i = 0; i < menuItems.length; i++) {
    drawMenuOption(menuItems[i], width / 2, 300 + 100 * i, () => {
      if (menuItems[i] === "CONTINUE" && !firstPlay) alert("Continuing Game...");
      if (menuItems[i] === "NEW GAME") {
        firstPlay = false;
        menuState = 'story';
        currentStoryImage = 1;
      }
      if (menuItems[i] === "BACK") {
        menuState = 'main';
        redraw();
      }
      redraw();
    }, menuItems[i] === "CONTINUE" && firstPlay);
  }
}

function drawSettingMenu() {
  clear();
  image(bgImage, 0, 0, width, height);
  let menuItems = ["Sound", "Brightness", "High Contrast", "BACK"];
  drawBackgroundBox(menuItems, -60, 480);

  textAlign(CENTER, CENTER);
  textSize(36);

  drawSlider("Sound", 260, settings.sound, (val) => settings.sound = val);
  drawSlider("Brightness", 360, settings.brightness, (val) => settings.brightness = val);
  drawToggle("High Contrast", 460, settings.contrast, (val) => settings.contrast = val);
  drawMenuOption("BACK", width / 2, 560, () => {
    menuState = 'main';
    redraw();
  });
}

function drawStoryImages() {
  clear();
  if (currentStoryImage === 1) image(storyImage1, 0, 0, width, height);
  if (currentStoryImage === 2) image(storyImage2, 0, 0, width, height);
  if (currentStoryImage === 3) image(storyImage3, 0, 0, width, height);
  if (currentStoryImage === 4) image(storyImage4, 0, 0, width, height);
  if (currentStoryImage === 5) image(storyImage5, 0, 0, width, height);
  if (currentStoryImage === 6) image(storyImage6, 0, 0, width, height);
  if (currentStoryImage === 7) image(storyImage7, 0, 0, width, height);
  if (currentStoryImage === 8) image(storyImage8, 0, 0, width, height);

  let arrowX = width - 50; // 右侧边缘位置
  let arrowY = height / 2; // 屏幕垂直居中

  fill(100, 150); // 半透明箭头
  textSize(90);
  textAlign(CENTER, CENTER);
  text('➔', arrowX, arrowY); // 绘制向右箭头符号

  if (mouseIsPressed && mouseX > arrowX - 25 && mouseX < arrowX + 25 && mouseY > arrowY - 25 && mouseY < arrowY + 25) {
    currentStoryImage++;
    if (currentStoryImage > 8) {
      //alert("Starting Game..."); // 或者进入实际游戏逻辑
      //menuState = 'main'; // 返回主菜单或进入游戏
       gameState = 'game'; // 切换到游戏状态
      loop();
    }
    redraw();
  }
}

function drawSlider(label, y, value, callback) {
  fill(255, 102, 102);
  textSize(24);
  text(`${label}: ${value}`, width / 2, y - 40);

  fill(150);
  rect(width / 2 - 100, y, 200, 20);

  fill(255);
  let knobX = map(value, 0, 100, width / 2 - 100, width / 2 + 100);
  ellipse(knobX, y + 10, 30);

  if (mouseIsPressed && mouseY > y - 20 && mouseY < y + 40 && mouseX > width / 2 - 100 && mouseX < width / 2 + 100) {
    let newValue = constrain(map(mouseX, width / 2 - 100, width / 2 + 100, 0, 100), 0, 100);
    callback(newValue);
  }
}

function drawToggle(label, y, state, callback) {
  fill(255, 102, 102);
  textSize(24);
  text(label, width / 2 - 100, y);

  fill(state ? 'green' : 'red');
  rect(width / 2 + 40, y - 20, 80, 40);

  fill(255);
  text(state ? "ON" : "OFF", width / 2 + 80, y);

  if (mouseIsPressed && mouseX > width / 2 + 40 && mouseX < width / 2 + 120 && mouseY > y - 20 && mouseY < y + 20) {
    callback(!state);
  }
}

function drawMenuOption(label, x, y, action, disabled = false) {
  let hovered = isHovered(x, y);
  textAlign(CENTER, CENTER);
  textSize(36);

  stroke(0);
  strokeWeight(6);
  fill(disabled ? 150 : (hovered ? color(255, 102, 102) : color(255, 255, 255)));

  text(label, x, y + (hovered && !disabled ? highlightOffset : 0));
  noStroke();

  if (hovered && mouseIsPressed && !disabled) action();
}

function isHovered(x, y) {
  return mouseX > x - 200 && mouseX < x + 200 && mouseY > y - 40 && mouseY < y + 40;
}

function mousePressed() {
  if (gameState === 'menu') {
    redraw();
    
  } else if (gameState === 'game') {
    // 游戏状态：发射子弹
    if (mouseButton === LEFT) {
      player.shoot();
    }    
  } 
}
// **绘制故事界面**
function drawStoryScene() {
  background(30); // 深色背景，适合故事阅读

  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(activeStory.text, width / 2, height / 2, width - 40, height - 80);

  fill(200);
  textSize(14);
  text("按 E 退出", width - 50, height - 20);
}
// **检测玩家是否触发故事碎片**
function checkPlayerCollision() {
  let nearbyStory = null;
  for (let fragment of storyFragments) {
    if (player.collidesWith(fragment)) {
      nearbyStory = fragment;
      break; // 只找最近的一个
    }
  }

  if (nearbyStory !== activeStory) {
    activeStory = nearbyStory;
  }
}