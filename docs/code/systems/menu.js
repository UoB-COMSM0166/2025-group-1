function drawMenu1() {
  let menuWidth = 400; // Increased menu width
  let menuHeight = 120; // Increased menu height
  let menuX = width / 2 - menuWidth / 2; // Centered horizontally
  let menuY = height / 2 - menuHeight / 2; // Centered vertically

  fill(100);
  rect(menuX, menuY, menuWidth, 40); // First button
  rect(menuX, menuY + 50, menuWidth, 40); // Second button
  rect(menuX, menuY + 100, menuWidth, 40); // Third button

  fill(255);
  textSize(24); // Increased text size
  textAlign(CENTER, CENTER);
  text('CONTINUE GAME', menuX + menuWidth / 2, menuY + 20); // Centered text
  text('SETTING', menuX + menuWidth / 2, menuY + 70); // Centered text
  text('EXIT GAME', menuX + menuWidth / 2, menuY + 120); // Centered text
}

function drawSettingsMenu1() {
  let settingsWidth = 600; // Increased settings menu width
  let settingsHeight = 400; // Increased settings menu height
  let settingsX = width / 2 - settingsWidth / 2; // Centered horizontally
  let settingsY = height / 2 - settingsHeight / 2; // Centered vertically

  fill(200);
  rect(settingsX, settingsY, settingsWidth, settingsHeight); 

  fill(0);
  textSize(20); // Increased text size
  textAlign(LEFT, TOP)
  text('SETTING MENU', settingsX + 20, settingsY + 40);
  text(`BRIGHTNESS：${brightnessSlider.value()}%`, settingsX + 20, settingsY + 100);
  text(`VOLUME：${volumeSlider.value()}%`, settingsX + 20, settingsY + 160);
  text(`HIGH CONTRAST MODE：${highContrast ? "TURN ON" : "TURN OFF"}`, settingsX + 20, settingsY + 220);
  
  brightnessSlider.show();
  volumeSlider.show();

  let closeButtonX = settingsX + settingsWidth / 2 - 70; // Centered close button
  let closeButtonY = settingsY + 300; // Adjusted vertically
  fill(150);
  rect(closeButtonX, closeButtonY, 140, 40); // Larger close button
  fill(0);
  textSize(20); // Increased text size
  text('BACK', closeButtonX + 45, closeButtonY + 15); // Centered text
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
    } else if (mouseY >= menuY + 50 && mouseY < menuY + 90) {
      showSettings = true;
    } else if (mouseY >= menuY + 100 && mouseY < menuY + 140) {
      console.log("EXIT GAME");
      noLoop(); 
    }
  } else if (showSettings) {
    let settingsWidth = 600;
    let settingsHeight = 400;
    let settingsX = width / 2 - settingsWidth / 2;
    let settingsY = height / 2 - settingsHeight / 2;

    let closeButtonX = settingsX + settingsWidth / 2 - 70;
    let closeButtonY = settingsY + 300;

    if (mouseX >= closeButtonX && mouseX <= closeButtonX + 140 && mouseY >= closeButtonY && mouseY <= closeButtonY + 40) {
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

function highlightMenu() {
  if (hovered !== -1 && !showSettings) {
    let menuWidth = 400;
    let menuX = width / 2 - menuWidth / 2;

    stroke(255, 204, 0);
    strokeWeight(3);
    noFill();
    rect(menuX, hovered, menuWidth, 40);
    strokeWeight(1);
    stroke(0);
  }
}
