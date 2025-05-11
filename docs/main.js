// Sound effects
let bgMusic, levelMusic, bossMusic, combatMusic, boss_lowMusic, victoryMusic;
let currentMusic = null;
let player, animations = {}, gunImage;
let menuState = 'main';
let firstPlay = true; // Record if it's the first time entering the game
let highlightOffset = 0;
let highlightDir = 1;
let settings = { 
  sound: 50, 
  brightness: 50,  
  contrast: false,   // Control high contrast
  uiScale: 1.0,
  textScale: 1.0,   
  colorBlind: false,
  fontWeightBold: false  // Bold font setting
}

let bgImage;
let storyImage1, storyImage2, storyImage3, storyImage4, storyImage5;
let currentStoryImage = 0;
let gameDifficulty = 0;
let smallImage1, smallImage2, smallImage3, smallImage4, smallImage5, smallImage6;
let gunShotSound;
let heartBeatSound;
let brightnessLevel = 1.0; // Brightness level, 1 = brightest, 0 = darkest
let heartbeatPlayed = false; // Heartbeat sound setting, play only once
let gameState = 'menu'; // Add game state management
// **UI related variables**
let storyBookImage; // Background image setting for the beginning of level 1
let storyThenInstruction = false; // Insert instruction after level 1 intro
let showFragmentPopup = false; // Story fragment indicator popup
let fragmentPopupTriggered = false;

// Music settings
let lastMusicSwitch = 0; // Last time music was switched
let musicCooldown = 5000; // 5 second cooldown
let inCombat = false; // Whether in combat state
let isLowHealth = false;

let combatMusicStartTime = 0;    // Record when combat music started playing
const MIN_COMBAT_MUSIC_DURATION = 1000; // Minimum play duration of 5 seconds (in milliseconds)
let isCombatMusicLocked = false; // Whether combat music is forcibly locked (cannot switch before 5 seconds)

let soundManager;
let yOffset = 0; // No longer shaking
let movingWallTile; // Wall texture
autoSaveOnPortal();  // Auto-save game progress
let showSkipDialog = false;  // Whether to show skip level popup
let justSkipped = false; // Skip level protection

let enemyIdleAnim, enemyRunAnim, enemyAttackAnim; // Melee enemy actions

// Textures
let bossImg; // Boss texture
let pauseButton; // Pause button
let exitImg; // Exit texture

// Accessibility mode
let colorBlindSelect; // Colorblind mode

