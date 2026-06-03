// VARIABLES DE CONTROL DE INTENTOS

let intentosActuales = 0;

const limiteIntentos = 3;

 

// SELECTORES DEL DOM

const landingContainer = document.getElementById('landing-container');

const loginContainer = document.getElementById('login-container');

const dashContainer = document.getElementById('dashboard-container');

const msgError = document.getElementById('mensaje-error');

const tablaUsuarios = document.getElementById('lista-usuarios');

const btnRegistrar = document.getElementById('btn-registrar');

 

// El arreglo inicia vacío y se llenará asíncronamente

let listaUsuarios = [];

 

// FUNCIÓN DE ARRANQUE (MOMENTO 3)

async function iniciarApp() {

    try {

 

        const response = await fetch("usuarios.json");

        console.log("Status del fetch:", response.status);

 

        const usuariosIniciales = await response.json();

        console.log("Usuarios semilla cargados desde JSON:", usuariosIniciales);

 

        localStorage.setItem('usuariosCesde', JSON.stringify(usuariosIniciales));

 

        listaUsuarios = usuariosIniciales;

       

        console.log("listaUsuarios lista para operar:", listaUsuarios);

 

    } catch (error) {

        console.error("Error cargando usuarios iniciales:", error);

        listaUsuarios = JSON.parse(localStorage.getItem('usuariosCesde')) || [];

    }

}

 

iniciarApp();

 

document.getElementById('btn-ir-login').addEventListener('click', () => {

    landingContainer.classList.add('hidden');

    loginContainer.classList.remove('hidden');

});

 

document.getElementById('btn-volver-landing').addEventListener('click', () => {

    loginContainer.classList.add('hidden');

    landingContainer.classList.remove('hidden');

});

 

document.getElementById('btn-ingresar').addEventListener('click', () => {

    const user = document.getElementById('input-usuario').value.trim();

    const pass = document.getElementById('input-clave').value.trim();

 

    if (listaUsuarios.length === 0) {

        listaUsuarios = JSON.parse(localStorage.getItem('usuariosCesde')) || [];

    }

 

    const usuarioEncontrado = listaUsuarios.find(u => u.email === user && u.clave === pass);

 

    if (usuarioEncontrado) {

        alert(`Acceso permitido. Bienvenido ${usuarioEncontrado.nombre}`);

        loginContainer.classList.add('hidden');

        dashContainer.classList.remove('hidden');

        renderizarUsuarios();

    } else {

        intentosActuales++;

        if (intentosActuales >= limiteIntentos) {

            msgError.textContent = "Sistema Bloqueado: Superó los 3 intentos.";

            document.getElementById('btn-ingresar').disabled = true;

        } else {

            msgError.textContent = `Datos incorrectos. Intento ${intentosActuales} de ${limiteIntentos}`;

           

            setTimeout(() => {

                msgError.textContent = "";

            }, 3000);

        }

    }

});

 

document.getElementById('btn-logout').addEventListener('click', () => {

    location.reload();

});

 

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

 

btnRegistrar.addEventListener('click', () => {

    const nombreInput = document.getElementById('nombre-usuario');

    const rolInput = document.getElementById('rol-usuario');

   

    const nombre = nombreInput.value.trim();

    const rol = rolInput.value.trim();

 

    if (nombre && rol) {

        listaUsuarios.push({

            nombre: nombre,

            rol: rol,

            email: nombre.toLowerCase().replace(/\s+/g, '') + "@cesde.edu.co",

            clave: "cesde123"

        });

        actualizarStorage();

        nombreInput.value = '';

        rolInput.value = '';

    } else {

        alert("Por favor complete todos los campos");

    }

});

 

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
