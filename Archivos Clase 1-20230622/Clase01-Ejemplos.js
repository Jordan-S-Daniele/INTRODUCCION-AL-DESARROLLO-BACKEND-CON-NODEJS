// Ejemplo 1:
let numero1 = 5;
let numero2 = 7;
const resultado = numero1 + numero2;
console.log(resultado);

// Ejemplo 2:
let lampara = "Enchufada";
let foco = "Quemado";
if(lampara === "Enchufada"){
    if(foco === "Quemado"){
        console.log("CAMBIAR EL FOCO");
    }
    else{
        console.log("COMPRAR OTRA LAMPARA");
    }
}
else{
    console.log("ENCHUFAR LAMPARA");
}

// Ejemplo 3:
// Funcion flecha:
let suma = (num1, num2) => {
    return num1 + num2;
}

let resultado1 =  suma (3,4);
console.log(resultado1);
let resultado2 = suma (7,9);
console.log(resultado2);

// Funcion tradicional:
function mult (num1, num2){
    return num1 * num2;
}

let resultado3 =  mult (3,4);
console.log(resultado3);
let resultado4 = mult (7,9);
console.log(resultado4);

// Ejemplo 4:
let miAuto = {
    marca: "Toyota",
    modelo: "Yaris",
    color: "Rojo"
}

console.log(miAuto.marca);
console.log(miAuto["modelo"]);
miAuto.marca = "Fiat";
miAuto["modelo"] = "Palio";
console.log(miAuto["marca"]);
console.log(miAuto.modelo);

// Ejemplo 5:
let colores = ["rojo", "azul", "violeta", "verde", "naranja","blanco"];
console.log(colores[0]);
console.log(colores[1]);
console.log(colores[2]);
console.log(colores[3]);

// Ejemplo 6:

for(let i = 0; i < colores.length; i++){
    console.log(colores[i]);
}

for(let color in colores){
    console.log(colores[color]);
}