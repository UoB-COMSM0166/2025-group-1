class BreakableWall extends Platform {
  /**
   * @param {number} x - Left X coordinate of the wall
   * @param {number} y - Top Y coordinate of the wall
   * @param {number} w - Width of the wall
   * @param {number} h - Height of the wall
   * @param {p5.Image[]} frames - Array of break animation frames (typically 4 frames: [wall1, wall2, wall3, wall4])
   * @param {number} hitsToBreak - Number of bullet hits required to fully break
   * @param {boolean} hasBlackMask - Whether to show a black mask behind the wall
   * @param {boolean} drawParentTiles - Whether to draw the parent class’s tiled background under the breaking frames
   */
  constructor(x, y, w, h, frames, hitsToBreak, hasBlackMask = false, drawParentTiles = false) {
    super(x, y, w, h);                     // Call Platform constructor
    this.wallFrames = frames;
    this.hitsToBreak = hitsToBreak;
    this.currentHits = 0;
    this.currentFrameIndex = 0;
    this.isBroken = false;
    this.hasBlackMask = hasBlackMask;

    // Flag to decide whether to draw the parent class’s tiled map under the breaking frames
    this.drawParentTiles = drawParentTiles;
  }

  /**
   * Called when this wall is hit by a bullet
   */
  onHitByBullet() {
    if (this.isBroken) return;

    this.currentHits++;
    const totalFrames = this.wallFrames.length; // e.g. 4 frames
    // Map [0, hitsToBreak] to [0, totalFrames - 1]
    let stage = floor(
      map(this.currentHits, 0, this.hitsToBreak, 0, totalFrames)
    );
    stage = constrain(stage, 0, totalFrames - 1);
    this.currentFrameIndex = stage;

    // Mark as broken once hit threshold is reached or exceeded
    if (this.currentHits >= this.hitsToBreak) {
      this.isBroken = true;
    }
  }

  /**
   * Draw the breakable wall (renders the current break frame)
   */
  display() {
    if (this.isBroken) return;

    // Optionally draw a black mask behind the wall
    if (this.hasBlackMask) {
      fill(0);
      noStroke();
      rect(this.x, this.y, this.w, this.h);
    }

    const currentImg = this.wallFrames[this.currentFrameIndex];
    const columns = Math.ceil(this.w / 50);
    const rows    = Math.ceil(this.h / 50);

    // Tile the current break frame across the wall area
    for (let col = 0; col < columns; col++) {
      for (let row = 0; row < rows; row++) {
        const drawX = this.x + col * 50;
        const drawY = this.y + row * 50;

        // Clip if wall dimensions aren't exact multiples of 50
        const remainingW = this.x + this.w - drawX;
        const remainingH = this.y + this.h - drawY;
        const drawW = min(50, remainingW);
        const drawH = min(50, remainingH);

        image(currentImg, drawX, drawY, drawW, drawH);
      }
    }
  }
}
