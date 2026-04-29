const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
 const valor = input.value;
 const vida = Number(valor);

 if (vida > 70) {
    mensaje.textContent = "Jugador en buen estado";
 }
 if (vida <= 70 && vida >= 30) {
    mensaje.textContent = "Jugador herido";  
 }
 if (vida < 30) {
    mensaje.textContent = "Jugador en peligro";
 }
if (vida <=0) {
    mensaje.textContent = "Game Over";
}
});

