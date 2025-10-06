function setup() {
  createCanvas(400, 400);
  background(0, 0, 200); 
}

function draw() {
  background(220);
  circle(width/2, 50, 50);
  fill(255, 0, 0)
  circle(60, mouseX, 50);
  fill(0, 255, 0)
  circle(70, 50, 50);
  fill(0, 0, 255)
  circle(80, 50, 50);
    ellipse(50, 200, 80, 40);
 
    stroke(20, 200, 200);  // r, g, b 
strokeWeight(10);      // Width of stroke
fill(200, 20, 200);

  rect(200, 200, 100, 50, 5, 50)

}
