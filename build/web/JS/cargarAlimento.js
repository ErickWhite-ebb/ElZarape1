let listaAlimentos = {
    alimentos: [
        {"id": 1, "nombre": "Tacos", "descripcion": "Tacos de carne asada", "precio": "$" + 50, "categoria": "Platillos", "foto": "../img/tacoAsada.jpg"},
        {"id": 2, "nombre": "Sopa Azteca", "descripcion": "Sopa de tomate con tortilla crocante", "precio": "$" + 45, "categoria": "Sopa", "foto": "../img/sopaAzteca.jpg"},
        {"id": 3, "nombre": "Torta de jamon", "descripcion": "Torta con jamon y queso", "precio": "$" + 25, "categoria": "Tortas", "foto": "../img/tortaJamon.jpg"}
    ]
};

function cargarCatalogoAlim(){
    imprimirTablaAlimentos();
}

function modificarAlimento(i) {
    document.getElementById("txtIdAlim").value = listaAlimentos.alimentos[i].id;
    document.getElementById("txtNomAlim").value = listaAlimentos.alimentos[i].nombre;
    document.getElementById("txtDescAlim").value = listaAlimentos.alimentos[i].descripcion;
    document.getElementById("txtPrecioAlim").value = listaAlimentos.alimentos[i].precio;
    document.getElementById("txtCatAlim").value = listaAlimentos.alimentos[i].categoria;
    document.getElementById("txtFotoAlim").value = listaAlimentos.alimentos[i].foto;
    document.getElementById("fotoAlim").src = listaAlimentos.alimentos[i].foto;
    
    let boton = "<button type='button' class='btn btn-success' onClick='modificarRegAlimento();'>Modificar</button></td> \n\
                 <button type='button' class='btn btn-secondary' onclick='cancelarAlimento()'><i class='fas fa-times'></i> Cancelar</button>";
    document.getElementById("txtBotones").innerHTML = boton;
}

function cancelarAlimento() {
    document.getElementById("txtIdAlim").value = "";
    document.getElementById("txtNomAlim").value = "";
    document.getElementById("txtDescAlim").value = "";
    document.getElementById("txtPrecioAlim").value = "";
    document.getElementById("txtCatAlim").value = "";
    document.getElementById("txtFotoAlim").value = "";
    document.getElementById("fotoAlim").src = "";
    
    let boton = "<button type='button' class='btn btn-success' onClick='agregarAlimento();'>Insertar</button></td> \n\
                 <button type='button' class='btn btn-secondary' onclick='cancelarAlimento()'><i class='fas fa-times'></i> Cancelar</button>";
    document.getElementById("txtBotones").innerHTML = boton;
}

function agregarAlimento() {
    let ultimoId = listaAlimentos.alimentos[listaAlimentos.alimentos.length - 1].id;
    let id = ultimoId + 1;
    let nombre = document.getElementById("txtNomAlim").value;
    let descripcion = document.getElementById("txtDescAlim").value;
    let precio = document.getElementById("txtPrecioAlim").value;
    let categoria = document.getElementById("txtCatAlim").value;
    let foto = document.getElementById("txtFotoAlim").value;

    let alimento = {
        "id": id,
        "nombre": nombre,
        "descripcion": descripcion,
        "precio": "$" + precio,
        "categoria": categoria,
        "foto": foto
    };

    listaAlimentos.alimentos.push(alimento);
    alert(JSON.stringify(alimento));
    imprimirTablaAlimentos();
    Swal.fire({
        "title": "Inserción Correcta",
        "text": "El alimento ha sido insertado correctamente",
        "icon": "success"
    });
    cancelarAlimento();
}

function imprimirTablaAlimentos() {
    let contenido = "";
    let renglon = "";
    for (let i = 0; i < listaAlimentos.alimentos.length; i++) {
        renglon = "<tr>";
        renglon += "<td>" + listaAlimentos.alimentos[i].id + "</td>";
        renglon += "<td>" + listaAlimentos.alimentos[i].nombre + "</td>";
        renglon += "<td>" + listaAlimentos.alimentos[i].descripcion + "</td>";
        renglon += "<td>" + listaAlimentos.alimentos[i].precio + "</td>";
        renglon += "<td>" + listaAlimentos.alimentos[i].categoria + "</td>";
        renglon += "<td><img src='" + listaAlimentos.alimentos[i].foto + "' alt='Foto' width='50' height='50'></td>";
        renglon += "<td><button class='btn btn-outline-success' onclick='modificarAlimento(" + i + ")'><i class='fas fa-edit'></i></button></td>";
        renglon += "<td><button class='btn btn-outline-danger' onclick='eliminarAlimento(" + i + ")'><i class='fas fa-trash-alt'></i></button></td>";
        renglon += "</tr>";
        contenido += renglon;
    }
    document.getElementById("tbCatAlimentos").innerHTML = contenido;
}

