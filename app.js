// FILTRAR POR MARCA

function filtrarPorMarca(productos, marca) {
    let productosFiltrados = productos.filter(producto => producto.marca.toLowerCase() == marca.toLowerCase())
    if (productosFiltrados.length === 0) {
        alert('no se encontraron productos de ' + marca.toUpperCase())
    }
        return productosFiltrados
}

// ORDENAR PRODUCTOS DE  MENOR A MAYO

function ordenarDeMenorAmayorPrecio(productos) {
    return productos.slice().sort((a,b) => a.precio - b.precio)
}

// ORDENADOR DE MAYOR A MENOR

function ordenarDeMayorAMenorPrecio(productos) {
    return productos.slice().sort(( a , b ) => b.precio - a.precio)
}

// BUSCAR UN PRODUCTO ESPECIFICO

function buscarPorNombre(productos, nombre) {
    let productoEspecico = productos.find(elemnto => elemnto.modelo.toUpperCase()=== nombre.toUpperCase())
    return productoEspecico || []
}

// CREAMOS UNA CLASE PARA CARGAR PRODUCTOS DE MANERA DINAMICA Y TAMBIEN UNA FUNCION

class AgregarProductos {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

function agregarProductos(cantidadProductos) {
    let carrito = [];    
    for (let i = 0; i < cantidadProductos; i++) {
        let nombre = prompt('Ingrese el nombre del producto').toLowerCase();
        let precio = parseFloat(prompt('Ingrese el precio del producto'));
        
        let producto = new AgregarProductos(nombre, precio);
        carrito.push(producto);
    }
    return carrito;
}


// REDUCIMOS EL TODOS LOS PRECIOS A EL TOTAL

function total(productos){
    let preciototal = productos.reduce((acumulador, producto)=> acumulador + producto.precio, 0)
    return preciototal
}

// CREAMOS UN OBJETO LITERAL
let productos = [
    { marca: 'samsung', modelo: 'S23', precio: 1500 },
    { marca: 'samsung', modelo: 'S24', precio: 1700},
    { marca: 'samsung', modelo: 'S23 FE', precio: 1233 },
    { marca: 'motorola', modelo: 'G60S', precio: 800 },
    { marca: 'motorola', modelo: 'G54 5G', precio: 720 },
    { marca: 'motorola', modelo: 'G72', precio: 700 },
    { marca: 'apple', modelo: '15 PRO MAX', precio: 1800 },
    { marca: 'apple', modelo: '13', precio: 920 },
    { marca: 'apple', modelo: '11 MINI', precio: 735 },
    { marca: 'samsung', modelo: 'S24', precio: 1800 }
]

// SALIDAS POR CONSOLA Y ALERTS

// FILTRAMO POR MARCA-----------------------------------
let marcaABuscar = prompt('por favor ingrese la marca que desea buscar, motorola, apple, samsung o xiaomi').toLowerCase()
let productosFiltrados = filtrarPorMarca(productos, marcaABuscar)
console.log('LOS PRODUCTOS ENCONTRADOS SON: ')
console.log(productosFiltrados)

// LOS ORDENAMOS DE MENOR A MAYOR PRECIO----------------------

console.log('ORDENADOS DE MENOR A MAYOR')
console.log(ordenarDeMenorAmayorPrecio(productos))

// LOS ORDENAMOS DE MAYOR A MENOR PRECIO ---------------------------

console.log('ORDENADOS DE MAYOR A MENOR')
console.log(ordenarDeMayorAMenorPrecio(productos))

// BUSCAMOS UN PRODUCTO ESPECIFICO --------------

let productoAbuscar = prompt('por favor ingrese el nombre del prodcuto que desea buscar: S23, S24, S23 FE' )
console.log('PRODUCTO ENCONTRADO: ' )
console.log(buscarPorNombre(productos, productoAbuscar))

// AGREGAMOS STOCK DE PRODUCTOS DE MANERA DINAMICA


let productosEnCarrito = agregarProductos(parseInt(prompt('por favor, ingrese la cantidad de productos que desea cargar')));
console.log('PRODUCTOS EN EL CARRITO')
console.log(productosEnCarrito)

// REDUCIMOS EL VALOR DEL STOCK EN UN SOLO VALOR TOTAL.

console.log('EL PRECIO TOTAL ES')
console.log(total(productosEnCarrito))