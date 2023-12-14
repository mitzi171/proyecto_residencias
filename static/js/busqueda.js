function filterTable(tableId) {
    var input, filter, table, tr, td, i, txtValue, found;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById(tableId);
    tr = table.getElementsByTagName("tr");
    found = false; // Variable para controlar si se encontraron coincidencias

    for (i = 1; i < tr.length; i++) {
        var displayRow = false;
        td = tr[i].getElementsByTagName("td");
        for (var j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    displayRow = true;
                    found = true;
                    break;
                }
            }
        }
        if (displayRow) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }

    var noMatchContainer = document.getElementById('noMatchMessage');
    if (!found) {
        if (!noMatchContainer) {
            noMatchContainer = document.createElement('div');
            noMatchContainer.id = 'noMatchMessage';
            noMatchContainer.className = 'no-match';
            noMatchContainer.style.textAlign = 'center'; // Centra el texto horizontalmente
            noMatchContainer.style.padding = '10px'; // Añade un poco de espacio alrededor del texto
            noMatchContainer.style.marginBottom = '10px'; // Agrega espacio debajo del mensaje
            table.parentNode.insertBefore(noMatchContainer, table.nextSibling);
        }
        noMatchContainer.textContent = `No se encontraron coincidencias para "${filter}".`;
    } else if (noMatchContainer) {
        noMatchContainer.textContent = '';
    }
}

document.getElementById("searchInput").addEventListener("input", function() {
    filterTable("desayunos_frios");
});


// Asignar evento al escribir en el campo de búsqueda para la tabla "desayunos_calientes"
document.getElementById("searchInput").addEventListener("input", function() {
    filterTable("desayunos_calientes");
});

// Asignar evento al escribir en el campo de búsqueda para la tabla "huertos_escolares"
document.getElementById("searchInput").addEventListener("input", function() {
    filterTable("huertos_escolares");
});

// Asignar evento al escribir en el campo de búsqueda para la tabla "huertos_familiares"
document.getElementById("searchInput").addEventListener("input", function() {
    filterTable("huertos_familiares");
});
// Asignar evento al escribir en el campo de búsqueda para la tabla "usuarios"
document.getElementById("searchInput").addEventListener("input", function() {
    filterTable("usuarios");
});


// Función para actualizar el contador del total de registros
function actualizarContador() {
    var total = document.getElementById('desayunos_frios').rows.length - 1; // Restar 1 para excluir la fila de encabezado
    document.getElementById('totalRegistros').textContent = total;
  }
  
  // Llamar a esta función después de cargar los datos inicialmente
  actualizarContador();
  
  
  