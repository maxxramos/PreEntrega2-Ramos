let inventario = [];

function agregarProducto() {
    let nombre = prompt("Ingrese el nombre del producto:");
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));
    let cantidad = parseInt(prompt("Ingrese la cantidad en stock:"));

    let producto = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    };

    inventario.push(producto);
    alert(`Producto ${nombre} agregado al inventario.`);
}

// Función para buscar un producto por nombre
function buscarProducto() {
    let nombre = prompt("Ingrese el nombre del producto que desea buscar:");

    let resultado = inventario.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());

    if (resultado) {
        alert(`Producto encontrado:\nNombre: ${resultado.nombre}\nPrecio: ${resultado.precio}\nCantidad en stock: ${resultado.cantidad}`);
    } else {
        alert("Producto no encontrado.");
    }
}

// Función para actualizar la cantidad de un producto
function actualizarStock() {
    let nombre = prompt("Ingrese el nombre del producto que desea actualizar:");

    let producto = inventario.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());

    if (producto) {
        let nuevaCantidad = parseInt(prompt("Ingrese la nueva cantidad en stock:"));
        producto.cantidad = nuevaCantidad;
        alert(`Stock actualizado para ${producto.nombre}. Nueva cantidad: ${producto.cantidad}`);
    } else {
        alert("Producto no encontrado.");
    }
}

// Función para mostrar todos los productos en el inventario
function mostrarInventario() {
    if (inventario.length === 0) {
        alert("El inventario está vacío.");
    } else {
        let inventarioString = "Inventario actual:\n";
        inventario.forEach(producto => {
            inventarioString += `\nNombre: ${producto.nombre}\nPrecio: ${producto.precio}\nCantidad en stock: ${producto.cantidad}\n`;
        });
        alert(inventarioString);
    }
}

// Menú de opciones
function menu() {
    let opcion = parseInt(prompt("Seleccione una opción:\n1. Agregar Producto\n2. Buscar Producto\n3. Actualizar Stock\n4. Mostrar Inventario\n5. Salir"));

    switch (opcion) {
        case 1:
            agregarProducto();
            break;
        case 2:
            buscarProducto();
            break;
        case 3:
            actualizarStock();
            break;
        case 4:
            mostrarInventario();
            break;
        case 5:
            alert("Saliendo del sistema de gestión de inventario.");
            return;  
        default:
            alert("Opción inválida, por favor intente de nuevo.");
    }

    menu();
}


menu();
