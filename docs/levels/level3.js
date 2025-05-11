function initLevel3() {
  // ---------- Outer walls ----------
  platforms.push(new Platform(0, 0, width, blockSize)); // Top wall
  platforms.push(new Platform(0, height - blockSize, width, blockSize)); // Bottom wall
  platforms.push(new Platform(0, 0, blockSize, height)); // Left wall
  platforms.push(new Platform(width - blockSize, 0, blockSize, height)); // Right wall

  // ---------- Example platforms and walls ----------
  platforms.push(new Platform(300, 50, blockSize * 2, blockSize)); // Platform
  platforms.push(new Platform(300, 100, blockSize, blockSize * 2)); // Vertical wall
  platforms.push(new Platform(150, 150, blockSize * 3, blockSize)); // Platform

  // ---------- Top-left corner platforms ----------
  platforms.push(new Platform(200, 300, blockSize * 2, blockSize)); // Small horizontal wall
  platforms.push(new Platform(200, 300, blockSize, blockSize * 2)); // Vertical wall
  platforms.push(new Platform(100, 350, blockSize * 4, blockSize)); // Starting platform lower wall (9)
  platforms.push(new Platform(50, 250, blockSize, blockSize)); // Left-wall ledge

  // ---------- Central area ----------
  platforms.push(new Platform(300, 50, blockSize, blockSize * 9)); // Left partition wall
  platforms.push(new Platform(350, 400, blockSize * 11, blockSize)); // Lower partition platform (12)
  platforms.push(new Platform(450, 550, blockSize, blockSize * 2)); // Lower-left short wall (circled)
  platforms.push(new Platform(350, 550, blockSize * 2, blockSize)); // Lower-left short wall protrusion (14)

  platforms.push(new Platform(600, 750, blockSize * 2, blockSize)); // Central long platform
  platforms.push(new Platform(500, 650, blockSize, blockSize)); // Lower-left platform (16)
  platforms.push(new Platform(550, 650, blockSize, blockSize)); // Standalone block
  platforms.push(new Platform(800, 600, blockSize, blockSize * 3)); // Lower-right cross (vertical)
  platforms.push(new Platform(650, 550, blockSize * 6, blockSize)); // Lower-right cross (horizontal) (19)
  platforms.push(new Platform(750, 700, blockSize * 3, blockSize)); // Lower-right cross (horizontal)
  platforms.push(new Platform(1000, 450, blockSize * 2, blockSize)); // Lower partition platform

  // ---------- Right-side area ----------
  platforms.push(new Platform(1450, 350, blockSize * 2, blockSize)); // Platform 22
  platforms.push(new Platform(1350, 250, blockSize * 3, blockSize)); // Platform
  platforms.push(new Platform(1250, 500, blockSize, blockSize));     // Platform

  // ---------- Bottom-right area ----------
  platforms.push(new Platform(1050, 550, blockSize, blockSize * 3)); // Lower-right cross (vertical)
  platforms.push(new Platform(1050, 550, blockSize, blockSize * 3)); // Duplicate (can be removed)
  platforms.push(new Platform(950, 650, blockSize * 3, blockSize));  // Platform 27
  platforms.push(new Platform(1000, 700, blockSize, blockSize * 2)); // Platform
  platforms.push(new Platform(1050, 750, blockSize * 2, blockSize)); // Platform
  platforms.push(new Platform(1200, 400, blockSize, blockSize * 3)); // Platform
  platforms.push(new Platform(1250, 650, blockSize, blockSize * 4)); // Platform
  platforms.push(new Platform(1200, 650, blockSize * 3, blockSize)); // Platform 32
  platforms.push(new Platform(1450, 750, blockSize * 2, blockSize)); // Platform
  platforms.push(new Platform(1450, 500, blockSize, blockSize));     // Platform 34
  platforms.push(new Platform(1500, 600, blockSize, blockSize));     // Platform
  platforms.push(new Platform(1250, 300, blockSize, blockSize));     // Platform

  // ---------- Upper-right area ----------
  platforms.push(new Platform(1200, 150, blockSize * 2, blockSize)); // Upper-right platform (37)
  platforms.push(new Platform(1200, 200, blockSize, blockSize * 4)); // Upper-right vertical wall
  platforms.push(new Platform(1400, 400, blockSize, blockSize * 3)); // Right-side vertical wall
  platforms.push(new Platform(1400, 150, blockSize, blockSize * 2)); // Platform
  platforms.push(new Platform(1400, 350, blockSize, blockSize));     // Platform

  // ---------- Bottom-left area ----------
  platforms.push(new Platform(200, 700, blockSize, blockSize));       // Bottom-left platform
  platforms.push(new Platform(50, 500, blockSize * 2, blockSize));    // Bottom-left upper horizontal wall (43)
  platforms.push(new Platform(50, 500, blockSize * 2, blockSize));    // Duplicate (can be removed)
  platforms.push(new Platform(150, 700, blockSize, blockSize * 2));   // Left vertical wall
  platforms.push(new Platform(350, 700, blockSize, blockSize * 2));   // Bottom-left right-side platform
  platforms.push(new Platform(350, 700, blockSize, blockSize * 2));   // Duplicate (can be removed)
  platforms.push(new Platform(50, 700, blockSize, blockSize));        // Bottom-left middle wall
  platforms.push(new Platform(300, 550, blockSize, blockSize * 2));   // Left vertical wall (49)
  platforms.push(new Platform(300, 650, blockSize * 4, blockSize));   // High horizontal wall (50)
  platforms.push(new Platform(100, 600, blockSize * 2, blockSize));   // High horizontal wall
  platforms.push(new Platform(250, 600, blockSize, blockSize));       // Lower partition

  // ---------- Boss area ----------
  platforms.push(new Platform(1000, 300, blockSize * 2, blockSize));           // Boss platform
  platforms.push(new Platform(1050, 50, blockSize, blockSize * 3));            // Boss vertical wall
  platforms.push(new Platform(1050, 150, blockSize, blockSize));               // Boss platform
  platforms.push(new Platform(1100, 150, blockSize * 2, blockSize, true));     // Add reciprocating moving block
  platforms.push(new Platform(1300, 400, blockSize * 2, blockSize));           // Add upper-right platform

  // Regular enemies (red) - patrol on various high platforms
  enemies.push(new Enemy(platforms[43]));
  enemies.push(new Enemy(platforms[15]));
  enemies.push(new Enemy(platforms[53]));

  // Ranged enemies (blue) - placed in open areas with attack range
  enemies.push(new RangedEnemy(platforms[12]));
  enemies.push(new RangedEnemy(platforms[37]));
  enemies.push(new RangedEnemy(platforms[32]));
  enemies.push(new RangedEnemy(platforms[14]));

  // Spider enemies (black) - hang from high places
  enemies.push(new SpiderEnemy(platforms[9]));
  enemies.push(new SpiderEnemy(platforms[16]));
  enemies.push(new SpiderEnemy(platforms[34]));

  // Story fragments
  storyFragments.push(new StoryFragment(750, 370, "Experiment Log: They want us to speed up the process. Extending life span is just the beginning."));
  storyFragments.push(new StoryFragment(150, 320, "Guard: Things have been getting weirder in the lab lately."));
  storyFragments.push(new StoryFragment(1420, 320, "Security Log: I heard some noise in the ventilation duct."));

  // Add traps
  traps.push(new Trap(null, null, "movingWall", platforms[19]));
  traps.push(new Trap(14 * 50, 350, "spikeTrap", platforms[14]));
  traps.push(new Trap(150, 13 * 50, "spikeTrap", platforms[14]));
  traps.push(new Trap(20 * 50, 400, "spikeTrap", platforms[14]));
  traps.push(new Trap(30 * 50, 14 * 50, "spikeTrap", platforms[14]));

  // Add portal area visualization
  platforms.push(new Platform(1550, 750, 50, 50));

  playerHealth = 3;
  // Draw health display
  drawHealth();
}


//Platform class with reciprocating motion functionality
 //class Platform {
//     constructor(x, y, w, h, isMovable = false) {
//       this.x = x;
//       this.y = y;
//       this.w = w;
//       this.h = h;
//       this.isMovable = isMovable;
//       this.speedY = 2;
//       this.initialY = y;
//       this.isPaused = false;
//     }
  
//     update() {
//       if (this.isMovable && !this.isPaused) {
//         this.y += this.speedY;
//         if (this.y <= this.initialY || this.y >= this.initialY + 150) {
//           this.pauseAndReverse();
//         }
//       }
//     }
  
//     pauseAndReverse() {
//       this.isPaused = true;
//       this.speedY = 0;
//       setTimeout(() => {
//         this.speedY = this.y <= this.initialY ? 2 : -2;
//         this.isPaused = false;
//       }, 3000);
//     }
  
//     display() {
//       this.update();

//       for (let i = 0; i < this.w; i += 50) {
//         for (let j = 0; j < this.h; j += 50) {
//           rect(this.x + i, this.y + j, 50, 50);
//         }
//       }
//     }
//   }
