const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
 const valor = input.value;
 const numero = Number(valor);
 const resultado = numero + 10;
 mensaje.textContent = resultado;

 console.log("resultado: ", resultado);

 // Convertir valor a número
 // Sumar 10
 // Mostrar el resultado en pantalla
});

