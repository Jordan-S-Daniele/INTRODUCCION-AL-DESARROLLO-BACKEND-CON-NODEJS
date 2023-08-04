const registrarEstudiantes = () => {
    console.log("Iniciando Registro de Estudiantes");
    let cantidadEstudiantes = prompt("Ingresar la Cantidad de Estudiantes a Registrar: ");
    console.log("Cantidad de Estudiantes a Registrar: " + cantidadEstudiantes);
    let estudiantes = [];
    for(let i = 0; i < cantidadEstudiantes; i++){
        let nombreEstudiante = prompt ("Ingrese el nombre del estidiante " + i + ": ");
        let edad = prompt ("Ingrese la edad de " + nombreEstudiante + ": ");
        console.log("Nombre: " + nombreEstudiante);
        console.log("Edad: " + edad);
        let estudiante = {
            nombre: nombreEstudiante,
            edad: edad
        }
        estudiantes.push(estudiante);
    }
    return estudiantes;
}

const mostrarListaEstudiantes = (estudiantes) => {
    console.log("Lista de estudiantesregistrados: ");
    for (let j = 0; j < estudiantes.length; j++){
        let estudianteActual = estudiantes[j];
        console.log("Nombre: " + estudianteActual.nombre + ", Edad: " + estudianteActual.edad);
    }
}

// Ejecutando la funcion registrarEstudiantes
let estudiantesRegistrados = registrarEstudiantes();
mostrarListaEstudiantes(estudiantesRegistrados);