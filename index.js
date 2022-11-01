debugger
alert('Bienvenido, haz lick en aceptar para realizar una cotizacion rápida de tu vehículo');

const usuario = () => {
  let validacion = true;
  let nombre = prompt('Cual es tu nombre?');
  let apellido = prompt('Indica tu apellido');

  while(validacion === true){

    if(!isNaN(nombre)){
      alert('Error, ingresa un nombre válido');
      nombre = prompt('Cual es tu nombre?');

    }else if(!isNaN(apellido)){
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


class Vehiculos {
  constructor(marca, modelo, anio, kilometros, detalles){
    this.marca = marca
    this.modelo = modelo
    this.anio = anio
    this.kilometros = kilometros
    this.detalles = detalles
  }
}

const infoAuto = () => {
  Vehiculos.marca = prompt('Cuál es la marca de tu vehículo?');
  Vehiculos.modelo = prompt('Cuál es el modelo de tu vehículo?');
  Vehiculos.anio = parseInt(prompt('Cuál es el año de tu vehículo?'));
  Vehiculos.kilometros = parseInt(prompt('Cuantos kilometros posee tu vehículo?'));
  Vehiculos.detalles = parseInt(prompt('Tu auto tiene algun detalle? 1.Si 2.No'));
  let datos = true
  alert('Los datos ingresados son: ' + '\n' + 'Marca: ' + Vehiculos.marca  + '\n' + 'Modelo: ' + Vehiculos.modelo + '\n' + 'Año: ' + Vehiculos.anio + '\n' + 'Kiloemtros: ' + Vehiculos.kilometros + '\n' + 'Detalles: ' + Vehiculos.detalles);

  while(datos === true){
    if(isNaN(Vehiculos.anio)){
      alert('El dato ingresado tiene que expresarse en números, vuelve a intentarlo porfavor.');
      Vehiculos.anio = parseInt(prompt('Cuál es el año de tu vehículo?'));
    }else if(isNaN(Vehiculos.kilometros)){
      alert('El dato ingresado tiene que expresarse en números, vuelve a intentarlo porfavor.');
        Vehiculos.kilometros = parseInt(prompt('Cuantos kilometros posee tu vehículo?'));
    }else if(Vehiculos.detalles === 1){
      let danos = prompt('indica que daños o detalles posee el vehiculo');
      datos = false
    }else if(Vehiculos.detalles === 2){
      datos = false;
    }
  }
}

infoAuto();

const seguirCotizando = () => { 
  let pregunta = parseInt(prompt('Desea seguir cotizando? 1.Si 2.No'));
  let pregunta1 = true    
  while(pregunta1 === true){
    if(pregunta === 1){
      infoAuto();
      cotizador();
      seguirCotizando();
      break
    }else if(pregunta === 2){      
      pregunta1 = false
    }else{
      alert('Coloca una opción correcta por favor!'); 
      pregunta = parseInt(prompt('Desea seguir cotizando? 1.Si 2.No'));      
    }
  }
  
}



const cotizador = () => { 

  for(Vehiculos.anio <= 1995; Vehiculos.anio <= 2022; Vehiculos.anio++){
    
    if(Vehiculos.anio <= 1995 && Vehiculos.kilometros <= 100000){
      alert('Tu auto posee un valor aproximado de 900 mil Argentinos');
      break;      
    }else if(Vehiculos.anio <= 1995 && Vehiculos.kilometros >=100000) {
      alert('Tu auto posee un valor por debajo de los 700 mil pesos Argentinos');
      break         
    }else if(Vehiculos.anio >= 1995 && Vehiculos.anio <= 2005 && Vehiculos.kilometros <= 100000){
      alert('Tu auto posee un valor aproximado de 1.3 millones de pesos Argentinos');
      break
    }else if(Vehiculos.anio >= 1995 && Vehiculos.anio <= 2005 && Vehiculos.kilometros >= 100000){
      alert('Tu auto posee un valor aproximado de 1 millon de pesos Argentinos');
      break
    }else if(Vehiculos.anio >= 2005 && Vehiculos.anio <= 2010 && Vehiculos.kilometros <= 100000){
      alert('Tu auto posee un valor aproximado de 2.3 millones de pesos Argentinos');
      break
    }else if(Vehiculos.anio >= 2005 && Vehiculos.anio <= 2010 && Vehiculos.kilometros >= 100000){
      alert('Tu auto posee un valor aproximado de 2 millones de pesos Argentinos');
      break
    }else if(Vehiculos.anio >= 2010 && Vehiculos.anio <= 2022 && Vehiculos.kilometros <= 100000){
      alert('Tu auto posee un valor aproximado de 4 millones de pesos Argentinos');
      break
    }else if(Vehiculos.anio >= 2010 && Vehiculos.anio <= 2022 && Vehiculos.kilometros >= 100000){
      alert('Tu auto posee un valor aproximado de 3.7 millones de pesos Argentinos');
      break
    }else{
      alert('Disculpas, no podemos cotizar tu vehículo, por favor contactate al 0800 000 0000 muchas Gracias!');
      break
    }
  }
}
cotizador();
seguirCotizando();
alert(`${nameUser} gracias por usar nuestro cotizador rápido, vuelve pronto!`);




