class Enemy extends Entity {
  constructor(platform) {
    super(platform.x + platform.w / 2, platform.y - 15, {});  // Call parent constructor
    this.size = 60;
    this.normalSpeed = 0; // Movement speed when player is not on the same platform
    this.attackSpeed = 1.5; // Movement speed when attacking player
    this.mode = false; // Initial default state is non-attack mode
    this.direction = 1; // 1 means right, -1 means left
    this.health = 3;
    this.platform = platform;  // Save platform information

    // Add melee enemy animation textures
    this.runAnim = enemyRunAnim; // Globally loaded animation
    this.deadImg = enemyDeadImg; // Death texture
    this.isDead = false;

    // ========== References to idle and attack animations ==========
    this.idleAnim = enemyIdleAnim;    // Predefined Idle animation
    this.attackAnim = enemyAttackAnim;  // Predefined Attack animation

    // ========== Reference to scream animation ==========
    this.screamAnim = enemyScreamAnim;  // Globally loaded scream animation (EnemyScream.png, 5 frames, 96×96 pixels each)

    // Define AI state and countdown timer
    this.aiState = "idle";         // 
    this.leavePlatformTimer = 0;   // Timer to return to idle after player leaves platform

    this.hasAttacked = false;      // Attack flag, only execute damage once per attack cycle
  }

  update() {
    let prevX = this.x;

    // ========== Check if player is on same platform and determine AI state ==========
    // Condition: Player's horizontal range is within platform bounds and player's feet are level with platform
    let playerOnThisPlatform = false;
    if (
      (player.x + player.width / 2 > this.platform.x) &&
      (player.x - player.width / 2 < this.platform.x + this.platform.w) &&
      // Check if player feet are at same height
      (Math.abs((player.y + player.height) - this.platform.y) < 10))
    {
      playerOnThisPlatform = true;
    }

    if (playerOnThisPlatform) {
      // ========== Set enemy movement direction based on player's relative position ==========
      // When player is on platform, if player is to enemy's right, set direction to 1, otherwise -1
      this.direction = (player.x >= this.x) ? 1 : -1;
      // ================================================================

      // ========== State transition: idle -> scream -> run ==========
      // If current state is idle, switch to scream state to play scream animation
      if (this.aiState === "idle") {
        this.aiState = "scream";
        this.screamAnim.reset();  // Reset scream animation
      }
      // If in scream state and scream animation finished, switch to run state to start chasing
      if (this.aiState === "scream" && !this.screamAnim.isPlaying) {
        this.aiState = "run";
        this.mode = true;
      } else if (this.aiState === "run") {
        this.mode = true;
      }
      // ================================================================
      
      // If very close to player, switch to attack state
      let distToPlayer = dist(this.x, this.y, player.x, player.y);
      // Attack threshold is 70 (can be adjusted)
      if (distToPlayer < 70 && this.aiState !== "attack") {
        this.aiState = "attack";
      }
      // Reset leave timer if player is still on platform
      this.leavePlatformTimer = 0;
    } else {
      // After player leaves platform, return to idle after a few seconds
      this.mode = false; // Return to normalSpeed
      if (this.leavePlatformTimer === 0) {
        // Just detected player left platform, start 1 second timer
        this.leavePlatformTimer = 60;  // 1 second (60 frames at 60FPS)
      } else {
        this.leavePlatformTimer--;
        if (this.leavePlatformTimer <= 0) {
          // Return to idle after countdown
          this.aiState = "idle";
        }
      }
    }

    // ========== Control movement:
    // Don't move when in scream or attack states (movement speed = 0)
    if (this.aiState !== "scream" && this.aiState !== "attack") {
      /** Normal slow movement, fast movement when player is on platform 
       * Later use variable checking if entered monster's platform (replace
      */
      if (this.mode) {
        this.x += this.attackSpeed * this.direction;
      } else {
        this.x += this.normalSpeed * this.direction;
      }
    }
    // =======================================================

    // Check if attack animation finished in attack state
    // If attack animation finished (isPlaying==false), switch back to run state to allow next attack
    if (this.aiState === "attack" && !this.attackAnim.isPlaying) {
      // After enemy completes attack, return to run state to continue detection for next attack
      this.aiState = "run";
      this.hasAttacked = false; // Reset attack flag
    }
    
    // [MODIFIED] Re-check distance to player, when Enemy is in run state and close enough, re-enter attack state
    if (playerOnThisPlatform) {  // Only check when player is on same platform
      // Recalculate distance to player (updated)
      let newDistToPlayer = dist(this.x, this.y, player.x, player.y);
      if (newDistToPlayer < 70 && this.aiState === "run") {
        this.aiState = "attack"; // Switch back to attack state
      }
    }

    let hitVerticalPlatform = false;

    // First check if collided with vertical platform
    for (let platform of platforms) {
        if (platform === this.platform) continue; // Skip current platform
        if (this.collidesWith(platform)) {
            this.x = prevX;
            this.direction *= -1;
            hitVerticalPlatform = true; // Record that direction was reversed
            break;
        }
    }

    // If didn't reverse due to vertical platform, check boundaries
    if (!hitVerticalPlatform) {
        if (this.x > this.platform.x + this.platform.w - this.size / 2) {
            this.direction = -1;
        } else if (this.x < this.platform.x + this.size / 2) {
            this.direction = 1;
        }
    }

    // Fix vertical position: always stand on platform top surface
    this.y = this.platform.y - this.size / 2;

    // Check bullet collision and reduce health
    for (let j = bullets.length - 1; j >= 0; j--) {
      if (dist(bullets[j].x, bullets[j].y, this.x, this.y) < this.size / 2 + 5) {
        this.health--;
        bullets.splice(j, 1);
        if (this.health <= 0 && !this.isDead) {
          this.isDead = true;
          // Remove enemy after 0.5s delay, showing death texture during this time
          setTimeout(() => { this.die(); }, 3000);
        }
      }
    }

    // ========== When in attack state, perform attack detection ==========
    if (this.aiState === "attack") {
      // Define attack area, set offset based on enemy's current direction
      let attackBox;
      if (this.direction > 0) {
        attackBox = { x: this.x + this.size / 2, y: this.y - 20, width: 40, height: 40 };
      } else {
        attackBox = { x: this.x - 40, y: this.y - 20, width: 40, height: 40 };
      }
      // If attack area collides with player and attack hasn't triggered yet, execute attack
      if (rectsIntersect(attackBox, { x: player.x, y: player.y, width: player.width, height: player.height }) && !this.hasAttacked) {
        player.takeDamage();
        this.hasAttacked = true;
      }
    } else {
      // Reset attack flag in non-attack state
      this.hasAttacked = false;
    }
  }

