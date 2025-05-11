function drawMenu1() {
  let menuWidth = 400; // Increased menu width
  let menuHeight = 120; // Increased menu height
  let menuX = width / 2 - menuWidth / 2; // Centered horizontally
  let menuY = height / 2 - menuHeight / 2; // Centered vertically

  clear();
  image(bgImage, 0, 0, width, height);
  let menuItems = ["CONTINUE GAME", "SETTING", "EXIT GAME"];
  drawBackgroundBox(menuItems);

  for (let i = 0; i < menuItems.length; i++) {
    drawMenuOption(menuItems[i], width / 2, height / 2 - (menuItems.length * 80 + 20) / 2 + 80 * i + 50, () => {
      setTimeout(() => { // Delay 50ms to ensure the current frame completes
        if (menuItems[i] === "CONTINUE GAME") {
          gameState = 'game'; // Resume the game
          isPaused = false;   // Unpause
          menuState = 'story';
          redraw();
          loop();  // Ensure game continues running
        }
        if (menuItems[i] === "SETTING") {
          menuState = 'setting';
        }
        if (menuItems[i] === "EXIT GAME") {
          // Only reset when accessibility mode is active
          if (accessibilityCtrl.isActive) {
            accessibilityCtrl.isActive = false;
            accessibilityCtrl.autoRotateGun = false;
            settings.contrast = false;
            settings.fontWeightBold = false;
            console.log("🔁 EXIT: Accessibility mode turned off");
          }
          saveBeforeExit();               // Save progress before exiting
          gameState = 'menu';             // Return to main menu
          menuState = 'main';
          isPaused = false;               // Ensure not paused
          redraw();
          loop();                         // Ensure main menu displays correctly
        }
        redraw();
      }, 50);
    });
  }

  function drawMainMenu() {
    clear();
    image(bgImage, 0, 0, width, height);
    let menuItems = ["CONTINUE", "SETTING", "INSTRUCTIONS"];
    drawBackgroundBox(menuItems, 0, 400);

    for (let i = 0; i < menuItems.length; i++) {
      drawMenuOption(menuItems[i], width / 2, height / 2 - (menuItems.length * 80 + 20) / 2 + 80 * i + 50, () => {
        if (i === 0) {
          menuState = 'Game';
        } else if (i === 1) {
          menuState = 'setting';
        } else if (i === 2) {
          menuState = 'Instruction';
          alert('Introduce Menu Placeholder');
        }
        redraw();
      });
    }
  }
}

function drawSettingMenu1() {
  clear();
  image(bgImage, 0, 0, width, height);
  let menuItems = ["Sound", "Brightness", "High Contrast", "Bold Font", "Color-Blind", "BACK"];
  drawBackgroundBox(menuItems, -30, 420);

  textAlign(CENTER, CENTER);
  textSize(36);

  // Controls
  // Sound
  drawSlider("Sound", 260, settings.sound, v => settings.sound = Math.round(v));
  // Brightness
  drawSlider("Brightness", 350, settings.brightness, v => settings.brightness = Math.round(v));
  // High Contrast
  drawToggle("High Contrast", 440, settings.contrast, v => settings.contrast = v);
  // Bold Font
  drawToggle("Bold Font", 530, settings.fontWeightBold, v => settings.fontWeightBold = v);

  drawMenuOption(
    "BACK",
    width / 2,
    610,
    () => {
      showSettings = false;
      brightnessSlider.hide();
      volumeSlider.hide();

      menuState = 'drawmenu1';
      redraw();
    }
  );
}

function drawInstruction() {
  clear();
  image(bgImage, 0, 0, width, height);
}

function drawWhiteBox(x, y, width, height) {
  fill(255, 220);    // Semi-transparent white
  stroke(0);
  strokeWeight(3);
  rect(x, y, width, height, 15); // Rounded rectangle

  fill(0);
  noStroke();
}

function hideSettings() {
  brightnessSlider.hide();
  volumeSlider.hide();
  showSettings = false;
}

function mouseClicked() {
  if (isPaused && !showSettings) {
    let menuWidth = 400;
    let menuHeight = 120;
    let menuX = width / 2 - menuWidth / 2;
    let menuY = height / 2 - menuHeight / 2;

    if (mouseY >= menuY && mouseY < menuY + 40) {
      isPaused = false;
      redraw();
      loop(); // Ensure draw() continues running
    } else if (mouseY >= menuY + 50 && mouseY < menuY + 90) {
      showSettings = true;
    } else if (mouseY >= menuY + 100 && mouseY < menuY + 140) {
      console.log("Returning to Main Menu...");
      menuState = 'main'; // Switch to main menu
      isPaused = false;   // Unpause
      redraw();
      loop();             // Ensure draw() continues running
    }
  } else if (showSettings) {
    let settingsWidth = 600;
    let settingsHeight = 400;
    let settingsX = width / 2 - settingsWidth / 2;
    let settingsY = height / 2 - settingsHeight / 2;

    let closeButtonX = settingsX + settingsWidth / 2 - 70;
    let closeButtonY = settingsY + 300;

    if (
      mouseX >= closeButtonX && mouseX <= closeButtonX + 140 &&
      mouseY >= closeButtonY && mouseY <= closeButtonY + 40
    ) {
      hideSettings();
    }
  }
}

function mouseMoved() {
  if (isPaused && !showSettings) {
    let menuWidth = 400;
    let menuHeight = 120;
    let menuX = width / 2 - menuWidth / 2;
    let menuY = height / 2 - menuHeight / 2;

    if (mouseX >= menuX && mouseX <= menuX + menuWidth) {
      if (mouseY >= menuY && mouseY < menuY + 40) {
        hovered = menuY;
      } else if (mouseY >= menuY + 50 && mouseY < menuY + 90) {
        hovered = menuY + 50;
      } else if (mouseY >= menuY + 100 && mouseY < menuY + 140) {
        hovered = menuY + 100;
      } else {
        hovered = -1;
      }
    } else {
      hovered = -1;
    }
  }
}
