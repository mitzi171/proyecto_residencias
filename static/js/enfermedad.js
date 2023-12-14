function mostrarEnfermedad() {
    var tieneEnfermedad = document.getElementById("tiene_enfermedad").value;
    var seleccionEnfermedad = document.getElementById("seleccion_enfermedad");
    var otraEnfermedadInput = document.getElementById("otra_enfermedad");

    if (tieneEnfermedad === "si") {
        seleccionEnfermedad.style.display = "block";
        otraEnfermedadInput.required = false;
    } else if (tieneEnfermedad === "no") {
        seleccionEnfermedad.style.display = "none";
        otraEnfermedadInput.required = false;
    } else if (tieneEnfermedad === "otra") {
        seleccionEnfermedad.style.display = "block";
        otraEnfermedadInput.required = true;
    }
}