  collidesWith(platform) {
    return (
      this.x + this.size / 2 > platform.x &&
      this.x - this.size / 2 < platform.x + platform.w &&
      this.y + this.size / 2 > platform.y &&
      this.y - this.size / 2 < platform.y + platform.h
    );
  }

  checkBulletCollision() {
    for (let j = bullets.length - 1; j >= 0; j--) {
      if (dist(bullets[j].x, bullets[j].y, this.x, this.y) < this.size / 2 + 5) {
        this.health--;
        bullets.splice(j, 1);
        if (this.health <= 0) {
          this.die();
        }
      }
    }
  }

  die() {
    let index = enemies.indexOf(this);
    if (index !== -1) {
      enemies.splice(index, 1);
    }
  }

  display() {
    if (!this.isDead) {
      let animToUse; 
      switch (this.aiState) {
        case "idle":
          animToUse = this.idleAnim;
          break;
        case "scream":
          animToUse = this.screamAnim;
          break;
        case "attack":
          animToUse = this.attackAnim;
          break;
        default:
          // run / patrol etc. all use runAnim
          animToUse = this.runAnim;
          break;
      }

      // Update animation each frame
      animToUse.update();

      // Calculate scaling/flipping when drawing texture
      let frame = animToUse.frames[animToUse.currentFrame];
      let finalW = frame.width * 0.7; 
      let finalH = frame.height * 0.7;
      let drawX = this.x - finalW / 2;
      let drawY = this.y - finalH / 2;

      let isFlipped = (this.direction < 0);

      // Display current animation
      animToUse.display(drawX, drawY, isFlipped, 0, 0, 0.7);
    } else {
      // If you want death animation to also scale, same logic
      this.deadImg.update();
      let frame = this.deadImg.frames[this.deadImg.currentFrame];
      let finalW = frame.width * 0.5;
      let finalH = frame.height * 0.5;
      let drawX = this.x - finalW / 2;
      let drawY = this.y - finalH / 2;
  
      image(frame, drawX, drawY, finalW, finalH);

      // Remove enemy after death animation finishes playing
      // Assuming your Animation object sets isPlaying to false when non-looping animation finishes
      if (!this.deadImg.isPlaying) {
        this.die();
      }
    }
  
    // Move health bar up a bit to avoid being blocked by texture
    fill(255, 0, 0);
    rect(this.x - 20, this.y - 60, 14 * this.health, 5);
  }
}

