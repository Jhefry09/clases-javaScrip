//1.escribe un comentario en una linea:
// aqui lo resolvi :D

/* 2.Escribe un comentario en varias lineas:
Aqui 
lo 
resolvi
:D
*/

//3. Declara variables con valores asociados a todos los datos de tipo primitivos

    //string
        let miNombre = "jhefry"
        
    //Number
        let miEdad = 22

    //boolean
        let seCocinar = false

    //undefine
        let sinDatos

    //Null
        let nulo = null

    //Symbol
        let simbolo = Symbol("que cosa sera un Symbol")

    //bigInt
        let numeroGrande = 789456142333078945641213107894561123454123154687894563125645789n

//4. imprimir por consola los datos de las variables
    console.log(miNombre + "\n" + miEdad + "\n" + seCocinar  + "\n" + sinDatos + "\n" + nulo + "\n" + numeroGrande)
    console.log(simbolo)

//5. imprime por consola el tipo de todas las variables
    console.log(typeof miNombre)
    console.log(typeof miEdad)
    console.log(typeof seCocinar)
    console.log(typeof sinDatos)
    console.log(typeof nulo)
    console.log(typeof numeroGrande)
    console.log(typeof simbolo)

//6. Modificar los valores de todas las variables
    miNombre = "jamir"
    miEdad = 20
    seCocinar = true
    numeroGrande = 45641231345648447878978945645456456242312132311231234564564565789789789789456456456123123n
    simbolo = Symbol("sigo sin saber que es")

    console.log(miNombre + "\n" + miEdad + "\n" + seCocinar  + "\n" + sinDatos + "\n" + nulo + "\n" + numeroGrande)
    console.log(simbolo)

