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