function initLevel2() {
  // Level 2
  // ----------- Map 2 Outer Boundary -----------
  platforms.push(new Platform(0,    850, 1600,  50)); // Bottom boundary of the new map
  platforms.push(new Platform(0,      0, 1600,  50)); // Top boundary of the new map
  platforms.push(new Platform(1550,   0,   50, 900)); // Right boundary of the new map
  platforms.push(new Platform(0,      0,   50, 900)); // Left boundary of the new map

  // ----------- Lower-right area of the level 2 map -----------
  platforms.push(new Platform(1300, 800, 50,  50));  // Lower-right platform
  platforms.push(new Platform(950,  700,  50, 100)); // Lower-right vertical wall
  platforms.push(new Platform(1100, 750, 250,  50)); // Lower-right long platform

  // ----------- Middle-lower area of the right half -----------
  platforms.push(new Platform(1250, 450, 150,  50)); // Right-middle platform (7)
  platforms.push(new Platform(1350, 500,  50, 100)); // Right-middle vertical wall
  platforms.push(new Platform(1300, 450, 250,  50)); // Right-middle long platform
  platforms.push(new Platform(1050, 650, 250,  50)); // Lower-middle right-offset platform (10)
  platforms.push(new Platform(1350, 650, 250,  50)); // Duplicate of above (can be removed if redundant)

  platforms.push(new Platform(800,  700, 200,    50)); // Platform 14
  platforms.push(new Platform(1000, 550,  50,   200)); // Platform 15
  platforms.push(new Platform(750,  550, 450,    50)); // Platform 14
  platforms.push(new Platform(1000, 300,  50,   100)); // Platform 16
  platforms.push(new Platform(550,  250, 250,  50)); // Center-upper horizontal platform (16)
  platforms.push(new Platform(1000, 300,  50, 100)); // Central vertical wall
  platforms.push(new Platform(350,  550, 300,  50)); // Left-middle-lower area platform (18)
  platforms.push(new Platform(650,  400, 500,  50)); // Central large platform
  platforms.push(new Platform(800,   50,  50, 250)); // Upper-central vertical wall
  platforms.push(new Platform(800,  150, 250,  50)); // Upper-central platform (21)

  platforms.push(new Platform(200,  700, 100,  50)); // Left-middle-lower 4-block platform
  platforms.push(new Platform(350,  700, 200,  50)); // Left-middle-lower 4-block platform
  platforms.push(new Platform(650,  700, 100,  50)); // Left-middle-lower 2-block platform (24)
  platforms.push(new Platform(500,  750, 50,  100)); // Left-middle-lower vertical wall

  // ----------- Extension from upper-right to lower-right  -----------
  platforms.push(new Platform(300,  400,  50, 450)); // Right tall vertical wall (26)
  platforms.push(new Platform(350,  400, 150,  50)); // Right-middle horizontal platform (27)
  platforms.push(new Platform(0,    700, 150,  50)); // Platform extending from upper-right to the left
  platforms.push(new Platform(100,  550, 150,  50)); // Right-side mid-height platform (29)
  platforms.push(new Platform(150,  450, 150,  50)); // Platform above that on the right side

  // ----------- Lower-left area  -----------
  platforms.push(new Platform(200,  200, 200,  50)); // Lower-left large platform (31)
  platforms.push(new Platform(100,  300, 100,  50)); // Lower-left right-side small platform
  platforms.push(new Platform(50,   300,  50,  50)); // Lower-left small block
  platforms.push(new Platform(50,   300,  50,  50)); // Lower-left small block (duplicate, can be removed)
  platforms.push(new Platform(0,    250, 100,  50)); // Lower-left long platform attached to the left side
  platforms.push(new Platform(250,  100, 150,  50)); // Lower-left slightly upward area platform
  platforms.push(new Platform(50,   100, 100,  50)); // Lower-left higher horizontal platform

  // ----------- Upper-center-left area of -----------
  platforms.push(new Platform(350,  150,  50,  50)); // Upper-center-left small platform (38)
  platforms.push(new Platform(500,  150, 150,  50)); // Upper-center-left horizontal platform
  platforms.push(new Platform(600,   50,  50, 150)); // Upper-center-left vertical wall
  platforms.push(new Platform(650,  100, 100,  50)); // Upper-center-left small horizontal platform

  // ----------- Upper-left area of  -----------
  platforms.push(new Platform(1300, 150, 100,  50)); // Upper-left platform
  platforms.push(new Platform(1200, 300, 300,  50)); // Upper-left horizontal platform (43)
  platforms.push(new Platform(1400,  50,  50, 150)); // Upper-left tall vertical wall
  platforms.push(new Platform(1150, 100, 100,  50)); // Upper-left small platform
  platforms.push(new Platform(1500, 150,  50,  50)); // Upper-left outermost platform
  platforms.push(new Platform(1250, 250,  50, 100)); // Upper-left small vertical wall

  // Regular enemies (red) - patrol on various high platforms
  enemies.push(new Enemy(platforms[27])); // Right tall vertical wall
  enemies.push(new Enemy(platforms[24])); // Left-middle-lower 2-block platform
  enemies.push(new Enemy(platforms[7]));  // Middle-lower right-offset platform

  // Ranged enemies (blue) - placed in open areas with attack range
  enemies.push(new RangedEnemy(platforms[29])); // Right-side mid-height platform
  enemies.push(new RangedEnemy(platforms[16])); // Center-upper horizontal platform
  enemies.push(new RangedEnemy(platforms[3]));  // Right boundary wall

  // Spider enemies (black) - hang from high places
  enemies.push(new SpiderEnemy(platforms[31])); // Lower-left large platform
  enemies.push(new SpiderEnemy(platforms[29])); // Right-side mid-height platform
  enemies.push(new SpiderEnemy(platforms[21])); // Upper-central platform
  enemies.push(new SpiderEnemy(platforms[7]));  // Right-middle platform

  // Add multiple story fragments
  storyFragments.push(new StoryFragment(650, 820, "[Handwritten note]: They told me this was the next step in human evolution."));
  storyFragments.push(new StoryFragment(200, 280, "[Handwritten note]: My fingers became transparent and I could see the blood flowing through them like a stream of data."));
  storyFragments.push(new StoryFragment(800, 670, "Players: The walls of the laboratory are covered with mottled rust."));

  // Add traps
  traps.push(new Trap(null, null, "movingWall", platforms[14]));
  traps.push(new Trap(15 * 50, 350, "spikeTrap", platforms[14]));
  traps.push(new Trap(150, 400, "spikeTrap", platforms[14]));
  traps.push(new Trap(1400, 600, "spikeTrap", platforms[14]));
  traps.push(new Trap(27 * 50, 250, "spikeTrap", platforms[14]));

  // Add portal area visualization
  // platforms.push(new Platform(1550, 800, 50, 50));

  playerHealth = 3;
  // Draw health
  drawHealth();
}