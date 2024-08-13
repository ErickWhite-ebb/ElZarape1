let listaSuc;
let indexModificado = null;

function cargarCatalogo()
{
    listaSuc = {sucursales: [
            {"id": 1, "nombre": "Rio Mayo",
                "direccion": "Rio Mayo 7, Col. Vista Hermosa",
                "horario": "7:00 - 20:00",
                "latitud": 21.07423,
                "longitud": -101.62586, "estatus": 1, "foto": "../img/Suc1.jpg"},
            {"id": 2, "nombre": "Las Torres",
                "direccion": "Blvd. LAs Torres 1072, Col. Lomas",
                "horario": "7:00 - 20:00",
                "latitud": 21.14697,
                "longitud": -101.65316, "estatus": 1, "foto": "../img/Suc2.jpg"},
            {"id": 3, "nombre": "Rio Mayo",
                "direccion": "Plaza Mayor Loc.70, Col. Valle del Campestre",
                "horario": "12:00 - 20:00",
                "latitud": 21.15817,
                "longitud": -101.69528, "estatus": 1, "foto": "../img/Suc3.jpg"}


        ]};
    imprimirTablaSuc();
}

function imprimirTablaSuc()
{

    let contenido = "";
    let renglon = "";
    for (let i = 0; i < listaSuc.sucursales.length; i++)
    {
        renglon = "";
        renglon += "<tr>";
        renglon += "<td>" + listaSuc.sucursales[i].id + "</td>";
        renglon += "<td>" + listaSuc.sucursales[i].nombre + "</td>";
        renglon += "<td>" + listaSuc.sucursales[i].direccion + "</td>";
        renglon += "<td>" + listaSuc.sucursales[i].horario + "</td>";
        renglon += "<td>" + listaSuc.sucursales[i].latitud + "</td>";
        renglon += "<td>" + listaSuc.sucursales[i].longitud + "</td>";
        renglon += "<td>" + listaSuc.sucursales[i].estatus + "</td>";
        renglon += "<td><img src='" + listaSuc.sucursales[i].foto + "' alt='Foto' width='50' height='50'></td>";
        renglon += "<td><button type='button' class='btn btn-outline-success' onClick='modificarSuc(" + i + ");'><i class='fas fa-edit'></i></button></td>";
        renglon += "<td><button type='button' class='btn btn-outline-danger'onClick='eliminarSuc(" + i + ");'><i class='fas fa-trash-alt'></button></td>";
        renglon += "</tr>";
        contenido += renglon;
    }
    document.getElementById("tb-catSucursal").innerHTML = contenido;
}
function limpiarSuc()
{
    document.getElementById("txtIdSucursal").value = "";
    document.getElementById("txtNombreSucursal").value = "";
    document.getElementById("txtDireccionSucursal").value = "";
    document.getElementById("txtHorarioSucursal").value = "";
    document.getElementById("txtLatitudSucursal").value = "";
    document.getElementById("txtLongitudSucursal").value = "";
    document.getElementById("txtEstatusSucursal").value = "";
    document.getElementById("txtFotoSucursal").value = "";
    document.getElementById("fotoSucursal").src = "";
    
    let boton = "<button type='button' class='btn btn-success' onClick='agregarSuc();'>Insertar</button></td> \n\
                 <button type='button' class='btn btn-secondary' onclick='limpiarSuc()'><i class='fas fa-times'></i> Cancelar</button>";
    document.getElementById("txtBotones").innerHTML = boton;
}
function modificarSuc(i)
{
    indexModificado = i;
    document.getElementById("txtIdSucursal").value = listaSuc.sucursales[i].id;
    document.getElementById("txtNombreSucursal").value = listaSuc.sucursales[i].nombre;
    document.getElementById("txtDireccionSucursal").value = listaSuc.sucursales[i].direccion;
    document.getElementById("txtHorarioSucursal").value = listaSuc.sucursales[i].horario;
    document.getElementById("txtLatitudSucursal").value = listaSuc.sucursales[i].latitud;
    document.getElementById("txtLongitudSucursal").value = listaSuc.sucursales[i].longitud;
    document.getElementById("txtEstatusSucursal").value = listaSuc.sucursales[i].estatus;
    document.getElementById("txtFotoSucursal").value = listaSuc.sucursales[i].foto;
    document.getElementById("fotoSucursal").src = listaSuc.sucursales[i].foto;

   
    let boton = "<button type='button' class='btn btn-success' onClick='modificarSucBtn();'>Modificar</button></td> \n\
                 <button type='button' class='btn btn-secondary' onclick='limpiarSuc()'><i class='fas fa-times'></i> Cancelar</button>";
    document.getElementById("txtBotones").innerHTML = boton;

    imprimirTablaSuc();
}

