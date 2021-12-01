//09-promesas

const fs = require("fs");

function promesaEsPar(numero){
    const miPrimeraPromesa = new Promise(//Definición de la promesa asincrona
        (
            resolve, //return
            reject //throw
        ) => {
            if(numero % 2 === 0 ){
                resolve(numero); // Si dejamos vacio --> Undefined
            } else {
                reject("No es par =(");
            }
        }
    );
    return miPrimeraPromesa;
}

function promesaElevarAlCuadrado(numero){
    const miSegundaPromesa = new Promise(
        (resolve, reject) => {
            const numeroElevado = Math.pow(numero, 2);
            resolve(numeroElevado);
        }
    );
    return miSegundaPromesa;
}

//bloques de codigo para usar
promesaEsPar(6)
    .then(
        (datosPromesa) => {
            console.log(datosPromesa)
            return promesaElevarAlCuadrado(datosPromesa)
        }
    )
    .then(
        (datosElevados) =>{
            console.log(datosElevados)
        }
    )
    .catch(
        (error) =>{
            console.log(error)
        }
    )
    .finally()