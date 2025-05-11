// **Story Fragment Class**
class StoryFragment {
  constructor(x, y, text) {
    this.x = x;
    this.y = y;
    this.size = 20;
    this.text = text;
  }

  show() {
    image(fragmentImg, this.x, this.y, this.size, this.size);
  }
}


// **Draw Story UI Scene**
function drawStoryScene() {
  background(30);

  // **Draw notebook background**
  let bookWidth = width * 0.8;
  let bookHeight = bookWidth * (storyBookImage.height / storyBookImage.width);
  let bookX = (width - bookWidth) / 2;
  let bookY = (height - bookHeight) / 2;
  image(storyBookImage, bookX, bookY, bookWidth, bookHeight);

  // **Display story text**
  if (activeStory) {
    fill(50);               // text color
    textSize(22);
    textAlign(LEFT, TOP);   // align text from top-left
    
    let textX = bookX + bookWidth * 0.1;
    let textY = bookY + bookHeight * 0.2;
    let textWidth = bookWidth * 0.4; // limit text width

    // auto wrap text
    text(activeStory.text, textX, textY, textWidth);
  }

  // **Exit prompt**
  fill(200);
  textSize(16);
  text(" E exit", width - 100, height - 50);
}

// **Mouse click triggers story UI**
function mousePressed() {
  let clickedStory = getHoveredStory();
  if (clickedStory) {
    activeStory = clickedStory;
    gameState = "story"; // enter story mode
  }
}

// **Key press exits UI**
function keyPressed() {
  if (key === 'E' || key === 'e') {
    if (gameState === "story") {
      gameState = "game"; // return to game screen
    }
  }
}

// **Check if mouse is hovering**
function getHoveredStory() {
  for (let fragment of storyFragments) {
    let d = dist(
      mouseX, 
      mouseY, 
      fragment.x + fragment.size / 2, 
      fragment.y + fragment.size / 2
    );
    if (d < fragment.size / 2 + 10) {
      return fragment;
    }
  }
  return null;
}
