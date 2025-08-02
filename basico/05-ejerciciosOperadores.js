//1. Crea una variable para cada operacion aritmética
console.log(7 + 8);
console.log(10 - 8);
console.log(5 * 5);
console.log(25 / 5);
console.log(19 % 5);
console.log(5 ** 5);
let a = 5
while (a >= 1) {
    a--
    console.log(a);
}
while (a <= 10) {
    a++
    console.log(a);
}


//2. Crea una variable para cada tipo de operación de asignación , que haga uso de las variables utilizadas para las operaciones aritméticas

let b = 10

b += 5
console.log(b);

b -=5
console.log(b);

b *=5
console.log(b);

b /=5
console.log(b);

b %=3
console.log(b);

b **=3
console.log(b);

//3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

let c = 15
let d = 20

console.log(c < d);
console.log(c != d);
console.log(c !== "");
console.log(d != 0);
console.log(d !== "20");

//5. Utiliza el operador lógico and

console.log((a > b) && (a > c)?"a es el mayor de todos" : "a no es el mayor")




//6. Utiliza el operador lógico or

//7. Combina ambos operadores lógicos

//8. Añade alguna negación

//9. Utiliza el operador ternario

//10. Combina operadores aritméticos , de comparación y lógicos