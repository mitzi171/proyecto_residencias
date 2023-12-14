function mayusculas(control) {
    var con = "document.formulario."+control+".value=document.formulario."+control+".value.toUpperCase();";
    
    eval(con);
}