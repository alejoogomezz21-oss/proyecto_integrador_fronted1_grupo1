// VARIABLES REUTILIZADAS DEL MOMENTO 1
const usuarioCorrecto = "estudiante@cesde.edu.co";
const claveCorrecto = "cesde123";
let intentosActuales = 0;
const limiteIntentos = 3;

// SELECTORES DEL DOM
const loginContainer = document.getElementById('login-container');
const dashContainer = document.getElementById('dashboard-container');
const msgError = document.getElementById('mensaje-error');

// EVENTO DE LOGICA DE ACCESO
document.getElementById('btn-ingresar').addEventListener('click', () => {
    const user = document.getElementById('input-usuario').value;
    const pass = document.getElementById('input-clave').value;

    if (user === usuarioCorrecto && pass === claveCorrecto) {
        alert("Acceso permitido. Bienvenido");
        loginContainer.classList.add('hidden');
        dashContainer.classList.remove('hidden');
        renderizarUsuarios(); // Función del Integrante 4
    } else {
        intentosActuales++;
        if (intentosActuales >= limiteIntentos) {
            msgError.textContent = "Sistema Bloqueado: Superó los 3 intentos.";
            document.getElementById('btn-ingresar').disabled = true;
        } else {
            msgError.textContent = Datos incorrectos. Intento ${intentosActuales} de ${limiteIntentos};
        }
    }
});

document.getElementById('btn-logout').addEventListener('click', () => {
    location.reload(); // Reinicia la app
});

