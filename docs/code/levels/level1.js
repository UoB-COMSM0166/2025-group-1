function initLevel1() {
    // 初始关卡配置（原initializeGame内容）
    // ---------- 外围墙壁 ----------
    platforms.push(new Platform(0, 0, width, blockSize));                  // 顶部墙壁
    platforms.push(new Platform(0, height - blockSize, width, blockSize)); // 底部墙壁
    platforms.push(new Platform(0, 0, blockSize, height));                 // 左侧墙壁
    platforms.push(new Platform(width - blockSize, 0, blockSize, height)); // 右侧墙壁

// ---------- 各种平台和墙壁 ----------
    platforms.push(new Platform(300, 50, blockSize * 2, blockSize * 1));  // 平台
    platforms.push(new Platform(300, 100, blockSize, blockSize * 2));      // 竖直墙
    platforms.push(new Platform(150, 150, blockSize * 3, blockSize * 1));  // 平台

// ---------- 左上角平台 ----------
    platforms.push(new Platform(200, 400, blockSize * 3, blockSize * 1));  // 平台
    platforms.push(new Platform(200, 300, blockSize, blockSize * 2));      // 竖直墙
    platforms.push(new Platform(50, 400, blockSize * 5, blockSize));       // 横向平台
    platforms.push(new Platform(300, 200, blockSize * 2, blockSize));      // 伸出的犄角
    platforms.push(new Platform(50, 250, blockSize, blockSize));           // 左侧墙体伸出的犄角

// ---------- 中央区域 ----------
    platforms.push(new Platform(600, 150, blockSize * 4, blockSize));      // 上方平台
    platforms.push(new Platform(550, 150, blockSize, blockSize * 4));      // 垂直墙
    platforms.push(new Platform(400, 300, blockSize * 9, blockSize));      // 中间平台
    platforms.push(new Platform(550, 500, blockSize, blockSize * 2));      // 垂直墙
    platforms.push(new Platform(800, 600, blockSize * 5, blockSize));      // 上方平台
    platforms.push(new Platform(550, 500, blockSize, blockSize * 2));      // 垂直墙
    platforms.push(new Platform(1000, 300, blockSize * 2, blockSize));     // 上方平台
    platforms.push(new Platform(450, 450, blockSize * 10, blockSize));     // 中心大平台
    platforms.push(new Platform(750, 600, blockSize, blockSize * 5));      // 中央竖墙
    platforms.push(new Platform(550, 700, blockSize * 5, blockSize));      // 中间平台

// ---------- 右侧区域 ----------
    platforms.push(new Platform(1250, 50, blockSize * 1, blockSize * 9));   // 右上平台
    platforms.push(new Platform(1100, 450, blockSize * 3, blockSize));     // 横向墙
    platforms.push(new Platform(1450, 150, blockSize * 3, blockSize));     // 横向墙1（由上往下）
    platforms.push(new Platform(1350, 300, blockSize * 3, blockSize));     // 横向墙2（由上往下）
    platforms.push(new Platform(1300, 400, blockSize * 3, blockSize * 1)); // 中等平台

// ---------- 右下区域 ----------
    platforms.push(new Platform(1200, 650, blockSize * 4, blockSize));     // 右下平台
    platforms.push(new Platform(1400, 550, blockSize * 2, blockSize));     // 右下高处平台
    platforms.push(new Platform(1500, 550, blockSize * 1, blockSize));     // 高墙
    platforms.push(new Platform(1500, 550, blockSize * 1, blockSize));     // 高墙
    platforms.push(new Platform(1500, 600, blockSize * 2, blockSize));     // 高墙
    platforms.push(new Platform(1200, 750, blockSize * 3, blockSize));     // 右下小平台
    platforms.push(new Platform(1450, 750, blockSize * 2, blockSize));     // 右下高平台

// ---------- 右下偏左区域 ----------
    platforms.push(new Platform(1200, 700, blockSize, blockSize));         // 小竖墙
    platforms.push(new Platform(950, 700, blockSize * 3, blockSize));     // 小平台
    platforms.push(new Platform(950, 700, blockSize, blockSize * 3));     // 小左竖墙
    platforms.push(new Platform(850, 750, blockSize * 2, blockSize));     // 小平台

// ---------- 左下区域 ----------
    platforms.push(new Platform(200, 700, blockSize * 2, blockSize));     // 左下部平台
    platforms.push(new Platform(100, 550, blockSize * 6, blockSize));     // 左下横墙
    platforms.push(new Platform(150, 700, blockSize, blockSize * 3));     // 左竖墙
    platforms.push(new Platform(350, 750, blockSize * 2, blockSize));     // 左下靠右侧平台
    platforms.push(new Platform(50, 700, blockSize, blockSize));          // 左下侧中间墙
    platforms.push(new Platform(300, 500, blockSize, blockSize * 3));     // 左竖墙


    enemies.push(new Enemy(platforms[8]));
    enemies.push(new RangedEnemy(platforms[14]))
    enemies.push(new SpiderEnemy(platforms[10]));
    // ...其他敌人配置...

    
    // 添加多个故事碎片
  storyFragments.push(new StoryFragment(150, 100, "这里曾发生一场大战..."));
  storyFragments.push(new StoryFragment(400, 250, "一个古老的石碑上刻着奇怪的文字。"));
  storyFragments.push(new StoryFragment(250, 350, "你发现了一本破旧的书籍..."));

    // 添加传送区域可视化
    platforms.push(new Platform(1550, 800, 50, 50));
}