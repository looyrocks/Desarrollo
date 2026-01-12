let circleX = 200;
let circleY = 150;
let circleRadius = 75;

let graphX = 50;
let graphY = 300;
let graphAmplitude = 50;
let graphPeriod = 300;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  describe(
    'Demostración animada de un punto que se mueve alrededor del círculo unitario.'
  );
}

function draw() {
  background(0);

  // Establezca el ángulo en función de frameCount y muestre el valor actual

  /*
  frameCount
en p5.js es una variable incorporada que cuenta cuántos fotogramas (frames) 
se han dibujado desde que el programa comenzó, aumentando en uno
 con cada ciclo del bucle draw(), y es fundamental para crear animaciones 
 y controlar el tiempo, permitiendo acciones periódicas 
 (como cada 100 frames usando el operador módulo %) o movimiento continuo
*/

  let angle = frameCount % 360;

  fill(255);
  textSize(20);
  textAlign(LEFT, CENTER);
  text(`angle: ${angle}`, 25, 25);

  // Dibujar círculo y radios

  noFill();
  stroke(128);
  strokeWeight(3);
  circle(circleX, circleY, 2 * circleRadius);
  line(circleX, circleY - circleRadius, circleX, circleY + circleRadius);
  line(circleX - circleRadius, circleY, circleX + circleRadius, circleY);

  // Draw moving points

  let pointX = circleX + circleRadius * cos(angle);
  let pointY = circleY - circleRadius * sin(angle);

  line(circleX, circleY, pointX, pointY);

  noStroke();

  fill('white');
  circle(pointX, pointY, 10);

  fill('orange');
  circle(pointX, circleY, 10);

  fill('red');
  circle(circleX, pointY, 10);
}