class Bullet {
  constructor(x, y, targetX, targetY) {
    this.x = x;
    this.y = y;
    this.speed = 50;
    const angle = atan2(targetY - y, targetX - x);
    this.vx = cos(angle) * this.speed;
    this.vy = sin(angle) * this.speed;
    this.size = 10;
  }

  update(platforms, enemies) {
    if (!platforms || !Array.isArray(platforms)) {
      console.error('Invalid platforms:', platforms);
      return true; // Remove the bullet if platforms data is invalid
    }
    if (!enemies || !Array.isArray(enemies)) {
      console.error('Invalid enemies:', enemies);
      return true; // Remove the bullet if enemies data is invalid
    }

    // Move the bullet
    this.x += this.vx;
    this.y += this.vy;

    // Platform collision detection
    if (this.collidesWithPlatform(platforms)) {
      return true; // Bullet should be removed
    }

    // Enemy collision detection
    if (this.collidesWithEnemy(enemies)) {
      return true; // Bullet should be removed
    }

    // Remove the bullet if it goes off-screen
    return this.isOffScreen();
  }

  collidesWithPlatform(platforms) {
    if (!platforms || !Array.isArray(platforms)) {
      console.error('Invalid platforms:', platforms);
      return false;
    }
    // Check against all platforms
    for (let p of platforms) {
      // Simple AABB collision check
      if (
        this.x > p.x && this.x < p.x + p.w &&
        this.y > p.y && this.y < p.y + p.h
      ) {
        // If it's a breakable wall and not yet broken, handle damage
        if (p instanceof BreakableWall && !p.isBroken) {
          p.onHitByBullet();
        }
        // Bullet disappears after hitting any platform
        return true;
      }
    }
    return false;
  }

  collidesWithEnemy(enemies) {
    // Iterate backwards to allow safe removal if needed
    for (let i = enemies.length - 1; i >= 0; i--) {
      const distance = dist(this.x, this.y, enemies[i].x, enemies[i].y);
      const collisionDistance = this.size / 2 + enemies[i].size / 2;
      if (distance < collisionDistance) {
        // Apply damage using the enemy's takeDamage method if available
        if (enemies[i].takeDamage) {
          enemies[i].takeDamage(1); // Deal 1 damage
        } else {
          enemies[i].health--;
        }
        // If health drops to zero or below, trigger death
        if (enemies[i].health <= 0) {
          enemies[i].die();
        }
        // Bullet disappears after hitting an enemy
        return true;
      }
    }
    return false;
  }

  display() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, 10, 10);
  }

  isOffScreen() {
    return this.x < 0 || this.x > width || this.y < 0 || this.y > height;
  }
}

class EnemyBullet extends Bullet {
  constructor(x, y, targetX, targetY) {
    super(x, y, targetX, targetY);
    this.speed = 5;
  }

  update(platforms, player) {
    // Move the bullet
    this.x += this.vx;
    this.y += this.vy;

    // Platform collision detection
    if (this.collidesWithPlatform(platforms)) {
      return true; // Remove bullet on collision
    }

    // Player collision detection
    if (this.collidesWithPlayer(player)) {
      player.takeDamage(); // Inflict damage on the player
      return true;         // Bullet disappears after hitting the player
    }

    // Remove if off-screen
    return this.isOffScreen();
  }

  collidesWithPlayer(player) {
    // Simple circle-based collision detection
    return dist(this.x, this.y, player.x, player.y) <
      (this.size / 2 + player.size / 2);
  }

  display() {
    fill(255, 255, 0);
    ellipse(this.x, this.y, 8, 8);
  }
}

// Boss-specific bullet
class BossBullet extends EnemyBullet {
  constructor(x, y, vx, vy) {
    super(x, y, 0, 0); // Disable original target calculation
    this.vx = vx;
    this.vy = vy;
    this.size = 8;
    this.lifeTime = 600;        // Lifetime in frames (e.g., 10 seconds at 60 FPS)
    this.startTime = frameCount;
    this.speed = 1;
  }

  display() {
    // Gradient-effect bullet rendering
    const age = frameCount - this.startTime;
    const alpha = map(age, 0, this.lifeTime, 255, 50);
    fill(255, 255, 0, alpha);
    stroke(255, 100, 0, alpha);
    strokeWeight(2);
    ellipse(this.x, this.y, this.size, this.size);
  }

  isOffScreen() {
    // Also expire the bullet after its lifetime elapses
    return super.isOffScreen() || (frameCount - this.startTime > this.lifeTime);
  }
}
