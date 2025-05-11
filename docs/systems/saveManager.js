// Save game state to localStorage
function saveGame() {
  if (!player) {
    console.warn("⛔ Cannot save game: player is not initialized!");
    return;
  }

  
  const data = {
    x: player.x,
    y: player.y,
    level: currentLevel,
    health: playerHealth,
    settings: { ...settings },
    story: currentStoryImage
  };
  localStorage.setItem("saveData", JSON.stringify(data));
  console.log("✅ Game saved.");
}

// Load game state from localStorage
function loadGame() {
  const data = JSON.parse(localStorage.getItem("saveData"));
  if (!data) {
    alert("No saved game found!");
    return;
  }

  player.x = data.x;
  player.y = data.y;
  currentLevel = data.level;
  playerHealth = data.health;
  currentStoryImage = data.story || 0;

  settings = { ...settings, ...data.settings };

  gameState = 'game';
  menuState = 'story';
  loop();
  console.log("✅ Game loaded.");
}

// Clear saved game progress (for NEW GAME)
function clearSavedGame() {
  localStorage.removeItem("saveData");
  console.log("🧹 Saved game cleared.");
}

// Auto-save (recommended to call when switching levels or exiting)
function autoSaveOnPortal() {
  saveGame();
}

// Call before exiting the game or in the pause menu 
function saveBeforeExit() {
  saveGame();
}
