$(function () {
    // Leave step event is used for validating the forms
    $("#smartwizard_admin").on("leaveStep", function (e, anchorObject, currentStepIdx, nextStepIdx, stepDirection) {
        // Calcular el porcentaje de progreso (paso actual dividido por el total de pasos)
        const totalSteps = 4;
        const progressPercentage = (nextStepIdx / (totalSteps - 1)) * 100;

        // Actualizar el estilo de la barra de progreso con el porcentaje calculado
        $("#progress-bar").css("width", progressPercentage + "%");
        // Validate only on forward movement
        if (stepDirection == 'forward') {
            let form = document.getElementById('form-admin-' + (currentStepIdx + 1));
            if (form) {
                if (!form.checkValidity()) {
                    form.classList.add('was-validated');
                    $('#smartwizard_admin').smartWizard("setState", [currentStepIdx], 'error');
                    $("#smartwizard_admin").smartWizard('fixHeight');
                    return false;
                }
                $('#smartwizard_admin').smartWizard("unsetState", [currentStepIdx], 'error');
            }
        }
    });

    // Step show event
    $("#smartwizard_admin").on("showStep", function (e, anchorObject, stepIndex, stepDirection, stepPosition) {
        // Calcular el porcentaje de progreso (paso actual dividido por el total de pasos)
        const totalSteps = 4;
        const progressPercentage = (stepIndex / (totalSteps - 1)) * 100;

        // Actualizar el estilo de la barra de progreso con el porcentaje calculado
        $("#progress-bar").css("width", progressPercentage + "%");
        $("#prev-btn-admin").removeClass('disabled').prop('disabled', false);
        $("#next-btn-admin").removeClass('disabled').prop('disabled', false);
        if (stepPosition === 'first') {
            $("#prev-btn-admin").addClass('disabled').prop('disabled', true);
        } else if (stepPosition === 'last') {
            $("#next-btn-admin").addClass('disabled').prop('disabled', true);
        } else {
            $("#prev-btn-admin").removeClass('disabled').prop('disabled', false);
            $("#next-btn-admin").removeClass('disabled').prop('disabled', false);
        }


    });

    // Smart Wizard
    $('#smartwizard_admin').smartWizard({
        selected: 0,
        enableURLhash: false,
        // autoAdjustHeight: false,
        theme: 'dots', // basic, arrows, square, round, dots
        transition: {
            animation: 'zoom'
        },
        toolbar: {
            showNextButton: false, // show/hide a Next button
            showPreviousButton: false, // show/hide a Previous button
            position: 'bottom', // none/ top/ both bottom

        },
        anchor: {
            enableNavigation: true, // Enable/Disable anchor navigation
            enableNavigationAlways: false, // Activates all anchors clickable always
            enableDoneState: true, // Add done state on visited steps
            markPreviousStepsAsDone: true, // When a step selected by url hash, all previous steps are marked done
            unDoneOnBackNavigation: true, // While navigate back, done state will be cleared
            enableDoneStateNavigation: true // Enable/Disable the done state navigation
        },
    });
    $("#prev-btn-admin").on("click", function () {
        // Navigate previous
        $('#smartwizard_admin').smartWizard("prev");
        return true;
    });

    $("#next-btn-admin").on("click", function () {
        // Navigate next
        $('#smartwizard_admin').smartWizard("next");
        return true;
    });

    $("#state_selector").on("change", function () {
        $('#smartwizard_admin').smartWizard("setState", [$('#step_to_style').val()], $(this).val(), !$('#is_reset').prop("checked"));
        return true;
    });

    $("#style_selector").on("change", function () {
        $('#smartwizard_admin').smartWizard("setStyle", [$('#step_to_style').val()], $(this).val(), !$('#is_reset').prop("checked"));
        return true;
    });

});