// ========== Helper function: Rectangle collision detection ==========
function rectsIntersect(r1, r2) {
  return !(r2.x > r1.x + r1.width ||
           r2.x + r2.width < r1.x ||
           r2.y > r1.y + r1.height ||
           r2.y + r2.height < r1.y);
}


class RangedEnemy extends Enemy {
  constructor(platform) {
    super(platform);
    this.size = 60;
    this.speed = 1.5;
    this.attackRange = 200;
    this.attackCooldown = 0;

    // Add ranged enemy animation textures
    this.walkAnim = rangeWalkAnim;  // Walk animation
    this.shotImg = rangeShotImg;    // Shooting texture
    this.deadImg = rangeDeadImg;    // Death texture
    this.isShooting = false;
    this.shootingTimer = 0;

    // Initial patrol direction (1: right, -1: left)
    this.direction = 1;
  }

  update() {
    // Custom patrol logic
    // Use this.speed as movement speed (you could also use this.normalSpeed)
    this.x += this.speed * this.direction;

    // Check if reached platform edges
    let leftBound = this.platform.x + this.size / 2;
    let rightBound = this.platform.x + this.platform.w - this.size / 2;
    
    if (this.x >= rightBound) {
      this.x = rightBound;       // Constrain to platform
      this.direction = -1;       // Reverse direction at right edge
    } else if (this.x <= leftBound) {
      this.x = leftBound;        // Constrain to platform
      this.direction = 1;        // Reverse direction at left edge
    }
    
    // Fix vertical position: always stand on platform top
    this.y = this.platform.y - this.size / 2;

    if (this.attackCooldown > 0) {
      this.attackCooldown--;
    }

    if (dist(this.x, this.y, player.x, player.y) < this.attackRange && this.attackCooldown === 0) {
      this.attack();
    }
    if (this.isShooting) {
      this.shootingTimer--;
      if (this.shootingTimer <= 0) {
        this.isShooting = false;
      }
    }
  }

  attack() {
    enemyBullets.push(new EnemyBullet(this.x, this.y, player.x, player.y));
    this.attackCooldown = 90;
    this.isShooting = true;
    this.shootingTimer = 20;
  }

  display() {
    let scaleFactor = 0.5; 
    // Handle flipping to show animation correctly based on direction
    let isFlipped = (this.direction < 0); 

    if (!this.isDead) {
      if (this.isShooting) {
        let frame = this.shotImg.frames[this.shotImg.currentFrame];
        let finalW = frame.width * scaleFactor;
        let finalH = frame.height * scaleFactor;
        let drawX = this.x - finalW / 2;
        let drawY = this.y - finalH / 2;
        this.shotImg.display(drawX, drawY, isFlipped, 0, 0, scaleFactor);
      } else {
        let frame = this.walkAnim.frames[this.walkAnim.currentFrame];
        let finalW = frame.width * scaleFactor;
        let finalH = frame.height * scaleFactor;
        let drawX = this.x - finalW / 2;
        let drawY = this.y - finalH / 2;
        this.walkAnim.update();
        this.walkAnim.display(drawX, drawY, isFlipped, 0, 0, scaleFactor);
      }
    } else {
      let frame = this.deadImg.frames[this.deadImg.currentFrame];
      let finalW = frame.width * scaleFactor;
      let finalH = frame.height * scaleFactor;
      let drawX = this.x - finalW / 2;
      let drawY = this.y - finalH / 2;
      this.deadImg.display(drawX, drawY, isFlipped, 0, 0, scaleFactor);
    }

    fill(255, 0, 0);
    rect(this.x - 20, this.y - 30, 14 * this.health, 5);
  }
}

