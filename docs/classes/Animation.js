class Animation {
  constructor(frames, frameDuration, loop = true) {
    this.frames = frames;
    this.frameDuration = frameDuration;
    this.loop = loop;
    this.currentFrame = 0;
    this.lastFrameTime = millis();
    this.isPlaying = true;
    this.onComplete = null;  
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

          // Triggers a callback when playback is complete
          if (this.onComplete) {
            this.onComplete();
          }
        }
      }
    }
  }

  /**
   * display(x, y, flip = false, offsetX = 0, offsetY = 0, scaleFactor = 1)
   * - x, y: coordinates of the top-left corner of the map (or the reference point after the flip)
   * - flip: if or not the map will be flipped left or right
   * - offsetX, offsetY: additional offsets
   * - scaleFactor: additional scaling factor (1 for original size, 2 for doubled size)
   */
  display(x, y, flip = false, offsetX = 0, offsetY = 0, scaleFactor = 1) {
    push();
    let frame = this.frames[this.currentFrame];
    
    // Calculate the width and height when drawing
    let w = frame.width * scaleFactor;
    let h = frame.height * scaleFactor;

    if (flip) {
      translate(x + w, y);
      scale(-1, 1);
    } else {
      translate(x, y);
    }
    // Final drawing of the image
    image(frame, offsetX, offsetY, w, h);
    pop();
  }

  

  reset() {
    this.currentFrame = 0;
    this.isPlaying = true;
  }
}