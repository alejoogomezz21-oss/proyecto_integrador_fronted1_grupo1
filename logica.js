// Fase 1: Estructura de Lógica JavaScript
// Variables iniciales para el sistema de acceso

const usuarioCorrecto = "estudiante@cesde.edu.co";
const claveCorrecta = "cesde123";
let intentosActuales = 0;
const limiteDeIntentos = 3;


function iniciarProceso() {
    console.log("Iniciando proceso de ingreso institucional...");

    // APORTE INTEGRANTE 3: Función de Validación y Condicionales

function validarAcceso(usuarioIngresado, claveIngresada) {
    
    // 1. Imprimir los datos recibidos por consola
    console.log(" Proceso de validación ");
    console.log("Usuario ingresado: " + usuarioIngresado);
    console.log("Contraseña ingresada: " + claveIngresada);
    
    // 2. Verificar mediante condicionales si los datos coinciden
    // Usamos las variables globales definidas por el Alejo 
    if (usuarioIngresado === usuarioCorrecto && claveIngresada === claveCorrecta) {
        alert("Acceso permmitido. Bienvenido");
        console.log("Resultado: Usuario y clave correctos");
        return true; // Devuelve verdadero para que el ciclo sepa que puede parar
    } else {
        alert(" Datos incorrectos. Intentelo de nuevo.");
        console.log("Resultado: Usuario y clave incorrectos");
        return false; // Devuelve falso para que el ciclo cuente un error
    }
}


  
}
