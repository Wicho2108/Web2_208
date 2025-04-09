let inventario = [];
function mostrarMenu() {
    return parseInt(prompt(
        "Opciones disponibles\n"+
        "1.- Agregar producto\n" +
        "2.- Mostrar producto\n" +
        "3.- Buscar producto por nombre\n" +
        "4.- Salir\n"+
        "Elejir una opcion"
    ));
}

function iniciarPrograma() {
    let continuar=true;
    while(continuar) {
        let opcion= mostrarMenu();
        switch (opcion) {
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarProducto();
                break;
            case 3:
                buscarProducto();
                break;
            case 4:
                alert("Saliendo del programa...");
                continuar=false;
                break;
            default:
                alert("Opcion no valida, unicamente del 1 - 4");

        }
    }
    alert("Programa Finalizado");
}

function agregarProducto() {
    let nombre=prompt("Introduce el nombre del producto: ");
    let cantidad = parseInt(prompt("Introduce la cantidad del producto: "));
    let precio = parseFloat(prompt("Introduce el precio del producto: "));  // Cambiar a parseFloat
        
        if (!isNaN(cantidad) && !isNaN(precio) && cantidad > 0 && precio > 0) {  // Validar números
        let producto={
            nombre: nombre,
            cantidad: cantidad,
            precio: precio,
        }
        inventario.push(producto);
        alert("Producto agregado");
    } else {
        alert("La cantidad y precio debe ser mayor a 0");
    }
}

function mostrarProducto() {
    if (inventario.length === 0) {
        alert("No hay productos en el inventario");
    } else {    
        let mensaje = 'Productos en inventario\n';
        for (let i = 0; i < inventario.length; i++) {
            mensaje += `Producto ${i + 1}\n` +
           `Nombre: ${inventario[i].nombre}\n` +  
           `Cantidad: ${inventario[i].cantidad}\n` + 
           `Precio: ${inventario[i].precio}\n` +
           "_\n";
        }
        alert(mensaje);
    }
}   

function buscarProducto() {
    let nombreBuscado = prompt("Introduce el nombre del producto que deseas buscar: ");
    let encontrado = false;

    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].nombre.toLowerCase() === nombreBuscado.toLowerCase()) {
            alert(`Producto encontrado:\n` +
                `Nombre: ${inventario[i].nombre}\n` +
                `Cantidad: ${inventario[i].cantidad}\n` +
                `Precio: ${inventario[i].precio}`);
            encontrado = true;
            break;

        }
    }

    if (!encontrado) {
        alert("Producto no encontrado en el inventario");
    }
}

iniciarPrograma();