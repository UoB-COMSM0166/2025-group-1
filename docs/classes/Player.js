class Player extends Entity {
  constructor(x, y, animations) {
    super(x, y, animations);
    this.speed = 3;              // 移动速度
    this.isShooting = false;
    this.bullets = [];
    this.isJumping = false;
    this.jumpSpeed = 15;         // 跳跃初速度
    this.gravity = 0.6;          // 重力
    this.velocityY = 0;
    this.velocityX = 0;          // 横向速度
    this.isOnGround = false;     // 是否在地面上
    this.width = 34;             // 玩家宽度
    this.height = 34;            // 玩家高度
    this.size = 34;
    this.isInvincible = false;   // 是否无敌
    this.invincibleDuration = 60; // 无敌时间（帧数）
    this.invincibleTimer = 0;    // 无敌计时器
  }
  
  
   takeDamage() {
    if (!this.isInvincible ) {
      playerHealth --;
      this.isInvincible = true;
      this.invincibleTimer = this.invincibleDuration;
       // 简单的击退效果
      this.velocityY = -8;
      this.velocityX = (this.x < width / 2) ? -10 : 10;     
    }
  }
  
  move(right) {
    this.velocityX = right ? this.speed : -this.speed;
    this.facingRight = right;
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
    // 只有在地面上时才能跳跃
    if (!this.isJumping && this.isOnGround) {
      this.isJumping = true;
      this.velocityY = -this.jumpSpeed;
      this.changeState('jump');
    }
  }

  update(platforms) {
    // 更新无敌状态
    if (this.isInvincible) {
      this.invincibleTimer--;
      if (this.invincibleTimer <= 0) {
        this.isInvincible = false;
      }
    }
    // 更新当前身体动画（仅动画，不做物理）
    if (this.animations[this.currentState]) {
      this.animations[this.currentState].update();
    }

    // 水平移动
    this.x += this.velocityX;

    // 水平碰撞检测
    platforms.forEach(p => {
      if (this.x + this.width > p.x &&          // 玩家右边缘 > 平台左边缘
          this.x < p.x + p.w &&                 // 玩家左边缘 < 平台右边缘
          this.y + this.height > p.y &&         // 玩家底部 > 平台顶部
          this.y < p.y + p.h) {                // 玩家顶部 < 平台底部
        // 向左复位
        if (this.velocityX > 0) {
          this.x = p.x - this.width - 0.1;     // 玩家右边缘对齐平台左边缘
        }
        // 向右复位
        else if (this.velocityX < 0) {
          this.x = p.x + p.w + 0.1;           // 玩家左边缘对齐平台右边缘
        }
        this.velocityX = 0;
      }
    });

    // 垂直移动 + 重力
    this.velocityY += this.gravity;
    this.y += this.velocityY;

    // 垂直碰撞检测
    this.isOnGround = false;
    platforms.forEach(p => {
      if (this.x + this.width > p.x &&          // 玩家右边缘 > 平台左边缘
          this.x < p.x + p.w &&                // 玩家左边缘 < 平台右边缘
          this.y + this.height > p.y &&        // 玩家底部 > 平台顶部
          this.y < p.y + p.h) {               // 玩家顶部 < 平台底部
        // 下落复位
        if (this.velocityY > 0) {
          this.y = p.y - this.height;          // 玩家底部对齐平台顶部
          this.isOnGround = true;
          this.isJumping = false;
          this.velocityY = 0;
        }
        // 上升复位
        else if (this.velocityY < 0) {
          this.y = p.y + p.h;                 // 玩家顶部对齐平台底部
          this.velocityY = 0;
        }
      }
    });

    // 屏幕边界
    this.x = constrain(this.x, 0, width - this.width); // 玩家宽度为 15，因此左右边界为 0 和 width - 15
    this.y = constrain(this.y, 0, height - this.height); // 玩家高度为 30，因此上下边界为 0 和 height - 30

    // 更新子弹
    for (let i = this.bullets.length - 1; i >= 0; i--) {
    
      if (this.bullets[i].update(platforms, enemies)) {
        this.bullets.splice(i, 1);
      }
    }
  }

  display() {
    // 1) 显示身体动画（idle/run/jump）
    if (this.animations[this.currentState]) {
      this.animations[this.currentState].display(
        this.x,
        this.y,
        !this.facingRight
      );
    }

    // 2) 手臂动画只在面向右时显示
    if (this.facingRight && this.animations['shoot']) {
      if (!this.isShooting) {
        this.animations['shoot'].currentFrame = 0;
        this.animations['shoot'].isPlaying = false;
      } else {
        this.animations['shoot'].isPlaying = true;
        this.animations['shoot'].update();
      }

      // 手臂的偏移量
      let offsetX = 10; // 水平偏移量
      let offsetY = 0;  // 垂直偏移量

      this.animations['shoot'].display(
        this.x,
        this.y,
        false,  // 不翻转
        offsetX,
        offsetY
      );
    }

    // 3) 让枪 360 度旋转，始终指向鼠标
    let angle = atan2(mouseY - (this.y + 17), mouseX - (this.x + 17)); // 根据玩家高度调整
    push();
    translate(this.x + 17, this.y + 17); // 根据玩家宽度和高度调整
    rotate(angle);
    image(gunImage, 0, -gunImage.height / 2);
    pop();
    
    // 4) 绘制子弹
    for (let bullet of this.bullets) {
      bullet.display();
    }
  }

   shoot() {
    if (!this.isShooting) {
      this.isShooting = true;
      // 如果手臂动画是多帧，重置到第0帧
      if (this.animations['shoot']) {
        this.animations['shoot'].reset();
      }
 // 生成子弹
      let angle = atan2(mouseY - this.y, mouseX - this.x);
      let muzzleOffsetX = 17 + cos(angle) * 20;
      let muzzleOffsetY = 17 + sin(angle) * 20;
      let bullet = new Bullet(
        this.x + muzzleOffsetX,
        this.y + muzzleOffsetY,
        mouseX,
        mouseY
      );
      this.bullets.push(bullet);
      
      // 200ms 后停止射击
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