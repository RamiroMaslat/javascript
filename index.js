

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
    restaStock() {
        this.stock = this.stock - 1;
        alert(`El stock de ${this.marca} ${this.modelo} ${this.escala} se ha modificado`);
    }
}

const producto0 = new Vehiculos(0, 'Lexus', 'LFA', '1:32', 80, 12,"http://autoartmodels.com/shop/images/project/78852w-.jpg");
const producto1 = new Vehiculos(1, 'Nissan', 'Skyline GT-R', '1:32', 80, 15, "http://autoartmodels.com/shop/images/project/77407w-.jpg");
const producto2 = new Vehiculos(2, 'Corvette', 'C7 Grand Sport', '1:24', 100, 12, "https://autoartmodels.de/wp-content/uploads/2020/04/71272a-scaled.jpg");
const producto3 = new Vehiculos(3, 'Dodge', 'Challenger SRT Hellcat', '1:24', 100, 11, "https://autoartmodels.de/wp-content/uploads/2020/04/71739a-scaled.jpg");
const producto4 = new Vehiculos(4, 'Lamborghini', 'Huracan Performante', '1:18', 200, 8, "http://autoartmodels.com/shop/images/project/79155w-.jpg");
const producto5 = new Vehiculos(5, 'Lamborghini', 'Centenario', '1:18', 230, 20, "http://autoartmodels.com/shop/images/project/79202w.jpg");
const producto6 = new Vehiculos(6, 'Porsche', 'GT2 RS', '1:12', 350, 9, "http://autoartmodels.com/shop/images/project/78174w.jpg");
const producto7 = new Vehiculos(7, 'Koenigsegg', 'Agera RS', '1:12', 400, 4, "http://autoartmodels.com/shop/images/project/79024-a.jpg");

const productos = [producto0, producto1, producto2, producto3, producto4, producto5, producto6, producto7]

const seccionProductos = document.getElementById('productSection')


productos.forEach(product=> {
    seccionProductos.innerHTML += 
    `  
    <div id="producto${product.id}" class="card" style="width: 20rem;"> 
        <img src="${product.imagen}" class="card-img-top">       
        <div class="card-body px-1 d-flex flex-column align-items-center">
            <h5 class="card-title">${product.marca} ${product.modelo}</h5>
            <p class="card-text">Escala: ${product.escala}</p>
            <p class="card-text">Precio: $${product.precio}</p>
            <p class="card-text">Stock: ${product.stock}</p>
            <button id=${product.id} class="btn btn-primary w-50 ">Agregar al carrrito</button>
        </div>
    </div>
    
    `
});  

const carrito = JSON.parse(localStorage.getItem('carrito')) || []
const totalCarrito = document.querySelector('#carrito')
const agregarCarrito = document.querySelectorAll('.btn-primary')
const carritoContenedor = document.querySelector('.modal .modal-body')
const visualizarCarrito = document.querySelector('.botonCarritoLogo')
const botonVaciarCarrito = document.querySelector('#vaciarCarrito')

sumaStorage = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
    let sumaCompra = 0
    let valores1 = carrito.map(prod => prod.precio * prod.cantidad)    
    valores1.forEach(valor=>{
        sumaCompra += valor
    }) 
    totalCarrito.innerHTML = 
    `
    <p>Total: $${sumaCompra}</p>
    `;  
    return sumaCompra 
};

let totalCompra = sumaStorage();

totalCarrito.innerHTML =
`
<p>Total: $${totalCompra}</p>
`;

agregarCarrito.forEach(boton =>{
    boton.onclick = () =>{
        let productoSeleccionado = productos.find(prod => prod.id === parseInt(boton.id))
        let productoCarrito = {...productoSeleccionado, cantidad: 1}
        let indexCarrito = carrito.findIndex(prod => prod.id === productoCarrito.id)    
        
        if(indexCarrito === -1){                    
            carrito.push(productoCarrito);          
        
        }else{
            carrito[indexCarrito].cantidad ++

        }   

        sumaStorage();  

        Toastify({
            text: `Producto ${productoSeleccionado.marca} ${productoSeleccionado.modelo} ${productoSeleccionado.escala} agregado al carrito`,            
            duration: 3000,
            style: {
                background: "linear-gradient(to right, #4b4949, #062452 , #4b4949)"
            }  
        }).showToast();                      
    }
})



visualizarCarrito.onclick =()=> {
    totalCarrito.innerHTML += ``;
};

const vaciarCarrito = () => {
    carrito.length = [];
    totalCompra = 0
    totalCarrito.innerHTML = 
    `
    <p>Total: $${totalCompra}</p>
    ` ;
}

botonVaciarCarrito.onclick = () =>{
    vaciarCarrito(); 
}



