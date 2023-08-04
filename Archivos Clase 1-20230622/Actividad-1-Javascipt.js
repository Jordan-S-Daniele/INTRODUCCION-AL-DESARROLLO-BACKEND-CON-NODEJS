const calcularPromedio = (numeros) => {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++){
        suma += numeros[i];
    }
    let promedio = suma / numeros.length;
    return promedio;
}

let cantNum = prompt("Ingrese la cantidad de numeros de la que va a sacar promedio: "); 
let numeros = [];
for(let i = 0; i < cantNum; i++){
    let num = prompt ("Ingrese un numero: ");
    let nume 
    numeros.push(num); 
    }
let resultado = calcularPromedio(numeros);
console.log("El promedio es: " + resultado);