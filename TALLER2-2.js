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
// Evento mouse down
canvas.addEventListener("mousedown", e => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  points.forEach(p => {
    if (Math.hypot(p.x - x, p.y - y) < 10) {
      draggingPoint = p;
    }
  });
});

// Evento mouse move
canvas.addEventListener("mousemove", e => {
  if (draggingPoint) {
    const rect = canvas.getBoundingClientRect();
    draggingPoint.x = e.clientX - rect.left;
    draggingPoint.y = e.clientY - rect.top;
    draw();
  }
});

// Evento mouse up
canvas.addEventListener("mouseup", () => draggingPoint = null);
canvas.addEventListener("mouseleave", () => draggingPoint = null);

// Dibujar al cargar
draw();