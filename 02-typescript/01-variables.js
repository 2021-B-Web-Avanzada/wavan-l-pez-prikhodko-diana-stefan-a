//01-variables.ts
/*   DECLARACIÓN TÍPICA     */
//INDICAR EL TIPO DE DATO
var nombre = "Diana"; //referencia al primitivo
var nombre1 = "Diana"; //Clase String --> No es tan común
//nombre = 1; No nos permite ya que definimos los tipos de datos aceptados
nombre = "López";
var edad = 21;
var casado = false;
var fecha = new Date();
var sueldo;
sueldo = 12.4;
//DUCK TYPING => Como sabe que es un String, lo auto entiende
var apellido = "Lopez";
apellido = "Diana";
apellido.toUpperCase();
//IGUALAR CUALQUIER TIPO DE DATOS
//Any permite colocar datos sin reglas
var marihuana = 2;
marihuana = "2";
marihuana = true;
marihuana = function () { return "2"; };
//Multiple => Cuales van a permitir fuera del rango de datos
var edadMultiple = 2;
edadMultiple = "2";
edadMultiple = 2222;
edadMultiple = "dos";
edadMultiple = new Date();
// edadMultiple = true;