function eliminarAlimento(i) {
    Swal.fire({
        title: "¿Quieres eliminar el registro?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Sí",
        denyButtonText: "No"
    }).then((result) => {
        if (result.isConfirmed) {
            listaAlimentos.alimentos.splice(i, 1);
            Swal.fire({
                "title": "Eliminación Correcta",
                "text": "El alimento ha sido eliminado correctamente",
                "icon": "success"
            });
            imprimirTablaAlimentos();
        } else if (result.isDenied) {
            Swal.fire("Operación Cancelada", "", "info");
        }
    });
}

function modificarRegAlimento() {
    let id = document.getElementById("txtIdAlim").value;
    if (id !== "") {
        id = parseInt(id);
        let nombre = document.getElementById("txtNomAlim").value;
        let descripcion = document.getElementById("txtDescAlim").value;
        let precio = document.getElementById("txtPrecioAlim").value;
        let categoria = document.getElementById("txtCatAlim").value;
        let foto = document.getElementById("txtFotoAlim").value;

        for (let i = 0; i < listaAlimentos.alimentos.length; i++) {
            if (listaAlimentos.alimentos[i].id == id) {
                listaAlimentos.alimentos[i] = {
                    "id": id,
                    "nombre": nombre,
                    "descripcion": descripcion,
                    "precio": precio,
                    "categoria": categoria,
                    "foto": foto
                };
                Swal.fire({
                    "title": "Modificación Correcta",
                    "text": "El alimento ha sido modificado correctamente",
                    "icon": "success"
                });
                imprimirTablaAlimentos();
                cancelarAlimento();
                return;
            }
        }
        Swal.fire("No se encontró el alimento con el ID especificado", "", "info");
    } else {
        Swal.fire("No seleccionó ningún registro", "", "info");
    }
    cancelarAlimento();
}

document.addEventListener('DOMContentLoaded', cargarCatalogo);

function buscarAlimento() {
    let buscar = document.getElementById("txtBusqAlim").value;
    

    let posEncontrado = -1;

    for (let i = 0; i < listaAlimentos.alimentos.length; i++) {
        if (listaAlimentos.alimentos[i].id == buscar ||
            listaAlimentos.alimentos[i].nombre == buscar ||
            listaAlimentos.alimentos[i].descripcion == buscar) {
            posEncontrado = i;
            break;
        }
    }
    let textoTabla = "";

    if (posEncontrado == -1) {
        textoTabla = "<tr><td colspan='8'>No se encontraron resultados de tu busqueda</td></tr>";
    } else {
        textoTabla = "";
        textoTabla = "<tr>";
        textoTabla += "<td>" + listaAlimentos.alimentos[posEncontrado].id + "</td>";
        textoTabla += "<td>" + listaAlimentos.alimentos[posEncontrado].nombre + "</td>";
        textoTabla += "<td>" + listaAlimentos.alimentos[posEncontrado].descripcion + "</td>";
        textoTabla += "<td>" + listaAlimentos.alimentos[posEncontrado].precio + "</td>";
        textoTabla += "<td>" + listaAlimentos.alimentos[posEncontrado].categoria + "</td>";
        textoTabla += "<td><img src='" + listaAlimentos.alimentos[posEncontrado].foto + "' alt='Foto' width='50' height='50'></td>";
        textoTabla += "<td><button class='btn btn-outline-sucess' onclick='modificarAlimento(" + posEncontrado + ")'><i class='fas fa-edit'></i></button></td>";
        textoTabla += "<td><button class='btn btn-outline-danger' onclick='eliminarAlimento(" + posEncontrado + ")'><i class='fas fa-trash-alt'></i></button></td>";
        textoTabla += "</tr>";
    }
    document.getElementById("tbCatAlimentos").innerHTML = textoTabla;
}

function cargarImgAlim() {
    let inputFile = document.getElementById("ifFotoAlim");
    if (inputFile.files && inputFile.files[0]) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let foto = e.target.result;
            document.getElementById("fotoAlim").src = foto;
            document.getElementById("txtFotoAlim").value = foto;
        };
        reader.readAsDataURL(inputFile.files[0]);
    }
}

document.getElementById('ifFotoAlim').addEventListener('change', cargarImgAlim);

