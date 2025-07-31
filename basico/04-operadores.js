//operadores
//operadores arimeticos
console.log("operadores arimeticos")

let a = 10
let b = 5

console.log(a + b) //suma
console.log(a - b) //resta
console.log(a * b) //multiplicacion
console.log(a / b) //division

console.log(a % b) //modulo ->residuo de una division
console.log(a ** b) //exponente

a++ //incrementa mas 1
console.log(a)

b--  //resta 1
console.log(b)

//operadores de asignacion
console.log("operadores de asignacion")
let variable = 3 //sirve para asinarle un valor a una variable
console.log(variable)

variable +=3 //sirve para ejecutar la operacion y asignarle el valor automaticamente
console.log(variable)

variable -=3
variable *=3
variable /=3
variable %=3
variable **=3

//Operaciones de comparacion siempre devuelven un boolean
console.log("Operaciones de comparacion")
console.log(a)
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == 11)
console.log(a == "11") //javaScrip detecta que el String tiene el mismo valor que a y da True 
console.log(a == a)
console.log(a === a) //El triple "=" a demas de comparar el valor, tambien compara el tipo de dato
console.log(a === 11)
console.log(a ==="11") // en este caso da false debido a que es un String
console.log(a != 11) // el "!" indica si es diferente
console.log(a !== 11) 
console.log(a !== "11")
console.log(0 == false) //el "0" es falso y daria resultado true
console.log(1 == false) //cualquier otro numero es verdadero y daria resultado false
console.log(0 == "") //"0" Tambien es igual a cadenas vacias 
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "hola")
console.log(0 === "") 
console.log(undefined == null) //ambos son iguales ya que se podria decir que estan vacios
console.log(undefined === null) //pero no son iguales a cuanto el tipo de dato

/* 
VALORES QUE SIEMPRE SON VERDADEROS
    - Todos los numeros positivos y negativos menos el cero
    - Todas las cadenas de texto menos las vacías 
    - El boolean true
*/

/* 
VALORES QUE SIEMPRE SON FALSOS
    - 0
    - 0n
    - null
    - undefined
    - NaN 
    - El boolean false
    - Cadenas de texto vacías
    
*/