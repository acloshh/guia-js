const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

function calcularVidaRestante(vida, danio) {
 return vida - danio;
}

let resultado = calcularVidaRestante(100, 30);
console.log(resultado);
