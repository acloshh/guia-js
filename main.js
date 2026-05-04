const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

const vidaTotal = personajes.reduce((acumulador, personaje) => {
 return acumulador + personaje.vida;
}, 0);

console.log(vidaTotal);