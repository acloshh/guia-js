const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

const inventario = ["espada", "pocion", "escudo", "mapa", "llave"];
  if (inventario.includes("llave")) {
    console.log("La puerta se abre");
  } else {
    console.log("Necesitas una llave");
  }
