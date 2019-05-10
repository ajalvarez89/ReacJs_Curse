//objeos

//Object Literal
const persona = {
  nombre: 'juan',
  apellido: 'Alvarez'
}
console.log(persona.nombre);


//object Constructur

function Tarea(nombre, urgencia){
  this.nombre = nombre;
  this.urgencia = urgencia;

}

//crear una nueva tarea
const tarea1 = new Tarea('Aprender JavaScript y React', 'urgente');
console.log(tarea1.nombre);
console.log(tarea1.urgencia);

const tarea2 = new Tarea('Tomar Agua', 'urgente');
console.log(tarea1.nombre);
console.log(tarea1.urgencia);

const tarea3 = new Tarea('Comer sano', 'urgente');
console.log(tarea1.nombre);
console.log(tarea1.urgencia);



