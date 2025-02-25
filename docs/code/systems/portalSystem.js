// 传送门系统（独立模块）
class Portal {
    constructor(x, y, w = 50, h = 50) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.particleTimer = 0;
    }

    // 独立绘制逻辑
    display() {
        // 半透明绿色矩形
        fill(0, 200, 0, 150);
        noStroke();
        rect(this.x, this.y, this.w, this.h);

        // 动态粒子效果
        if (frameCount % 6 === 0) {
            this.particleTimer++;
            fill(200, 255, 200, 180);
            ellipse(
                this.x + random(this.w),
                this.y + random(this.h),
                random(3, 6)
            );
        }

        // 文字提示
        fill(255);
        textSize(16);
        textAlign(CENTER, CENTER);
        text("下一关", this.x + this.w/2, this.y + this.h/2);
    }

    // 碰撞检测
    checkCollision() {
        return (
            player.x > this.x &&
            player.x < this.x + this.w &&
            player.y > this.y &&
            player.y < this.y + this.h
        );
    }
}

// 关卡传送门配置（坐标可扩展）
const portalConfig = {
    0: { x: 1450, y: 800 }, // 第一关
    1: { x: 100, y: 800 }   // 第二关
};

let currentPortal = null;

// 初始化传送门（在关卡加载后调用）
function initPortal() {
    const config = portalConfig[currentLevel];
    if (config) {
        currentPortal = new Portal(config.x, config.y);
    }
}

// 检测传送（在draw循环中调用）
function checkPortalTransition() {
    if (currentPortal && currentPortal.checkCollision()) {
        if (currentLevel < Object.keys(portalConfig).length - 1) {
            currentLevel++;
            loadLevel(currentLevel); // 使用已有关卡加载函数
            initPortal(); // 初始化新关卡传送门
        }
    }
}