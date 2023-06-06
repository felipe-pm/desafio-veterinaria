const operaciones = require('./operaciones');

const args = process.argv.slice(2);
const operacion = args[0];

if (operacion === 'registrar') {
  const nombre = args[1];
  const edad = args[2];
  const animal = args[3];
  const color = args[4];
  const enfermedad = args[5];

  operaciones.registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion === 'leer') {
  operaciones.leer();
} else {
  console.log('Operación invalida. Por favor, utilizar "registrar" o "leer".');
}