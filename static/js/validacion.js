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
        var regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]{3,50}$/;
        
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
    var escolaridadBeneficiarioSelect = document.getElementById('escolaridad_beneficiario');
    var mensajeEscolaridad = document.getElementById('mensaje_escolaridad');
    var btnEnviar = document.querySelector('button[type="submit"]');

    btnEnviar.addEventListener('click', function (event) {
        if (escolaridadBeneficiarioSelect.value === '') {
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
    var inePadreInput = document.getElementById('ine_padre');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    inePadreInput.addEventListener('input', function () {
        validarINEPadre();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (inePadreInput.value.trim() === '' || !validarINEPadre()) {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente.');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarINEPadre()) {
            errores.push('Por favor, complete todos los campos correctamente.');
        }

        return errores;
    }

    function validarINEPadre() {
        var regex = /^[A-Z-a-z]{2}[A-Z-a-z]{2}[A-Z-a-z]{2}\d{6}\d{2}[A-Z-a-z]\d{3}$/;
        var mensajeINE = document.getElementById('mensaje_ine');

        if (inePadreInput.value.trim() === '') {
            mensajeINE.style.display = 'none';
            return false;
        } else if (!regex.test(inePadreInput.value)) {
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
    var curpPadreInput = document.getElementById('curp_padre');
    var mensajeCurpPadre = document.getElementById('mensaje_curp_padre');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    curpPadreInput.addEventListener('input', function () {
        validarCURPPadre();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (curpPadreInput.value.trim() === '' || !validarCURPPadre()) {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente.');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarCURPPadre()) {
            errores.push('Por favor, complete todos los campos correctamente.');
        }

        return errores;
    }

    function validarCURPPadre() {
        var regex = /^[A-Z-a-z]{4}[0-9]{6}[HM]{1}[A-Z-a-z]{6}[0-9]{1}$/;
        var mensajeCurpPadre = document.getElementById('mensaje_curp_padre');

        if (curpPadreInput.value.trim() === '') {
            mensajeCurpPadre.style.display = 'none';
            return false;
        } else if (!regex.test(curpPadreInput.value)) {
            mensajeCurpPadre.style.display = 'block';
            return false;
        } else {
            mensajeCurpPadre.style.display = 'none';
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
    var telefonoPadreInput = document.getElementById('telefono_padre');
    var mensajeTelefono = document.getElementById('mensaje_telefono');
    var formulario = document.getElementById('formulario');
    var btnEnviar = document.querySelector('button[type="submit"]');

    formulario.addEventListener('submit', function (event) {
        var errores = hayErrores();

        if (errores.length > 0) {
            event.preventDefault();
            mostrarAlerta(errores.join('<br>'));
        }
    });

    telefonoPadreInput.addEventListener('input', function () {
        validarTelefonoPadre();
    });

    btnEnviar.addEventListener('click', function (event) {
        if (telefonoPadreInput.value.trim() === '' || !validarTelefonoPadre()) {
            event.preventDefault();
            mostrarAlerta('Por favor, complete todos los campos correctamente.');
        }
    });

    function hayErrores() {
        var errores = [];

        if (!validarTelefonoPadre()) {
            errores.push('Por favor, complete todos los campos correctamente.');
        }

        return errores;
    }

    function validarTelefonoPadre() {
        var regex = /^(55|52|72|27|33|81|95)\d{8}$/;
        var mensajeTelefono = document.getElementById('mensaje_telefono');

        if (telefonoPadreInput.value.trim() === '') {
            mensajeTelefono.style.display = 'none';
            return false;
        } else if (!regex.test(telefonoPadreInput.value)) {
            mensajeTelefono.style.display = 'block';
            return false;
        } else {
            mensajeTelefono.style.display = 'none';
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




