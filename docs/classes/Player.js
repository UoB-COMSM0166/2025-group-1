class Player extends Entity {
  constructor(x, y, animations) {
    super(x, y, animations);
    this.speed = 3;              // Movement speed
    this.isShooting = false;
    this.lastShotTime = 0;
    this.bullets = [];
    this.isJumping = false;
    this.jumpSpeed = 15;         // Initial jump velocity
    this.gravity = 0.6;          // Gravity
    this.velocityY = 0;
    this.velocityX = 0;          // Horizontal velocity
    this.isOnGround = false;     // Whether on ground
    this.width = 34;             // Player width
    this.height = 34;            // Player height
    this.size = 34;
   // this.isInvincible = false;   // Whether invincible
    //this.invincibleDuration = 60; // Invincibility duration (frames)
    //this.invincibleTimer = 0;    // Invincibility timer
    //this.visible = true; // Controls player visibility
    this.facingRight = true; // Default facing right

    this.damageCooldown = 60; // Cooldown time (frames)
    this.damageTimer = 0; // Cooldown timer
    this.isInvincible = false; // Whether invincible
    this.isStunned = false; // Whether stunned
    this.isBlinking = false; // Whether blinking
    this.visible = true; // Whether visible

    this.collisionWidth = 18;
    this.collisionHeight = 34;
    this.collisionOffsetX = 8; // (34 - 28) / 2
    this.collisionOffsetY = 0;
  }
  //Test
  
   takeDamage() {
    if (!this.isInvincible ) {
      playerHealth --;
      // Trigger invincibility, stun and blinking states
      this.isInvincible = true;
      this.isStunned = true;
      this.isBlinking = true;
      this.damageTimer = this.damageCooldown;
      this.isKnockback = true; // Enter knockback state

      // Knockback effect
      this.velocityY = -3; // Knockback upwards
      this.velocityX = (this.x < width / 2) ? -5 : 5; // Knockback direction based on player position
    

      // Blinking effect
      let blinkInterval = setInterval(() => {
        this.visible = !this.visible; // Toggle visibility
      }, 100); // Blink every 100ms

      // Reset states after cooldown
      setTimeout(() => {
        clearInterval(blinkInterval);
        this.visible = true; // Ensure player is finally visible
        this.isInvincible = false;
        this.isStunned = false;
        this.isBlinking = false;
      }, this.damageCooldown * 16.67); // Convert frames to milliseconds (assuming 60fps)
    
      // Check if red curtain flash should be triggered
if (playerHealth === 1 && redOverlayFlashes === 0) {
  redOverlayFlashes = 3;
  redOverlayTimer = 1;
  isRedVisible = true;
}


    }   
  }
  

  move(right) {
    this.velocityX = right ? this.speed : -this.speed;
    //this.facingRight = right;
    if (!this.isJumping) {
      this.changeState('run');
    }
  }

  stop() {
    this.velocityX = 0;
    if (!this.isJumping) {
      this.changeState('idle');
    }
  }

  jump() {
    // Can only jump when on ground
    if (!this.isJumping && this.isOnGround) {
      this.isJumping = true;
      this.velocityY = -this.jumpSpeed;
      this.changeState('jump');
    }
  }
  update(platforms) {
    if (playerHealth === 1) {
      if (!heartBeatSound.isPlaying()) {
        heartBeatSound.setLoop(true);  // Set loop (only set once)
        heartBeatSound.play();
      }
    } else {
      if (heartBeatSound.isPlaying()) {
        heartBeatSound.stop(); // Stop playback
      }
    }

    // Update cooldown timer
    if (this.damageTimer > 0) {
      this.damageTimer--;
      if (this.damageTimer <= 0) {
        this.isInvincible = false;
        this.isStunned = false;
        this.isBlinking = false;
        this.visible = true; // Ensure player is finally visible
      }
    }
  
   /* // Update invincibility state
    if (this.isInvincible) {
      this.invincibleTimer--;
      if (this.invincibleTimer <= 0) {
        this.isInvincible = false;
      }
    }*/


  //   // Update player facing based on mouse position
  // if (mouseX > this.x + this.width / 2) {
  //   this.facingRight = true; // Mouse is to the right of player
  // } else if (mouseX < this.x + this.width / 2) {
  //   this.facingRight = false; // Mouse is to the left of player
  // }

  // In update(platforms), block mouse interference with facing
if (!accessibilityCtrl.isActive) {
  // ★ Normal mode: still determine facing based on mouseX
  if (mouseX > this.x + this.width / 2) {
    this.facingRight = true;
  } else {
    this.facingRight = false;
  }
} else {
  // ★ Accessibility mode: use gunAngle to determine
  // Here we define: -90°~90° as facing right, others as left
  if (accessibilityCtrl.gunAngle >= 270 || accessibilityCtrl.gunAngle <= 90) {
    this.facingRight = true;
  } else {
    this.facingRight = false;
  }
}
    // Update current body animation (animation only, no physics)
    if (this.animations[this.currentState]) {
      this.animations[this.currentState].update();
    }
      // === [MODIFIED] Continuous horizontal input support, can move while jumping ===
  if (keyIsDown(65) || keyIsDown(37)) {        // A key or ←
    this.velocityX = -this.speed;
    this.facingRight = false;
  } else if (keyIsDown(68) || keyIsDown(39)) { // D key or →
    this.velocityX = this.speed;
    this.facingRight = true;
  } else if (!this.isJumping) {
    // Only stop when not jumping and no input
    this.velocityX = 0;
  }
  // =============================================
     // First handle horizontal movement and collision detection
      this.x += this.velocityX;
      this.handleHorizontalCollisions(platforms);
  
      // Then handle vertical movement and collision detection
      this.velocityY += this.gravity;
      this.y += this.velocityY;
      this.handleVerticalCollisions(platforms);
  
      // Constrain to screen boundaries
      this.constrainToScreen();
    
    // Update bullets
    for (let i = this.bullets.length - 1; i >= 0; i--) {
    
      if (this.bullets[i].update(platforms, enemies)) {
        this.bullets.splice(i, 1);
      }
    }
  
  }
  handleHorizontalCollisions(platforms) {
    let playerLeft = this.x + this.collisionOffsetX;
    let playerRight = playerLeft + this.collisionWidth;
    let playerTop = this.y + this.collisionOffsetY;
    let playerBottom = playerTop + this.collisionHeight;

    this.isTouchingWall = false; // Add variable to detect wall contact

    platforms.forEach(p => {
      let platformLeft = p.x;
      let platformRight = p.x + p.w;
      let platformTop = p.y;
      let platformBottom = p.y + p.h;

      if (
        playerRight > platformLeft &&
        playerLeft < platformRight &&
        playerBottom > platformTop &&
        playerTop < platformBottom
      ) {

      // **Wall contact detection**
            this.isTouchingWall = true;
        // When moving right, reset to platform left side
        if (this.velocityX > 0) {
          this.x = platformLeft - this.collisionWidth - this.collisionOffsetX - 1;
        }
        // When moving left, reset to platform right side
        else if (this.velocityX < 0) {
          this.x = platformRight - this.collisionOffsetX + 1;
        }
        //this.velocityX = 0;
        // **Only when not jumping should `velocityX = 0`**
      // === [MODIFIED] Only zero velocity when not jumping, maintain speed while jumping ===
      if (!this.isJumping) {
        this.velocityX = 0;
      
      } 
    //   else {
    //     this.velocityX *= 0.9; // Slow down wall sliding instead of stopping immediately
    // }
      }
    });
  }

  handleVerticalCollisions(platforms) {
    let playerLeft = this.x + this.collisionOffsetX;
    let playerRight = playerLeft + this.collisionWidth;
    let playerTop = this.y + this.collisionOffsetY;
    let playerBottom = playerTop + this.collisionHeight;

    this.isOnGround = false;
    platforms.forEach(p => {
      let platformLeft = p.x;
      let platformRight = p.x + p.w;
      let platformTop = p.y;
      let platformBottom = p.y + p.h;

      if (
        playerRight > platformLeft &&
        playerLeft < platformRight &&
        playerBottom > platformTop &&
        playerTop < platformBottom
      ) {
        // Falling reset
        if (this.velocityY > 0) {
          this.y = platformTop - this.collisionHeight - this.collisionOffsetY;
          this.isOnGround = true;
          this.isJumping = false;
          this.velocityY = 0;
        }
        // Rising reset
        else if (this.velocityY < 0) {
          this.y = platformBottom - this.collisionOffsetY;
          this.velocityY = 0;
        }
      }
    });
  }

  constrainToScreen() {
    this.x = constrain(
      this.x,
      -this.collisionOffsetX,
      width - this.collisionWidth - this.collisionOffsetX
    );
    this.y = constrain(
      this.y,
      -this.collisionOffsetY,
      height - this.collisionHeight - this.collisionOffsetY
    );}

  display() {
    if (!this.visible) return; // If not visible, return immediately
    // 1) Display body animation (idle/run/jump)
    if (this.animations[this.currentState]) {
      this.animations[this.currentState].display(
        this.x,
        this.y,
        !this.facingRight
      );
    }


    // 2) Arm animation only shows when facing right
    if (this.facingRight && this.animations['shoot']) {
      if (!this.isShooting) {
        this.animations['shoot'].currentFrame = 0;
        this.animations['shoot'].isPlaying = false;
      } else {
        this.animations['shoot'].isPlaying = true;
        this.animations['shoot'].update();
      }

      // Arm offset
      let offsetX = 10; // Horizontal offset
      let offsetY = 0;  // Vertical offset

      this.animations['shoot'].display(
        this.x,
        this.y,
        false,  // No flip
        offsetX,
        offsetY
      );
    }

    // 3) Make gun rotate 360 degrees, always pointing at mouse
    // ★ Different cases: normal mode vs. accessibility mode
let angle;
if (!accessibilityCtrl.isActive) {
  // Normal mode → use mouse
  angle = atan2(mouseY - (this.y + 17), mouseX - (this.x + 17));
} else {
  // Accessibility mode → use gunAngle
  angle = radians(accessibilityCtrl.gunAngle);
}

push();
translate(this.x + 17, this.y + 17);
rotate(angle);
image(gunImage, 0, -gunImage.height / 2);
pop();
    
    // 4) Draw bullets
    for (let bullet of this.bullets) {
      bullet.display();
    }
  }

   shoot() {
    if (!this.isShooting) {
      this.isShooting = true;
      this.lastShotTime = millis();
      // If arm animation has multiple frames, reset to frame 0
      if (this.animations['shoot']) {
        this.animations['shoot'].reset();
      }
      if (millis() - this.lastShotTime > 200) { // 200ms shooting interval
        this.lastShotTime = millis(); // Update last shot time

      }

    // ★ Core: calculate bullet angle based on mode
    let angle;
    // Need global access to accessibilityCtrl.isActive
    // Or detect accessibility mode in Player in another way
    if (accessibilityCtrl.isActive) {
      // Accessibility mode → use gunAngle
      // gunAngle is in degrees, need to convert to radians
      angle = radians(accessibilityCtrl.gunAngle);
    } else {
      // Normal mode → use mouse
      angle = atan2(mouseY - this.y, mouseX - this.x);
    }

      let muzzleOffsetX = 17 + cos(angle) * 20;
      let muzzleOffsetY = 17 + sin(angle) * 20;
      // If your Bullet constructor needs target coordinates,
    // but in accessibility mode only has angle, then:
    // 1) Overload Bullet to support "passing an angle".
    // 2) Or use trigonometry to calculate a far enough target.
    //   Example: let targetX = this.x + cos(angle)*9999;
    //            let targetY = this.y + sin(angle)*9999;
    //   Then pass to Bullet for long-range flight.
    //   Here we'll assume Bullet supports (x,y,angle) or (x,y,targetX, targetY).

    let bullet;
    if (!accessibilityCtrl.isActive) {
      // Normal mode, still use mouse target
      bullet = new Bullet(
        this.x + muzzleOffsetX,
        this.y + muzzleOffsetY,
        mouseX,
        mouseY
      );
    } else {
      // Accessibility mode, use angle to calculate a far point as target, or make Bullet support angle
      let targetX = this.x + muzzleOffsetX + cos(angle)*9999;
      let targetY = this.y + muzzleOffsetY + sin(angle)*9999;

      bullet = new Bullet(
        this.x + muzzleOffsetX,
        this.y + muzzleOffsetY,
        targetX,
        targetY
      );
    }

    this.bullets.push(bullet);
      if (gunShotSound && !isPaused && !showSettings && !showSkipDialog) {
        gunShotSound.play();
      } 
      // Stop shooting after 200ms
      setTimeout(() => {
        this.isShooting = false;
      }, 200);
    }
  }
  collidesWith(fragment) {
    let d = dist(this.x, this.y, fragment.x, fragment.y);
    return d < this.size / 2 + fragment.size / 2;
  }
}