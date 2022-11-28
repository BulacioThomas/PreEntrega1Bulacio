// VARIABLES
let usuarioConEmail = "thomasbulacio.motog@gmail.com";
const contrasenia = "Holamundo";

const nombrePrompt = prompt ("Ingrese su nombre");
const usuarioPrompt = prompt ("Ingrese su usuario");
const contraseniaPrompt = prompt ("Ingrese su contraseña");

// Saludo al usuario
function saludarUsuario(usuario) {
    alert(`Bienvenido ${usuario}`);
}

// validacion de arroba
function validarArroba(usuario) {
    let tieneArroba = false;
    
    for (let i = 0; i < usuario.length; i++) {
        if (usuario[i] === "@") {
            tieneArroba = true;
            break;
        } else {
            tieneArroba = false;
        }
    }
    return tieneArroba;
}

// VALIDACION DE USUARIO,EMAIL Y CONTRASEÑA
function validarUsuario(usuarioPrompt, contraseniaPrompt) {
	if (usuarioPrompt !== usuarioConEmail && contraseniaPrompt !== contrasenia) {
		alert("Usuario y contraseña incorrectos");
	} else if (usuarioPrompt !== usuarioConEmail) {
		alert("Usuario incorrecto");
	} else if (contraseniaPrompt !== contrasenia) {
		alert("Contraseña incorrecta");
	} else {
        saludarUsuario(nombrePrompt);
    }

    if (!validarArroba(usuarioPrompt)) {
        usuarioConEmail = prompt ("Ingrese un nuevo email")
        console.log(usuarioConEmail);
    }
}

validarUsuario(usuarioPrompt, contraseniaPrompt);
