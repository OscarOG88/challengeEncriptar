//-------Selección de Elementos-------//
const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const txtEncriptar = document.querySelector(".encriptar");
const respuesta = document.querySelector(".evaluar");
const btnCopiar = document.querySelector(".btn-copiar");
const tarjetaContenedor = document.querySelector(".tarjeta-contenedor");

//-------Boton de Encriptar-------//
btnEncriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = txtEncriptar.value;

    // Valida que el texto solo tenga letras minúsculas y espacios
    if (/[^a-z\s]/.test(texto)) {
        alert("El texto debe contener solo letras minúsculas y espacios.");
        return;
    }

    // Encriptar el texto
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");

    // Mostrar el resultado
    respuesta.value = texto;
    respuesta.style.display = "block"; // Asegura que la textarea sea visible
    btnCopiar.style.visibility = "visible"; // Hacer visible el botón Copiar

    // Ocultar el mensaje de "Ningún mensaje fue encontrado"
    tarjetaContenedor.style.display = "none";
});

//-------Boton de Desencriptar-------//
btnDesencriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = txtEncriptar.value;

    // Validar que el texto solo tenga letras minúsculas y espacios
    if (/[^a-z\s]/.test(texto)) {
        alert("El texto debe contener solo letras minúsculas y espacios.");
        return;
    }

    // Desencriptar el texto
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    // Mostrar el resultado
    respuesta.value = texto;
    respuesta.style.display = "block"; // Asegura que la textarea sea visible
    btnCopiar.style.visibility = "visible"; // Hacer visible el botón Copiar

    // Ocultar el mensaje de "Ningún mensaje fue encontrado"
    tarjetaContenedor.style.display = "none";
});

//-------Boton de Copiar-------//
btnCopiar.addEventListener("click", e => {
    e.preventDefault();
    respuesta.select();
    document.execCommand("copy");
});
