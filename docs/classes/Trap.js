class Trap {
  // Static property to record if the invincibility timer has been decremented this frame
  static lastFrameUpdated = -1;

  constructor(x, y, type, platform = null) {
    console.log("Creating Trap:", x, y, type, platform ? "with platform" : "no platform");
    this.x = x;
    this.y = y;
    this.type = type;
    this.platform = platform;
    this.active = false;

    if (type === "movingWall") {
      this.w = 100;
      this.h = 100;
      this.speed = 2;

      if (platform) {
        // Moving wall moves left and right within the bounds of this platform
        this.y = platform.y - this.h;
        this.minX = platform.x;
        this.maxX = platform.x + platform.w - this.w;
        // Start at the right edge and move left
        this.x = this.maxX;
        this.direction = -1;
        this.active = true;
      } else {
        // If no platform specified, use a simple range
        this.minX = x;
        this.maxX = x + 100;
        this.x = x;
        this.direction = 1;
        this.active = true;
      }

    } else if (type === "laserBeam") {
      this.w = 10;
      this.h = 100;
      // Laser is controlled by a switch placed nearby
      this.switch = new Switch(x + 200, y + 50);

    } else if (type === "spikeTrap") {
      this.w = 50;
      this.h = 50;
      this.spikeHeight = 0;
      this.maxSpikeHeight = 30;

      // Use a timer to control spike pop-up and retraction
      this.spikeCycle = 180;   // Number of frames per full cycle
      this.spikeTimer = 0;    // Current timer count
    }
  }

  update(player, platforms) {
    if (!player || !platforms) return;

    let playerW = player.width || 34;
    let playerH = player.height || 34;

    // -------------------
    // 1) Moving wall logic
    // -------------------
    if (this.type === "movingWall") {
      if (this.active) {
        // Slide back and forth
        this.x += this.speed * this.direction;
        if (this.x <= this.minX) {
          this.x = this.minX;
          this.direction = 1; // move right
        } else if (this.x >= this.maxX) {
          this.x = this.maxX;
          this.direction = -1; // move left
        }
        // Collision with player
        if (this.collidesWithPlayer(player, playerW, playerH) && !isInvincible) {
          playerHealth--;
          isInvincible = true;
          invincibleTimer = 60;
        }
      }

    // -------------------
    // 2) Laser logic
    // -------------------
    } else if (this.type === "laserBeam") {
      // Laser is toggled by its switch
      if (this.switch && this.switch.checkTrigger(player, playerW, playerH)) {
        this.active = false;
      } else {
        this.active = true;
      }
      if (this.active && this.collidesWithPlayer(player, playerW, playerH)) {
        // Instant kill
        playerHealth = 0;
      }

    // -------------------
    // 3) Spike trap logic
    // -------------------
    } else if (this.type === "spikeTrap") {
      // Increment the spike cycle timer
      this.spikeTimer++;
      if (this.spikeTimer >= this.spikeCycle) {
        this.spikeTimer = 0;
      }
      // First half of cycle: spikes up; second half: spikes down
      if (this.spikeTimer < this.spikeCycle / 4) {
        this.spikeHeight = this.maxSpikeHeight;  // spikes emerge
      } else {
        this.spikeHeight = 0;                   // spikes retract
      }

      // Collision only when spikes are up
      if (this.spikeHeight > 0 &&
          this.collidesWithPlayer(player, playerW, playerH) &&
          !isInvincible) {
        playerHealth--;
        isInvincible = true;
        invincibleTimer = 240;
      }
    }

    // ---------------------------------------------
    // 4) Handle invincibility timer countdown
    //    Ensure it only decrements once per frame
    // ---------------------------------------------
    if (Trap.lastFrameUpdated !== frameCount) {
      Trap.lastFrameUpdated = frameCount; // record this frame
      if (isInvincible) {
        invincibleTimer--;
        if (invincibleTimer <= 0) {
          isInvincible = false;
        }
      }
    }
  }

  display() {
    push();
    if (this.type === "movingWall") {
      if (movingWallTile) {
        // Tile the moving wall texture
        for (let i = 0; i < this.w; i += 50) {
          for (let j = 0; j < this.h; j += 50) {
            image(movingWallTile, this.x + i, this.y + j, 50, 50);
          }
        }
      } else {
        fill(0, 255, 0);
        rect(this.x, this.y, this.w, this.h);
      }

    } else if (this.type === "laserBeam") {
      if (this.active) {
        fill(255, 0, 0, 150);
        rect(this.x, this.y, this.w, this.h);
      }
      // Draw the switch that controls the laser
      if (this.switch) {
        this.switch.display();
      }

    } else if (this.type === "spikeTrap") {
      fill(150);
      // Draw 5 triangular spikes
      for (let i = 0; i < 5; i++) {
        let spikeX = this.x + i * 10;
        triangle(
          spikeX,            this.y + this.h,
          spikeX + 5,        this.y + this.h - this.spikeHeight,
          spikeX + 10,       this.y + this.h
        );
      }
    }
    pop();
  }

  // Generic collision detection with player
  collidesWithPlayer(player, playerW, playerH) {
    return (
      player.x + playerW > this.x &&
      player.x < this.x + this.w &&
      player.y + playerH > this.y &&
      player.y < this.y + this.h
    );
  }
}

// Switch class used to toggle laser traps
class Switch {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 20;
    this.triggered = false;
  }

  checkTrigger(player, playerW, playerH) {
    if (!player) return false;
    // If player overlaps the switch, activate it
    if (
      !this.triggered &&
      player.x + playerW > this.x &&
      player.x < this.x + this.w &&
      player.y + playerH > this.y &&
      player.y < this.y + this.h
    ) {
      this.triggered = true;
    }
    return this.triggered;
  }

  display() {
    // Gray when triggered, red if not
    fill(this.triggered ? 100 : 255, 0, 0);
    rect(this.x, this.y, this.w, this.h);
  }
}
