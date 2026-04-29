const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

let opcion = "iniciar";
boton.addEventListener("click", () => {
opcion = input.value
switch (opcion) {
    case "iniciar":
        mensaje.innerHTML = "Iniciando...";
        break;
    case "configuracion":
        mensaje.innerHTML = "Entrando a la configuracion";
        break;
    case "creditos":
        mensaje.innerHTML = "Mostrando los créditos";
        break;
    case "salir":
        mensaje.innerHTML = "Saliendo...";
        break;
    default:
        mensaje.innerHTML = "Opción no válida. Por favor, ingrese una opción válida.";
        break;
};
})