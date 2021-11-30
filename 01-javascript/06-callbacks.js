//06-callbacks.js

//Importar librería
const fs = require("fs"); //file system
console.log("Primero");

fs.readFile(
    "01-variables.js",
    "utf-8",
    (errorVariable,contenidoVariable) =>{
        if(errorVariable){
            console.error("mensaje leyendo contenido", errorVariable);
        }else{
            fs.readFile(
                "06-ejemplo.txt",
                "utf-8",
                (errortxt,contenidotxt) =>{
                  if(errortxt){
                      console.error("mensaje leyendo contenido 2", errortxt);
                  } else{
                      console.log(contenidoVariable, contenidotxt);
                  }
                })
        }
    }
);

console.log("Tercero");

