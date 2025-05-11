function initLevel4() {
  // Map 4 outer boundaries
  platforms.push(new Platform(0,    850, 1600,  50));
  platforms.push(new Platform(0,      0,  1600,  50));
  platforms.push(new Platform(1550,   0,    50, 900));
  platforms.push(new Platform(0,      0,    50, 900));

  // Various platforms
  platforms.push(new Platform(50,  500, 250,  50));
  platforms.push(new Platform(550, 650, 100,  50));
  platforms.push(new Platform(350, 750, 100,  50));
  platforms.push(new Platform(1000,700, 150,  50));
  platforms.push(new Platform(1300,500, 250,  50));

  // Temporarily mark this platform as inactive
  platforms.push(new Platform(1150,600, 100,  50, false));

  platforms.push(new Platform(50,  700, 150,  50));

  // Level 4 special enemy configuration
  enemies.push(new BossEnemy(width/2, height/4));

  // Level 4 portal (can loop back or end the game)
  fill(0, 255, 0);
  platforms.push(new Platform(100, 800,  50,  50));

  playerHealth = 3;
  // Draw the health display
  drawHealth();
}
