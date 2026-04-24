// Parte Juanda
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

// Parte Nayla

// LÓGICA DE GESTIÓN DE USUARIOS (CRUD)
let listaUsuarios = JSON.parse(localStorage.getItem('usuariosCesde')) || [];

const btnRegistrar = document.getElementById('btn-registrar');
const tablaUsuarios = document.getElementById('lista-usuarios');

// Función para mostrar los datos (READ)
function renderizarUsuarios() {
    tablaUsuarios.innerHTML = '';
    
    listaUsuarios.forEach((usuario, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${usuario.nombre}</td>
            <td>${usuario.rol}</td>
            <td>
                <button class="btn-delete" onclick="eliminarUsuario(${index})">Eliminar</button>
            </td>
        `;
        tablaUsuarios.appendChild(row);
    });
}

// Función para registrar (CREATE)
btnRegistrar.addEventListener('click', () => {
    const nombre = document.getElementById('nombre-usuario').value;
    const rol = document.getElementById('rol-usuario').value;

    if (nombre && rol) {
        listaUsuarios.push({ nombre, rol });
        actualizarStorage();
        document.getElementById('nombre-usuario').value = '';
        document.getElementById('rol-usuario').value = '';
    } else {
        alert("Por favor complete todos los campos");
    }
});

// Función para borrar (DELETE)
function eliminarUsuario(index) {
    if (confirm("¿Desea eliminar este registro?")) {
        listaUsuarios.splice(index, 1);
        actualizarStorage();
    }
}

function actualizarStorage() {
    localStorage.setItem('usuariosCesde', JSON.stringify(listaUsuarios));
    renderizarUsuarios();
}

// Carga inicial si ya está logueado
if (!dashContainer.classList.contains('hidden')) {
    renderizarUsuarios();
}

