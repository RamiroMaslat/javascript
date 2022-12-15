

class Vehiculos {
    constructor(id, marca, modelo, escala, precio, stock, imagen) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.escala = escala;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen
    }
}
const cotizacion = document.querySelector('.cotizacion')


const cargarCotizaciones = () =>{
    fetch('https://criptoya.com/api/dolar')
    .then(Response => Response.json())
    .then(({oficial, blue}) =>{
    cotizacion.innerHTML = `
    <h4>Cotización del Dólar</h4>
    <p>Dólar Oficial: $${oficial}</p>
    <p>Dólar Blue: $${blue}</p>
    `     
    })         
     
}
cargarCotizaciones();


setInterval(() => {
    cargarCotizaciones()
}, 30000);





const producto0 = new Vehiculos(0, 'Lexus', 'LFA', '1:32', 80, 12, "http://autoartmodels.com/shop/images/project/78852w-.jpg");
const producto1 = new Vehiculos(1, 'Nissan', 'Skyline GT-R', '1:32', 80, 15, "http://autoartmodels.com/shop/images/project/77407w-.jpg");
const producto2 = new Vehiculos(2, 'Corvette', 'C7 Grand Sport', '1:24', 100, 12, "https://autoartmodels.de/wp-content/uploads/2020/04/71272a-scaled.jpg");
const producto3 = new Vehiculos(3, 'Dodge', 'Challenger SRT Hellcat', '1:24', 100, 11, "https://autoartmodels.de/wp-content/uploads/2020/04/71739a-scaled.jpg");
const producto4 = new Vehiculos(4, 'Lamborghini', 'Huracan Performante', '1:18', 200, 8, "http://autoartmodels.com/shop/images/project/79155w-.jpg");
const producto5 = new Vehiculos(5, 'Lamborghini', 'Centenario', '1:18', 230, 20, "http://autoartmodels.com/shop/images/project/79202w.jpg");
const producto6 = new Vehiculos(6, 'Porsche', 'GT2 RS', '1:12', 350, 9, "http://autoartmodels.com/shop/images/project/78174w.jpg");
const producto7 = new Vehiculos(7, 'Koenigsegg', 'Agera RS', '1:12', 400, 4, "http://autoartmodels.com/shop/images/project/79024-a.jpg");

const productos = [producto0, producto1, producto2, producto3, producto4, producto5, producto6, producto7]




const seccionProductos = document.getElementById('productSection')

const creandoCartas = () =>{
    productos.forEach(product => {
        seccionProductos.innerHTML +=
            `  
        <div id="producto${product.id}" class="card" style="width: 20rem;"> 
            <img src="${product.imagen}" class="card-img-top" alt="${product.marca} ${product.modelo}">       
            <div class="card-body px-1 d-flex flex-column align-items-center">
                <h5 class="card-title">${product.marca} ${product.modelo}</h5>
                <p class="card-text">Escala: ${product.escala}</p>
                <p class="card-text">Precio: $${product.precio}</p>
                <p class="card-text stock">Stock: ${product.stock}</p>
                <button id=${product.id} class="btn btn-primary w-50 agregarProducto">Agregar al carrrito</button>
            </div>
        </div>    
        `
    });
}
creandoCartas();


const carrito = JSON.parse(localStorage.getItem('carrito')) || []
const totalCarrito = document.querySelector('#carrito')
const agregarCarrito = document.querySelectorAll('.agregarProducto')
const carritoContenedor = document.querySelector('.modal .modal-body')
const visualizarCarrito = document.querySelector('.botonCarritoLogo')
const botonVaciarCarrito = document.querySelector('#vaciarCarrito')
const modalTotal = document.querySelector('.modal-total')





sumaStorage = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
    let sumaCompra = 0
    let valores1 = carrito.map(prod => prod.precio * prod.cantidad)
    valores1.forEach(valor => {
        sumaCompra += valor
    })
    totalCarrito.innerHTML =
        `
        <p>Total: $${sumaCompra}</p>
    `;
    valorFinal = sumaCompra
};

