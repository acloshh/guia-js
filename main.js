const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
 const valor = input.value;
 const edad = Number(valor);
 if (edad >= 13) {
    mensaje.textContent = "Puede jugar";
 } else {
    mensaje.textContent = "No puede jugar";
 }
});

