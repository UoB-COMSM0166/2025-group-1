// **故事碎片类**
class StoryFragment {
  constructor(x, y, text) {
    this.x = x;
    this.y = y;
    this.size = 20;
    this.text = text;
  }

  show() {
    
      fill(255, 150, 0);
      rect(this.x, this.y, this.size, this.size);
    
  }
}
