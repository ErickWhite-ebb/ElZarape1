let listaComb;
let productos = [];

const listaAlim = {
  alimentos:[
    {"id":1, "nombre":"Chilaquiles", 
     "descripcion": "Chilaquiles picantes, rojos o verdes, pueden ser acompa?ados de pollo o frijoles",
     "precio":"120",
     "categoria":"Platillo"
    },
    {"id":2, "nombre":"Huarache", 
     "descripcion": "Delicioso Huarache, puede ser de los guisados del dia",
     "precio":"135",
     "categoria":"Platillo"
    },
    {"id":3, "nombre":"Molletes", 
     "descripcion": "Molletes con salsa especial de la casa",
     "precio":"115",
     "categoria":"Platillo"
    },
    {"id":4, "nombre":"Fruta picada", 
     "descripcion": "Deliciosa fruta fresca de temporada picada en cubos",
     "precio":"80",
     "categoria":"Postre"
    }
  ]
};

const listaBebi = {
  bebidas:[
    {"id":1, "nombre":"Cafe de Olla", 
     "descripcion": "Delicioso cafe de olla recien hecho",
     "precio":"25",
     "categoria":"Cafe"
    },
    {"id":2, "nombre":"Agua de sabor", 
     "descripcion": "Delciosa agua natural de sabor, puede ser de: Horchata, Jamaica, Limon o Melon",
     "precio":"20",
     "categoria":"Bebida"
    },
    {"id":3, "nombre":"Jugo natural", 
     "descripcion": "Delicioso jugo natural, puede ser verde, naranja o de la seccion de frutas del dia",
     "precio":"35",
     "categoria":"Jugo"
    }
  ]
};

function cargarCatalogoComb() {
  listaComb = {
    combos:[
      {"id":1,"nombre":"Levanta muertos", "alimentos":["Chilaquiles"], 
       "bebidas":["Cafe de Olla"], "descripcion": "Excelente para recuperarse", 
       "subtotal":calcularSubt(["Chilaquiles", "Cafe de Olla"]), 
       "total": calcularTotal(calcularSubt(["Chilaquiles", "Cafe de Olla"]))},
      {"id":2,"nombre":"Combo familiar", "alimentos":["Huarache", "Molletes", "Fruta Picada"], 
       "bebidas":[""], "descripcion": "Para un desayuno en familia", 
       "subtotal":calcularSubt(["Huarache", "Molletes", "Fruta Picada", "Cafe de Olla", "Agua de sabor"]), 
       "total": calcularTotal(calcularSubt(["Huarache", "Molletes", "Fruta Picada", "Cafe de Olla", "Agua de sabor"]))},
      {"id":3,"nombre":"Desayuno ligero", "alimentos":["Fruta picada"], 
       "bebidas":["Jugo natural"], "descripcion": "Para aquellos con poca hambre", 
       "subtotal":calcularSubt(["Fruta picada", "Jugo natural"]), 
       "total": calcularTotal(calcularSubt(["Fruta picada", "Jugo natural"]))}
    ]
  };
  llenarSelectProd();
  imprimirTablaComb();
}

function llenarSelectProd() {
  const selectProd = document.getElementById("selectProd");
  selectProd.innerHTML = "";
  listaAlim.alimentos.forEach(alimento => {
    const option = document.createElement("option");
    option.value = alimento.nombre;
    option.textContent = alimento.nombre;
    selectProd.appendChild(option);
  });
  listaBebi.bebidas.forEach(bebida => {
    const option = document.createElement("option");
    option.value = bebida.nombre;
    option.textContent = bebida.nombre;
    selectProd.appendChild(option);
    });
  
}

function anadirProd() {
  const selectProd = document.getElementById("selectProd");
  const productoNom = selectProd.value;

  let producto = listaAlim.alimentos.find(p => p.nombre === productoNom);
  if (!producto) {
    producto = listaBebi.bebidas.find(p => p.nombre === productoNom);
  }
  if (producto && !productos.includes(producto)) {
    productos.push(producto);

    const li = document.createElement("li");
    li.id = `producto-${producto.id}`; // Añade un ID único al elemento de lista para fácil acceso
    li.innerHTML = `
      <span>${producto.nombre} - $${producto.precio}</span>
      <button type="button" class="btn btn-sm btn-danger ms-2" onclick="eliminarProd(${producto.id})"><i class="fa-solid fa-trash-can"></i></button>
    `;
    document.getElementById("listaProd").appendChild(li);
  }
}

