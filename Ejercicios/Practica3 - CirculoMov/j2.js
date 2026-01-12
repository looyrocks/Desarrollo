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

  //Dibujar ángulo
  stroke(0, 204, 0);
  noFill();
  arc(circleX, circleY, 50, 50, -angle, 0);

  // Dibujar círculo y radios

  noFill();
  stroke(128);
  strokeWeight(3);
  circle(circleX, circleY, 2 * circleRadius);
  line(circleX, circleY - circleRadius, circleX, circleY + circleRadius);
  line(circleX - circleRadius, circleY, circleX + circleRadius, circleY);

  // Dibujar puntos que se mueven

  let pointX = circleX + circleRadius * cos(angle);
  let pointY = circleY - circleRadius * sin(angle);

  line(circleX, circleY, pointX, pointY);

  noStroke();

//eje x - se mantiene x, varia y en funcion del coseno del ángulo
  fill('orange');
  circle(pointX, circleY, 5);
  textSize(10);
  //text(`  coseno: ${nf(cos(angle),1,3)}`, pointX, circleY-5);

//eje x - se mantiene y, varia x en funcion del seno del ángulo
  fill('red');
  circle(circleX, pointY, 5);
  textSize(10);
  //text(`  seno: ${nf(sin(angle),1,3)}`, circleX, pointY);

  //circunferencia, varía x en funcion  del seno, x en variación del coseno
  fill('white');
  circle(pointX, pointY, 10);
  
}