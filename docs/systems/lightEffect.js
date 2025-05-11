// Draw the light effect with decay to simulate a fading light
function drawLightEffectWithDecay(decay) {
  // If currently on the second level (boss battle level), do not render the dark fog effect
  if (currentLevel === 3) return;
  
  const centerX = player.x + player.size / 2;
  const centerY = player.y + player.size / 2;
  
  // Draw the decaying light effect
  const gradient = drawingContext.createRadialGradient(
    centerX, centerY, LIGHT_RADIUS * 0.05,
    centerX, centerY, LIGHT_RADIUS
  );

  const steps = 5;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const alpha = Math.pow(t, decay) * DARKNESS_OPACITY;
    gradient.addColorStop(t, `rgba(0, 0, 0, ${alpha})`);
  }
  
  
  drawingContext.save();
  drawingContext.fillStyle = gradient;
  drawingContext.fillRect(0, 0, width, height);
  drawingContext.restore();
}