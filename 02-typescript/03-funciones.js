//03-funciones.ts
// Declaración típica
function sumarNumero(numeroInicial) {
    var listaInfinita = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        listaInfinita[_i - 1] = arguments[_i];
    }
    return listaInfinita.reduce(function (valorAcumulado, valorActual, indice, arreglo) {
        return valorAcumulado + valorActual;
    }, numeroInicial);
}
var respuestaNumerica = sumarNumero(1, 2, 3, 4, 5);
console.log("Respuesta: ", respuestaNumerica);
