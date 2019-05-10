//creando una funcion

//Funtion Declaration
function saludar(nombre){
  console.log('bienvenido '+nombre);
}

saludar('Alvaro');

//Funtion Expression

const cliente = function(nombreCliente) {
    console.log('Mostrando datos del cliente:' + nombreCliente);
}
cliente('Alvaro')