function eliminarProd(productoId) {
  productos = productos.filter(p => p.id !== productoId);  // Usa el ID para filtrar el producto a eliminar

  // Actualiza la visualización
  imprimirProd();
}

function imprimirProd() {
  const listaProd = document.getElementById("listaProd");
  listaProd.innerHTML = '';  // Limpia la lista actual

  productos.forEach(p => {
    const li = document.createElement("li");
    li.id = `producto-${p.id}`;
    li.innerHTML = `
      <span>${p.nombre} - $${p.precio}</span>
      <button type="button" class="btn btn-sm btn-danger ms-2" onclick="eliminarProd(${p.id})"><i class="fa-solid fa-trash-can"></i></button>
    `;
    listaProd.appendChild(li);
  });
}

function calcularSubt(productosSeleccionados) {
  let subtotal = 0;
  productosSeleccionados.forEach(producto => {
    let encontrado = listaAlim.alimentos.find(alimento => alimento.nombre === producto);
    if (encontrado) {
      subtotal += parseInt(encontrado.precio);
    } else {
      encontrado = listaBebi.bebidas.find(bebida => bebida.nombre === producto);
      if (encontrado) {
        subtotal += parseInt(encontrado.precio);
      }
    }
  });
  return subtotal;
}

function calcularTotal(subtotal) {
  const descuento = subtotal * 0.05;
  return subtotal - descuento;
}

function imprimirTablaComb() {
  let contenido = "";
  listaComb.combos.forEach((combo,index) => {
    let renglon = "<tr>";
    renglon += "<td>" + combo.id + "</td>";
    renglon += "<td>" + combo.nombre + "</td>";
    renglon += "<td>" + combo.alimentos.join(", ") + "</td>";
    renglon += "<td>" + combo.bebidas.join(", ") + "</td>";
    renglon += "<td>" + combo.descripcion + "</td>";
    renglon += "<td>" + combo.subtotal + "</td>";
    renglon += "<td>" + combo.total + "</td>";
    renglon += "<td><button class='btn btn-outline-success' onclick='modificarComb(" + index + ")'><i class='fas fa-edit'></i></button></td>";
    renglon += "<td><button class='btn btn-outline-danger' onclick='eliminarComb(" + index + ")'><i class='fas fa-trash-alt'></i></button></td>";
    renglon += "</tr>";
    contenido += renglon;
  });
  document.getElementById("tbCatComb").innerHTML = contenido;
}

function modificarComb(i) {
  const combo = listaComb.combos[i];
  document.getElementById("txtIdComb").value = combo.id;
  document.getElementById("txtNom").value = combo.nombre;
  document.getElementById("txtDesc").value = combo.descripcion;
  productos = [];
  combo.alimentos.forEach(nombreProducto => {
    const producto = listaAlim.alimentos.find(p => p.nombre === nombreProducto) || listaBebi.bebidas.find(p => p.nombre === nombreProducto);
    if (producto) {
      productos.push(producto);
    }
  });

  imprimirProd();
  x = i;
  
   let boton = "<button type='button' class='btn btn-success' onClick='cambiarComb();'>Modificar</button></td> \n\
                 <button type='button' class='btn btn-secondary' onclick='cancelarComb()'><i class='fas fa-times'></i> Cancelar</button>";
    document.getElementById("txtBotones").innerHTML = boton;
}

function cancelarComb() {
  document.getElementById("txtIdComb").value = "";
  document.getElementById("txtNom").value = "";
  document.getElementById("txtDesc").value = "";
  productos = [];
  imprimirProd();
  x = -1;  
  
  let boton = "<button type='button' class='btn btn-success' onClick='agregarComb();'>Insertar</button></td> \n\
                 <button type='button' class='btn btn-secondary' onclick='cancelarComb()'><i class='fas fa-times'></i> Cancelar</button>";
    document.getElementById("txtBotones").innerHTML = boton;
}

