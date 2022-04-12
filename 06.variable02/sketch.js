let theta = 0.0, r = 150.0;
function setup() {
  createCanvas(300, 300);
  background(0);
}

function draw() {
  r -= 0.1;
  let x = width/2 + r * cos(theta) * cos(theta) * cos(theta);
  let y = height/2 + r * sin(theta) * sin(theta)* sin(theta);
  ellipse(x, y, 30, 30);
  theta += 0.05
  r %= 150.1
}