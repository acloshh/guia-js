const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

const jugador = {
 nombre: "Kai",
 nivel: 1,
 monedas: 0
};
console.log("El jugador " + jugador.nombre + " ha comenzado el juego con nivel " + jugador.nivel + " y " + jugador.monedas + " monedas.");
console.log("El nivel del jugador aumenta: " + (jugador.nivel = jugador.nivel + 1));
console.log("El jugador gana monedas: " + (jugador.monedas = jugador.monedas + 50));
console.log("El jugador " + jugador.nombre + " ahora tiene nivel " + jugador.nivel + " y " + jugador.monedas + " monedas.");