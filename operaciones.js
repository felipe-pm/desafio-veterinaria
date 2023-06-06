const fs = require('fs');

const citasFilePath = './citas.json';

function registrar(nombre, edad, animal, color, enfermedad) {
  const cita = {
    nombre,
    edad,
    animal,
    color,
    enfermedad
  };

  fs.readFile(citasFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo de citas:', err);
      return;
    }

    const citas = JSON.parse(data);
    citas.push(cita);

    fs.writeFile(citasFilePath, JSON.stringify(citas, null, 2), 'utf8', err => {
      if (err) {
        console.error('Error al escribir en el archivo de citas:', err);
      } else {
        console.log('Cita registrada con éxito.');
      }
    });
  });
}

function leer() {
  fs.readFile(citasFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo de citas:', err);
      return;
    }

    const citas = JSON.parse(data);
    if (citas.length === 0) {
      console.log('No hay citas registradas.');
    } else {
      console.log('Citas registradas:');
      citas.forEach((cita, index) => {
        console.log(`Cita ${index + 1}:`);
        console.log(`Nombre: ${cita.nombre}`);
        console.log(`Edad: ${cita.edad}`);
        console.log(`Animal: ${cita.animal}`);
        console.log(`Color: ${cita.color}`);
        console.log(`Enfermedad: ${cita.enfermedad}`);
        console.log('---------------------------');
      });
    }
  });
}

module.exports = {
  registrar,
  leer
};