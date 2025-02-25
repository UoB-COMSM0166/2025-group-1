class Animation {
  constructor(frames, frameDuration, loop = true) {
    this.frames = frames;
    this.frameDuration = frameDuration;
    this.loop = loop;
    this.currentFrame = 0;
    this.lastFrameTime = millis();
    this.isPlaying = true;
    this.onComplete = null;  // 
  }

  update() {
    if (!this.isPlaying) return;

    let currentTime = millis();
    if (currentTime - this.lastFrameTime > this.frameDuration) {
      this.lastFrameTime = currentTime;
      this.currentFrame++;

      if (this.currentFrame >= this.frames.length) {
        if (this.loop) {
          this.currentFrame = 0;
        } else {
          this.currentFrame = this.frames.length - 1;
          this.isPlaying = false;

          // ✅ 播放完成时触发回调
          if (this.onComplete) {
            this.onComplete();
          }
        }
      }
    }
  }

  display(x, y, flip = false, offsetX = 0, offsetY = 0) {
    push();
    if (flip) {
      translate(x + this.frames[this.currentFrame].width, y);
      scale(-1, 1);
    } else {
      translate(x + offsetX, y + offsetY);  // ✅ 偏移位置
    }
    image(this.frames[this.currentFrame], 0, 0);
    pop();
  }

  reset() {
    this.currentFrame = 0;
    this.isPlaying = true;
  }
}