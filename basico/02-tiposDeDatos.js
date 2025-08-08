//cadenas de texto (String)
let nombre = "jhefry";

//Numeros (number)
let edad = 21;
let altura = 165.5;

// booleanos (boolean)
let isStudent = true;
let isChef = false;

//undefine
let sinDefinir;
console.log(sinDefinir);

//null
let nullValor = null;

//Synbol
let mySymbol = Symbol("mySymbol");
console.log(mySymbol);

//BigInt
let numeroGrande =
  BigInt(
    789456123101123456748978954654123123123123123123130231564889745212312356872,
  );
let numeroGrande2 =
  789456123101123456748978954654123123123123123123130231564889745212312356872n;
console.log(numeroGrande);
console.log(numeroGrande2);

//como saber de que tipo de dato es una variable
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof altura);
console.log(typeof isStudent);
console.log(typeof isChef);
console.log(typeof sinDefinir);
console.log(typeof nullValor);
console.log(typeof numeroGrande);
console.log(typeof mySymbol);