function preload() {
  // Load background music
  bgMusic = loadSound('Audio/main_menu.mp3');
  levelMusic = loadSound('Audio/123.mp3');       // Shared music for levels 1-5
  bossMusic = loadSound('Audio/Boss.mp3');       // Level 6 Boss music
  combatMusic = loadSound('Audio/combat.mp3');   // Combat music
  boss_lowMusic = loadSound('Audio/Boss_low.mp3'); // Boss low health music
  victoryMusic = loadSound('Audio/Victory.mp3'); // Victory music 
  gunShotSound = loadSound('Audio/gunshot.mp3'); // Gunshot sound
  heartBeatSound = loadSound('Audio/heartbeat.mp3');
  storyBookImage = loadImage('Asset/11.png'); // Load new game background story image
  exitImg = loadImage("Asset/door.png"); // Replace texture path
  fragmentImg = loadImage('Asset/fragment.png');

  bgImage = loadImage('GAME_DESIGN/1.png');
  overlayImg = loadImage('Asset/Overlay_illumination.png');
  let tileImg1 = loadImage('Asset/tile1.png');
  let tileImg2 = loadImage('Asset/tile2.png');
  let tileImg3 = loadImage('Asset/tile3.png');
  tileImages.push(tileImg1, tileImg2, tileImg3);

  // Enemy textures and animations
  enemyRunAnim = new Animation(loadFrames('Asset/EnemyRun.png', 7, 96, 96), 100, true);
  enemyDeadImg = new Animation(loadFrames('Asset/EnemyDead.png', 5, 96, 96), 100, false);

  // ========== Global animation object declarations ==========
  enemyScreamAnim = new Animation(loadFrames("Asset/EnemyScream.png", 5, 96, 96), 100, false);
  // Load Idle animation (using image: EnemyIdle.png, 4 frames, each 96×96)
  enemyIdleAnim = new Animation(
    loadFrames("Asset/EnemyIdle.png", 4, 96, 96),
    100, // Frame duration in ms
    true // Whether to loop
  );

  // Load Attack animation (using image: EnemyAttack.png, 4 frames, each 96×96)
  enemyAttackAnim = new Animation(
    loadFrames("Asset/EnemyAttack.png", 4, 96, 96),
    200, 
    false // Attack animation stops after one play
  );

  spiderImg = loadImage('Asset/Spider.png');

  rangeWalkAnim = new Animation(loadFrames('Asset/RangeWalk.png', 10, 128, 128), 100, true);
  rangeShotImg = new Animation(loadFrames('Asset/RangeShot.png', 4, 128, 128), 100, true);
  rangeDeadImg = new Animation(loadFrames('Asset/RangeDead.png', 5, 128, 128), 100, false);

  // Load broken wall animation frames
  breakableWallFrames.push(loadImage('Asset/wall1.png')); // Intact
  breakableWallFrames.push(loadImage('Asset/wall2.png')); // First crack
  breakableWallFrames.push(loadImage('Asset/wall3.png')); // Second crack
  breakableWallFrames.push(loadImage('Asset/wall4.png')); // Completely broken

  // Moving trap wall texture
  movingWallTile = loadImage('Asset/MovingWallTile.png'); // Texture size 50x50 pixels

  // Decorations
  capsule1Img = loadImage('Asset/Capsule1.png');
  capsule2Img = loadImage('Asset/Capsule3.png');
  capsule3Img = loadImage('Asset/Capsule4.png');
  capsule4Img = loadImage('Asset/Capsule5.png');
  
  monitor1Img = loadImage('Asset/Monitor1.png');
  monitor2Img = loadImage('Asset/Monitor2.png');
  monitor7Img = loadImage('Asset/Monitor7.png');
  
  storyImage1 = loadImage('GAME_DESIGN/10.png');
  storyImage2 = loadImage('GAME_DESIGN/11.png');
  storyImage3 = loadImage('GAME_DESIGN/12.png');
  storyImage4 = loadImage('GAME_DESIGN/15.png');
  storyImage5 = loadImage('GAME_DESIGN/16.png');
  backgroundImage = loadImage('Asset/Background.png'); // Load background image
  smallImage1 = loadImage('GAME_DESIGN/Akey.png');
  smallImage2 = loadImage('GAME_DESIGN/Dkey.png');
  smallImage3 = loadImage('GAME_DESIGN/Ekey.png');
  smallImage4 = loadImage('GAME_DESIGN/mouse.png');
  smallImage5 = loadImage('GAME_DESIGN/Pkey.png');
  smallImage6 = loadImage('GAME_DESIGN/Wkey.png');

  // ———— Load ending animation, each image corresponds to a story segment ————
  endImage1 = loadImage('GAME_DESIGN/18.png');
  endImage2 = loadImage('GAME_DESIGN/19.png');
  endImage3 = loadImage('GAME_DESIGN/20.png');
  endImage4 = loadImage('GAME_DESIGN/21.png');
  endImage5 = loadImage('GAME_DESIGN/22.png');
  endImage6 = loadImage('GAME_DESIGN/23.png');

  animations.idle = new Animation([loadImage('Asset/Stand.png')], 200, true);
  animations.run = new Animation(loadFrames('Asset/Run.png', 2, 35, 35), 100, true);
  animations.shoot = new Animation([
    loadImage('Asset/6.png'),
    loadImage('Asset/7.png'),
    loadImage('Asset/8.png'),
    loadImage('Asset/9.png'),
    loadImage('Asset/10.png'),
  ], 80, false); // Non-looping playback

  animations.jump = animations.idle; // animations.run

  gunImage = loadImage('Asset/1_1.png');
  console.log(animations);
  bossImg = loadImage('Asset/Boss.png');  // Boss texture
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

let cnv;  
// ==== main.js main program ====
function setup() {
  cnv = createCanvas(1600, 900); // Store the return value of createCanvas
  noLoop(); // Only call when needed
  initializeGame();
  player = new Player(225, 70, animations);

  // Create accessibility control instance, default inactive
  accessibilityCtrl = new AccessibilityController(player);
  accessibilityCtrl.isActive = false; 

  let savedSound = localStorage.getItem("sound");
  if (savedSound !== null) {
    settings.sound = parseInt(savedSound);
  } // Remember last volume level
  
  applyBrightnessOverlay(brightnessLevel);  // Add brightness overlay
  brightnessSlider = createSlider(0, 100, 50);
  volumeSlider = createSlider(0, 100, 50);
  brightnessSlider.position(width / 2 - 60, 355); // Centered horizontally, adjusted vertically
  volumeSlider.position(width / 2 - 60, 415); // Centered horizontally, adjusted vertically
  brightnessSlider.style('width', '120px');
  volumeSlider.style('width', '120px');

  brightnessSlider.hide(); 
  volumeSlider.hide(); 
  soundManager = new SoundManager();
  soundManager.setMusic('menu');  // Initial menu music
  
  initPortal(); // Top-right button
  pauseButton = createButton('⏸');
  pauseButton.position(width - 70, 20);  // Top-right offset
  pauseButton.size(40, 40);
  pauseButton.style('font-size', '20px');
  pauseButton.style('font-weight', 'bold');
  pauseButton.style('background-color', '#ff5555');
  pauseButton.style('color', 'white');
  pauseButton.style('border', 'none');
  pauseButton.style('border-radius', '50%');
  pauseButton.style('box-shadow', '2px 2px 8px rgba(0,0,0,0.3)');
  pauseButton.style('cursor', 'pointer');
  
  // Hover highlight effect
  pauseButton.mouseOver(() => {
    pauseButton.style('background-color', '#ff7777');
  });
  pauseButton.mouseOut(() => {
    pauseButton.style('background-color', '#ff5555');
  });
  
  // Click: trigger pause menu
  pauseButton.mousePressed(() => {
    if (!isPaused) {
      isPaused = true;
      showSettings = false;
      menuState = 'menu1';  // Show pause menu
      loop();
      redraw();
    }
  });
  
  skipButton = createButton('⏭️');
  skipButton.position(width - 130, 20);
  skipButton.size(40, 40);
  skipButton.style('font-size', '20px');
  skipButton.style('font-weight', 'bold');
  skipButton.style('background-color', '#55ccff');
  skipButton.style('color', 'white');
  skipButton.style('border', 'none');
  skipButton.style('border-radius', '50%');
  skipButton.style('box-shadow', '2px 2px 8px rgba(0,0,0,0.3)');
  skipButton.style('cursor', 'pointer');
  
  skipButton.mousePressed(() => {
    if (!isPaused && gameState === 'game') {
      showSkipDialog = true;
      loop();
      redraw();
    }
  });
}

function draw() {
  if (gameState === 'menu') {
    drawMenu();
    soundManager.setMusic('menu');
  } else if (gameState === 'game') {
    drawGame();
    if (currentLevel < 3) {
      if(inCombat){
        soundManager.setMusic('combat');
        combatMusicStartTime = millis();
        isCombatMusicLocked = true; // Lock music switching
      } else if (isCombatMusicLocked) {
        const elapsed = millis() - combatMusicStartTime;
        if (elapsed >= MIN_COMBAT_MUSIC_DURATION) {
          soundManager.setMusic('level');
          isCombatMusicLocked = false; // Unlock music switching
        }
      } else {
        soundManager.setMusic('level');
      }
    }
    if(currentLevel === 3 && !isLowHealth) {
      soundManager.setMusic('boss');  
    }
    
    // Dynamic music switching
    checkCombatStatus();
  } else if (gameState === "story") {
    drawStoryScene(); // Draw story interface
  } else if (gameState === 'endingCutscene') {
    drawEndingCutscene();
    isLowHealth = false;
    soundManager.setMusic('menu');
  }
  
  // Red overlay flash when player has one health
  if (redOverlayFlashes > 0) {
    redOverlayTimer--;

    if (redOverlayTimer <= 0) {
      isRedVisible = !isRedVisible;
      redOverlayTimer = 10; // Flash for 10 frames

      if (!isRedVisible) {
        redOverlayFlashes--; // Count only when going from on to off
      }
    }

    if (isRedVisible) {
      drawRedOverlay(); // Function defined in ui.js
    }
  }
  
  // Bold design
  // Switch text style based on settings.fontWeightBold
  if (settings.fontWeightBold) {
    textStyle(BOLD);
  } else {
    textStyle(NORMAL);
  }

  // Set volume
  if (soundManager.currentMusic && soundManager.currentMusic.isPlaying()) {
    let volume = settings.sound / 100;
    if (volume < 0.01) volume = 0;
    soundManager.setVolume(volume);
  }
  
  // Pause interface only appears during game interface, skip interface only appears in non-Boss levels
  if (gameState === 'game' && !isPaused && !showSettings) {
    pauseButton.show();

    // Only show skip button when current level is not level 4
    if (currentLevel < 3) {
      skipButton.show();
    } else {
      skipButton.hide();
    }
  } else {
    pauseButton.hide();
    skipButton.hide();
  }

  // Skip page
  if (showSkipDialog) {
    fill(255, 255, 255, 240);
    stroke(0);
    strokeWeight(2);
    rect(width / 2 - 200, height / 2 - 100, 400, 200, 20);
  
    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(28);
    text("Skip to next level?", width / 2, height / 2 - 30);

    // Skip current level design
    drawMenuOption("CONFIRM", width / 2 - 100, height / 2 + 50, () => {
      showSkipDialog = false;
      skipToNextLevel(); // Don't use resetGame()
    });
    
    drawMenuOption("CANCEL", width / 2 + 100, height / 2 + 50, () => {
      showSkipDialog = false;
      redraw();
    });
  }
  
  let filters = [];

  if (settings.contrast) {
    // High contrast: brighten + increase contrast + saturate
    filters.push('brightness(110%)');
    filters.push('contrast(130%)');
    filters.push('saturate(150%)');
  } else {
    // Normal mode: no special design
    applyBrightnessOverlay(settings.brightness / 100);
  }
  // Only when contrast=true does filters array have content, in normal mode filters is empty, meaning no CSS filters are applied
  cnv.elt.style.filter = filters.join(' ');
}

let lastLevelMusicPlayTime = 0; // Last time level music was played

function checkCombatStatus() {
  // Check if player has shot within last 500ms
  const hasShotRecently = (millis() - player.lastShotTime) < 500;
  
  // Check number of enemies within certain radius
  const nearEnemy = enemies.some(e => {
    return dist(player.x, player.y, e.x, e.y) < 200;
  });

  // Update combat state
  inCombat = hasShotRecently && nearEnemy && !isPaused && !showSettings && !showSkipDialog;
}

function handleMusicTransition() {
  const now = millis();
  const Music = currentLevel === 5 ? 'boss' : 'levelMusic';

  // Switch music based on combat state
  if (inCombat) {
    if (soundManager.currentMusic !== combatMusic) {
      soundManager.setMusic('combat');
      lastMusicSwitch = now;
    }
    return; // Return, don't execute following logic
  }
}

function drawMenu() {
  background(settings.contrast ? 0 : 30);
  image(bgImage, 0, 0, width, height); // Draw background image
  animateHighlight();
  if (menuState === 'main') {
    drawMainMenu();
  } else if (menuState === 'startGame1') {
    drawStartGameMenu1();
  } else if (menuState === 'startGame2') {
    drawStartGameMenu2();
  } else if (menuState === 'startGame3') {
    drawStartGameMenu3();
  } else if (menuState === 'setting') {
    drawSettingMenu();
  } else if (menuState === 'story') {
    drawStoryImages();
  } else if (menuState === 'instruction') {
    drawInstruction();  
  } else if (menuState === "instruction2") {
    drawInstruction2();  // Instruction inserted at game start
  } else if (menuState === 'menu1') {
    drawMenu1();
  }
}

function drawGame() {
  // Background image
  image(backgroundImage, 0, 0, width, height);

  if (playerHealth < 1) {
    gameOver = true;
  }
  if (gameOver) return showGameOver();

  if (!isPaused) {
    // Platforms
    platforms.forEach(p => p.display());

    // Portal
    if (currentPortal) currentPortal.display();
    checkPortalTransition();

    // Poison gas overlay effect
    overlayPhase += 0.02;
    let alphaVal = map(sin(overlayPhase), -1, 1, 30, 70);
    tint(255, alphaVal);
    image(overlayImg, 0, 0, width, height);
    noTint();

    // Traps
    traps.forEach(t => {
      t.update(player, platforms);
      t.display();
    });

    // Player update
    player.update(platforms, enemies);
    checkLevelTransition();
    // Story fragment trigger detection
    if (currentLevel === 0 && !fragmentPopupTriggered && player.x < 150) {
      showFragmentPopup = true;
      fragmentPopupTriggered = true;
      loop();
      redraw();
    }
    
    if (accessibilityCtrl.isActive) {
      accessibilityCtrl.update();
      player.gunAngle = accessibilityCtrl.gunAngle;
    }

    player.display();

    // Enemy update
    for (let enemy of enemies) {
      enemy.update();
      enemy.display();
    }

    updateEnemyBullets(player);

    for (let i = enemies.length - 1; i >= 0; i--) {
      let e = enemies[i];
      if (e instanceof BossEnemy && e.dead) {
        platforms[9].isActive = true;
        console.log("Activating platform[9] because Boss is dead.");
      }
    }

    // Story fragments + collision detection
    for (let fragment of storyFragments) {
      fragment.show();
    }
    checkPlayerCollision();

    // Lighting effect
    if (gameDifficulty == 1) {
      drawLightEffectWithDecay(1);
    }

    // Show health
    drawHealth();
    // Play heartbeat sound only once when at one health
    if (playerHealth === 1 && !heartbeatPlayed) {
      heartBeatSound.setLoop(false); // Stop heartbeat sound to prevent looping
      heartBeatSound.play();         
      heartbeatPlayed = true;        // Flag to play heartbeat sound only once
    }
  } else if (showSettings) {
    drawSettingMenu1();
  } else {
    drawMenu1();
  }

  // Brightness overlay
  let brightnessLevel = settings.brightness / 100;
  applyBrightnessOverlay(brightnessLevel);

  // === Show current level ===
  fill(0, 0, 0, 150);
  noStroke();
  rect(width / 2 - 100, 10, 200, 40, 10);  // Background box

  fill(255);
  textAlign(CENTER, CENTER);
  textSize(24);
  text("LEVEL " + (currentLevel + 1), width / 2, 30);  // Centered white text

  // Story fragment instruction
  if (showFragmentPopup) {
    fill(255, 255, 255, 240);
    stroke(0);
    strokeWeight(2);
    rect(width / 2 - 300, height / 2 - 200, 600, 400, 20);
  
    if (fragmentImg) {
      image(fragmentImg, width / 2 - 75, height / 2 - 140, 150, 150);
    }
  
    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(22);
    text("Press E to pick up the story fragment.", width / 2, height / 2 + 80);
  
    drawMenuOption("OK", width / 2, height / 2 + 130, () => {
      showFragmentPopup = false;
      redraw();
    });
  }
}

function updateEnemyBullets(player) {
  for (let i = enemyBullets.length - 1; i >= 0; i--) {
    if (enemyBullets[i].update(platforms, player)) {
      enemyBullets.splice(i, 1); // Remove bullets that need to disappear
    } else {
      enemyBullets[i].display();
    }
  }
}

// ==== Helper functions ====
function keyPressed() {
  // If game over, press R to restart
  if (gameOver && keyCode === 82) {
    resetGame(currentLevel, true); // Reset current level and skip story
    return;
  }
  
  // Unified handling of movement and jumping (common to all modes)
  let lower = key.toLowerCase();
  if (lower === 'a') {
    player.move(false);
  }
  if (lower === 'd') {
    player.move(true);
  }
  if (lower === 'w') {
    player.jump();
  }
  
  // Let accessibility controller handle special keys (SHIFT and space)
  accessibilityCtrl.handleKeyPressed(key);
  
  // Pause and enter story interface
  if (lower === 'p') {
    if (!isPaused && !showSettings) {
      isPaused = true;
    } else if (showSettings) {
      hideSettings();
    } else {
      isPaused = false;
    }
  }
  if (lower === 'e') {
    if (gameState === "game" && activeStory) {
      gameState = "story";
    } else if (gameState === "story") {
      gameState = "game";
    }
  }
  
  return false; 
}

function keyReleased() {
  if (key === 'd' || key === 'a' || key === 'D' || key === 'A') player.stop();
}

function drawPortals() {
  fill(0, 255, 0, 100);
  noStroke();
  rect(1550, 800, 50, 50);
  fill(255);
  textSize(20);
  text("NEXT LEVEL", 1550, 820);
}

// Called in main.js draw loop
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
  let menuItems = ["START GAME", "SETTING", "INSTRUCTIONS"];
  drawBackgroundBox(menuItems, 0, 400);

  for (let i = 0; i < menuItems.length; i++) {
    drawMenuOption(menuItems[i], width / 2, height / 2 - (menuItems.length * 80 + 20) / 2 + 80 * i + 50, () => {
      setTimeout(() => { // Delay 50ms to prevent multiple page jumps from one click
        if (i === 0) {
          menuState = 'startGame1';
        } else if (i === 1) {
          menuState = 'setting';
        } else if (i === 2) {
          menuState = 'instruction';
        }
        redraw();
      }, 50);
    });
  }
}

