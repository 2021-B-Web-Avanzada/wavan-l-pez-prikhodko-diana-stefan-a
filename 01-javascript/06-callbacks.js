//06-callbacks.js

//Importar librería
const fs = require("fs"); //file system
console.log("Primero");

fs.readFile(
    "01-variables.js",
    "utf-8",
    (error,contenido) =>{
        if(error){
            console.error("mensaje leyendo contenido", error);
        }else{
            fs.readFile(
                "06-ejemplo.txt",
                "utf-8",
                (error,contenido) =>{
                  if(error){
                      console.error("mensaje leyendo contenido 2", error);
                  } else{
                      console.log(contenido);
                  }
                })
        }
    }
);

console.log("Tercero");

