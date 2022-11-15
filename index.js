alert('Hola! Bienvenido al comercio de autos a escala.')

class Vehiculos {
    constructor(id, marca, modelo, escala, precio, stock) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.escala = escala;
        this.precio = precio;
        this.stock = stock;
    }
    restaStock() {
        this.stock = this.stock - 1;
        alert(`El stock de ${this.marca} ${this.modelo} ${this.escala} se ha modificado`);
    }
}

const producto0 = new Vehiculos(0, 'Audi', 'R8', '1:32', 80, 12);
const producto1 = new Vehiculos(1, 'Audi', 'RS6', '1:32', 80, 15);
const producto2 = new Vehiculos(2, 'BMW', 'M5', '1:24', 100, 12);
const producto3 = new Vehiculos(3, 'BMW', '1M', '1:24', 100, 11);
const producto4 = new Vehiculos(4, 'Ferrari', '488 pista', '1:18', 200, 8);
const producto5 = new Vehiculos(5, 'Ferrari', 'Enzo', '1:18', 230, 20);
const producto6 = new Vehiculos(6, 'Lamborghini', 'Gallardo', '1:12', 350, 9);
const producto7 = new Vehiculos(7, 'Koenigsegg', 'Agera RS', '1:12', 400, 4);

const productos = [producto0, producto1, producto2, producto3, producto4, producto5, producto6, producto7]



const usuario = () => {
    let validacion = true
    let nombre = prompt('Cuál tu nombre?');
    let apellido = prompt('Cuál es tu apellido');

    while (validacion === true) {
        if (!isNaN(nombre)) {
            alert('Por favor ingresar un nombre válido');
            nombre = prompt('Indicanos tu nombre');
        } else if (!isNaN(apellido)) {
            alert('Por favor ingresar un apellido válido');
            apellido = prompt('Indicanos tu apellido')
        } else {
            alert(`Hola ${nombre} ${apellido}.`)
            validacion = false
            break
        }
    }
    return `${nombre} ${apellido}`
}


let user = usuario();

const carrito = []

let seleccionProductos = `${user} seleccioná un vehiculo de la lista, para visualizar el carrito 100`

const agregarCarrito = () => {
    for (item of productos) {
        seleccionProductos += ` \n${item.id} ${item.marca} ${item.modelo}, escala: ${item.escala} a $${item.precio} dolares, stock: ${item.stock}`
    }    
    let listado = parseInt(prompt(seleccionProductos));


    while (isNaN(listado)) {
        alert('Por favor ingresa una opcion correcta');
        listado = parseInt(prompt(seleccionProductos));
    }

    while (listado != 100) {
        switch (listado) {
            case 0:
                carrito.push(productos[0]);
                alert(`Se ha agregado ${productos[0].marca} ${productos[0].modelo} ${productos[0].escala} al carrito`)
                productos[0].restaStock();
                break;

            case 1:
                carrito.push(productos[1]);
                alert(`Se ha agregado ${productos[1].marca} ${productos[1].modelo} ${productos[1].escala} al carrito`)
                productos[1].restaStock();
                break;

            case 2:
                carrito.push(productos[2]);
                alert(`Se ha agregado ${productos[2].marca} ${productos[2].modelo} ${productos[2].escala} al carrito`)
                productos[2].restaStock();
                break;

            case 3:
                carrito.push(productos[3]);
                alert(`Se ha agregado ${productos[3].marca} ${productos[3].modelo} ${productos[3].escala} al carrito`)
                productos[3].restaStock();
                break;

            case 4:
                carrito.push(productos[4]);
                alert(`Se ha agregado ${productos[4].marca} ${productos[4].modelo} ${productos[4].escala} al carrito`)
                productos[4].restaStock();
                break;

            case 5:
                carrito.push(productos[5]);
                alert(`Se ha agregado ${productos[5].marca} ${productos[5].modelo} ${productos[5].escala} al carrito`)
                productos[5].restaStock();
                break;

            case 6:

                carrito.push(productos[6]);
                alert(`Se ha agregado ${productos[6].marca} ${productos[6].modelo} ${productos[6].escala} al carrito`)
                productos[6].restaStock();
                break;

            case 7:
                carrito.push(productos[7]);
                alert(`Se ha agregado ${productos[7].marca} ${productos[7].modelo} ${productos[7].escala} al carrito`)
                productos[7].restaStock();
                break;

            default:
                alert('No se encontró el producto seleccionado');
                break;

        }
        seguirComprando = parseInt(prompt('Desea agregar otro producto? 1.Si 2.No'));
        let noComprar = true

        while (noComprar === true) {
            if (seguirComprando === 1) {
                listado = parseInt(prompt(seleccionProductos));
                noComprar = false
            } else if (seguirComprando === 2) {
                alert('Entonces te mostraremos el carrito');
                noComprar = false
                listado = 100
                break;
            } else {
                alert('Coloca una opción válida')
                seguirComprando = parseInt(prompt('Desea agregar otro producto? 1.Si 2.No'));
            }
        }

    }

}
debugger