function agregarComb() {
  const id = listaComb.combos.length ? listaComb.combos[listaComb.combos.length - 1].id + 1 : 1;
  const nombre = document.getElementById("txtNom").value;
  const descripcion = document.getElementById("txtDesc").value;
  const subtotal = calcularSubt(productos.map(p => p.nombre));
  const total = calcularTotal(subtotal);

  const combo = {
    id,
    nombre,
    alimentos: productos.filter(p => listaAlim.alimentos.find(a => a.nombre === p.nombre)).map(p => p.nombre),
    bebidas: productos.filter(p => listaBebi.bebidas.find(b => b.nombre === p.nombre)).map(p => p.nombre),
    descripcion,
    subtotal,
    total
  };

  listaComb.combos.push(combo);

  Swal.fire({
    title: "Insercion Correcta",
    text: "El combo ha sido insertado correctamente",
    icon: "success"
  });

  cancelarComb();
  imprimirTablaComb();
}

function cambiarComb() {
  if (x === -1) return;

  const id = parseInt(document.getElementById("txtIdComb").value, 10);
  const nombre = document.getElementById("txtNom").value;
  const descripcion = document.getElementById("txtDesc").value;
  const subtotal = calcularSubt(productos.map(p => p.nombre));
  const total = calcularTotal(subtotal);

  const combo = {
    id,
    nombre,
    alimentos: productos.filter(p => listaAlim.alimentos.find(a => a.nombre === p.nombre)).map(p => p.nombre),
    bebidas: productos.filter(p => listaBebi.bebidas.find(b => b.nombre === p.nombre)).map(p => p.nombre),
    descripcion,
    subtotal,
    total
  };

  listaComb.combos[x] = combo;

  Swal.fire({
    title: "Cambio Correcto",
    text: "El combo ha sido actualizado correctamente",
    icon: "success"
  });

  cancelarComb();
  imprimirTablaComb();
  let boton = "<button type='button' class='btn btn-success' onClick='agregarComb();'>Insertar</button></td> \n\
                 <button type='button' class='btn btn-secondary' onclick='cancelarComb()'><i class='fas fa-times'></i> Cancelar</button>";
    document.getElementById("txtBotones").innerHTML = boton;
}

function eliminarComb(i) {
  Swal.fire({
    title: "Desea eliminar este combo?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "S?",
    denyButtonText: "No"
  }).then((result) => {
    if (result.isConfirmed) {
      listaComb.combos.splice(i, 1);
      Swal.fire({
        title: "Eliminacion Correcta",
        text: "El combo ha sido eliminado correctamente",
        icon: "success"
      });
      imprimirTablaComb();
    } else if (result.isDenied) {
      Swal.fire("Eliminacion cancelada", "", "info");
    }
  });
}

function buscarComb() {
  const busq = document.getElementById("txtBusqComb").value.toLowerCase();
  let contenido = "";
  listaComb.combos.forEach((combo, index) => {
    if (combo.nombre.toLowerCase().includes(busq) || combo.descripcion.toLowerCase().includes(busq)) {
      contenido += "<tr>";
      contenido += "<td>" + combo.id + "</td>";
      contenido += "<td>" + combo.nombre + "</td>";
      contenido += "<td>" + combo.alimentos + "</td>";
      contenido += "<td>" + combo.bebidas + "</td>";
      contenido += "<td>" + combo.descripcion + "</td>";
      contenido += "<td>" + combo.subtotal + "</td>";
      contenido += "<td>" + combo.total + "</td>";
      contenido += "<td><button type='button' class='btn boton2' onclick='modificarComb(" + index + ");'><i class='fa-solid fa-pen'></i></button></td>";
      contenido += "<td><button type='button' class='btn boton2' onclick='eliminarComb(" + index + ");'><i class='fa-solid fa-trash-can'></i></button></td>";
      contenido += "</tr>";
    }
  });
  document.getElementById("tbCatComb").innerHTML = contenido;
}

cargarCatalogoComb();