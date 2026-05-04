const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

const jugador = {
 nombre: "Luna",
 vida: 100,
 energia: 80,
 nivel: 1,
 inventario: ["espada", "poción"]
};

console.log("Jugador:", jugador,);
console.log("inventario:", jugador.inventario);