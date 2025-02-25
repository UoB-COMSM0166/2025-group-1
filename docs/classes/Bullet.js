class Bullet {
  constructor(x, y, targetX, targetY) {
    this.x = x;
    this.y = y;
    this.speed = 10;
    const angle = atan2(targetY - y, targetX - x);
    this.vx = cos(angle) * this.speed;
    this.vy = sin(angle) * this.speed;
    this.size = 10;
  }

  update(platforms,enemies) {
    if (!platforms || !Array.isArray(platforms)) {
    console.error('Invalid platforms:', platforms);
    return true; // 如果 platforms 无效，移除子弹
  }
  if (!enemies || !Array.isArray(enemies)) {
    console.error('Invalid enemies:', enemies);
    return true; // 如果 enemies 无效，移除子弹
  }
    this.x += this.vx;
    this.y += this.vy;
     // 平台碰撞检测
    if (this.collidesWithPlatform(platforms)) {
      return true; // 需要移除子弹
    }
     // 敌人碰撞检测
    if (this.collidesWithEnemy(enemies)) {
      return true; // 需要移除子弹
    }
   return this.isOffScreen(); // 如果子弹超出屏幕，也需要移除
  }
  
collidesWithPlatform(platforms) {
   if (!platforms || !Array.isArray(platforms)) {
    console.error('Invalid platforms:', platforms);
    return false;
  }
    return platforms.some(p => 
      this.x > p.x && this.x < p.x + p.w &&
      this.y > p.y && this.y < p.y + p.h
    );
  }
collidesWithEnemy(enemies) {
  for (let i = enemies.length - 1; i >= 0; i--) {
    const distance = dist(this.x, this.y, enemies[i].x, enemies[i].y);
    const collisionDistance = this.size / 2 + enemies[i].size / 2;
    if (distance < collisionDistance) {
      enemies[i].health--; // 对敌人造成伤害
      if (enemies[i].health <= 0) {
        enemies[i].die(); // 如果敌人生命值 <= 0，调用敌人的 die 方法
      }
      return true; // 子弹命中敌人后消失
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
    this.x += this.vx;
    this.y += this.vy;

    // 平台碰撞检测
    if (this.collidesWithPlatform(platforms)) {
      return true; // 需要移除子弹
    }

    // 玩家碰撞检测
    if (this.collidesWithPlayer(player)) {
      player.takeDamage(); // 对玩家造成伤害
      return true; // 子弹命中玩家后消失
    }

    return this.isOffScreen(); // 如果子弹超出屏幕，也需要移除
  }

  collidesWithPlayer(player) {
    return dist(this.x, this.y, player.x, player.y) < (this.size / 2 + player.size / 2);
  }
  display() {
    fill(255, 255, 0);
    ellipse(this.x, this.y, 8, 8);
  }
}


//  Boss专用子弹
class BossBullet extends EnemyBullet {
  constructor(x, y, vx, vy) {
    super(x, y, 0, 0); // 禁用原始目标计算
    this.vx = vx;
    this.vy = vy;
    this.size = 8;
    this.lifeTime = 600; // 10秒存在时间
    this.startTime = frameCount;
    this.speed = 1;
  }

  display() {
    // 渐变色弹幕
    const age = frameCount - this.startTime;
    const alpha = map(age, 0, this.lifeTime, 255, 50);
    fill(255, 255, 0, alpha);
    stroke(255, 100, 0, alpha);
    strokeWeight(2);
    ellipse(this.x, this.y, this.size, this.size);
  }

  isOffScreen() {
    return super.isOffScreen() || (frameCount - this.startTime > this.lifeTime);
  }
}
