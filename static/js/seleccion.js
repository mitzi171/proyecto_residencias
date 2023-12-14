function updatePerPage(select) {
    var perPage = select.value;
    var currentUrl = window.location.href;
    var updatedUrl = updateQueryStringParameter(currentUrl, 'per_page', perPage);
    window.location.href = updatedUrl;
}

// Función para actualizar el parámetro 'per_page' en la URL
function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
    } else {
        return uri + separator + key + "=" + value;
    }
}