function drawStartGameMenu1() {
  clear();
  image(bgImage, 0, 0, width, height);
  let menuItems = ["CONTINUE", "NEW GAME", "BACK"];
  drawBackgroundBox(menuItems);

  for (let i = 0; i < menuItems.length; i++) {
    const item = menuItems[i];
    const isContinueDisabled = item === "CONTINUE" && firstPlay;

    drawMenuOption(item, width / 2, height / 2 - (menuItems.length * 80 + 20) / 2 + 80 * i + 50, () => {
      setTimeout(() => {
        if (item === "CONTINUE") {
          const data = localStorage.getItem("saveData");
          if (!data) {
            alert("⚠️ No saved game found!");
            return;
          }

          loadGame();  // loadGame() includes initializeGame()
        }

        if (item === "NEW GAME") {
          firstPlay = false;
          menuState = 'startGame2';  
        }

        if (item === "BACK") {
          menuState = 'main';
        }

        redraw();
      }, 50);
    }, isContinueDisabled);
  }
}

function drawStartGameMenu2() {
  clear();
  image(bgImage, 0, 0, width, height);

  let menuItems = [
    "EAZY MODE",
    "EXPLORATION MODE",
    "ACCESSIBILITY MODE",
    "BACK"
  ];
  drawBackgroundBox(menuItems);

  for (let i = 0; i < menuItems.length; i++) {
    drawMenuOption(menuItems[i],
      width / 2,
      height / 2 - (menuItems.length * 80 + 20) / 2 + 80 * i + 50,
      () => {
        const item = menuItems[i];

        setTimeout(() => {
          if (item === "EAZY MODE") {
            clearSavedGame();
            resetGame(0);
            gameDifficulty = 0;
            menuState = 'startGame3';
            currentStoryImage = 1;
          } else if (item === "EXPLORATION MODE") {
            clearSavedGame();
            resetGame(0);
            gameDifficulty = 1;
            menuState = 'startGame3';
            currentStoryImage = 1;
          } else if (item === "ACCESSIBILITY MODE") {
            clearSavedGame();
            resetGame(0);
            gameDifficulty = 0;
            currentStoryImage = 1;
            menuState = 'startGame3';

            // Accessibility mode settings
            accessibilityCtrl.isActive = true;  // Activate accessibility mode
            settings.contrast = true;
            settings.fontWeightBold = true;
            settings.brightness = 100;
            settings.largeText = true;
            settings.simplified = true;
            settings.saturation = true;
            console.log("✅ Accessibility Mode Activated");
          } else if (item === "BACK") {
            menuState = 'startGame1';
          }

          redraw();
        }, 50);
      }
    );
  }
}

