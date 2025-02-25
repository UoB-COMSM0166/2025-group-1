
class Platform {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  // 绘制块的方法
  display() {
    let blockSize = 50; // 每个体块的大小
    fill(128, 0, 128);  // 紫色墙壁填充颜色
    stroke(0);          // 黑色分隔线
    strokeWeight(2);    // 分隔线粗细

    // 绘制墙壁块（分成小块）
    for (let i = 0; i < this.w; i += blockSize) {
      for (let j = 0; j < this.h; j += blockSize) {
        rect(this.x + i, this.y + j, blockSize, blockSize);
      }
    }
  }
}
