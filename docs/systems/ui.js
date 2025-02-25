function drawHealth() {
  // 使用相对定位
  const margin = 30; // 安全边距
  const baseX = margin;
  const baseY = margin;
  const heartSpacing = 35;

  // 确保文本对齐方式
  textAlign(LEFT, TOP);
  
  // 绘制HP文字
  fill(255);
  textSize(24);
  text(`HP: ${playerHealth}`, baseX, baseY);

  // 绘制心形图标
  for (let i = 0; i < playerHealth; i++) {
    fill(255, 0, 0);
    drawHeart(baseX + i * heartSpacing, baseY + 30, 20); // 向下偏移30像素
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
  
  // 主提示文字
  fill(255, 0, 0);
  textSize(48);
  textAlign(CENTER, CENTER);
  text("GAME OVER", width/2, height/2 - 40);
  
  // 重新开始提示
  fill(200);
  textSize(24);
  text("Press R to Restart", width/2, height/2 + 30);
}
