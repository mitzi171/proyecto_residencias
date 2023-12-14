function update(){
    Swal.fire({
    title: '¿Estas seguro de actualizar el registro?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Actualizar',
    cancelButtonText: 'Cancelar'
    }).then((result) => {
    if (result.isConfirmed) {
        document.formulario.submit();
}
})
}