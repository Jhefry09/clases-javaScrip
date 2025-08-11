//hay dos formas de crear Arrays

let miArray = []; //el mas comun
let miArray2 = new Array(3); //el menos usado
console.log(miArray);
console.log(miArray2);

//como se agregan cosas

miArray[0] = "jhefry";
miArray[1] = "jamir";
miArray[2] = "cabanillas";
miArray[3] = "casana";
console.log(miArray);

//metodos comunes
//push y pop
let nuevoArray = [];

//push sirve para agregar cosas al final del array
nuevoArray.push("jhefry", "hola");
nuevoArray.push("jamir");
nuevoArray.push("cabanillas");
nuevoArray.push("casana");
nuevoArray.push("borrar");
console.log(nuevoArray);

//pop sirve para borrar la ultima cosa agregada al array y ademas lo guarda y se puede asignar a una variable 
console.log(nuevoArray.pop());
console.log(nuevoArray);

//shift y unshift
//unshift agrega cosas al comienzo del array
nuevoArray.unshift("duke", "", "nuevo")
nuevoArray.unshift("")
console.log(nuevoArray);

//shift borra el primer elemento
console.log(nuevoArray.shift());

//legth sirve para ver el tamaño del array
console.log(nuevoArray.length);

//formas de como vaciar un Array

console.log(miArray);
miArray = []; //volviendo a inicializarlo
//miArray.length = 0; darle un valor igual a cero
console.log(miArray);

//slice borra partes especificas del array
nuevoArray.slice(0, 4) //aciendo uso del indice toma en cuenta solo los datos comprendidos desde el 0 y antes del 4
console.log(nuevoArray);

//splice borra partes despecificas del array
nuevoArray.splice(1, 4) //el uno es el indice donde comienza y el 3 es cuantos elementos va a borrar
console.log(nuevoArray);

//splice tambien remplaza cosas
nuevoArray.splice(1, 1, "jhefry") //el uno es el indice donde comienza, el siguiente 1 es cuantos elementos va a borrar y luego por lo que va a remplazar, en este caso jhefry
console.log(nuevoArray);
