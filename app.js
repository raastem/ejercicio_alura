const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const btnCopiar = document.querySelector(".btn-copiar");
const subtitulo = document.getElementById("subtitulo");
const boxnothingmessage = document.querySelector(".box-nothing-message");
const boxallmessage = document.querySelector(".box-all-message")

function btnEncriptar(){
    if (textArea.value.trim() === "") {
        // mensaje.value = "Ningún mensaje fue encontrado";
        // mensaje.style.backgroundImage = "none";
        // btnCopiar.style.display = "none"; // Ocultar botón copiar

        boxnothingmessage.style.visibility = "visible";
    } else {
        boxallmessage.style.display = "flex";
        boxnothingmessage.style.display = "none";
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        btnCopiar.style.display = "block"; // Mostrar botón copiar
        subtitulo.style.display = "none"; // Ocultar subtitulo
    }
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    if (textArea.value.trim() === "") {
        // mensaje.value = "Ningún mensaje fue encontrado";
        // mensaje.style.backgroundImage = "none";
        // btnCopiar.style.display = "none"; // Ocultar botón copiar
    } else {
        const textoEncriptado = desencriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        btnCopiar.style.display = "block"; // Mostrar botón copiar
        subtitulo.style.display = "none"; // Ocultar subtitulo
    }
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiarTexto() {
    if (mensaje.value !== "Ningún mensaje fue encontrado") { // No copiar si es el mensaje de error
        mensaje.select();
        document.execCommand("copy");
    }
}

document.querySelector(".btn-copiar").addEventListener("click", copiarTexto);