function modificarSucBtn()
{
    let id = document.getElementById("txtIdSucursal").value;
    let nom = document.getElementById("txtNombreSucursal").value;
    let dir = document.getElementById("txtDireccionSucursal").value;
    let hor = document.getElementById("txtHorarioSucursal").value;
    let lat = document.getElementById("txtLatitudSucursal").value;
    let lng = document.getElementById("txtLongitudSucursal").value;
    let est = document.getElementById("txtEstatusSucursal").value;
    let fot = document.getElementById("txtFotoSucursal").value;

    let sucursal = {"id": id, "nombre": nom, "direccion": dir,
        "horario": hor, "latitud": lat, "longitud": lng, "estatus": est, "foto": fot};

     if (indexModificado !== null) {
        listaSuc.sucursales[indexModificado] = sucursal;
        Swal.fire({
                    "title": "Modificacion Correcta",
                    "text": "La Sucursal ha sido modificada correctamente",
                    "icon": "success"
                });
    }

    limpiarSuc();
    imprimirTablaSuc();
    let boton = "<button type='button' class='btn btn-success' onClick='agregarSuc();'>Insertar</button></td> \n\
                 <button type='button' class='btn btn-secondary' onclick='limpiarSuc()'><i class='fas fa-times'></i> Cancelar</button>";
    document.getElementById("txtBotones").innerHTML = boton;
    indexModificado= null;
}


function agregarSuc()
{
    let id = listaSuc.sucursales.length + 1;
    let nom = document.getElementById("txtNombreSucursal").value;
    let dir = document.getElementById("txtDireccionSucursal").value;
    let hor = document.getElementById("txtHorarioSucursal").value;
    let lat = document.getElementById("txtLatitudSucursal").value;
    let lng = document.getElementById("txtLongitudSucursal").value;
    let est = document.getElementById("txtEstatusSucursal").value;
    let fot = document.getElementById("txtFotoSucursal").value;

    let sucursal = {"id": id, "nombre": nom, "direccion": dir,
        "horario": hor, "latitud": lat, "longitud": lng, "estatus": est, "foto": fot};

    listaSuc.sucursales.push(sucursal);

    Swal.fire({
        "tittle": "Insercion Correcta",
        "text": "La Sucursal ha sido insertada correctamente",
        "icon": "success"
    });

    limpiarSuc();
    imprimirTablaSuc();

}

function eliminarSuc(i)
{
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
            listaSuc.sucursales.splice(i, 1);
            imprimirTablaSuc();
            Swal.fire(
                    'Eliminado!',
                    'La sucursal ha sido eliminada.',
                    'success'
                    );
        }
    });  
}


//Swal.fire({
//        "tittle":"¿Realmente Deses Elininar?",
//        "showDenyButton": true,
//        "showCancelButton": true,
//        "confirmButtonText": "Si",
//        
//    }

function buscarSuc(i)
{
    let buscar = document.getElementById("txtBusqSuc").value;

    let posEncontrado = -1;

    for (let i = 0; i < listaSuc.sucursales.length; i++) {
        if (listaSuc.sucursales[i].id == buscar ||
                listaSuc.sucursales[i].nombre == buscar ||
                listaSuc.sucursales[i].direccion == buscar)
        {
            posEncontrado = i;
            break;
        }
    }

    let textoTabla = "";

    if (posEncontrado == -1)
    {
        textoTabla = "<tr><td colspan='9'>No se encontraron resultados de tu busqueda</td></tr>";
    } else
    {
        textoTabla = "";
        textoTabla += "<tr>";
        textoTabla += "<td>" + listaSuc.sucursales[posEncontrado].id + "</td>";
        textoTabla += "<td>" + listaSuc.sucursales[posEncontrado].nombre + "</td>";
        textoTabla += "<td>" + listaSuc.sucursales[posEncontrado].direccion + "</td>";
        textoTabla += "<td>" + listaSuc.sucursales[posEncontrado].horario + "</td>";
        textoTabla += "<td>" + listaSuc.sucursales[posEncontrado].latitud + "</td>";
        textoTabla += "<td>" + listaSuc.sucursales[posEncontrado].longitud + "</td>";
        textoTabla += "<td>" + listaSuc.sucursales[posEncontrado].estatus + "</td>";
        textoTabla += "<td><img src='" + listaSuc.sucursales[posEncontrado].foto + "' alt='Foto' width='50' height='50'></td>";
        textoTabla += "<td><button type='button' class='btn btn-outline-success' onClick='modificarSuc(" + posEncontrado + ");'><i class='fas fa-edit'></i></button></td>";
        textoTabla += "<td><button type='button' class='btn btn-outline-danger' onClick='eliminarSuc(" + posEncontrado + ");'><i class='fas fa-trash-alt'></i></button></td>";
        textoTabla += "</tr>";
    }
    document.getElementById("tb-catSucursal").innerHTML = textoTabla;
}

function cargarImgSUC() {
    let fileInput = document.getElementById("idFotoSucursal");
    let file = fileInput.files[0];
    let reader = new FileReader();

    reader.onload = function (e) {
        document.getElementById("fotoSucursal").src = e.target.result;
        document.getElementById("txtFotoSucursal").value = e.target.result;
    };
    reader.readAsDataURL(file);
}