function drawStartGameMenu3() {
  clear();
  image(bgImage, 0, 0, width, height);
  let menuItems = ["LEVEL 1", "LEVEL 2", "LEVEL 3", "LEVEL 4", "BACK"];
  drawBackgroundBox(menuItems);
  for (let i = 0; i < menuItems.length; i++) {
    drawMenuOption(menuItems[i], width / 2, height / 2 - (menuItems.length * 80 + 20) / 2 + 80 * i + 50, () => {
      setTimeout(() => { // Delay 50ms to ensure current frame completes
        if (menuItems[i] === "LEVEL 1") {
          resetGame(0); 
          menuState = 'story';
          currentStoryImage = 1;
          storyThenInstruction = true;  // ✅ Enter instruction after story images
        }
        if (menuItems[i] === "LEVEL 2") {
          currentLevel = 1;
          clearSavedGame();
          resetGame();
          gameState = 'game';
        }
        if (menuItems[i] === "LEVEL 3") {
          currentLevel = 2;
          clearSavedGame();
          resetGame();
          gameState = 'game';
        }
        if (menuItems[i] === "LEVEL 4") {
          currentLevel = 3;
          clearSavedGame();
          resetGame();
          gameState = 'game';
        }
        if (menuItems[i] === "BACK") {
          // Only process following code when in accessibility mode
          if (accessibilityCtrl.isActive) {
            accessibilityCtrl.isActive = false;
            accessibilityCtrl.autoRotateGun = false;
            settings.contrast = false;
            settings.fontWeightBold = false;
            console.log("🔁 EXIT: Accessibility mode deactivated");
          }
          menuState = 'startGame2';
          redraw();
        }
        
        redraw();
      }, 50);
    })
  }
}

