let listaBebidas = {
    bebidas: [
        {"id": 1, "nombre": "Coca Cola", "descripcion": "Refresco de cola", "precio": "$20", "categoria": "Refrescos", "foto": "../img/coca.jpeg"},
        {"id": 2, "nombre": "Agua Mineral", "descripcion": "Agua con gas", "precio": "$15", "categoria": "Aguas", "foto": "../img/aguaMineral.jpeg"},
        {"id": 3, "nombre": "Jugo de Naranja", "descripcion": "Jugo natural de naranja", "precio": "$25", "categoria": "Jugos", "foto": "../img/JugoNaranja.jpeg"}
    ]
};

function cargarCatalogoBeb() {
    imprimirTablaBebidas();
}

function modificarBebida(i) {
    document.getElementById("txtIdBebida").value = listaBebidas.bebidas[i].id;
    document.getElementById("txtNomBebida").value = listaBebidas.bebidas[i].nombre;
    document.getElementById("txtDescBebida").value = listaBebidas.bebidas[i].descripcion;
    document.getElementById("txtPrecioBebida").value = listaBebidas.bebidas[i].precio;
    document.getElementById("txtCatBebida").value = listaBebidas.bebidas[i].categoria;
    document.getElementById("txtFotoBebida").value = listaBebidas.bebidas[i].foto;
    document.getElementById("fotoBebida").src = listaBebidas.bebidas[i].foto;

    let boton = "<button type='button' class='btn btn-success' onClick='modificarRegBebida();'>Modificar</button></td> \n\
                 <button type='button' class='btn btn-secondary' onclick='cancelarBebida()'><i class='fas fa-times'></i> Cancelar</button>";
    document.getElementById("txtBotones").innerHTML = boton;
}

function cancelarBebida() {
    document.getElementById("txtIdBebida").value = "";
    document.getElementById("txtNomBebida").value = "";
    document.getElementById("txtDescBebida").value = "";
    document.getElementById("txtPrecioBebida").value = "";
    document.getElementById("txtCatBebida").value = "";
    document.getElementById("txtFotoBebida").value = "";
    document.getElementById("fotoBebida").src = "";
    
    let boton = "<button type='button' class='btn btn-success' onClick='agregarBebida();'>Insertar</button></td> \n\
                 <button type='button' class='btn btn-secondary' onclick='cancelarBebida()'><i class='fas fa-times'></i> Cancelar</button>";
    document.getElementById("txtBotones").innerHTML = boton;
}

function agregarBebida() {
    let ultimoId = listaBebidas.bebidas[listaBebidas.bebidas.length - 1].id;
    let id = ultimoId + 1;
    let nombre = document.getElementById("txtNomBebida").value;
    let descripcion = document.getElementById("txtDescBebida").value;
    let precio = document.getElementById("txtPrecioBebida").value;
    let categoria = document.getElementById("txtCatBebida").value;
    let foto = document.getElementById("txtFotoBebida").value;

    let bebida = {
        "id": id,
        "nombre": nombre,
        "descripcion": descripcion,
        "precio": "$" + precio,
        "categoria": categoria,
        "foto": foto
    };

    listaBebidas.bebidas.push(bebida);
    
    imprimirTablaBebidas();
    Swal.fire({
        "title": "Insercion Correcta",
        "text": "La bebida ha sido insertada correctamente",
        "icon": "success"
    });
    cancelarBebida();
}

function imprimirTablaBebidas() {
    let contenido = "";
    let renglon = "";
    for (let i = 0; i < listaBebidas.bebidas.length; i++) {
        renglon = "<tr>";
        renglon += "<td>" + listaBebidas.bebidas[i].id + "</td>";
        renglon += "<td>" + listaBebidas.bebidas[i].nombre + "</td>";
        renglon += "<td>" + listaBebidas.bebidas[i].descripcion + "</td>";
        renglon += "<td>" + listaBebidas.bebidas[i].precio + "</td>";
        renglon += "<td>" + listaBebidas.bebidas[i].categoria + "</td>";
        renglon += "<td><img src='" + listaBebidas.bebidas[i].foto + "' alt='Foto' width='50' height='50'></td>";
        renglon += "<td><button class='btn btn-outline-success' onclick='modificarBebida(" + i + ")'><i class='fas fa-edit'></i></button></td>";
        renglon += "<td><button class='btn btn-outline-danger' onclick='eliminarBebida(" + i + ")'><i class='fas fa-trash-alt'></i></button></td>";
        renglon += "</tr>";
        contenido += renglon;
    }
    document.getElementById("tbCatBebidas").innerHTML = contenido;
}

