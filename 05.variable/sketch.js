let x = 300, y = 200, c = 0, d = 100;
let O = 0.0
function setup() {
 createCanvas(700, 400);
}
function draw() {
   background(0);
   stroke(255, 255, 0);
   strokeWeight(5);
//   line(0, y+d/2, 700, y+d/2);
//   fill(c, 0, 0);
 
 let x = map(sin(O), -1, 1, 50, 550)
 ellipse(mouseX, y, d, d);
 ellipse(mouseX+d, y, d, d);
 noFill();
 triangle(mouseX, y, mouseX+d/2, y-d, mouseX+d, y);
 
 
 O += 0.05

}
