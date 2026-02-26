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
    // Usamos las variables globales definidas por Alejo 
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
// APORTE INTEGRANTE 4: Ciclo de Intentos y Bloqueo
 
function iniciarProceso() {
   console.log("Iniciando login institucional...");
 
   // reiniciar el contador cada vez que se pulsa el botón
   intentosActuales = 0;
 
   // el ciclo se repite mientras no se den los 3 intentos
   while (intentosActuales < limiteDeIntentos) {
       
       let user = prompt("Ingrese el nombre de usuario:");
       let pass = prompt("Ingrese su contraseña:");
 
       //  función de validación
       if (validarAcceso(user, pass)) {
           // Si los datos son válidos, permitir el acceso y salimos del ciclo
           console.log("Acceso permitido al sistema.");
           break;
       } else {
           // si fallan aumentar el contador de intentos
           intentosActuales++;
           console.log("Intentos fallidos: " + intentosActuales + " de " + limiteDeIntentos);
       }
 
       // si se llega al límite mostrar el mensaje de bloqueo
       if (intentosActuales === limiteDeIntentos) {
           alert("Sistema Bloqueado: Ha superado los tres intentos fallidos.");
           console.log("Estado: Bloqueado por seguridad.");
       }
   }
}