class SpiderEnemy extends Enemy {
  constructor(platform) {
    super(platform);
    this.originalY = platform.y + blockSize * 1.25;
    this.y = this.originalY;
    this.maxDropDistance = 150;
    this.dropSpeed = 5;
    this.returnSpeed = 5;
    this.isDescending = false;
    this.isReturning = false;
    this.attackRange = 200;

    // **Only in spider** reset size
    this.size = 40; // Smaller than 60, adjust as needed

    // Use spider texture
    this.img = spiderImg;
  }

  update() {
    let distanceToPlayer = dist(this.x, this.y, player.x, player.y);

    if (distanceToPlayer < this.attackRange && !this.isReturning) {
      this.isDescending = true;
    }

    if (this.isDescending) {
      this.y += this.dropSpeed;
      if (this.y > this.originalY + this.maxDropDistance) {
        this.isDescending = false;
        this.isReturning = true;
      }
    }

    if (this.isReturning) {
      this.y -= this.returnSpeed;
      if (this.y <= this.originalY) {
        this.y = this.originalY;
        this.isReturning = false;
      }
    }

    if (!isInvincible && distanceToPlayer < this.size / 2 + player.size / 2) {
      player.takeDamage();
      this.isDescending = false;
      this.isReturning = true;
    }

    if (distanceToPlayer > this.attackRange * 1.5) {
      this.isDescending = false;
      this.isReturning = true;
    }

    this.checkBulletCollision();
  }

  display() {
    stroke(150);
    line(this.x, this.platform.y + this.platform.h, this.x, this.y);

    noStroke();
    // Draw spider texture
    image(this.img, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);

    // Draw red health bar above spider's head, length proportional to current health
    // Assuming max health is 3, define maxHealth separately if more flexibility needed
    const barWidthPerHealth = 14;                   // Pixel width per health point
    const barHeight = 5;                            // Health bar height
    const totalBarWidth = barWidthPerHealth * this.health; // Current health bar width
    const barX = this.x - (barWidthPerHealth * 3) / 2;    // Center align, 3 is max health
    const barY = this.y - this.size / 2 - 10;             // Health bar 10px above spider

    fill(255, 0, 0);            // Red
    noStroke();
    rect(barX, barY, totalBarWidth, barHeight);
  }
}

// Boss class
class BossEnemy extends Enemy {
  constructor(x, y) {
    super({x, y, w: 0, h: 0}); // Call parent constructor
    this.x = x;
    this.y = y;
    this.size = 60;          // Diameter size
    this.health = 50;       // BOSS health
    this.attackTimer = 0;    // Attack timer (instance property)
    this.dead = false;  // Mark if already dead (for triggering platform generation)

    // New: Define four movement waypoints (adjust based on actual screen)
    this.waypoints = [
      { x: width * 1 / 4, y: height / 4 },
      { x: width * 3 / 4, y: height * 2 / 4 },
      { x: width * 3 / 4, y: height / 4 },
      { x: width * 1 / 4, y: height * 2 / 4 }
    ];
    this.currentWaypointIndex = 0;  // Current target waypoint index
    this.isLowHealth = false; // Initialize low health flag
    this.movementSpeed = 2.5;         // Movement speed
  }

  update() {
    if (this.dead) return; // Don't execute logic after death
    
    // Movement logic: Move towards current target waypoint
    let target = this.waypoints[this.currentWaypointIndex];
    let dx = target.x - this.x;
    let dy = target.y - this.y;
    let distance = sqrt(dx * dx + dy * dy);

    // If distance is less than movement step, consider waypoint reached and switch to next
    if (distance < this.movementSpeed) {
      this.x = target.x;
      this.y = target.y;
      this.currentWaypointIndex = (this.currentWaypointIndex + 1) % this.waypoints.length;
    } else {
      // Update position proportionally, moving towards target
      this.x += (dx / distance) * this.movementSpeed;
      this.y += (dy / distance) * this.movementSpeed;
    }

    // Auto-attack logic
    this.attack(this.attackPattern());
  }

