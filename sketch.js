var start = 0;
var n = 0;
var s = 0;
var y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  var inc = map(mouseY,0, height,0. ,10);
  background(51);
  stroke(255);
  noFill();
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x++){
    stroke(255);
    var n = map(noise(xoff), 0, 1, -5, 5);
    var s = map(sin(xoff), -1, 1, 0, height);
    var y = s + n;
    vertex(x, y);

    xoff += inc;
  }
  endShape();

start += inc * map(mouseX,0, width,1. , 1.002);

}
