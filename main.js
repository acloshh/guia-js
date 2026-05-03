const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

let puntajeTotal = 0;

for (let ronda = 1; ronda <= 5; ronda++) {
  puntajeTotal += 10;
}

console.log("Puntaje total después de 5 rondas: " + puntajeTotal);