  attackPattern() {
    // Cycle attack patterns every 10 seconds
    return floor((millis() / 10000) % 3);
  }

  attack(pattern) {
    // Check if attack interval has passed (300ms)
    if (millis() - this.attackTimer > 500) {
      // Generate different bullet patterns based on attack mode
      switch(pattern) {
        case 0: // Vertical bullet pattern
          // Use loop to generate three bullets, i as -1, 0, 1 for left, center, right offsets
          for (let i = -4; i <= 4; i++) {
            enemyBullets.push(new BossBullet(
                this.x + i * 20,   // Bullet spawn position: adjust horizontal offset based on i (20px spacing)
                this.y,            // Bullet spawn position: vertically aligned with BOSS
                i * 1.2,           // Bullet horizontal speed: adjust based on i to spread bullets left/right
                4                  // Bullet vertical speed: fixed downward (or upward depending on game physics)
            ));
          }
          break;
  
        case 1: // Six-direction scatter pattern
          // Generate one bullet every 60 degrees, total 6 bullets in 360 degrees
          for (let angle = 0; angle < 360; angle += 30) {
            const rad = radians(angle); // Convert angle to radians
            enemyBullets.push(new BossBullet(
                this.x,            // Bullet spawn position: BOSS's current x
                this.y,            // Bullet spawn position: BOSS's current y
                cos(rad) * 2.5,    // Bullet horizontal speed: calculate based on angle, multiply by 3 for speed
                sin(rad) * 2.5     // Bullet vertical speed: calculate based on angle, multiply by 3 for speed
            ));
          }
          break;
  
        case 2: // Rotating bullet pattern
          // Calculate angle that rotates with frame count (5 degrees per frame, modulo 360)
          const angle = (frameCount * 2) % 360;
          const rad = radians(angle); // Convert to radians
          enemyBullets.push(new BossBullet(
              this.x,            // Bullet spawn position: BOSS's current x
              this.y,            // Bullet spawn position: BOSS's current y
              cos(rad) * 10,     // Bullet horizontal speed: calculate based on rotation angle, speed x4
              sin(rad) * 10      // Bullet vertical speed: calculate based on rotation angle, speed x4
          ));
          break;
      }
      
      // Update attack timer to record this attack's time
      this.attackTimer = millis();
    }
  }

  display() {
    if (this.dead) return; // Don't draw body after death
    
    // Draw BOSS body
    if (bossImg) {
      let scale = 1.5;
      let w = bossImg.width * scale;
      let h = bossImg.height * scale;
      image(bossImg, this.x - w / 2, this.y - h / 2, w, h);
    } else {
      // Fallback red circle if texture fails to load
      fill(255, 0, 0);
      ellipse(this.x, this.y, this.size, this.size);
    }
    
    // Draw health bar
    this.drawHealthBar();
  }

  drawHealthBar() {
    const barWidth = 120;
    const currentWidth = map(this.health, 0, 50, 0, barWidth);

    fill(50);
    rect(this.x - barWidth/2, this.y - 60, barWidth, 8);
    fill(255, 0, 0);
    rect(this.x - barWidth/2, this.y - 60, currentWidth, 8);
  }

  takeDamage(damage = 1) {
    if (this.dead) return;
    this.health = max(this.health - damage, 0);
    
    // **First check if Boss is dead**
    // 1. First check if dead
    if (this.health <= 0) {
      soundManager.setMusic('victory');
      this.die();
    } 
    // 2. Then check if low health (and not dead)
    else if (this.health <= 10 && !isLowHealth) {
      soundManager.setMusic('boss_low');
      isLowHealth = true;
    }
  }

  die() {
    this.dead = true;
    this.health = 0;
    console.log("Boss defeated!");
    // Note: Don't splice self here
    //       Just mark dead, let external logic detect
  }
}