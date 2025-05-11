// Level management variables
let currentLevel = 0;
const totalLevels = 4; // Total number of levels

// Check if the player has reached the level portal and transition 
function checkLevelTransition() {
    // Define the portal area (example coordinates, adjust as needed)
    const portal = { x: 1550, y: 800, w: 50, h: 50 };

    if (
        player.x > portal.x && player.x < portal.x + portal.w &&
        player.y > portal.y && player.y < portal.y + portal.h
    ) {
        if (currentLevel < totalLevels - 1) {
            currentLevel++;
            loadLevel(currentLevel);
            // Reset player health
            playerHealth = 3;
        }
    }
}

// Load and initialize a specific level by its number
function loadLevel(levelNumber) {
    // Clear all game object arrays
    platforms = [];
    enemies = [];
    bullets = [];
    enemyBullets = [];
    storyFragments = [];
    traps = [];

    // Call the initialization function corresponding to the level number
    switch (levelNumber) {
        case 0:
            initLevel1();
            break;
        case 1:
            initLevel2();
            break;
        case 2:
            initLevel3();
            break;
        case 3:
            initLevel4();
            break;
    }

    // Reset player position
    player = new Player(225, 70, animations);

    // Initialize the level's portal
    initPortal();
}
