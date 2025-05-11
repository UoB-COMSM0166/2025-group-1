function initializeGame() {

  platforms = [];
  enemies = [];
  bullets = [];
  enemyBullets = [];
  storyFragments = [];
  activeStory = "";

  isInvincible = false;
  invincibleTimer = 0;
  gameOver = false;
  isDead = false;

  
  playerHealth = 3;
  isPaused = false;
  showSettings = false;
  hovered = -1;
  highContrast = false;

  // Initialize the current level
  loadLevel(currentLevel); // Retrieve the current level number from levelManager

}