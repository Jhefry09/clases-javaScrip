const readline = require("readline");

// Crear la interfaz para leer desde stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Preguntar el nombre
rl.question("¿Cuál es tu nombre? ", (nombre) => {
  // Preguntar la edad
  rl.question("¿Cuántos años tienes? ", (edad) => {
    console.log(
      `Hola, ${nombre}. En 5 años tendrás ${parseInt(edad) + 5} años.`,
    );

    rl.close(); // Cierra la interfaz
  });
});
