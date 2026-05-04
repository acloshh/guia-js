const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

const personajes1 = [
 { nombre: "Luna", vida: 100, tipo: "maga", nivel: 3 },
 { nombre: "Kai", vida: 120, tipo: "guerrero", nivel: 4 },
 { nombre: "Nina", vida: 90, tipo: "arquera", nivel: 2 }
];
for (let i = 0; i < personajes1.length; i++) {
 const personaje = personajes1[i];
 console.log(`Nombre: ${personaje.nombre}, Vida: ${personaje.vida}, Tipo: ${personaje.tipo}, Nivel: ${personaje.nivel}`);
}