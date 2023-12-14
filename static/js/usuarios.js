document.addEventListener('DOMContentLoaded', function () {
    var nombreInput = document.getElementById('nombre');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');
    var mensajeNombre = document.getElementById('mensaje_nombre');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    nombreInput.addEventListener('input', function () {
        validarNombre();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (nombreInput.value.trim() === '' || !validarNombre()) {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente.');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarNombre()) {
            errores.push('Por favor, complete todos los campos correctamente.');
        }

        return errores;
    }

    function validarNombre() {
        var regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{3,20}$/;
    
        if (nombreInput.value.trim() === '') {
            mensajeNombre.style.display = 'none';
            return false;
        } else if (!regex.test(nombreInput.value)) {
            mensajeNombre.style.display = 'block';
            return false;
        } else {
            mensajeNombre.style.display = 'none';
            return true;
        }
    }

    function mostrarAlerta(mensaje) {
        var alertaMensaje = document.getElementById('alertaMensaje');
        alertaMensaje.innerHTML = mensaje;

        $('#alertaModal').modal('show'); // Utiliza jQuery para mostrar el modal

        $('#btnAceptar').on('click', function () {
            $('#alertaModal').modal('hide');
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var apellidosInput = document.getElementById('apellidos');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');
    var mensajeApellidos = document.getElementById('mensaje_apellidos');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    apellidosInput.addEventListener('input', function () {
        validarApellidos();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (apellidosInput.value.trim() === '' || !validarApellidos()) {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente.');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarApellidos()) {
            errores.push('Por favor, complete todos los campos correctamente.');
        }

        return errores;
    }

    function validarApellidos() {
        var regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{3,20}$/;

        if (apellidosInput.value.trim() === '') {
            mensajeApellidos.style.display = 'none';
            return false;
        } else if (!regex.test(apellidosInput.value)) {
            mensajeApellidos.style.display = 'block';
            return false;
        } else {
            mensajeApellidos.style.display = 'none';
            return true;
        }
    }

    function mostrarAlerta(mensaje) {
        var alertaMensaje = document.getElementById('alertaMensaje');
        alertaMensaje.innerHTML = mensaje;

        $('#alertaModal').modal('show'); // Utiliza jQuery para mostrar el modal

        $('#btnAceptar').on('click', function () {
            $('#alertaModal').modal('hide');
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var usuarioInput = document.getElementById('usuario');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');
    var mensajeUsuario = document.getElementById('mensaje_usuario');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    usuarioInput.addEventListener('input', function () {
        validarUsuario();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (usuarioInput.value.trim() === '' || !validarUsuario()) {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente.');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarUsuario()) {
            errores.push('Por favor, complete todos los campos correctamente.');
        }

        return errores;
    }

    function validarUsuario() {
        var regex = /^[a-zA-Z0-9._-]+$/;

        if (usuarioInput.value.trim() === '') {
            mensajeUsuario.style.display = 'none';
            return false;
        } else if (!regex.test(usuarioInput.value)) {
            mensajeUsuario.style.display = 'block';
            return false;
        } else {
            mensajeUsuario.style.display = 'none';
            return true;
        }
    }

    function mostrarAlerta(mensaje) {
        var alertaMensaje = document.getElementById('alertaMensaje');
        alertaMensaje.innerHTML = mensaje;

        $('#alertaModal').modal('show'); // Utiliza jQuery para mostrar el modal

        $('#btnAceptar').on('click', function () {
            $('#alertaModal').modal('hide');
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var passwordInput = document.getElementById('password');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');
    var mensajePassword = document.getElementById('mensaje_password');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    passwordInput.addEventListener('input', function () {
        validarPassword();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (passwordInput.value.trim() === '' || !validarPassword()) {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente.');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarPassword()) {
            errores.push('Por favor, complete todos los campos correctamente.');
        }

        return errores;
    }

    function validarPassword() {
        var regex = /^[a-zA-Z0-9!@#$%^&*()_+{}|:"<>?[\];',.\/\\-]{7,10}$/;

        if (passwordInput.value.trim() === '') {
            mensajePassword.style.display = 'none';
            return false;
        } else if (!regex.test(passwordInput.value)) {
            mensajePassword.style.display = 'block';
            return false;
        } else {
            mensajePassword.style.display = 'none';
            return true;
        }
    }

    function mostrarAlerta(mensaje) {
        var alertaMensaje = document.getElementById('alertaMensaje');
        alertaMensaje.innerHTML = mensaje;

        $('#alertaModal').modal('show'); // Utiliza jQuery para mostrar el modal

        $('#btnAceptar').on('click', function () {
            $('#alertaModal').modal('hide');
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var areaSelect = document.getElementById('area');
    var mensajeArea = document.getElementById('mensaje_area');
    var btnEnviar = document.querySelector('button[type="submit"]');

    btnEnviar.addEventListener('click', function (event) {
        if (areaSelect.value === '') {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente');
        }
    });

    function mostrarAlerta(mensaje) {
        var alertaMensaje = document.getElementById('alertaMensaje');
        alertaMensaje.innerHTML = mensaje;

        $('#alertaModal').modal('show'); // Utiliza jQuery para mostrar el modal

        $('#btnAceptar').on('click', function () {
            $('#alertaModal').modal('hide');
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var inputImagen = document.getElementById('imagen-usuario');
    var btnEnviar = document.querySelector('button[type="submit"]');

    btnEnviar.addEventListener('click', function (event) {
        if (inputImagen.files.length === 0) {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente');
        }
    });

    function mostrarAlerta(mensaje) {
        var alertaMensaje = document.getElementById('alertaMensaje');
        alertaMensaje.innerHTML = mensaje;

        $('#alertaModal').modal('show'); // Utiliza jQuery para mostrar el modal

        $('#btnAceptar').on('click', function () {
            $('#alertaModal').modal('hide');
        });
    }
});



