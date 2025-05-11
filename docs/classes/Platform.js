class Platform {
  constructor(x, y, w, h, isActive = true) {
    this.x = x;
    this.y = y;
    this.w = w;            // Still a multiple of 50
    this.h = h;
    this.isActive = isActive;  // Whether the platform is active

    // Assume each platform tile is 50 pixels in size
    this.blockSize = 50;

    // columns and rows determine how many tiles to fill
    this.columns = Math.ceil(this.w / this.blockSize);
    this.rows    = Math.ceil(this.h / this.blockSize);

    // Generate a 2D array to record which tile image to use for each cell
    this.tileMap = [];
    for (let col = 0; col < this.columns; col++) {
      this.tileMap[col] = [];
      for (let row = 0; row < this.rows; row++) {
        // Randomly select a tile image index
        let index = floor(random(tileImages.length));
        this.tileMap[col][row] = index;
      }
    }

    // Create an array to store this platform's decorations
    this.decorations = [];
  }

  /**
   * Add a decoration to this platform
   * @param {number} offsetX  X offset relative to the platform's top-left corner
   * @param {number} offsetY  Y offset relative to the platform's top-left corner
   * @param {p5.Image} decorImg  The decoration image to draw
   */
  addDecoration(offsetX, offsetY, decorImg) {
    this.decorations.push({ offsetX, offsetY, img: decorImg });
  }

  display() {
    if (!this.isActive) return; // If not active, skip drawing

    // First draw the platform itself (tile the tileMap)
    for (let col = 0; col < this.columns; col++) {
      for (let row = 0; row < this.rows; row++) {
        let tileIndex = this.tileMap[col][row];
        let img = tileImages[tileIndex];  // Select the corresponding tile image

        // Calculate pixel coordinates
        let drawX = this.x + col * this.blockSize;
        let drawY = this.y + row * this.blockSize;

        // If the platform size isn't an exact multiple of 50,
        // the last column/row needs clipping or stretching
        let remainingW = this.w - col * this.blockSize;
        let remainingH = this.h - row * this.blockSize;
        let drawW = min(this.blockSize, remainingW);
        let drawH = min(this.blockSize, remainingH);

        // Draw the platform tile
        image(img, drawX, drawY, drawW, drawH);
      }
    }

    // Draw decorations
    // Here offsetX and offsetY are relative to the platform's top-left corner
    for (let deco of this.decorations) {
      let decoX = this.x + deco.offsetX;
      let decoY = this.y + deco.offsetY;
      image(deco.img, decoX, decoY);
    }
  }
}