function drawSettingMenu() {
  loop(); // Enable refresh
  clear();
  image(bgImage, 0, 0, width, height);
  let menuItems = ["Sound", "Brightness", "High Contrast", "Bold Font", "BACK"];
  drawBackgroundBox(menuItems, -30, 420);

  textAlign(CENTER, CENTER);
  textSize(36);

  // Setting main functions
  // Sound
  drawSlider("Sound", 260, settings.sound, v => settings.sound = Math.round(v));
  // Brightness
  drawSlider("Brightness", 350, settings.brightness, v => settings.brightness = Math.round(v));
  // High contrast
  drawToggle("High Contrast", 440, settings.contrast, v => settings.contrast = v);
  // Bold font
  drawToggle("Bold Font", 530, settings.fontWeightBold, v => settings.fontWeightBold = v);

  drawMenuOption(
    "BACK",
    width/2, 
    610,
    () => {
      showSettings = false;
      brightnessSlider.hide();
      volumeSlider.hide();
      menuState = 'main';  
    }
  );
  menuState = 'setting';
  noLoop(); // Disable refresh when returning to main menu
  redraw();
}

function drawInstruction() {
  clear();
  image(bgImage, 0, 0, width, height);
  
  function drawWhiteBox(x, y, width, height) { 
    fill(255, 220); // Semi-transparent white
    stroke(0);
    strokeWeight(3);
    rect(x, y, width, height, 15); // Rounded rectangle
    fill(0);
    noStroke();
  }
  drawWhiteBox(width / 2 - 330, height / 2 - 230, 590, 435);

  fill(0); // Use black text for high visibility
  textSize(36);
  textAlign(CENTER, CENTER);
  text('INSTRUCTIONS', width/2, 250);
 
  image(smallImage1, 550, 325, 50, 50); 
  image(smallImage2, 900, 325, 50, 50); 
  image(smallImage3, 550, 525, 50, 50); 
  image(smallImage4, 550, 410, 50, 75); 
  image(smallImage5, 900, 525, 50, 50); 
  image(smallImage6, 900, 425, 50, 50); 

  fill(0); // Use black text for high visibility
  textSize(24);
  textAlign(CENTER, CENTER);
  text('Press A to move left', 620, 300);
  text('Press D to move right', 920, 300);
  text('Left Click to attack', 620, 400);
  text('Press W to jump', 920, 400);
  text('Press E to story fragment', 625, 500);
  text('Press P to pause', 920, 500);
  
  drawMenuOption("BACK", 780, 620, () => {
    menuState = 'main';
    redraw();
  });
}

