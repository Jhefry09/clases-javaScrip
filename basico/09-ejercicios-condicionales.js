//1. Imprime tu nombre por consola si una variable toma su valor
let nombre = "Jhefry";
if (nombre != null) {
  console.log(nombre);
}
//2. Imprime por consola un mensaje si el usuario u contraseña coincide con unos establecidos
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let pass = "1234";
// function sesionUsuario() {
//   rl.question("Ingrese el usuario\n", (usuario) => {
//     if (usuario != nombre) {
//       console.log("Usuario incorrecto");
//       sesionUsuario();
//     } else {
//       sesionPass();
//     }
//   });
// }
// function sesionPass() {
//   rl.question("Ingrese la contraseña\n", (contra) => {
//     if (contra != pass) {
//       console.log("Contraseña incorrecta");
//       sesionPass();
//     } else {
//       rl.close();
//     }
//   });
// }
// sesionUsuario();

//3. varifica si un número es positivo, negativo o cero e imprime un mensaje
// const readline = require("readline");
// const lec = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// lec.question("Ingresa el numero\n", (numero) => {
//   console.log(
//     numero > 0
//       ? "El numero es positivo"
//       : numero < 0
//         ? "El numero es negativo"
//         : "El numero es cero",
//   );
//   lec.close();
// });

//4. verifica si una persona puede votar o no(mayor o igual a 18) e indica cuantos años le faltan
// const readline = require("readline");
// const con = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// con.question("Cual es tu edad?\n", (edad) => {
//   console.log(
//     edad >= 18
//       ? "Puedes votar por algun corrupto"
//       : "Aun no puedes votar por los corruptos",
//   );
//   con.close();
// });

// //5. usa el operador terneario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad
// const readline = require("readline");
// const al = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// al.question("Cual es tu edad?\n", (edad) => {
//   console.log(edad >= 18 ? "Ya eres adulto" : "Aun eres menor");
//   al.close();
// });

// //6. Muestra en que estacion del año nos encontramos dependiendo del valor de una variable "mes"
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let verano = ["enero", "febrero", "marzo"];
// let otoño = ["abril", "mayo", "junio"];
// let invierno = ["julio", "agosto", "setiembre"];
// let primavera = ["octubre", "noviembre", "diciembre"];

// const meses = () => {
//   rl.question("Ingresa el mes\n", (mes) => {
//     switch (true) {
//       case verano.includes(mes):
//         console.log("Es VERANO");
//         rl.close();
//         break;
//       case otoño.includes(mes):
//         console.log("Es OTOÑO");
//         rl.close();
//         break;
//       case invierno.includes(mes):
//         console.log("Es INVIERNO");
//         rl.close();
//         break;
//       case primavera.includes(mes):
//         console.log("Es PRIMAVERA");
//         rl.close();
//         break;
//       default:
//         console.log(mes + "no es un mes");
//         meses();
//         break;
//     }
//   });
// };
// meses();

//7. Muestra el numero de dias que tiene un mes dependiendo de la variable del ejercicio anterior
// let meses31 = [
//   "enero",
//   "marzo",
//   "mayo",
//   "julio",
//   "agosto",
//   "octubre",
//   "diciembre",
// ];
// let meses30 = ["abril", "junio", "setiembre", "noviembre"];
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// const numeroDiasMes = () => {
//   rl.question("Ingrese el mes\n", (mes) => {
//     switch (true) {
//       case meses31.includes(mes.toLowerCase()):
//         console.log(`El mes ${mes} tiene 31 dias`);
//         rl.close();
//         break;
//       case meses30.includes(mes.toLowerCase()):
//         console.log(`El mes ${mes} tiene 30 dias`);
//         rl.close();
//         break;
//       case mes.toLowerCase() == "febrero":
//         console.log(`El mes ${mes} tiene 28 dias`);
//         rl.close();
//         break;
//       default:
//         console.log("No es un mes");
//         rl.close();
//         numeroDiasMes();
//         break;
//     }
//   });
// };
// numeroDiasMes();

// //8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
// const mensajeIdioma = () => {
//   const readline = require("readline");
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   rl.question("seleccione el idioma:\n1.Español\n2.Ingles\n", (idioma) => {
//     switch (idioma.toLowerCase()) {
//       case "ingles":
//         console.log(`Hello ${nombre}`);
//         rl.close();
//         break;
//       case "español":
//         console.log(`Hola ${nombre}`);
//         rl.close();
//         break;
//       default:
//         console.log("Ese no es un idioma valido");
//         rl.close();
//         mensajeIdioma();
//         break;
//     }
//   });
// };
// mensajeIdioma();

//9. usa un switch para hacer de nuevo el ejercicio 6



//10. usa un switch para hacer de nuevo el ejercicio 7
