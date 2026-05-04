const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

let puntos = 0;
boton.addEventListener("click", function() {
    const valor = input.value;
    mensaje.textContent = puntos+10;
    puntos += 10;

});

  

