function initLevel1() {
  // Initial level configuration (original initializeGame content)
  // ---------- Outer walls ----------
  platforms.push(new Platform(0, 0, width, blockSize));                  // Top wall 0
  platforms.push(new Platform(0, height - blockSize, width, blockSize)); // Bottom wall 1
  platforms.push(new Platform(0, 0, blockSize, height));                 // Left wall 2
  platforms.push(new Platform(width - blockSize, 0, blockSize, height)); // Right wall 3

  // ---------- Various platforms and walls ----------
  platforms.push(new Platform(300, 50, blockSize * 2, blockSize * 1));  // Platform 4
  platforms.push(new Platform(300, 100, blockSize, blockSize * 2));     // Vertical wall 5
  platforms.push(new Platform(150, 150, blockSize * 3, blockSize * 1)); // Platform 6

  // ---------- Top-left corner platforms ----------
  platforms.push(new Platform(200, 400, blockSize * 3, blockSize * 1));  // Platform 7
  platforms.push(new Platform(200, 300, blockSize, blockSize * 2));     // Vertical wall 8
  platforms.push(new Platform(50, 400, blockSize * 5, blockSize));      // Horizontal platform 9
  platforms.push(new Platform(300, 200, blockSize * 2, blockSize));     // Protruding ledge 10
  platforms.push(new Platform(50, 250, blockSize, blockSize));          // Left-wall ledge 11

  // ---------- Central area ----------
  platforms.push(new Platform(600, 150, blockSize * 4, blockSize));     // Upper platform 12
  platforms.push(new Platform(550, 150, blockSize, blockSize * 4));     // Vertical wall 13
  platforms.push(new Platform(400, 300, blockSize * 9, blockSize));     // Middle platform 14
  platforms.push(new Platform(550, 500, blockSize, blockSize * 2));     // Vertical wall 15
  platforms.push(new Platform(800, 600, blockSize * 5, blockSize));     // Upper platform 16
  platforms.push(new Platform(550, 500, blockSize, blockSize * 2));     // Vertical wall 17
  platforms.push(new Platform(1000, 300, blockSize * 2, blockSize));    // Upper platform 18
  platforms.push(new Platform(450, 450, blockSize * 10, blockSize));    // Large center platform 19
  platforms.push(new Platform(750, 600, blockSize, blockSize * 5));     // Central vertical wall 20
  platforms.push(new Platform(550, 700, blockSize * 5, blockSize));     // Middle platform 21

  // ---------- Right-side area ----------
  platforms.push(new Platform(1250, 50, blockSize * 1, blockSize * 9)); // Right-top platform 22
  platforms.push(new Platform(1100, 450, blockSize * 3, blockSize));    // Horizontal wall 23
  platforms.push(new Platform(1450, 150, blockSize * 3, blockSize));    // Horizontal wall 1 (top-down) 24
  platforms.push(new Platform(1350, 300, blockSize * 3, blockSize));    // Horizontal wall 2 (top-down) 25
  platforms.push(new Platform(1300, 400, blockSize * 3, blockSize * 1));// Medium platform 26

  // ---------- Bottom-right area ----------
  platforms.push(new Platform(1200, 650, blockSize * 4, blockSize));    // Bottom-right platform 27
  platforms.push(new Platform(1400, 550, blockSize * 2, blockSize));    // Elevated bottom-right platform 28
  platforms.push(new Platform(1500, 550, blockSize * 1, blockSize));    // High wall 29
  platforms.push(new Platform(1500, 550, blockSize * 1, blockSize));    // High wall 30
  platforms.push(new Platform(1500, 600, blockSize * 2, blockSize));    // High wall 31
  platforms.push(new Platform(1250, 750, blockSize * 2, blockSize));    // Small bottom-right platform 32
  platforms.push(new Platform(1450, 750, blockSize * 2, blockSize));    // Elevated bottom-right platform 33

  // ---------- Bottom-right left offset area ----------
  platforms.push(new Platform(1200, 700, blockSize, blockSize));        // Small vertical wall 34
  platforms.push(new Platform(950, 700, blockSize * 3, blockSize));     // Small platform 35
  platforms.push(new Platform(950, 700, blockSize, blockSize * 3));     // Small left vertical wall 36
  platforms.push(new Platform(850, 750, blockSize * 2, blockSize));     // Small platform 37

  // ---------- Bottom-left area ----------
  platforms.push(new Platform(200, 700, blockSize * 2, blockSize));     // Bottom-left platform 38
  platforms.push(new Platform(100, 550, blockSize * 6, blockSize));     // Bottom-left horizontal wall 39
  platforms.push(new Platform(150, 700, blockSize, blockSize * 3));     // Left vertical wall 40
  platforms.push(new Platform(350, 750, blockSize * 2, blockSize));     // Bottom-left right-side platform 41
  platforms.push(new Platform(50, 700, blockSize, blockSize));          // Bottom-left middle wall 42
  platforms.push(new Platform(300, 550, blockSize, blockSize * 2));     // Left vertical wall 43

  // Supplementary platforms (designed specifically for placing enemies)
  platforms.push(new Platform(550, 850, blockSize * 5, blockSize));     // 44
  platforms.push(new Platform(450, 450, blockSize * 2, blockSize));     // 45

  // Single block wall in bottom-right
  platforms.push(new Platform(1200, 750, blockSize, blockSize));

  // Breakable wall (example):
  let destructible = new BreakableWall(
    550, 750,            // Position
    50, 50,              // Width and height
    breakableWallFrames, // Four frame images
    5,                   // Break after 5 hits
    true                 // Render a dark background behind
  );
  platforms.push(destructible);

  // Regular enemies (red) - patrol on different high platforms
  enemies.push(new Enemy(platforms[12])); // Upper central platform
  enemies.push(new Enemy(platforms[39])); // Bottom-left horizontal wall
  enemies.push(new Enemy(platforms[44])); // Supplementary platform

  // Ranged enemies (blue) - placed in open areas with attack range
  enemies.push(new RangedEnemy(platforms[12])); // Upper left platform
  enemies.push(new RangedEnemy(platforms[18])); // Top-right open platform
  enemies.push(new RangedEnemy(platforms[25])); // Central-right large platform
  enemies.push(new RangedEnemy(platforms[32])); // Right-side open area

  // Spider enemies (black) - hang from high places
  enemies.push(new SpiderEnemy(platforms[10])); // Near top-left vertical wall
  enemies.push(new SpiderEnemy(platforms[23])); // Under far-right platform
  enemies.push(new SpiderEnemy(platforms[45])); // Supplementary platform
  enemies.push(new SpiderEnemy(platforms[28])); // Under elevated bottom-right platform

  // Add multiple story fragments
  storyFragments.push(new StoryFragment(150, 100, "Player: The air here is dry and cold, as if time had stopped flowing here a long time ago."));
  storyFragments.push(new StoryFragment(700, 800, "Leader: Solar energy has been captured 100%, but the resource consump")); // Moved behind breakable wall
  storyFragments.push(new StoryFragment(250, 350, "Leader: Existing lifespan optimization technologies are still limited by DNA stability, and more radical breakthroughs must be sought"));

  // Add traps
  traps.push(new Trap(null, null, "movingWall", platforms[19]));
  // traps.push(new Trap(600, 250, "laserBeam", platforms[34]));
  // traps.push(new Trap(600, 250, "laserBeam", platforms[34]));
  traps.push(new Trap(500, 400, "spikeTrap", platforms[14]));
  traps.push(new Trap(100, 350, "spikeTrap", platforms[14]));
  traps.push(new Trap(19*50, 11*50, "spikeTrap", platforms[14]));
  traps.push(new Trap(25*50, 12*50, "spikeTrap", platforms[14]));

  // Add visual portal area
  platforms.push(new Platform(1550, 800, 50, 50));

  playerHealth = 3;
  // Draw the health display
  drawHealth();

  // ============== Example decorations go here ==============
 
  // 1) Place a monitor (monitor1Img) above platform #7
  //    Platform #7: position (200,400), size (150×50)
  // platforms[7].addDecoration(60, -30, monitor1Img);
  // platforms[9].addDecoration(60, -30, capsule2Img);

  // 2) Hang a capsule (capsule3Img) from the bottom center of platform #14
  //    Platform #14: position (400,300), width = 9*50 = 450, height = 50
  //    To hang about 60px below the bottom edge:
  // platforms[14].addDecoration(200, 60, capsule3Img);

  // 3) Place another monitor (monitor7Img) above platform #25
  //    Platform #25: position (1350,300), width = 3*50 = 150, height = 50
  // platforms[25].addDecoration(40, -40, monitor7Img);
}
