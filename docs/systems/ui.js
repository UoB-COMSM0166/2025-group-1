function drawHealth() {
  // Use relative positioning
  const margin = 30; // Safe margin
  const baseX = margin;
  const baseY = margin;
  const heartSpacing = 35;

  // Ensure text alignment
  textAlign(LEFT, TOP);
  
  // Draw HP label
  fill(255);
  textSize(24);
  text(`HP: ${playerHealth}`, baseX, baseY);

  // Draw heart icons
  for (let i = 0; i < playerHealth; i++) {
    fill(255, 0, 0);
    drawHeart(baseX + i * heartSpacing, baseY + 30, 20); // Offset down by 30 pixels
  }
}

function drawHeart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size/2, y - size/2, x - size, y + size/3, x, y + size);
  bezierVertex(x + size, y + size/3, x + size/2, y - size/2, x, y);
  endShape(CLOSE);
}

function showGameOver() {
  background(0);
  
  // Main prompt text
  fill(255, 0, 0);
  textSize(48);
  textAlign(CENTER, CENTER);
  text("GAME OVER", width/2, height/2 - 40);
  
  // Restart prompt
  fill(200);
  textSize(24);
  text("Press R to Restart", width/2, height/2 + 30);
}

// Full-screen red overlay (for low health effect)
function drawRedOverlay() {
  push();
  noStroke();
  fill(255, 0, 0, 150); // Semi-transparent red
  rect(0, 0, width, height);
  pop();
}
