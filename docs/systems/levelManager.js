let currentLevel = 0;
const totalLevels = 2; // 总关卡数

function checkLevelTransition() {
    // 定义传送区域（示例坐标，可根据需要修改）
    const portal = {x: 1550, y: 800, w: 50, h: 50};

    if (player.x > portal.x && player.x < portal.x + portal.w &&
        player.y > portal.y && player.y < portal.y + portal.h) {
        if (currentLevel < totalLevels-1) {
            currentLevel++;
            loadLevel(currentLevel);
        }
    }
}

function loadLevel(levelNumber) {
    // 清除所有游戏对象
    platforms = [];
    enemies = [];
    bullets = [];
    enemyBullets = [];
    storyFragments = [];

    // 根据关卡号调用对应初始化函数
    switch(levelNumber) {
        case 0:
            initLevel1();
            break;
        case 1:
            initLevel2();
            break;
    }

    // 重置玩家位置
    player = new Player(225, 70, animations);
}