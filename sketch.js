var start = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  var inc = map(mouseY,0, height,0. ,5.);
  background(51);
  stroke(255);
  noFill();
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x++){
    stroke(255);
 
    var y = sin(xoff) * height;
    vertex(x, y);

    xoff += inc;
  }
  endShape();

start += inc * map(mouseX,0, width,1 , 10);

}
