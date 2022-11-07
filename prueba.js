//  const marca = prompt('ingrese la marca de tu vehiculo');
// const modelo = prompt('ingrese el modelo de tu vehiculo');
// const anio = parseInt(prompt('ingrese el año de su vehiculo'));
// const kilometraje = parseInt(prompt('ingrese el kilometraje de su vehiculo'));
//     alert('los datos ingresados son: ' + '\n'+ 'Marca: '+  marca + '\n' + 'Modelo: '+modelo + '\n' + 'Año: '+anio + '\n' + 'Kilometraje: '+kilometraje);
//     if(anio>=2000 && kilometraje>=100000) {
//         alert('El valor de tu Vehiculo oscila entre los 100.000 y 200.000 pesos Argentinos');
//     } else if (anio<=2000 && kilometraje===0){
//         alert('Tu auto es un clasico, podria valer mas de 2 millones de pesos');
//     } else if (anio===2022 && kilometraje===0) {
//         alert('tu auto es un 0km, dejanos tus datos para cotizarlo');
//     } else if(anio>=2000 && kilometraje<=100000) {
//         alert('El valor de tu vehiculo oscila entre los 200.000 y 400.000 pesos Arentinos');
//     } else{
//         alert('Dejanos tus datos para poder cotizar tu vehiculo, Gracias!');
//     }


// alert('Bienvenido a Gramaar, Venta de elementos informaticos')

// let opcion = parseInt(prompt('Seleccione el producto deseado:' + '\n' + '1.Motherboard' + '\n' + '2.Placa de video' + '\n' + '3.Gabinete' + '\n' + '4.Fuente' + '\n'+ '5.Ram' + '\n' + '6.SSD'))
// let sumaTotal = 0
// let carrito = true
// let pregunta

// while(carrito === true) {
//     if(opcion === 1){
//         sumaTotal = sumaTotal + 190;
//     }else if(opcion === 2){
//         sumaTotal = sumaTotal + 1500;
//     }else if(opcion === 3){
//         sumaTotal = sumaTotal + 100;
//     }else if(opcion === 4){
//         sumaTotal = sumaTotal + 200;
//     }else if(opcion === 5){
//         sumaTotal = sumaTotal + 500
//     }else if(opcion === 6){
//         sumaTotal = sumaTotal + 100
//     }else{
//         opcion = parseInt(prompt('Error, el numero ingresado no pertenece a un producto del listado, por favor seleccionar un producto valido:' + '\n' + '1.Motherboard' + '\n' + '2.Placa de video' + '\n' + '3.Gabinete' + '\n' + '4.Fuente' + '\n'+ '5.Ram' + '\n' + '6.SSD'))
//         continue
//     }

//     pregunta = parseInt(prompt('Desea seguir agregando productos al carrito?' + '\n'+ '1.Si' + '\n' + '2.No'));
//     if(pregunta === 1) {       
//         opcion = parseInt(prompt('Seleccione el producto deseado:' + '\n' + '1.Motherboard' + '\n' + '2.Placa de video' + '\n' + '3.Gabinete' + '\n' + '4.Fuente' + '\n'+ '5.Ram' + '\n' + '6.SSD'));
//     }else{
//         carrito = false;
//     }
    
// }
// alert('El monto acumulado es ' + sumaTotal);





  //lista de precios (expresada en USD)
  //1.mother 190
  //2.placa de video 1500
  //3. gabinete 100
  //4. fuente 200
  //5. Ram 500
  //6.SSD 100







  // let cuenta = 0
  // let total = 0
  
  // while(cuenta <= 10) {
  //   total = total + cuenta;
  //   cuenta = cuenta + 1;     
  // }
  // alert(total)

  // for(let fila = '#'; fila.length < 8; fila += '#') {
  //   console.log(fila)
  // }
 
  // let numeral = '#'
  // let resultado = ''

  // for(let contador = 0; contador <= 6; contador += 1 ){
  //     console.log(resultado=resultado + numeral)
  // }


  // for(i = 1; i < 100; i++){
  //   if(i % 3 === 0 && i % 5 === 0) {
  //     console.log('FizzBuzz');
  //   }
  //   else if(i % 3 === 0){
  //     console.log('Fizz');
  //   }
  //   else if(i % 5 === 0){
  //     console.log('Buzz');

  //   }else {
  //     console.log(i);
  //   }
  //




let size = 8

let board = ""

for(let columna = 0; columna < size; columna++){
  for(let fila = 0; fila < size; fila++){
    if((fila + columna) % 2 === 0){
      board = board += "#"
    }else{
      board = board +=" "
    }

  }
  board += '\n'
}
console.log(board)