function drawInstruction2() {
  clear();
  image(bgImage, 0, 0, width, height);
  
  function drawWhiteBox(x, y, width, height) { 
    fill(255, 220); // Semi-transparent white
    stroke(0);
    strokeWeight(3);
    rect(x, y, width, height, 15); // Rounded rectangle
    fill(0);
    noStroke();
  }
  drawWhiteBox(width / 2 - 330, height / 2 - 230, 590, 435);

  fill(0); // Use black text for high visibility
  textSize(36);
  textAlign(CENTER, CENTER);
  text('INSTRUCTIONS', width/2, 250);
 
  image(smallImage1, 550, 325, 50, 50); 
  image(smallImage2, 900, 325, 50, 50); 
  image(smallImage3, 550, 525, 50, 50); 
  image(smallImage4, 550, 410, 50, 75); 
  image(smallImage5, 900, 525, 50, 50); 
  image(smallImage6, 900, 425, 50, 50); 

  fill(0); // Use black text for high visibility
  textSize(24);
  textAlign(CENTER, CENTER);
  text('Press A to move left', 620, 300);
  text('Press D to move right', 920, 300);
  text('Left Click to attack', 620, 400);
  text('Press W to jump', 920, 400);
  text('Press E to story fragment', 625, 500);
  text('Press P to pause', 920, 500);
  
  drawMenuOption("START GAME", 780, 620, () => {

    gameState = 'game';    // Enter the first level
    menuState = null;      // Clear menu state to avoid UI residue from previous game
    loop();                // Resume draw loop
    redraw();              // Trigger one update
  });
}

