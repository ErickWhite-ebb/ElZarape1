function cargarMSucursal()
{
    fetch("sucursal.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("contenedor-principal").innerHTML = data;
                cargarCatalogo();
            });
}

function cargarMUsuario()
{
    fetch("usuario.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("contenedor-principal").innerHTML = data;
                cargarCatalogoUsu();
            });
}

function cargarMAlimento()
{
    fetch("alimento.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("contenedor-principal").innerHTML = data;
                cargarCatalogoAlim();
            });
}

function cargarMBebida()
{
    fetch("bebida.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("contenedor-principal").innerHTML = data;
                cargarCatalogoBeb();
            });
}

function cargarMCombo()
{
    fetch("combo.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("contenedor-principal").innerHTML = data;
                cargarCatalogoComb();
            });
}



