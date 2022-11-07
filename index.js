alert('Bienvenido, haz lick en aceptar para realizar una cotizacion rápida de tu vehículo');

const usuario = () => {
  let validacion = true;
  let nombre = prompt('Cual es tu nombre?');
  let apellido = prompt('Indica tu apellido');

  while (validacion === true) {

    if (!isNaN(nombre)) {
      alert('Error, ingresa un nombre válido');
      nombre = prompt('Cual es tu nombre?');

    } else if (!isNaN(apellido)) {
      alert('Error, ingresa un apellido válido');
      apellido = prompt('Cual es tu apellido?');

    } else {
      alert(`Bienvenido ${nombre} ${apellido}, indicanos los datos de tu vehiculos`);
      validacion = false;
    }
  }
  return `${nombre} ${apellido}`;
}

let nameUser = usuario();

let marca = prompt('Cuál es la marca de tu vehículo?');
let modelo = prompt('Cuál es el modelo de tu vehículo?');
let anio = parseInt(prompt('Cuál es el año de tu vehículo?'));
let kilometros = parseInt(prompt('Cuantos kilometros posee tu vehículo?'));
let detalles = parseInt(prompt('Tu auto tiene algun detalle? 1.Si 2.No'));
let datos = true
alert('Los datos ingresados son: ' + '\n' + 'Marca: ' + marca + '\n' + 'Modelo: ' + modelo + '\n' + 'Año: ' + anio + '\n' + 'Kiloemtros: ' + kilometros + '\n' + 'Detalles: ' + detalles);

const infoAuto = () => {
  while (datos === true) {
    if (isNaN(anio)) {
      alert('El dato ingresado tiene que expresarse en números, vuelve a intentarlo porfavor.');
      anio = parseInt(prompt('Cuál es el año de tu vehículo?'));
    } else if (isNaN(kilometros)) {
      alert('El dato ingresado tiene que expresarse en números, vuelve a intentarlo porfavor.');
      kilometros = parseInt(prompt('Cuantos kilometros posee tu vehículo?'));
    } else if (detalles === 1) {
      let danos = prompt('indica que daños o detalles posee el vehiculo');
      datos = false
    } else if (detalles === 2) {
      datos = false;
    } else {
      alert('Coloca una opción válida, gracias!')
      detalles = parseInt(prompt('Tu auto tiene algun detalle? 1.Si 2.No'));
    }
  }
}



const seguirCotizando = () => {
  let pregunta = parseInt(prompt('Desea seguir cotizando? 1.Si 2.No'));
  let pregunta1 = true
  while (pregunta1 === true) {
    if (pregunta === 1) {
      marca = prompt('Cuál es la marca de tu vehículo?');
      modelo = prompt('Cuál es el modelo de tu vehículo?');
      anio = parseInt(prompt('Cuál es el año de tu vehículo?'));
      kilometros = parseInt(prompt('Cuantos kilometros posee tu vehículo?'));
      detalles = parseInt(prompt('Tu auto tiene algun detalle? 1.Si 2.No'));
      datos = true
      infoAuto();
      cotizador();
      seguirCotizando();
      break
    } else if (pregunta === 2) {
      pregunta1 = false
    } else {
      alert('Coloca una opción correcta por favor!');
      pregunta = parseInt(prompt('Desea seguir cotizando? 1.Si 2.No'));
    }
  }
}



const cotizador = () => {


  const valores = [900, 700, 1.5, 1.3, 2.3, 2, 4, 3.7]
  if (detalles === 1) {
    for (i = 0; i < valores.length; i++) {
      const valorFinal = valores[i] * 0.10
      valores[i] = valores[i] - valorFinal
    }
  }


  for (anio <= 1995; anio <= 2022; anio++) {

    if (anio <= 1995 && kilometros <= 100000) {
      alert(`Tu auto posee un valor aproximado de ${valores[0]} mil pesos Argentinos`);
      break;
    } else if (anio <= 1995 && kilometros >= 100000) {
      alert(`Tu auto posee un valor por debajo de los ${valores[1]} mil pesos Argentinos`);
      break
    } else if (anio >= 1995 && anio <= 2005 && kilometros <= 100000) {
      alert(`Tu auto posee un valor aproximado de ${valores[2]} millones de pesos Argentinos`);
      break
    } else if (anio >= 1995 && anio <= 2005 && kilometros >= 100000) {
      alert(`Tu auto posee un valor aproximado de ${valores[3]} millones de pesos Argentinos`);
      break
    } else if (anio >= 2005 && anio <= 2010 && kilometros <= 100000) {
      alert(`Tu auto posee un valor aproximado de ${valores[4]} millones de pesos Argentinos`);
      break
    } else if (anio >= 2005 && anio <= 2010 && kilometros >= 100000) {
      alert(`Tu auto posee un valor aproximado de ${valores[5]} millones de pesos Argentinos`);
      break
    } else if (anio >= 2010 && anio <= 2022 && kilometros <= 100000) {
      alert(`Tu auto posee un valor aproximado de ${valores[6]} millones de pesos Argentinos`);
      break
    } else if (anio >= 2010 && anio <= 2022 && kilometros >= 100000) {
      alert(`Tu auto posee un valor aproximado de ${valores[7]} millones de pesos Argentinos`);
      break
    } else {
      alert('Disculpas, no podemos cotizar tu vehículo, por favor contactate al 0800 000 0000 muchas Gracias!');
      break
    }
  }
}

infoAuto();
cotizador();
seguirCotizando();
alert(`${nameUser} gracias por usar nuestro cotizador rápido, vuelve pronto!`);




