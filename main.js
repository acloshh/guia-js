const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

const personajesFuertes = personajes.filter((personaje) => {
 return personaje.nivel>= 3;
});
console.log("Personajes con nivel 3 o superior:", personajesFuertes);