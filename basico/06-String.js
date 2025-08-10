let nombre = "Jhefry";
let mensaje = "Hola como estan, mi nombre es " + nombre;
let num = mensaje.length;
for (let i = 0; i < num; i++) {
  console.log(mensaje[i]);
}
//metodos comunes:
console.log(mensaje.length); //cuenta el numero de caracteres de la palabra
console.log(mensaje.toUpperCase()); //convierte todas las letras a mayusculas
console.log(mensaje.toLowerCase()); //convierte todas las letras a minusculas
console.log(mensaje.indexOf("Jhefry")); //indica donde comienza la palabra buscada
console.log(mensaje.includes("Jhefry")); //indica si existe la palabra dentro de la variable
console.log(mensaje.slice(0, 15)); //selecciona una parte esfesifica de la variable
console.log(mensaje.replace("Jhefry", "Jamir")); //remplaza palabra por otras

//Template literals:
//Puede crear un string con saltos de linea
let lorem = `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit 
enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip
amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut 
officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia 
dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id 
nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea 
consectetur et est culpa et culpa duis.`;
console.log(lorem);

// permite ingresar las variables directo en los string
console.log(`hola, ${nombre}`);

const readline = require("readline");
