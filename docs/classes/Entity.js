// Entity.js
class Entity {
  constructor(x, y, animations) {
    this.x = x;
    this.y = y;
    this.velocityX = 0;
    this.velocityY = 0;
    this.gravity = 0.5;
    this.isOnGround = true;
    this.facingRight = true;
    this.animations = animations;
    this.currentState = "idle";
  }

  update() {
    this.applyGravity();
    if (this.animations[this.currentState]) {
      this.animations[this.currentState].update();
    }
    this.x += this.velocityX;
    this.y += this.velocityY;
  }

  display() {
    if (this.animations[this.currentState]) {
      this.animations[this.currentState].display(this.x, this.y, !this.facingRight);
    }
  }

  applyGravity() {
    this.velocityY += this.gravity;
    if (this.y >= 200) {
      this.y = 200;
      this.velocityY = 0;
      this.isOnGround = true;
    }
  }

  changeState(newState) {
    if (this.currentState !== newState) {
      this.currentState = newState;
      this.animations[this.currentState]?.reset();
    }
  }
}