function cargarImgBebida() {
    let fileInput = document.getElementById("ifFotoBebida");
    let file = fileInput.files[0];
    let reader = new FileReader();

    reader.onload = function (e) {
        document.getElementById("fotoBebida").src = e.target.result;
        document.getElementById("txtFotoBebida").value = e.target.result;
    };
    reader.readAsDataURL(file);
}

function eliminarBebida(i) {
    Swal.fire({
        title: 'Estas seguro',
        text: "No podras revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminarlo!'
    }).then((result) => {
        if (result.isConfirmed) {
            listaBebidas.bebidas.splice(i, 1);
            imprimirTablaBebidas();
            Swal.fire(
                    'Eliminado!',
                    'La bebida ha sido eliminada.',
                    'success'
                    );
        }
    });
}

function buscarBebida() {
    let busqueda = document.getElementById("txtBusqBebida").value.toLowerCase();
    let resultados = listaBebidas.bebidas.filter(bebida => bebida.nombre.toLowerCase().includes(busqueda));
    let contenido = "";
    let renglon = "";
    for (let i = 0; i < resultados.length; i++) {
        renglon = "<tr>";
        renglon += "<td>" + resultados[i].id + "</td>";
        renglon += "<td>" + resultados[i].nombre + "</td>";
        renglon += "<td>" + resultados[i].descripcion + "</td>";
        renglon += "<td>" + resultados[i].precio + "</td>";
        renglon += "<td>" + resultados[i].categoria + "</td>";
        renglon += "<td><img src='" + resultados[i].foto + "' alt='Foto' width='50' height='50'></td>";
        renglon += "<td><button class='btn btn-outline-sucess' onclick='modificarBebida(" + i + ")'><i class='fas fa-edit'></i></button></td>";
        renglon += "<td><button class='btn btn-outline-danger' onclick='eliminarBebida(" + i + ")'><i class='fas fa-trash-alt'></i></button></td>";
        renglon += "</tr>";
        contenido += renglon;
    }
    document.getElementById("tbCatBebidas").innerHTML = contenido;
}

document.addEventListener("DOMContentLoaded", cargarCatalogo);

function modificarRegBebida() {
    let id = document.getElementById("txtIdBebida").value;
    if (id !== "") {
        id = parseInt(id);
        let nombre = document.getElementById("txtNomBebida").value;
        let descripcion = document.getElementById("txtDescBebida").value;
        let precio = document.getElementById("txtPrecioBebida").value;
        let categoria = document.getElementById("txtCatBebida").value;
        let foto = document.getElementById("txtFotoBebida").value;

        for (let i = 0; i < listaBebidas.bebidas.length; i++) {
            if (listaBebidas.bebidas[i].id == id) {
                listaBebidas.bebidas[i] = {
                    "id": id,
                    "nombre": nombre,
                    "descripcion": descripcion,
                    "precio": precio,
                    "categoria": categoria,
                    "foto": foto
                };
                Swal.fire({
                    "title": "Modificacion Correcta",
                    "text": "La bebida ha sido modificada correctamente",
                    "icon": "success"
                });
                imprimirTablaBebidas();
                cancelarBebida();
                let boton = "<button type='button' class='btn btn-success' onClick='modificarRegBebida();'>Modificar</button></td> \n\
                 <button type='button' class='btn btn-secondary' onclick='cancelarBebida()'><i class='fas fa-times'></i> Cancelar</button>";
                document.getElementById("txtBotones").innerHTML = boton;
                return;
            }
        }
        Swal.fire("No se encontró la bebida con el ID especificado", "", "info");
    } else {
        Swal.fire("No seleccionó ningún registro", "", "info");
    }
    cancelarBebida();
}
