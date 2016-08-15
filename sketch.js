var start = 0;
var n = 0;
var s = 0;
var y = 0;
var tono = 174;
var velTono = 0.5;
var status;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  status = 0;
}

function draw() {
  background(0, 0, 15); //51
  noFill();
  if (status == 0) screen0();
  if (status == 1) screen1();
  if (status == 2) screen2();
  if (status == 3) screen3();
  if (status == 4) screen4();
  if (status == 5) screen5();
  if (status == 6) screen6();
  if (status == 7) screen7();
  if (status == 8) screen8();
}

function mousePressed() {
  status++
  if (status > 8) status = 0;
  println(status);
}

function screen0() {
  var inc = map(mouseY, 0, height, 0., 10);
  background(0, 0, 15); //51
  tono = tono + velTono;
  if (tono > 321.) {
    velTono = -0.5;
  }
  if (tono < 174.) {
    velTono = 0.5;
  }
  noFill();
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x++) {
    stroke(tono, 33, 177)
    var n = map(noise(xoff), 0, 1, -5, 5);
    var s = map(sin(xoff), -1, 1, 0, height);
    var y = s + n;
    point(x, y, 5, 5);
    xoff += inc;
  }
  endShape();
  start += inc * map(mouseX, 0, width, -0.005, 0.005);
}

function screen1() {
  var inc = map(mouseY, 0, height, 0., 10);
  background(0, 0, 15); //51
  tono = tono + velTono;
  if (tono > 321.) {
    velTono = -0.5;
  }
  if (tono < 174.) {
    velTono = 0.5;
  }
  noFill();
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x++) {
    stroke(tono, 33, 177)
    var n = map(noise(xoff), 0, 1, -5, 5);
    var s = map(sin(xoff), -1, 1, 0, height);
    var y = s + n;
    ellipse(x, y, 5, 5);
    xoff += inc;
  }
  endShape();
  start += inc * map(mouseX, 0, width, -0.005, 0.005);
}

function screen2() {
  var inc = map(mouseY, 0, height, 0., 10);
  background(0, 0, 15); //51
  tono = tono + velTono;
  if (tono > 321.) {
    velTono = -0.5;
  }
  if (tono < 174.) {
    velTono = 0.5;
  }
  noFill();
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x++) {
    stroke(tono, 33, 177)
    var n = map(noise(xoff), 0, 1, -5, 5);
    var s = map(sin(xoff), -1, 1, 0, height);
    var y = s + n;
    triangle(x, y, x + 10, y, x + 5, y - 10);
    xoff += inc;
  }
  endShape();
  start += inc * map(mouseX, 0, width, -0.005, 0.005);
}

function screen3() {
  var inc = map(mouseY, 0, height, 0., 10);
  background(0, 0, 15); //51
  tono = tono + velTono;
  if (tono > 321.) {
    velTono = -0.5;
  }
  if (tono < 174.) {
    velTono = 0.5;
  }
  noFill();
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x++) {
    stroke(tono, 33, 177)
    var n = map(noise(xoff), 0, 1, -5, 5);
    var s = map(sin(xoff), -1, 1, 0, height);
    var y = s + n;
    arc(x, y, 10, 10, PI, TWO_PI);
    xoff += inc;
  }
  endShape();
  start += inc * map(mouseX, 0, width, -0.005, 0.005);
}

function screen4() {
  var inc = map(mouseY, 0, height, 0., 10);
  background(0, 0, 15); //51
  tono = tono + velTono;
  if (tono > 321.) {
    velTono = -0.5;
  }
  if (tono < 174.) {
    velTono = 0.5;
  }
  noFill();
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x++) {
    stroke(tono, 33, 177)
    var n = map(noise(xoff), 0, 1, -5, 5);
    var s = map(sin(xoff), -1, 1, 0, height);
    var y = s + n;
    rect(x, y, 10, 10);
    xoff += inc;
  }
  endShape();
  start += inc * map(mouseX, 0, width, -0.005, 0.005);
}

function screen5() {
  var inc = map(mouseY, 0, height, 0., 10);
  background(0, 0, 15); //51
  tono = tono + velTono;
  if (tono > 321.) {
    velTono = -0.5;
  }
  if (tono < 174.) {
    velTono = 0.5;
  }
  noFill();
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x++) {
    stroke(tono, 33, 177)
    var n = map(noise(xoff), 0, 1, -5, 5);
    var s = map(sin(xoff), -1, 1, 0, height);
    var y = s + n;
    arc(x, y, 10, 10, PI/map(mouseX,0 ,width,0 ,10), TWO_PI/map(mouseY, 0 , height, 0, 10));
    line(x, y, x + map(mouseX, 0, width, -33, 33), y + map(mouseY, 0, height, -33, 33));
    xoff += inc;
  }
  endShape();
  start += inc * map(mouseX, 0, width, -0.005, 0.005);
}

function screen6() {
  var inc = map(mouseY, 0, height, 0., 10);
  background(0, 0, 15); //51
  tono = tono + velTono;
  if (tono > 321.) {
    velTono = -0.5;
  }
  if (tono < 174.) {
    velTono = 0.5;
  }
  noFill();
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x++) {
    stroke(tono, 33, 177)
    var n = map(noise(xoff), 0, 1, -5, 5);
    var s = map(sin(xoff), -1, 1, 0, height);
    var y = s + n;
    vertex(x, y);
    xoff += inc;
  }
  endShape();
  start += inc * map(mouseX, 0, width, -0.005, 0.005);
}

function screen7() {
  var inc = map(mouseY, 0, height, 0., 10);
  background(0, 0, 15); //51
  tono = tono + velTono;
  if (tono > 321.) {
    velTono = -0.5;
  }
  if (tono < 174.) {
    velTono = 0.5;
  }
  noFill();
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x++) {
    stroke(tono, 33, 177)
    var n = map(noise(xoff), 0, 1, -5, 5);
    var s = map(sin(xoff), -1, 1, 0, height);
    var y = s + n;
    arc(x, y, 280, 280, PI, TWO_PI);
    xoff += inc;
  }
  endShape();
  start += inc * map(mouseX, 0, width, -0.005, 0.005);
}

function screen8() {
  var inc = map(mouseY, 0, height, 0., 10);
  background(0, 0, 15); //51
  tono = tono + velTono;
  if (tono > 321.) {
    velTono = -0.5;
  }
  if (tono < 174.) {
    velTono = 0.5;
  }
  noFill();
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x++) {
    stroke(tono, 33, 177)
    var n = map(noise(xoff), 0, 1, -5, 5);
    var s = map(sin(xoff), -1, 1, 0, height);
    var y = s + n;
    quad(x, y, x + 10, y, x + 10, y + 10, x, y * PI);
    xoff += inc;
  }
  endShape();
  start += inc * map(mouseX, 0, width, -0.005, 0.005);
}
