// Portal system (self-contained module)
class Portal {
  constructor(x, y, w = 50, h = 50) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.particleTimer = 0;
  }

  // Independent rendering logic
  display() {
      if (exitImg) {
          image(exitImg, this.x, this.y, this.w, this.h);
      } else {
          // Default green block as fallback
          fill(0, 200, 0, 150);
          noStroke();
          rect(this.x, this.y, this.w, this.h);
      }

      // Dynamic particle effect (optional)
      if (frameCount % 6 === 0) {
          fill(200, 255, 200, 180);
          ellipse(
              this.x + random(this.w),
              this.y + random(this.h),
              random(3, 6)
          );
      }

      // Text prompt
      fill(255);
      textSize(16);
      textAlign(CENTER, CENTER);
      text("Exit", this.x + this.w / 2, this.y + this.h / 2);
  }

  // Collision detection
  checkCollision() {
      return (
          player.x > this.x &&
          player.x < this.x + this.w &&
          player.y > this.y &&
          player.y < this.y + this.h
      );
  }
}

// Level portal configuration (coordinates can be extended)
const portalConfig = {
  0: { x: 1450, y: 800 },
  1: { x: 100,  y: 800 },
  2: { x: 1100, y: 100 },
  3: { x: 1300, y: 450 }
};

let currentPortal = null;

// Initialize portal (call after level load)
function initPortal() {
  const config = portalConfig[currentLevel];
  if (config) {
      currentPortal = new Portal(config.x, config.y);
  }
}

// Check for portal transition (call in draw loop)
function checkPortalTransition() {
  if (justSkipped) return; //  Don't trigger the portal immediately after skipping a level
  
  if (currentPortal && currentPortal.checkCollision()) {
      // Assume the final level is currentLevel = 3
      // and the boss must be dead
      let bossDead = false;
      for (let e of enemies) {
          if (e instanceof BossEnemy && e.dead) {
              bossDead = true;
              break;
          }
      }

      if (currentLevel === 3 && bossDead) {
          gameState = 'endingCutscene';
          currentEndingImage = 0;
      } else {
          // If not the last level yet, proceed to the next level
          if (currentLevel < Object.keys(portalConfig).length - 1) {
              currentLevel++;
              loadLevel(currentLevel);
              initPortal();
          } else {
              console.log("Congratulations, you beat the game!");
          }
      }
  }
}
