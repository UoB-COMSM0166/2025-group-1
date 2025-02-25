// 游戏状态
let gameOver = false;
let isInvincible = false;
let invincibleTimer = 0;
let isPaused = false;
let showSettings = false;
let hovered = -1;
let highContrast = false;
let brightnessSlider, volumeSlider;
  




  // 游戏对象池
let platforms = [];
let enemies = [];
let bullets = [];
let enemyBullets = [];

let storyFragments = []; // 存储故事碎片的数组
let activeStory = ""; // 当前显示的故事文本

// 游戏参数
const LIGHT_RADIUS = 200;
const DARKNESS_OPACITY = 1;
let playerHealth = 3;
let blockSize = 50;



// 新增游戏重置函数
function resetGame() {
player.velocityX = 0;
  player.velocityY = 0;
  player.isOnGround = false;
  initializeGame();
}