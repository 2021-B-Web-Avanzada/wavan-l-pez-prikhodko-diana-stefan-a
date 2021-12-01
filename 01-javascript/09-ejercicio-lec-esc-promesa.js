// 9-ejercicio-lc-esc-promesa.js

/*
Hacer una funcion que me acepte como parametro una variable
con el path del archivo y el contenido a agregar al contenido
del archivo. La funcion debe tomar estos dos parametros y leer
el archivo y añadir el texto al final del archivo. Al final vamos
a leer el archivo nuevamente e imprimirlo en consola.
Todoo debe ser relizado con promesas
-Promersa de lectura
Promesa de escritura
 */

const fs = require("fs");

function promesaLeerArchivo(path){
    const lecturaPromesa = new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                "utf-8",
                (error, contenidoArchivo) =>{
                    if (error){
                        reject("Se tuvo un error al leer el archivo!\n", error);
                    }else{
                        resolve(contenidoArchivo);
                    }
                }
            )
        }
    )
    return lecturaPromesa;
}
function promesaEscribirArchivo(path,contenidoActual, contenidoNuevo){
    const contenidoAgregar = contenidoActual + contenidoNuevo;
    const escrituraPromesa = new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                contenidoAgregar,
                "utf-8",
                (error) =>{
                    if(error){
                        reject("Se tuvo un error al escribir el archivo\n\n", error);
                    } else {
                        resolve("Se sobreescribió el archivo correctamente.")
                    }
                }
            )
        }
    )
    return escrituraPromesa;
}

function ejercicio(path, nuevoContenido){
    promesaLeerArchivo(path)
        .then(
            (datos) =>{ return promesaEscribirArchivo(path, datos, nuevoContenido); }
        )
        .then(
            (respuestaEscritura) =>{ console.log(respuestaEscritura); }
        )
        .then(
            ()=>{ return promesaLeerArchivo(path); }
        )
        .then(
            (archivoTexto) =>{ console.log("El texto dice: \n",archivoTexto); }
        )
        .catch(
            (error) =>{ console.log(error); }
        )
}

ejercicio("./06-ejemplo.txt", "\nBien, ¿y tu?")