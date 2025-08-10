//condicionales
let edad = 22;

//condicion if
if (edad >= 30) {
  console.log("estas viejo");
}

//condicion ifelse
if (edad >= 30) {
  console.log("estas viejo");
} else {
  console.log("aun eres joven");
}

//else if
if (edad >= 30) {
  console.log("estas viejo");
} else if (edad <= 29 && edad >= 20) {
  console.log("estas un poco viejo");
} else {
  console.log("aun eres joven");
}

//ternario
console.log(edad > 30 ? "ve ahorrando para tu jubilacion" : "ponte a estudiar");
