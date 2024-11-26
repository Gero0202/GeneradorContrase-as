const seleccionar = document.getElementById("caracteres-seleccionados")
const contenedor = document.getElementById("contenedor")
const longitud = document.getElementById("longitud")
const crear = document.getElementById("crear")


function generarContrasena(longitud, caracteresPermitidos) {
    let contrasena = '';
    
    
    if (caracteresPermitidos.length === 0) {
        console.error("Debe proporcionar al menos un carácter permitido.");
        return '';
    }

    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
        contrasena += caracteresPermitidos.charAt(indiceAleatorio);
    }

    return contrasena;
}



crear.addEventListener("click", () =>{
     const caracteres = seleccionar.value 
     const contrasenaGenerada = generarContrasena(Number(longitud.value), caracteres)

     const resultado = document.getElementById("resultado")
     resultado.innerHTML = "" 
    
     if (contrasenaGenerada !== ""){
        const contrasenaCreada = document.createElement("p")
        contrasenaCreada.innerText = contrasenaGenerada
        resultado.appendChild(contrasenaCreada)
     }
})

