/*
Hacer una función que me acepte como parametro una variable
con el path del archivo y el conetenido a agregar el contenido
del archivo. La función debe tomar estos dos parametros y leer
el archivo y añadir el texto al final del texto.
 */

leerArchivo("06-ejemplo.txt", "\n¿Cómo estas?");

function leerArchivo(path,comentario){
    const fs = require("fs"); //file system
    fs.readFile(
        path,
        "utf-8",
        (error, contenido) =>{
            if(error){
                console.log("No se pudo leer el archivo");
            }else{
                console.log("Se leyó el archivo, su contenido es: \n", contenido);
                contenido = contenido + comentario;
                escribirArchivo(path,contenido);
            }
        }
    )
}

function escribirArchivo(path,comentario){
    const fs = require("fs"); //file system
    fs.writeFile(
        path,
        comentario,
        "utf-8",
        (error) =>{
            if(error){
                console.log("No pude escribir el archivo");
            }else{
                console.log("El archivo se añadió la frase y ahora dice: \n", comentario);
            }
        }
    )
}