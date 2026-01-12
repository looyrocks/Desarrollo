let circleX = 200;
let circleY = 150;
let circleRadius = 75;

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


  


  fill(255);
  textSize(20);
  textAlign(LEFT, CENTER);

  // Dibujar circulo y diámetros

  noFill();
  stroke(128);
  strokeWeight(3);

  /*Un círculo es una forma redonda definida por los parámetros x, y, d. 
  x e y establecen la ubicación de su centro. 
  d establece su ancho y alto (diámetro). 
  Cada punto en el borde del círculo está a la misma distancia, 0,5 * d, de su centro. 
  0,5 * d (la mitad del diámetro) es el radio del círculo
  */
  circle(circleX, circleY, 2 * circleRadius);

  /*Line Dibuja una línea recta entre dos puntos.
El ancho predeterminado de una línea es un píxel. 
La versión de line() con cuatro parámetros dibuja la línea en 2D. 
Para colorear una línea, use la función stroke(). 
Para cambiar su ancho, use la función StrokeWeight(). 
Una línea no se puede rellenar, por lo que la función fill() no afectará el color de la línea.
*/

/*para el ejemplo
line (200, 150 - 75, 200, 150 + 75);
line (200-75, 150, 200+75, 150);
*/
  line(circleX, circleY - circleRadius, circleX, circleY + circleRadius);


  line(circleX - circleRadius, circleY, circleX + circleRadius, circleY);

 
}