class Enemy extends Entity {
  constructor(platform) {
    super(platform.x + platform.w / 2, platform.y - 15, {});  // 调用父类构造函数
    this.size = 30;
    this.speed = 2;
    this.direction = 1;
    this.health = 3;
    this.platform = platform;  // 保存平台信息
  }

  

  update() {
    let prevX = this.x;
    this.x += this.speed * this.direction;

    if (this.x > this.platform.x + this.platform.w - this.size / 2) {
      this.direction = -1;
    } else if (this.x < this.platform.x + this.size / 2) {
      this.direction = 1;
    }

    for (let platform of platforms) {
      if (this.collidesWith(platform)) {
        this.x = prevX;
        this.direction *= -1;
        break;
      }
    }

    this.checkBulletCollision();

    if (!isInvincible && dist(player.x, player.y, this.x, this.y) < (34 + this.size) / 2) {
     player.takeDamage();
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
    fill(200, 0, 0);
    ellipse(this.x, this.y, this.size, this.size);

    fill(255, 0, 0);
    rect(this.x - 20, this.y - 30, 14 * this.health, 5);
  }
}

class RangedEnemy extends Enemy {
  constructor(platform) {
    super(platform);
    this.size = 25;
    this.speed = 1.5;
    this.attackRange = 200;
    this.attackCooldown = 0;
  }

  update() {
    super.update();

    if (this.attackCooldown > 0) {
      this.attackCooldown--;
    }

    if (dist(this.x, this.y, player.x, player.y) < this.attackRange && this.attackCooldown === 0) {
      this.attack();
    }
  }

  attack() {
    enemyBullets.push(new EnemyBullet(this.x, this.y, player.x, player.y));
    this.attackCooldown = 90;
  }

  display() {
    fill(0, 0, 255);
    ellipse(this.x, this.y, this.size, this.size);

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
    fill(50, 0, 0);
    ellipse(this.x, this.y, this.size, this.size);
  }
}
//Boss类
class BossEnemy extends Enemy {
  constructor(x, y) {
    super({x, y, w: 0, h: 0}); // 调用父类构造函数
    this.x = x;
    this.y = y;
    this.size = 60;          // 直径尺寸
    this.floatSpeed = 0.03;  // 浮动速度
    this.baseY = y;          // 浮动基准Y坐标
    this.health = 100;       // BOSS血量
    this.attackTimer = 0;    // 攻击计时器（实例属性）
  }

  update() {
    // 正弦波浮动效果
    this.y = this.baseY + sin(frameCount * this.floatSpeed) * 20;

    // 屏幕边界限制
    this.x = constrain(this.x, width/4, width*3/4);

    // 自动攻击逻辑
    this.attack(this.attackPattern());
  }

  attackPattern() {
    // 每10秒循环一次攻击模式
    return floor((millis() / 10000) % 3);
  }

  attack(pattern) {
    if (millis() - this.attackTimer > 300) {
      switch(pattern) {
        case 0: // 垂直弹幕
          for (let i = -1; i <= 1; i++) {
            enemyBullets.push(new BossBullet(
                this.x + i*20,
                this.y,
                i*0.5,
                7
            ));
          }
          break;

        case 1: // 六方向散射
          for (let angle = 0; angle < 360; angle += 60) {
            const rad = radians(angle);
            enemyBullets.push(new BossBullet(
                this.x,
                this.y,
                cos(rad) * 3,
                sin(rad) * 3
            ));
          }
          break;

        case 2: // 旋转弹幕
          const angle = (frameCount * 5) % 360;
          const rad = radians(angle);
          enemyBullets.push(new BossBullet(
              this.x,
              this.y,
              cos(rad) * 4,
              sin(rad) * 4
          ));
          break;
      }
      this.attackTimer = millis();
    }
  }

  display() {
    // 绘制BOSS本体
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.size, this.size);

    // 绘制血条
    this.drawHealthBar();
  }

  drawHealthBar() {
    const barWidth = 120;
    const currentWidth = map(this.health, 0, 100, 0, barWidth);

    fill(50);
    rect(this.x - barWidth/2, this.y - 60, barWidth, 8);
    fill(255, 0, 0);
    rect(this.x - barWidth/2, this.y - 60, currentWidth, 8);
  }

  takeDamage(damage = 1) {
    this.health = max(this.health - damage, 0);
    if (this.health <= 0) this.die();
  }
}
