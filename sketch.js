/*
 * @name Geometries
 * @description There are six 3D primitives in p5 now.
 */

var tono = 174;
var velTono = 0.5;
var ancho = 0;
var velAncho = 0.7;
var largo = 0;
var velLargo = 1.2;

function setup() {
  createCanvas(1200, 600, WEBGL);
  colorMode(HSB);
}

function draw() {

  tono = tono + velTono;


  if (tono > 321.) {
    velTono = -0.5;
  }
  if (tono < 174.) {
    velTono = 0.5;
  }

  ancho = ancho + velAncho;

  if (ancho > 360.) {
    velAncho = -0.7;
  }
  if (ancho < 0.) {
    velAncho = 0.7;
  }

  largo = largo + velLargo;

  if (largo > 50.) {
    velLargo = -1.2;
  }
  if (largo < 0.) {
    velLargo = 1.2;
  }

  background(tono, 33, 177);

  translate(-250 * 2.5, 0, 0);
  normalMaterial();
  push();
  rotateZ(frameCount * 0.001);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  plane(map(-ancho, 0., 360., 50., 100.));
  pop();
  translate(125 + tono / 5, 0, 0);
  push();
  rotateZ(frameCount * 0.001);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  box(ancho, 80, 80);
  pop();
  translate(125 + tono / 4, 0, 0);
  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  cylinder(80, 40 + largo);
  pop();
  translate(125 + tono / 3, 0, 0);
  push();
  rotateZ(frameCount * 0.001);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  cone(random(40, 80), 80);
  pop();
  translate(125 + tono / 2, 0, 0);
  push();
  rotateZ(frameCount * 0.001);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  torus(80, 20);
  pop();
  translate(25 + tono, 0, 0);
  push();
  rotateZ(frameCount * 0.001);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  sphere(tono/2);
  pop();
}
