const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

const personajeEncontrado = personajes.find((personaje) => {
 return personaje.nombre == "Kai";
});

console.log(personajeEncontrado);