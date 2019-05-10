const nombre ='juan';
const trabajo ='Desarrollador Web';

//concatenar Javascript
console.log('Nombre: '+ nombre +', Trabajo ' + trabajo);
console.log(`Nombre: ${nombre}, trabajo: ${trabajo}`);

//concatenar con multiples lineas
const contenedorApp = document.querySelector('#app');
// let html = '<ul>' +
//               '<li> Nombre 2: ' + nombre + '</li>' +
//               '<li> Trabajo 2: ' + trabajo + '</li>' +
//             '<ul>';

let html = `
            <ul>
                <li>Nombre: ${nombre} </li>
                <li>Trabajo: ${trabajo} </li>
            </ul>
`;
contenedorApp.innerHTML = html;
