let listaUsu;
let indexModificadoUsu = null;

function cargarCatalogoUsu()
{
    listaUsu = {usuarios: [
            {"id": 1, "nombreusuario": "Paquin",
                "contra": "123Mama123",
                "nombre": "Paco",
                "apellidos": "Perez Martinez",
                "telefono": "477 564 4566", "estatus": 1, "foto": "../img/Usu1.jpg"},
            {"id": 2, "nombreusuario": "Rod",
                "contra": "contraseña123",
                "nombre": "Rodrigo",
                "apellidos": "Herrera Martinez",
                "telefono": "477 098 6572", "estatus": 1, "foto": "../img/Usu2.jpg"},
            {"id": 3, "nombreusuario": "Jos",
                "contra": "nata23lk",
                "nombre": "Joshua",
                "apellidos": "Ramirez Gutierrez",
                "telefono": "477 234 6666", "estatus": 1, "foto": "../img/Usu3.jpg"}


        ]};
    imprimirTablaUsu();
}

function imprimirTablaUsu()
{

    let contenido = "";
    let renglon = "";
    for (let i = 0; i < listaUsu.usuarios.length; i++)
    {
        renglon = "";
        renglon += "<tr>";
        renglon += "<td>" + listaUsu.usuarios[i].id + "</td>";
        renglon += "<td>" + listaUsu.usuarios[i].nombreusuario + "</td>";
        renglon += "<td>*****</td>";
        renglon += "<td>" + listaUsu.usuarios[i].nombre + "</td>";
        renglon += "<td>" + listaUsu.usuarios[i].apellidos + "</td>";
        renglon += "<td>" + listaUsu.usuarios[i].telefono + "</td>";
        renglon += "<td>" + listaUsu.usuarios[i].estatus + "</td>";
        renglon += "<td><img src='" + listaUsu.usuarios[i].foto + "' alt='Foto' width='50' height='50'></td>";
        renglon += "<td><button type='button' class='btn btn-outline-success' onClick='modificarUsu(" + i + ");'><i class='fas fa-edit'></i></button></td>";
        renglon += "<td><button type='button' class='btn btn-outline-danger'onClick='eliminarUsu(" + i + ");'><i class='fas fa-trash-alt'></button></td>";
        renglon += "</tr>";
        contenido += renglon;
    }
    document.getElementById("tb-catUsuario").innerHTML = contenido;
}
function limpiarUsu()
{
    document.getElementById("txtIdUsuario").value = "";
    document.getElementById("txtNombreUsuario").value = "";
    document.getElementById("txtContraUsuario").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellidos").value = "";
    document.getElementById("txtNumTelefono").value = "";
    document.getElementById("txtEstatusUsuario").value = "";
    document.getElementById("txtFotoUsuario").value = "";
    document.getElementById("fotoUsuario").src = "";
    
    let boton = "<button type='button' class='btn btn-success' onClick='agregarUsu();'>Insertar</button></td> \n\
                 <button type='button' class='btn btn-secondary' onclick='limpiarUsu()'><i class='fas fa-times'></i> Cancelar</button>";
    document.getElementById("txtBotones").innerHTML = boton;
}
function modificarUsu(i)
{
    indexModificadoUsu = i;
    document.getElementById("txtIdUsuario").value = listaUsu.usuarios[i].id;
    document.getElementById("txtNombreUsuario").value = listaUsu.usuarios[i].nombreusuario;
    document.getElementById("txtContraUsuario").value = listaUsu.usuarios[i].contra;
    document.getElementById("txtNombre").value = listaUsu.usuarios[i].nombre;
    document.getElementById("txtApellidos").value = listaUsu.usuarios[i].apellidos;
    document.getElementById("txtNumTelefono").value = listaUsu.usuarios[i].telefono;
    document.getElementById("txtEstatusUsuario").value = listaUsu.usuarios[i].estatus;
    document.getElementById("txtFotoUsuario").value = listaUsu.usuarios[i].foto;
    document.getElementById("fotoUsuario").src = listaUsu.usuarios[i].foto;

    
    let boton = "<button type='button' class='btn btn-success' onClick='modificarUsuBtn();'>Modificar</button></td>\n\
                <button type='button' class='btn btn-secondary' onclick='limpiarUsu()'><i class='fas fa-times'></i> Cancelar</button>";
    document.getElementById("txtBotones").innerHTML = boton;

    imprimirTablaUsu();
}

