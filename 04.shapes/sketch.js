function setup() {
  createCanvas(300, 300);
  background(200);
  

  push();
  strokeWeight(5);
  stroke(255,0,0);
  //noStroke();
  point(150, 120);
  pop();
  point(150, 180);
  line(0, 0, 300, 300);
  line(300, 0, 0, 300);
}

