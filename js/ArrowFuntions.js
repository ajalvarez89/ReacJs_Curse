//arrow functions
//la flecha reemplaza 

// let viajando = (destino, duracion)=> {
//   return `Viajando a la ciudad de ${destino} por ${duracion}`;
// }

// let viaje;
// viaje = viajando('Paris',3);
// viaje = viajando('Londres',4);

// console.log(viaje);

//esta implicito q devuelve valor, se eliminan las llaves y return
let viajando = (destino, duracion)=> `Viajando a la ciudad de ${destino} por ${duracion}`;

let viaje;
viaje = viajando('Paris',3);
viaje = viajando('Londres',4);

console.log(viaje);