let prodTotal = 0


const mostrarCarrito = () => {
    let productoCarrito = `Los ${carrito.length} productos seleccionados son:`
    let totalCarrito = 0

    for (itemCarrito of carrito) {
        productoCarrito += ` \n${itemCarrito.marca} ${itemCarrito.modelo}, escala: ${itemCarrito.escala} $${itemCarrito.precio} dolares`
        totalCarrito = totalCarrito + itemCarrito.precio
    }

    let pago = parseInt(prompt(productoCarrito += `\n` + `Por un total de:  $${totalCarrito}. \nDesea continuar con el pago? 1.Si 2.No`))
    let aceptacion = true

    while (aceptacion === true) {
        switch (pago) {
            case 1: {
                descuentoUsuario();
                aceptacion = false
                break;
            }
            case 2: {
                agregarCarrito();
                mostrarCarrito();

                aceptacion = false
                break;
            }
            default: {
                alert('Opción inválida, por favor elegir una opcion correcta, gracias!')
                pago = parseInt(prompt('Desea continuar con el pago? 1.Si 2.No'))
                break;
            }
        }
    } 
    descuentoUsuario();
    prodTotal = totalCarrito
}



function descuentoUsuario() {
    let descuento = prodTotal * 0.25
    if (carrito.length >= 8) {
        let productoRegalo = productos.find(e => e.id === 7)
        alert(`WOW! como has llevado 8 o mas productos te regalamos:  ${productoRegalo.marca} ${productoRegalo.modelo}, escala: ${productoRegalo.escala}`)
    } else if (carrito.length >= 6) {
        let productoRegalo = productos.find(e => e.id == 0)
        alert(`Por llevar 5 o mas productos te regalamos: ${productoRegalo.marca} ${productoRegalo.modelo}, escala: ${productoRegalo.escala}`)
    } else if (prodTotal> 1000) {
        descuentoCompra = prodTotal - descuento
        alert(`Por tu compra mayor a $1000 tenes un descuento de $${descuento}, te derivamos para hacer el pago, muchas gracias! \nEl total de tu compra se ha actualizado a $${descuentoCompra}`);
    }    
} 




function pagoUsuario() {
    let medioPago = parseInt(prompt(`${user} por favor, selecciona con que medio queres abonar: \n1.Tarjeta de crédito\n2.Tarjeta de débito (10% de descuento)`))
    let pagando = true
    let numeroTarjeta
    let nombreTarjeta
    let codSegTarjeta
    let fechaVencTarjeta
    let confirmacion = true


    while (pagando === true) {
            
        if (medioPago === 1 || medioPago === 2) {
            numeroTarjeta = parseInt(prompt('Ingresa el número de tu tarjeta'))
            nombreTarjeta = parseInt(prompt('Ingresa el nombre de tu tarjeta'))
            codSegTarjeta = parseInt(prompt('Ingresa el código de seguridad de tu tarjeta'))
            fechaVencTarjeta = parseInt(prompt('Ingresa la fecha de vencimiento de tu tarjeta'))
            
            while (confirmacion === true) {
                if (isNaN(numeroTarjeta, codSegTarjeta, fechaVencTarjeta) || !isNaN(nombreTarjeta)) {
                    prompt('Los datos ingresados son incorrectos, por favor inténtelo de nuevo. Gracias!')
                    confirmacion = false
                } else {
                    if(medioPago === 1){
                        alert(`Su pago por $${prodTotal} ha sido realizado con éxito, muchas gracias!`)
                        confirmacion = false
                        pagando = false                       
                    }else if(medioPago === 2){
                        let descuentoDebito = prodTotal * 0.10
                        let descuentoDebitoFinal = prodTotal - descuentoDebito
                        alert(`Su pago por $${descuentoDebitoFinal} ha sido realizado con éxito, muchas gracias!`)
                        confirmacion = false
                        pagando = false
                    }                    
                }
            }         
        }else{
            alert('El datos ingresado no es un medio de pago, seleccionar una opcion correcta. Gracias!')
            medioPago = parseInt(prompt(`${user} por favor, selecciona con que medio queres abonar: \n1.Tarjeta de crédito\n2.Tarjeta de débito`))
        }
    }     
}


agregarCarrito();
mostrarCarrito();
debugger
pagoUsuario();
alert('Gracias por utilizar nuestra web, vuelva pronto!')

