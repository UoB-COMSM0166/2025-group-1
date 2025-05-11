class AccessibilityController {
    constructor(player) {
      // Pass in the Player object
      this.player = player;
      // Enabling Accessibility Mode
      this.isActive = false;
      // Automatic gun rotation
      this.autoRotateGun = false;
      // Rotation angle of the gun (0~360 degrees)
      this.gunAngle = 0;
      // Rotation speed
      this.rotationSpeed = 3;
    }
  
    // Called every frame to keep the gun angle rotating
    update() {
      if (this.isActive && this.autoRotateGun) {
        this.gunAngle += this.rotationSpeed;
        this.gunAngle %= 360;
      }
    }
  
    // Handles key presses (SHIFT and space only)
    handleKeyPressed(k) {
      if (!this.isActive) return;

      console.log("Accessibility pressed:", k, "keyCode:", keyCode);
  
      // Handling of SHIFT (determined by keyCode)
      if (keyCode === 16) {
        this.autoRotateGun = !this.autoRotateGun;
        console.log("Shift pressed, autoRotateGun:", this.autoRotateGun);
      }
  
      // Handling spaces
      if (keyCode === 32 || k === ' ') {
        console.log("Space pressed, player.shoot() called.");
        this.player.shoot();
      }
    }
  
    
    handleKeyReleased(k) {
      // This is not handled here, the move is handled by the main function
    }
  }
  