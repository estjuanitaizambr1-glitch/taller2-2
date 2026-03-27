// Obtener canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// Puntos iniciales
let points = [
  { x: 50, y: 300 },
  { x: 150, y: 50 },
  { x: 350, y: 50 },
  { x: 450, y: 300 }
];
// Punto que se está arrastrando
let draggingPoint = null;
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Líneas de control
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  ctx.lineTo(points[1].x, points[1].y);
  ctx.lineTo(points[2].x, points[2].y);
  ctx.lineTo(points[3].x, points[3].y);
  ctx.strokeStyle = "#aaa";
  ctx.stroke();

  // Curva Bézier
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  ctx.bezierCurveTo(
    points[1].x, points[1].y,
    points[2].x, points[2].y,
    points[3].x, points[3].y
  );
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Dibujar puntos
  points.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
  });
}