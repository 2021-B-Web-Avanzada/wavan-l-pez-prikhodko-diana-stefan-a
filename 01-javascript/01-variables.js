// VARIABLES EN JAVA SCRIPT

// Variables mutable o immutable

//Mutable

var numeroUno = 1;
let numeroDos = 2;

numeroUno = 5
numeroDos = 8

numeroUno = false
numeroDos= true

//Inmutable

const configuracionArchivos ="PDF";
// configuracionArchivos = "XML";

// NO SE VA A USAR VAR, SOLO LET Y CONST

// TIPOS DE VARIABLES

const numero = 1; //Número
const sueldo = 1.2; //Número
const texto = "Diana"; //String
const apellido = 'Eguez'; //String
const booleano = false; //Bool
const hijos = null; //Objeto
const zapatos = undefined; //Undefined
console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellido);
console.log(typeof booleano);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof  Number("asd")); //Numero, pero devuelve Nan (no es un numero)
console.log(Number("asd")); //Numero, pero devuelve Nan (no es un numero)

// TRUTU Y  FALSY

//CON STRINGS

if (""){
    console.log("String vacio Es Truty");
}else{
    console.log("String vacio Es Falsy");
}

if ("Algo"){
    console.log("String con datos Es Truty");
}else{
    console.log("String con datos Es Falsy");
}

//CON NUMEROS

if (-1){
    console.log("Negativo Es Truty"); // -1 es Truty
}else{
    console.log("Negativo Es Falsy");
}
if (1){
    console.log("Positivo Es Truty"); // 1 es Truty
}else{
    console.log("Positivo Es Falsy");
}
if (0){
    console.log("Cero Es Truty");
}else{
    console.log("Cero Es Falsy"); // 0 es Falsy
}

// NULL Y UNDEFINED

if (null){
    console.log("NULL Es Truty");
}else{
    console.log("NULL Es Falsy"); // null es Falsy
}

if (undefined){
    console.log("UNDEFINED Es Truty");
}else{
    console.log("UNDEFINED Es Falsy"); // undefined es Falsy
}

// OBJETOS JSON

const datos = {
    nombre: "Diana",
    apellido: 'Lopez',
    edad: 21,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa:{
        color: "Cafe",
        Talla: '34'
    },
    mascotas:["Camila","Kiska","Muñeca"]
}

// Acceder a las propuedades del objeto

datos.nombre; // Diana
datos.apellido; // López
datos["nombre"]; //Diana
console.log(datos);
datos.nombre = "Lidia";
console.log(datos);
datos["nombre"] = "Juana";
datos.sueldo; // --> No Definido
console.log(datos.sueldo)

//Añadir propiedades nuevas
datos.sueldo = 1.2;
datos["gastos"] = 0.8
console.log(datos.sueldo)
console.log(datos.gastos)

/* ---------- Clases Object ----------  */

//Métodos para devolveer las llaves y los valores

console.log(Object.keys(datos))
console.log(Object.values(datos))

/* ---------- Eliminar la llave de un objeto ----------  */

delete datos.nombre;
console.log(datos);

/* ---------- Variables por valor o referencia ----------  */

//Variables por valor en JS son primitivas (number,string,boolean)

let edadDiana = 21;
let edadLopez = edadDiana; //Guardamos una primitiva en otra variable
                           // solo el valor

console.log(edadLopez);//21
console.log(edadDiana);//21

edadDiana +=1;

console.log(edadLopez);//21
console.log(edadDiana);//22

// Variables por referencia: Object ( [],{} )

// let rafael = {
//     nombre: "Rafael"
// };
// let lenin = rafael;
//
// console.log(rafael);
// console.log(lenin);
//
// lenin.nombre = "Lenin";
//
// console.log(rafael);
// console.log(lenin);
//
// delete rafael.nombre;
//
// console.log(rafael);
// console.log(lenin);

/* ---------- Clonar un objeto ----------  */

let rafael ={
    nombre: "Rafael"
};

//Copia el valor y no la referencia dentro de {}
let lenin = Object.assign({},rafael);

console.log(rafael);
console.log(lenin);

delete rafael.nombre

console.log(rafael);
console.log(lenin);

// Ejemplo con arreglos

let arregloNumero = [1,2,3,4,5];
let arregloClonado = Object.assign([], arregloNumero);

console.log(arregloNumero);
console.log(arregloClonado);

arregloClonado[0] = 100;
arregloNumero[0] = 200;

console.log(arregloNumero);
console.log(arregloClonado);