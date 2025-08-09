//1. Concatena dos cadenas de texto
let nombre = "jhefry";
let apellido = "cabanillas";
console.log(nombre + " " + apellido);
//2. Muestra la longitud de una cadena de texto
console.log(nombre.length);
//3. Muestra el primer y ultimo caracter de un string
console.log("Primero: " + nombre[0]);
console.log("Ultimo: " + nombre[5]);
//4. convierte a mayuculas y minusculas un string
console.log(nombre.toUpperCase());
console.log(apellido.toLowerCase());
//5. Crea una cadena de texto con varias lineas
console.log(`Lorem ipsum dolor sit amet, qui minim 
labore adipisicing minim sint cillum sint 
consectetur cupidatat.`);
//6. Interpola el valor de una variable en un String
console.log(`Mi nombre es ${nombre} y mi apellido es ${apellido}`);
//7. Reemplaza todos los espacios en blanco de un String por guiones
let espacios =
  "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.";
console.log(espacios.replaceAll(" ", "-"));
//8. Comprueba si una cadena de texto contiene una palabra en concreto
console.log(espacios.includes("dolor"));
//9. Comprueba si dos String son iguales
console.log(nombre === apellido);
//10. Comprueba si dos string tienen la misma longitud
let total = Array.from(espacios.matchAll(/em/g)).length;
console.log(total);
