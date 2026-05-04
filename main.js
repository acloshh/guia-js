const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function() {
  const valor = input.value;
  if (valor == "") {
    mensaje.textContent = "Ingrese un nombre.";
  } else {
    mensaje.textContent = "Bienvenido, " + valor;
  }

});

  

