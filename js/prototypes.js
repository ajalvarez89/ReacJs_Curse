//objeos
// function mostrarInformacionTarea(tarea,prioridad){
//     return `La tarea ${tarea} tiene una prioridad de ${prioridad}`;
// }
//Object Literal
// const persona = {
//   nombre: 'juan',
//   apellido: 'Alvarez'
// }
// console.log(persona.nombre);


//object Constructur

function Tarea(nombre, urgencia){
  this.nombre = nombre;
  this.urgencia = urgencia;
}

//Agregar un prototype a tarea
Tarea.prototype.mostrarInformacionTarea = function() {
  return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia }`;
}


//crear una nueva tarea
const tarea1 = new Tarea('Aprender JavaScript y React', 'urgente');
const tarea2 = new Tarea('Tomar agua', 'Media');



console.log(tarea1.mostrarInformacionTarea());
console.log(tarea2.mostrarInformacionTarea());





