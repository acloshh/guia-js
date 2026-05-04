const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

const jugador = {
 nombre: "Luna",
 puntaje: 1500
};

localStorage.setItem("jugador", JSON.stringify(jugador));

const jugadorGuardado = JSON.parse(localStorage.getItem("jugador"));

console.log("Jugador guardado:", jugadorGuardado);
  

