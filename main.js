const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");


boton.addEventListener("click", function() {
    const valor = input.value;
    mensaje.textContent = "Bienvenido a la guía de JavaScript";
    mensaje.style.color = "blue";

});

  