let totalCompra = sumaStorage();


totalCarrito.innerHTML =
    `
<p>Total: $${valorFinal}</p>
`;


agregarCarrito.forEach(boton => {
    boton.onclick = () => {
        const stock = document.querySelector('.stock')
        let productoSeleccionado = productos.find(prod => prod.id === parseInt(boton.id))
        let productoCarrito = { ...productoSeleccionado, cantidad: 1 }
        let indexCarrito = carrito.findIndex(prod => prod.id === productoCarrito.id)      

        if (indexCarrito === -1) {
            carrito.push(productoCarrito);  

        } else {
            carrito[indexCarrito].cantidad++           
        }        
        
        sumaStorage();
        productoSeleccionado.stock-- 
        stock.innerHTML = `
        <p class="card-text stock">Stock: ${productoSeleccionado.stock}</p>
        `; 

        Toastify({
            text: `Producto ${productoSeleccionado.marca} ${productoSeleccionado.modelo} ${productoSeleccionado.escala} agregado al carrito`,
            duration: 3000,
            style: {
                background: "linear-gradient(to right, #4b4949, #062452 , #4b4949)"
            }
        }).showToast();
        
    }
})

const productoEnCarrito = () => {

    if(carrito.length >= 1){
    carritoContenedor.innerHTML = "";

    carrito.forEach(product => {
        carritoContenedor.innerHTML +=
            `
        <div class="card cardCarrito" style="width: 28rem;">            
            <div class="card-body">
                <img src="${product.imagen}" class="card-img-top">
                <h5 class="card-title">${product.marca} ${product.modelo}</h5>
                <p class="card-text">Escala: ${product.escala}</p>
                <p class="card-text">Precio: $${product.precio}</p>
                <p class="card-text">Cantidad: ${product.cantidad}</p>                               
                <button id=${product.id} class="btn btn-primary eliminarProducto">Eliminar producto</button>                
            </div>
        </div> 
        `
    });
    modalTotal.innerHTML = `
    <p>Total: $${valorFinal}
    `;
    }else{               
    carritoContenedor.innerHTML = `
        No tienes productos Seleccionados!
        `   
    modalTotal.innerHTML = `
    <p>Total: $${valorFinal}
    `;
    }

}


const eliminandoProducto = () => {

    const eliminarProducto = document.querySelectorAll('.eliminarProducto')

    eliminarProducto.forEach(btn => {
        btn.onclick = () => {
            const productoAEliminar = carrito.find(e => e.id === parseInt(btn.id))
            const indice = carrito.indexOf(productoAEliminar) 
            if(productoAEliminar.cantidad > 1){
                productoAEliminar.cantidad --
                valorFinal = valorFinal -= productoAEliminar.precio
                totalCarrito.innerHTML =
                    `
                <p>Total: $${valorFinal}</p>
                `;
            }else{
                carrito.splice(indice, 1)
                valorFinal = valorFinal -= productoAEliminar.precio
                totalCarrito.innerHTML =
                    `
                <p>Total: $${valorFinal}</p>
                `;
            }         
            productoEnCarrito();
            eliminandoProducto(); 
            localStorage.setItem('carrito', JSON.stringify(carrito))                      
        }        
    })

}

visualizarCarrito.onclick = () => {
    totalCarrito.innerHTML += ``;
    productoEnCarrito();
    eliminandoProducto();

};

const vaciarCarrito = () => {
    carrito.length = [];
    valorFinal = 0;
    totalCarrito.innerHTML =
        `
    <p>Total: $${valorFinal}</p>
    `;
    localStorage.setItem('carrito', JSON.stringify(carrito));
    modalTotal.innerHTML = `
    <p>Total Dolar: $${valorFinal}</p>    
    `;
}



botonVaciarCarrito.onclick = () => {
    vaciarCarrito();
}



