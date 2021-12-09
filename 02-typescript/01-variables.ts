//01-variables.ts

/*   DECLARACIÓN TÍPICA     */

//INDICAR EL TIPO DE DATO

let nombre : string = "Diana"; //referencia al primitivo
let nombre1 : String = "Diana"; //Clase String --> No es tan común
//nombre = 1; No nos permite ya que definimos los tipos de datos aceptados
nombre = "López"

let edad: number = 21;
let casado: boolean = false;
let fecha: Date = new Date();
let sueldo: number;
sueldo = 12.4;

//DUCK TYPING => Como sabe que es un String, lo auto entiende

let apellido = "Lopez";
apellido = "Diana";
apellido.toUpperCase();

//IGUALAR CUALQUIER TIPO DE DATOS
//Any permite colocar datos sin reglas

let marihuana : any = 2;
marihuana ="2";
marihuana = true;
marihuana = () => "2";

//Multiple => Cuales van a permitir fuera del rango de datos

let edadMultiple : number | string | Date = 2;
edadMultiple = "2";
edadMultiple = 2222;
edadMultiple = "dos";
edadMultiple = new Date();
// edadMultiple = true;

