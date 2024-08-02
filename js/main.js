const productos = [
    {
        id: 1,
        nombre: "Camiseta",
        precio: 20
    },
    {
        id: 2,
        nombre: "Pantalón",
        precio: 35
    },
    {
        id: 3,
        nombre: "Zapatos",
        precio: 43
    },
    {
        id: 4,
        nombre: "Cartera LV",
        precio: 485
    }
];

class Carrito {
    constructor() {
        this.items = [];
    }

    agregarProducto(producto) {
        this.items.push(producto);
        alert(producto.nombre + " $" + producto.precio + " se ha agregado correctamente al carrito.");
        this.mostrarTotal();
    }

    eliminarProducto(id) {
        const index = this.items.findIndex(producto => producto.id === id);
        if (index !== -1) {
            const producto = this.items.splice(index, 1)[0];
            alert(producto.nombre + " se ha eliminado correctamente del carrito.");
        } else {
            alert("El producto no se ha encontrado en el carrito.");
        }
    }

    mostrarProductos() {
        if (this.items.length === 0) {
            alert("El carrito se encuentra vacío.");
            return;
        }
        let lista = "Productos en el carrito:\n";
        this.items.forEach((producto, index) => {
            lista += (index + 1) + ". " + producto.nombre + " - $" + producto.precio + "\n";
        });
        alert(lista);
    }

    mostrarTotal() {
        let total = this.items.reduce((acc, producto) => acc + producto.precio, 0);
        alert("Total a pagar: $" + total);
    }

    finalizarCompra() {
        if (this.items.length === 0) {
            alert("El carrito está vacío.");
            return;
        }
        this.mostrarTotal();
        let nombre;
        let nombreValido = false;
        while (!nombreValido) {
            nombre = prompt("Por favor, ingresa tu nombre:");
            if (nombre && nombre.match(/^[A-Za-z\s]+$/)) {
                nombreValido = true;
            } else {
                alert("El nombre no puede estar vacío o contener números. Por favor, ingresa tu nombre.");
            }
        }

        let direccion;
        let direccionValida = false;
        while (!direccionValida) {
            direccion = prompt("Ingresa tu dirección:");
            if (direccion.trim() !== '') {
                direccionValida = true;
            } else {
                alert("La dirección no puede estar vacía. Por favor, ingresa tu dirección.");
            }
        }
        alert("Gracias por su compra, " + nombre + ". Su pedido será enviado a " + direccion + ".");
        this.items = [];
    }
}

const carrito = new Carrito();

function mostrarMenu() {
    return prompt(
        "¡Bienvenido al carrito de compras de nuestra tienda!\n" +
        "1. Camiseta $20.00\n" +
        "2. Pantalón $35.00\n" +
        "3. Zapatos $43.00\n" +
        "4. Cartera LV $485.00\n" +
        "5. Eliminar Producto\n" +
        "6. Ver Carrito\n" +
        "7. Finalizar compra\n" +
        "Ingresa una opción:"
    );
}

function manejarOpcion(opcion) {
    switch (opcion) {
        case '1':
            carrito.agregarProducto(productos[0]);
            break;
        case '2':
            carrito.agregarProducto(productos[1]);
            break;
        case '3':
            carrito.agregarProducto(productos[2]);
            break;
        case '4':
            carrito.agregarProducto(productos[3]);
            break;
        case '5':
            if (carrito.items.length === 0) {
                alert("El carrito está vacío. No se puede eliminar ningún producto.");
            } else {
                const idEliminar = parseInt(prompt("Ingrese el ID del producto a eliminar (1 para Camiseta, 2 para Pantalón, 3 para Zapatos, 4 para Cartera LV):"));
                carrito.eliminarProducto(idEliminar);
            }
            break;
        case '6':
            carrito.mostrarProductos();
            break;
        case '7':
            carrito.finalizarCompra();
            break;
        default:
            alert("Opción no válida. Intente de nuevo.");
    }
}

function volverAComprar(){
    let volverComprar = prompt("¿Deseas volver a comprar? Escribe 'si', caso contrario ingresa cualquier letra o número para salir.");
    if (volverComprar.toLowerCase() === 'si') {
        carritoDeCompras();
    }
    return
}

function carritoDeCompras() {
    let opcion;
    do {
        opcion = mostrarMenu();
        manejarOpcion(opcion);
    } while (opcion !== '7');
    volverAComprar();
}

carritoDeCompras();