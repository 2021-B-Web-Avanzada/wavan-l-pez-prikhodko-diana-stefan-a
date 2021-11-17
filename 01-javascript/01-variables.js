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
