document.addEventListener('DOMContentLoaded', function () {
    // Función para iniciar las validaciones
    function iniciarValidaciones() {
        var formulario = document.querySelectorAll('form'); // Selecciona todos los formularios

        formularios.forEach(function (formulario) {
            formulario.addEventListener('submit', function (event) {
                var errores = hayErrores(formulario);

                if (errores.length > 0) {
                    event.preventDefault();
                    mostrarAlerta(errores.join('<br>'));
                }
            });

            var nuevoNombreEscuelaInput = formulario.querySelector('.nuevo-nombre-escuela');
            var mensajeNuevoNombreEscuela = formulario.querySelector('.mensaje-nuevo-nombre-escuela');

            nuevoNombreEscuelaInput.addEventListener('input', function () {
                validarNuevoNombreEscuela(nuevoNombreEscuelaInput, mensajeNuevoNombreEscuela);
            });
        });
    }

    function hayErrores(formulario) {
        var errores = [];

        var nuevoNombreEscuelaInput = formulario.querySelector('.nuevo-nombre-escuela');
        var mensajeNuevoNombreEscuela = formulario.querySelector('.mensaje-nuevo-nombre-escuela');

        if (!validarNuevoNombreEscuela(nuevoNombreEscuelaInput, mensajeNuevoNombreEscuela)) {
            errores.push('El nombre de la escuela es inválido.');
        }

        return errores;
    }

    function validarNuevoNombreEscuela(inputElement, mensajeElemento) {
        var regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{3,50}$/;

        if (inputElement.value.trim() === '') {
            mensajeElemento.style.display = 'none';
            return true; // Permitir campos vacíos
        } else if (!regex.test(inputElement.value)) {
            mensajeElemento.style.display = 'block';
            return false; // Mostrar alerta solo si es incorrecto
        } else {
            mensajeElemento.style.display = 'none';
            return true;
        }
    }

    function mostrarAlerta(mensaje) {
        var alertaMensaje = document.getElementById('alertaMensaje');
        alertaMensaje.innerHTML = mensaje;

        $('#alertaModal').modal('show');

        $('#btnAceptar').on('click', function () {
            $('#alertaModal').modal('hide');
        });
    }

    iniciarValidaciones(); // Iniciar validaciones al cargar la página
});