function drawStoryImages() {
  clear();
  if (currentStoryImage === 1) image(storyImage1, 0, 0, width, height);
  if (currentStoryImage === 2) image(storyImage2, 0, 0, width, height);
  if (currentStoryImage === 3) image(storyImage3, 0, 0, width, height);
  if (currentStoryImage === 4) image(storyImage4, 0, 0, width, height);
  if (currentStoryImage === 5) image(storyImage5, 0, 0, width, height);

  let arrowX = width / 2;    // Horizontally center
  let arrowY = height - 200; // Near the bottom of the screen

  fill(255); // Instruction text
  textSize(30);
  textAlign(CENTER, CENTER);
  text('Left Click to continue', arrowX, arrowY); // Click to continue
}

function drawSlider(label, y, value, callback) {
  fill(255, 102, 102);
  textSize(24);
  text(`${label}: ${Math.round(value)}`, width / 2, y - 40); // Round to integer for display
  fill(150);
  rect(width / 2 - 100, y, 200, 20);

  fill(255);
  let knobX = map(value, 0, 100, width / 2 - 100, width / 2 + 100);
  ellipse(knobX, y + 10, 30);

  if (mouseIsPressed &&
    mouseY > y - 30 && mouseY < y + 50 && 
    mouseX > width / 2 - 105 && mouseX < width / 2 + 105) {
    let newValue = constrain(Math.round(map(mouseX, width / 2 - 100, width / 2 + 100, 0, 100)), 0, 100);
    callback(newValue);
  }
}

function drawToggle(label, y, state, callback) {
  // Left-side label
  fill(0);
  noStroke();
  textSize(24 * settings.textScale);
  textAlign(LEFT, CENTER);
  text(label, width/2 - 150, y);

  // Right-side background
  fill(state ? 'green' : 'red');
  noStroke();
  let w = 80, h = 40, x0 = width/2 + 40;
  rect(x0, y - h/2, w, h, 8);

  // ON/OFF text
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(20 * settings.textScale);
  text(state ? "ON" : "OFF", x0 + w/2, y);

  // Toggle on click
  if (mouseIsPressed &&
      mouseX >= x0 && mouseX <= x0 + w &&
      mouseY >= y - h/2 && mouseY <= y + h/2) {
    callback(!state);
    mouseIsPressed = false;  // Prevent rapid repeat clicking
  }
}