function modificarUsuBtn()
{
    let id = document.getElementById("txtIdUsuario").value;
    let nomU = document.getElementById("txtNombreUsuario").value;
    let conU = document.getElementById("txtContraUsuario").value;
    let nom = document.getElementById("txtNombre").value;
    let ape = document.getElementById("txtApellidos").value;
    let num = document.getElementById("txtNumTelefono").value;
    let est = document.getElementById("txtEstatusUsuario").value;
    let fot = document.getElementById("txtFotoUsuario").value;

    let usuario = {"id": id, "nombreusuario": nomU, "contra": conU,
        "nombre": nom, "apellidos": ape, "telefono": num, "estatus": est, "foto": fot};

    if (indexModificadoUsu !== null) {
        listaUsu.usuarios[indexModificadoUsu] = usuario;
        Swal.fire({
                    "title": "Modificacion Correcta",
                    "text": "El usuario ha sido modificado correctamente",
                    "icon": "success"
                });
    }
    limpiarUsu();
    imprimirTablaUsu();
    let boton = "<button type='button' class='btn btn-success' onClick='agregarUsu();'>Insertar</button></td>\n\
                <button type='button' class='btn btn-secondary' onclick='limpiarUsu()'><i class='fas fa-times'></i> Cancelar</button>";
    document.getElementById("txtBotones").innerHTML = boton;
}


function agregarUsu()
{
    let id = listaUsu.usuarios.length + 1;
    let nomU = document.getElementById("txtNombreUsuario").value;
    let conU = document.getElementById("txtContraUsuario").value;
    let nom = document.getElementById("txtNombre").value;
    let ape = document.getElementById("txtApellidos").value;
    let num = document.getElementById("txtNumTelefono").value;
    let est = document.getElementById("txtEstatusUsuario").value;
    let fot = document.getElementById("txtFotoUsuario").value;

    let sucursal = {"id": id, "nombreusuario": nomU, "contra": conU,
        "nombre": nom, "apellidos": ape, "telefono": num, "estatus": est, "foto": fot};

    listaUsu.usuarios.push(sucursal);

    Swal.fire({
        "tittle": "Insercion Correcta",
        "text": "El usuario ha sido insertado correctamente",
        "icon": "success"
    });

    limpiarUsu();
    imprimirTablaUsu();

}

function eliminarUsu(i)
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
            listaUsu.usuarios.splice(i, 1);
            imprimirTablaUsu();
            Swal.fire(
                    'Eliminado!',
                    'El usuario ha sido eliminada.',
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

function buscarUsu(i)
{
    let buscar = document.getElementById("txtBusqUsu").value;

    let posEncontrado = -1;

    for (let i = 0; i < listaUsu.usuarios.length; i++) {
        if (listaUsu.usuarios[i].id == buscar ||
                listaUsu.usuarios[i].nombre == buscar ||
                listaUsu.usuarios[i].apellidos == buscar)
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
        textoTabla += "<td>" + listaUsu.usuarios[posEncontrado].id + "</td>";
        textoTabla += "<td>" + listaUsu.usuarios[posEncontrado].nombreusuario + "</td>";
        textoTabla += "<td>******</td>";
        textoTabla += "<td>" + listaUsu.usuarios[posEncontrado].nombre + "</td>";
        textoTabla += "<td>" + listaUsu.usuarios[posEncontrado].apellidos + "</td>";
        textoTabla += "<td>" + listaUsu.usuarios[posEncontrado].telefono + "</td>";
        textoTabla += "<td>" + listaUsu.usuarios[posEncontrado].estatus + "</td>";
        textoTabla += "<td><img src='" + listaUsu.usuarios[posEncontrado].foto + "' alt='Foto' width='50' height='50'></td>";
        textoTabla += "<td><button type='button' class='btn btn-outline-success' onClick='modificarUsu(" + posEncontrado + ");'><i class='fas fa-edit'></i></button></td>";
        textoTabla += "<td><button type='button' class='btn btn-outline-danger' onClick='eliminarUsu(" + posEncontrado + ");'><i class='fas fa-trash-alt'></i></button></td>";
        textoTabla += "</tr>";
    }
    document.getElementById("tb-catUsuario").innerHTML = textoTabla;
}
function cargarImgUSU() {
    let fileInput = document.getElementById("idFotoUsuario");
    let file = fileInput.files[0];
    let reader = new FileReader();

    reader.onload = function (e) {
        document.getElementById("fotoUsuario").src = e.target.result;
        document.getElementById("txtFotoUsuario").value = e.target.result;
    };
    reader.readAsDataURL(file);
}
