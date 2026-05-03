const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
  let textoFinal = "";
  for (let i = 3; i >= 1; i--) {
    textoFinal += i + "\n";
  }
  textoFinal += "¡Comienza!";
  mensaje.textContent = textoFinal;
});