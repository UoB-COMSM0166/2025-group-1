function setup() {
  createCanvas(900, 900);
  background(240, 210, 200);
  textSize(20);
  fill(0);
  text("Click to draw a picture. Press 'C' to clear, 'S' to save.", 10, 50);
}

function draw() {
  if (mouseIsPressed) {
    strokeWeight(10);
    stroke(random(255), random(255), random(255), 100);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function keyPressed() {
  if (key === 'c' || key === 'C') {
    background(240, 210, 200);
    noStroke();
    fill(0);
    text("Click to draw a picture. Press 'C' to clear, 'S' to save.", 10, 50);
  }
  if (key === 's' || key === 'S') {
    saveCanvas('myDrawing', 'png');
  }
}