function drawMenuOption(label, x, y, action, disabled = false) {
  let hovered = isHovered(x, y);
  if (hovered && mouseIsPressed && !disabled) {
    setTimeout(()=>{
      if(hovered && mouseIsPressed && !disabled){
        action();
      }
    }, 50); 
  }

  textAlign(CENTER, CENTER);
  textSize(36);
  stroke(0);
  strokeWeight(6);
  fill(disabled ? 150 : (hovered ? color(255, 102, 102) : color(255, 255, 255)));

  text(label, x, y + (hovered && !disabled ? highlightOffset : 0));
  noStroke();
}

function isHovered(x, y) {
  return mouseX > x - 200 && mouseX < x + 200 && mouseY > y - 40 && mouseY < y + 40;
}

function mousePressed() {
  // If currently in main menu
  if (gameState === 'menu') {
    if (menuState === "story") {
      currentStoryImage++;
      if (currentStoryImage > 5) {
        if (storyThenInstruction) {
          menuState = "instruction2";      // After story, go to instruction page
          storyThenInstruction = false;    // Prevent repeated trigger
        } else {
          gameState = "game";              // If not first level, enter game directly
        }
        loop();
      }
      redraw();
    }
    redraw();
  // ======== During the game ========
  } else if (gameState === 'game') {
    
    if (!accessibilityCtrl.isActive) {
      // In normal mode, left-click to shoot
      if (mouseButton === LEFT) {
        player.shoot();
      }
    } else {
      // In accessibility mode, mouse does nothing
    }

  // ============= Ending cutscene =============
  } else if (gameState === 'endingCutscene') {
    currentEndingImage++;

    // If all ending images are played, return to main menu
    if (currentEndingImage > 5) {
      gameState = 'menu';
      menuState = 'main';
      currentEndingImage = 0; 
    }
  }
}

// ** Detect if player triggers story fragment **
function checkPlayerCollision() {
  let nearbyStory = null;
  for (let fragment of storyFragments) {
    if (player.collidesWith(fragment)) {
      nearbyStory = fragment;
      break; // Only get the nearest one
    }
  }

  if (nearbyStory !== activeStory) {
    activeStory = nearbyStory;
  }
}

// Set game brightness
function applyBrightnessOverlay(level) {
  // Minimum brightness = maximum alpha (darker)
  const maxDarkness = 150;  // Keep visibility even in darkest state

  // Calculate alpha (black overlay)
  let alpha = map(level, 0, 1, maxDarkness, 0);
  fill(0, 0, 0, alpha);
  noStroke();
  rect(0, 0, 1600, 900);
}

// Reset game progress
function resetGame(level = null, skipStory = false) {
  // If level number is passed, set to that level
  if (level !== null) {
    if (level >= 4) {
      console.warn("⛔ Invalid level number, maximum is LEVEL 3");
      level = 3;  // Limit to maximum level 3
    }
    currentLevel = level;
  }

  currentStoryImage = 1;
  gameState = 'menu';      // Stay in menu if not skipping story
  menuState = 'story';     // Can be null to skip story directly
  gameOver = false;
  isPaused = false;
  showSettings = false;
  heartbeatPlayed = false;  // Allow heartbeat sound when switching levels

  // Reset enemies and objects
  enemies = [];

  if (!player) {
    player = new Player(225, 70, animations);
  } else {
    player.x = 225;
    player.y = 70;
    playerHealth = 3;
  }

  initializeGame();   // Rebuild platforms and enemies
  initPortal();       // Initialize portal for level

  // Set state according to whether story is skipped
  if (skipStory) {
    gameState = 'game';
    menuState = null;
  } else {
    gameState = 'menu';
    menuState = 'story';
  }
  loop();             // Resume game loop
  redraw();
}

function skipToNextLevel() {
  // — Prevent re-entry: if already skipped, return
  if (justSkipped) return;
  // — Lock immediately to block repeated calls
  justSkipped = true;

  // — Original logic for skipping to next level
  let nextLevel = currentLevel + 1;
  if (nextLevel >= 4) {
    nextLevel = 3;
  }
  currentLevel = nextLevel;

  gameOver = false;
  isPaused = false;
  showSettings = false;
  currentStoryImage = 0;
  heartbeatPlayed = false;  // Allow heartbeat sound again after level skip

  if (!player) {
    player = new Player(225, 70, animations);
  } else {
    player.x = 225;
    player.y = 70;
    playerHealth = 3;
  }

  initializeGame();
  initPortal();

  // Unlock level skip after 1s delay to avoid rapid multi-skip
  setTimeout(() => {
    justSkipped = false;
  }, 1000);

  gameState = 'game';
  loop();
  redraw();
}
