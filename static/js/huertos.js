document.addEventListener('DOMContentLoaded', function () {
    var nombreEscuelaInput = document.getElementById('nombre_escuela');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    nombreEscuelaInput.addEventListener('input', function () {
        validarNombreEscuela();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (nombreEscuelaInput.value.trim() === '') {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctemente.');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarNombreEscuela()) {
            errores.push('Por favor, complete todos los campos correctemente.');
        }

        return errores;
    }

    function validarNombreEscuela() {
        var regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{3,50}$/;
        var mensajeNombreEscuela = document.getElementById('mensaje_nombre_escuela');
    
        if (nombreEscuelaInput.value.trim() === '') {
            mensajeNombreEscuela.style.display = 'none';
            return false;
        } else if (!regex.test(nombreEscuelaInput.value)) {
            mensajeNombreEscuela.style.display = 'block';
            return false;
        } else {
            mensajeNombreEscuela.style.display = 'none';
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
    var cctInput = document.getElementById('cct');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');
    var mensajeCCT = document.getElementById('mensaje_cct');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    cctInput.addEventListener('input', function () {
        validarCCT();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (cctInput.value.trim() === '') {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctemente');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarCCT()) {
            errores.push('Por favor, complete todos los campos correctemente');
        }

        // Agrega condiciones similares para otros campos si es necesario
        // ...

        return errores;
    }

    function validarCCT() {
        var regex = /^[0-9]{2}[A-Z-a-z]{3}[0-9]{4}[A-Z-a-z]{1}$/;

        if (cctInput.value.trim() === '') {
            mensajeCCT.style.display = 'none';
            return false;
        } else if (!regex.test(cctInput.value)) {
            mensajeCCT.style.display = 'block';
            return false;
        } else {
            mensajeCCT.style.display = 'none';
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
    var localidadInput = document.getElementById('localidad_escuela');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');
    var mensajeLocalidad = document.getElementById('mensaje_localidad');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    localidadInput.addEventListener('input', function () {
        validarLocalidad();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (localidadInput.value.trim() === '') {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctemente');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarLocalidad()) {
            errores.push('Por favor, complete todos los campos correctemente');
        }

        // Agrega condiciones similares para otros campos si es necesario
        // ...

        return errores;
    }

    function validarLocalidad() {
        var regex = /^[A-Za-z\s]{3,50}$/;

        if (localidadInput.value.trim() === '') {
            mensajeLocalidad.style.display = 'none';
            return false;
        } else if (!regex.test(localidadInput.value)) {
            mensajeLocalidad.style.display = 'block';
            return false;
        } else {
            mensajeLocalidad.style.display = 'none';
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
    var nombreBeneficiarioInput = document.getElementById('nombre_beneficiario');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');
    var mensajeNombreBeneficiario = document.getElementById('mensaje_nombre_beneficiario');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    nombreBeneficiarioInput.addEventListener('input', function () {
        validarNombreBeneficiario();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (nombreBeneficiarioInput.value.trim() === '') {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctemente');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarNombreBeneficiario()) {
            errores.push('Por favor, complete todos los campos correctemente');
        }

        // Agrega condiciones similares para otros campos si es necesario
        // ...

        return errores;
    }

    function validarNombreBeneficiario() {
        var regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{3,50}$/;

        if (nombreBeneficiarioInput.value.trim() === '') {
            mensajeNombreBeneficiario.style.display = 'none';
            return false;
        } else if (!regex.test(nombreBeneficiarioInput.value)) {
            mensajeNombreBeneficiario.style.display = 'block';
            return false;
        } else {
            mensajeNombreBeneficiario.style.display = 'none';
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
    var fechaNacimientoInput = document.getElementById('fecha_nacimiento');
    var btnEnviar = document.querySelector('button[type="submit"]');

    btnEnviar.addEventListener('click', function (event) {
        if (fechaNacimientoInput.value === '') {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctemente');
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
    var generoSelect = document.getElementById('genero');
    var btnEnviar = document.querySelector('button[type="submit"]');

    btnEnviar.addEventListener('click', function (event) {
        if (generoSelect.value === '') {
            event.preventDefault();
            mostrarAlerta('Por favor, seleccione un género');
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
    var estadoCivilSelect = document.getElementById('estado_civil');
    var btnEnviar = document.querySelector('button[type="submit"]');

    btnEnviar.addEventListener('click', function (event) {
        if (estadoCivilSelect.value === '') {
            event.preventDefault();
            mostrarAlerta('Por favor, seleccione un estado civil');
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
    var escolaridadSelect = document.getElementById('escolaridad_beneficiario');
    var btnEnviar = document.querySelector('button[type="submit"]');

    btnEnviar.addEventListener('click', function (event) {
        if (escolaridadSelect.value === '') {
            event.preventDefault();
            mostrarAlerta('Por favor, seleccione una escolaridad');
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
    var tallaInput = document.getElementById('talla_beneficiario');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    tallaInput.addEventListener('input', function () {
        validarTallaBeneficiario();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (tallaInput.value.trim() === '' || !validarTallaBeneficiario()) {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente.');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarTallaBeneficiario()) {
            errores.push('Por favor, complete todos los campos correctamente.');
        }

        return errores;
    }

    function validarTallaBeneficiario() {
        var regex = /^[0-9]+(\.[0-9]+)?$/;
        var mensajeTalla = document.getElementById('mensaje_talla');

        if (tallaInput.value.trim() === '') {
            mensajeTalla.style.display = 'none';
            return false;
        } else if (!regex.test(tallaInput.value)) {
            mensajeTalla.style.display = 'block';
            return false;
        } else {
            mensajeTalla.style.display = 'none';
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
    var curpInput = document.getElementById('curp_beneficiario');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    curpInput.addEventListener('input', function () {
        validarCURPBeneficiario();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (curpInput.value.trim() === '' || !validarCURPBeneficiario()) {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente.');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarCURPBeneficiario()) {
            errores.push('Por favor, complete todos los campos correctamente.');
        }

        return errores;
    }

    function validarCURPBeneficiario() {
        var regex = /^[A-Z-a-z]{4}[0-9]{6}[HM]{1}[A-Z-a-z]{6}[0-9]{1}$/;
        var mensajeCurp = document.getElementById('mensaje_curp');

        if (curpInput.value.trim() === '') {
            mensajeCurp.style.display = 'none';
            return false;
        } else if (!regex.test(curpInput.value)) {
            mensajeCurp.style.display = 'block';
            return false;
        } else {
            mensajeCurp.style.display = 'none';
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
    var pesoInput = document.getElementById('peso_beneficiario');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    pesoInput.addEventListener('input', function () {
        validarPesoBeneficiario();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (pesoInput.value.trim() === '' || !validarPesoBeneficiario()) {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente.');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarPesoBeneficiario()) {
            errores.push('Por favor, complete todos los campos correctamente.');
        }

        return errores;
    }

    function validarPesoBeneficiario() {
        var regex = /^[0-9]+(?:\.[0-9]+)?$/;
        var mensajePeso = document.getElementById('mensaje_peso');

        if (pesoInput.value.trim() === '') {
            mensajePeso.style.display = 'none';
            return false;
        } else if (!regex.test(pesoInput.value)) {
            mensajePeso.style.display = 'block';
            return false;
        } else {
            mensajePeso.style.display = 'none';
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
    var referenciasDomicilioTextArea = document.getElementById('referencias_domicilio');
    var btnEnviar = document.querySelector('button[type="submit"]');

    btnEnviar.addEventListener('click', function (event) {
        if (referenciasDomicilioTextArea.value.trim() === '') {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctemente');
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
    var nombrePadreInput = document.getElementById('nombre_padre');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    nombrePadreInput.addEventListener('input', function () {
        validarNombrePadre();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (nombrePadreInput.value.trim() === '' || !validarNombrePadre()) {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente.');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarNombrePadre()) {
            errores.push('Por favor, complete todos los campos correctamente.');
        }

        return errores;
    }

    function validarNombrePadre() {
        var regex = /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s]+$/;
        var mensajeNombrePadre = document.getElementById('mensaje_nombre_padre');

        if (nombrePadreInput.value.trim() === '') {
            mensajeNombrePadre.style.display = 'none';
            return false;
        } else if (!regex.test(nombrePadreInput.value)) {
            mensajeNombrePadre.style.display = 'block';
            return false;
        } else {
            mensajeNombrePadre.style.display = 'none';
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
    var escolaridadPadreSelect = document.getElementById('escolaridad_padre');
    var mensajeEscolaridadPadre = document.getElementById('mensaje_escolaridad_padre');
    var btnEnviar = document.querySelector('button[type="submit"]');

    btnEnviar.addEventListener('click', function (event) {
        if (escolaridadPadreSelect.value === '') {
            event.preventDefault();
            mostrarAlerta('Por favor, seleccione una opción para la escolaridad del padre.');
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
    var ineBeneficiarioInput = document.getElementById('ine_beneficiario');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    ineBeneficiarioInput.addEventListener('input', function () {
        validarINEBeneficiario();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (ineBeneficiarioInput.value.trim() === '' || !validarINEBeneficiario()) {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente.');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarINEBeneficiario()) {
            errores.push('Por favor, complete todos los campos correctamente.');
        }

        return errores;
    }

    function validarINEBeneficiario() {
        var regex = /^[A-Za-z]{2}[A-Za-z]{2}[A-Za-z]{2}\d{6}\d{2}[A-Za-z]\d{3}$/;
        var mensajeINE = document.getElementById('mensaje_ine_beneficiario');

        if (ineBeneficiarioInput.value.trim() === '') {
            mensajeINE.style.display = 'none';
            return false;
        } else if (!regex.test(ineBeneficiarioInput.value)) {
            mensajeINE.style.display = 'block';
            return false;
        } else {
            mensajeINE.style.display = 'none';
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
    var curpBeneficiarioInput = document.getElementById('curp_beneficiario');
    var mensajeCurpBeneficiario = document.getElementById('mensaje_curp_beneficiario');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    curpBeneficiarioInput.addEventListener('input', function () {
        validarCURPBeneficiario();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (curpBeneficiarioInput.value.trim() === '' || !validarCURPBeneficiario()) {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente.');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarCURPBeneficiario()) {
            errores.push('Por favor, complete todos los campos correctamente.');
        }

        return errores;
    }

    function validarCURPBeneficiario() {
        var regex = /^[A-Z-a-z]{4}[0-9]{6}[HM]{1}[A-Z-a-z]{6}[0-9]{1}$/;
        var mensajeCurpBeneficiario = document.getElementById('mensaje_curp_beneficiario');

        if (curpBeneficiarioInput.value.trim() === '') {
            mensajeCurpBeneficiario.style.display = 'none';
            return false;
        } else if (!regex.test(curpBeneficiarioInput.value)) {
            mensajeCurpBeneficiario.style.display = 'block';
            return false;
        } else {
            mensajeCurpBeneficiario.style.display = 'none';
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
    var telefonoBeneficiarioInput = document.getElementById('numero_telefono');
    var mensajeTelefonoBeneficiario = document.getElementById('mensaje_telefono_beneficiario');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    telefonoBeneficiarioInput.addEventListener('input', function () {
        validarTelefonoBeneficiario();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (telefonoBeneficiarioInput.value.trim() === '' || !validarTelefonoBeneficiario()) {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente.');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarTelefonoBeneficiario()) {
            errores.push('Por favor, complete todos los campos correctamente.');
        }

        return errores;
    }

    function validarTelefonoBeneficiario() {
        var regex = /^(55|52|72|27|33|81|95)\d{8}$/;
        var mensajeTelefonoBeneficiario = document.getElementById('mensaje_telefono_beneficiario');

        if (telefonoBeneficiarioInput.value.trim() === '') {
            mensajeTelefonoBeneficiario.style.display = 'none';
            return false;
        } else if (!regex.test(telefonoBeneficiarioInput.value)) {
            mensajeTelefonoBeneficiario.style.display = 'block';
            return false;
        } else {
            mensajeTelefonoBeneficiario.style.display = 'none';
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
    var correoBeneficiarioInput = document.getElementById('correo_beneficiario');
    var mensajeCorreoBeneficiario = document.getElementById('mensaje_correo_beneficiario');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    correoBeneficiarioInput.addEventListener('input', function () {
        validarCorreoBeneficiario();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (correoBeneficiarioInput.value.trim() === '' || !validarCorreoBeneficiario()) {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente.');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarCorreoBeneficiario()) {
            errores.push('Por favor, complete todos los campos correctamente.');
        }

        return errores;
    }

    function validarCorreoBeneficiario() {
        var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var mensajeCorreoBeneficiario = document.getElementById('mensaje_correo_beneficiario');

        if (correoBeneficiarioInput.value.trim() === '') {
            mensajeCorreoBeneficiario.style.display = 'none';
            return false;
        } else if (!regex.test(correoBeneficiarioInput.value)) {
            mensajeCorreoBeneficiario.style.display = 'block';
            return false;
        } else {
            mensajeCorreoBeneficiario.style.display = 'none';
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
    var municipioBeneficiarioInput = document.getElementById('municipio_beneficiario');
    var mensajeMunicipioBeneficiario = document.getElementById('mensaje_municipio_beneficiario');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    municipioBeneficiarioInput.addEventListener('input', function () {
        validarMunicipioBeneficiario();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (municipioBeneficiarioInput.value.trim() === '' || !validarMunicipioBeneficiario()) {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente.');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarMunicipioBeneficiario()) {
            errores.push('Por favor, complete todos los campos correctamente.');
        }

        return errores;
    }

    function validarMunicipioBeneficiario() {
        var regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{10,30}$/;
        var mensajeMunicipioBeneficiario = document.getElementById('mensaje_municipio_beneficiario');

        if (municipioBeneficiarioInput.value.trim() === '') {
            mensajeMunicipioBeneficiario.style.display = 'none';
            return false;
        } else if (!regex.test(municipioBeneficiarioInput.value)) {
            mensajeMunicipioBeneficiario.style.display = 'block';
            return false;
        } else {
            mensajeMunicipioBeneficiario.style.display = 'none';
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
    var localidadBeneficiarioInput = document.getElementById('localidad_beneficiario');
    var mensajeLocalidadBeneficiario = document.getElementById('mensaje_localidad_beneficiario');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    localidadBeneficiarioInput.addEventListener('input', function () {
        validarLocalidadBeneficiario();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (localidadBeneficiarioInput.value.trim() === '' || !validarLocalidadBeneficiario()) {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente.');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarLocalidadBeneficiario()) {
            errores.push('Por favor, complete todos los campos correctamente.');
        }

        return errores;
    }

    function validarLocalidadBeneficiario() {
        var regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{10,30}$/;
        var mensajeLocalidadBeneficiario = document.getElementById('mensaje_localidad_beneficiario');

        if (localidadBeneficiarioInput.value.trim() === '') {
            mensajeLocalidadBeneficiario.style.display = 'none';
            return false;
        } else if (!regex.test(localidadBeneficiarioInput.value)) {
            mensajeLocalidadBeneficiario.style.display = 'block';
            return false;
        } else {
            mensajeLocalidadBeneficiario.style.display = 'none';
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
    var coloniaBeneficiarioInput = document.getElementById('colonia_beneficiario');
    var mensajeColoniaBeneficiario = document.getElementById('mensaje_colonia_beneficiario');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    coloniaBeneficiarioInput.addEventListener('input', function () {
        validarColoniaBeneficiario();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (coloniaBeneficiarioInput.value.trim() === '' || !validarColoniaBeneficiario()) {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente.');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarColoniaBeneficiario()) {
            errores.push('Por favor, complete todos los campos correctamente.');
        }

        return errores;
    }

    function validarColoniaBeneficiario() {
        var regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{5,25}$/;
        var mensajeColoniaBeneficiario = document.getElementById('mensaje_colonia_beneficiario');

        if (coloniaBeneficiarioInput.value.trim() === '') {
            mensajeColoniaBeneficiario.style.display = 'none';
            return false;
        } else if (!regex.test(coloniaBeneficiarioInput.value)) {
            mensajeColoniaBeneficiario.style.display = 'block';
            return false;
        } else {
            mensajeColoniaBeneficiario.style.display = 'none';
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
    var codigoPostalInput = document.getElementById('codigo_postal');
    var mensajeCodigoPostal = document.getElementById('mensaje_codigo_postal');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    codigoPostalInput.addEventListener('input', function () {
        validarCodigoPostal();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (codigoPostalInput.value.trim() === '' || !validarCodigoPostal()) {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente.');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarCodigoPostal()) {
            errores.push('Por favor, complete todos los campos correctamente.');
        }

        return errores;
    }

    function validarCodigoPostal() {
        var regex = /^50\d{3}$/;

        if (codigoPostalInput.value.trim() === '') {
            mensajeCodigoPostal.style.display = 'none';
            return false;
        } else if (!regex.test(codigoPostalInput.value)) {
            mensajeCodigoPostal.style.display = 'block';
            return false;
        } else {
            mensajeCodigoPostal.style.display = 'none';
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
    var numeroExteriorInput = document.getElementById('numero_exterior');
    var mensajeNumeroExterior = document.getElementById('mensaje_numero_exterior');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    numeroExteriorInput.addEventListener('input', function () {
        validarNumeroExterior();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (numeroExteriorInput.value.trim() === '' || !validarNumeroExterior()) {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente.');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarNumeroExterior()) {
            errores.push('Por favor, complete todos los campos correctamente.');
        }

        return errores;
    }

    function validarNumeroExterior() {
        var regex = /^(\d{1,5}|S\/N)$/i;

        if (numeroExteriorInput.value.trim() === '') {
            mensajeNumeroExterior.style.display = 'none';
            return false;
        } else if (!regex.test(numeroExteriorInput.value)) {
            mensajeNumeroExterior.style.display = 'block';
            return false;
        } else {
            mensajeNumeroExterior.style.display = 'none';
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
    var numeroInteriorInput = document.getElementById('numero_interior');
    var mensajeNumeroInterior = document.getElementById('mensaje_numero_interior');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    numeroInteriorInput.addEventListener('input', function () {
        validarNumeroInterior();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (numeroInteriorInput.value.trim() === '' || !validarNumeroInterior()) {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente.');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarNumeroInterior()) {
            errores.push('Por favor, complete todos los campos correctamente.');
        }

        return errores;
    }

    function validarNumeroInterior() {
        var regex = /^(\d{1,5}|S\/N)$/i;

        if (numeroInteriorInput.value.trim() === '') {
            mensajeNumeroInterior.style.display = 'none';
            return false;
        } else if (!regex.test(numeroInteriorInput.value)) {
            mensajeNumeroInterior.style.display = 'block';
            return false;
        } else {
            mensajeNumeroInterior.style.display = 'none';
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
    var calleInput = document.getElementById('calle');
    var mensajeCalle = document.getElementById('mensaje_calle');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    calleInput.addEventListener('input', function () {
        validarCalle();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (calleInput.value.trim() === '' || !validarCalle()) {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente.');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarCalle()) {
            errores.push('Por favor, complete todos los campos correctamente.');
        }

        return errores;
    }

    function validarCalle() {
        var regex = /^[a-zA-Z\s]{5,20}$/;

        if (calleInput.value.trim() === '') {
            mensajeCalle.style.display = 'none';
            return false;
        } else if (!regex.test(calleInput.value)) {
            mensajeCalle.style.display = 'block';
            return false;
        } else {
            mensajeCalle.style.display = 'none';
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
    var referenciasDomicilioTextArea = document.getElementById('referencias_domicilio');
    var btnEnviar = document.querySelector('button[type="submit"]');

    btnEnviar.addEventListener('click', function (event) {
        if (referenciasDomicilioTextArea.value.trim() === '') {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctemente');
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
    var tipoApoyoInput = document.getElementById('tipo_apoyo');
    var mensajeTipoApoyo = document.getElementById('mensaje_tipo_apoyo');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    tipoApoyoInput.addEventListener('input', function () {
        validarTipoApoyo();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (tipoApoyoInput.value.trim() === '' || !validarTipoApoyo()) {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente.');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarTipoApoyo()) {
            errores.push('Por favor, complete todos los campos correctamente.');
        }

        return errores;
    }

    function validarTipoApoyo() {
        var regex = /^[a-zA-Z\s]{5,30}$/;

        if (tipoApoyoInput.value.trim() === '') {
            mensajeTipoApoyo.style.display = 'none';
            return false;
        } else if (!regex.test(tipoApoyoInput.value)) {
            mensajeTipoApoyo.style.display = 'block';
            return false;
        } else {
            mensajeTipoApoyo.style.display = 'none';
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
    var criterioSeleccionInput = document.getElementById('criterio_seleccion');
    var mensajeCriterioSeleccion = document.getElementById('mensaje_criterio_seleccion');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    criterioSeleccionInput.addEventListener('input', function () {
        validarCriterioSeleccion();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (criterioSeleccionInput.value.trim() === '' || !validarCriterioSeleccion()) {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente.');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarCriterioSeleccion()) {
            errores.push('Por favor, complete todos los campos correctamente.');
        }

        return errores;
    }

    function validarCriterioSeleccion() {
        var regex = /^[a-zA-Z\s]{5,30}$/;

        if (criterioSeleccionInput.value.trim() === '') {
            mensajeCriterioSeleccion.style.display = 'none';
            return false;
        } else if (!regex.test(criterioSeleccionInput.value)) {
            mensajeCriterioSeleccion.style.display = 'block';
            return false;
        } else {
            mensajeCriterioSeleccion.style.display = 'none';
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
    var periodoApoyoInput = document.getElementById('periodo_apoyo');
    var mensajePeriodoApoyo = document.getElementById('mensaje_periodo_apoyo');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    periodoApoyoInput.addEventListener('input', function () {
        validarPeriodoApoyo();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (periodoApoyoInput.value.trim() === '' || !validarPeriodoApoyo()) {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente.');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarPeriodoApoyo()) {
            errores.push('Por favor, complete todos los campos correctamente.');
        }

        return errores;
    }

    function validarPeriodoApoyo() {
        var regex = /^(2019|2020|2021|2022|2023|2024|2025|2026|2027|2028|2029|2030)$/;

        if (periodoApoyoInput.value.trim() === '') {
            mensajePeriodoApoyo.style.display = 'none';
            return false;
        } else if (!regex.test(periodoApoyoInput.value)) {
            mensajePeriodoApoyo.style.display = 'block';
            return false;
        } else {
            mensajePeriodoApoyo.style.display = 'none';
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
    var estadoCivilSelect = document.getElementById('estado_civil');
    var mensajeEstadoCivil = document.getElementById('mensaje_estado_civil');
    var btnEnviar = document.querySelector('button[type="submit"]');

    btnEnviar.addEventListener('click', function (event) {
        if (estadoCivilSelect.value === '') {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente.');
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
    var fechaInput = document.getElementById('fecha_registro');
    var btnEnviar = document.querySelector('button[type="submit"]');

    btnEnviar.addEventListener('click', function (event) {
        if (fechaInput.value === '') {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente.');
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

