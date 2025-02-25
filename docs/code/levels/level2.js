function initLevel2() {

        // =========== 外围墙壁 ===========
        platforms.push(new Platform(0, 0, width, blockSize));                  // 顶部墙壁
        platforms.push(new Platform(0, height - blockSize, width, blockSize)); // 底部墙壁
        platforms.push(new Platform(0, 0, blockSize, height));                 // 左侧墙壁
        platforms.push(new Platform(width - blockSize, 0, blockSize, height)); // 右侧墙壁

        // =========== 主要平台结构 ===========
        platforms.push(new Platform(300, 50, blockSize * 2, blockSize));       // 横向平台
        platforms.push(new Platform(300, 100, blockSize, blockSize * 2));      // 竖直墙体
        platforms.push(new Platform(150, 150, blockSize * 3, blockSize));      // 基础平台

        // =========== 左上区域 ===========
        platforms.push(new Platform(150, 300, blockSize * 3, blockSize));      // L型平台
        platforms.push(new Platform(200, 300, blockSize, blockSize * 3));      // 垂直支撑
        platforms.push(new Platform(100, 400, blockSize * 7, blockSize));      // 长平台
        platforms.push(new Platform(400, 350, blockSize, blockSize * 2));      // 悬浮立柱





    // 第二关特殊敌人配置
    enemies.push(new BossEnemy(width/2, height/4));

    // 第二关传送门（可循环或结束）
    fill(0, 255, 0);
    platforms.push(new Platform(100, 800, 50, 50));
}