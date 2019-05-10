//parametros por default en las funciones

//funcion declration
function actividad(nombre='Javier', actividad="Nada"){
  console.log(`La persona ${nombre} esta realizando la actividad: ${actividad}`);
}

actividad('alvaro','Aprender JavaScript');
actividad('pedro','Durmiendo');
actividad('jose');


const actividad1 = function(nombre = 'Javier', actividad = "Nada"){
  console.log(`La persona ${nombre} esta realizando la actividad: ${actividad}`);
}

actividad('alvaro','Aprender JavaScript');
actividad('pedro','Durmiendo');
actividad('jose');