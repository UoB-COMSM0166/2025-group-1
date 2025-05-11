// Game state
let gameOver = false;
let isInvincible = false;
let invincibleTimer = 0;
let isPaused = false;
let showSettings = false;
let hovered = -1;
let highContrast = false;
let bossPlatformAdded = false;
let brightnessSlider, volumeSlider;
let accessibilityCtrl;

// Red overlay effect when taking damage
let redOverlayFlashes = 0;     // Counter for remaining flash cycles
let redOverlayTimer = 0;       // Timer for individual flash duration
let isRedVisible = false;      // Whether the red overlay is currently visible

// Game object pools
let platforms = [];
let tileImages = [];
let enemies = [];
let bullets = [];
let enemyBullets = [];
let traps = [];
let overlayPhase = 0; // Incremented in draw() to create a "breathing" effect

let storyFragments = []; // Array storing story fragments
let breakableWallFrames = [];
let activeStory = "";    // Currently displayed story text

// Game parameters
const LIGHT_RADIUS = 200;
const DARKNESS_OPACITY = 1;
let playerHealth = 3;
let blockSize = 50;


// Ending animation frames
let endImage1, endImage2, endImage3, endImage4, endImage5, endImage6;
// Index of the current ending frame (0–5)
let currentEndingImage = 0;

// New game reset function
function resetGame() {
  player.velocityX = 0;
  player.velocityY = 0;
  player.isOnGround = false;
  initializeGame();
}
