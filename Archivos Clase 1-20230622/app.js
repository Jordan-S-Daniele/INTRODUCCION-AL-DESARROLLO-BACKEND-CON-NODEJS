const readLineSync = require("readline-sync");
const { mostrarListaEstudiantes } = require(`./lista_estudiantes`);
const registrarEstudiantes = () => {
  console.log("Iniciando Registro de Estudiantes");
  const cantidadEstudiantes = readLineSync.question(
    "Ingresar la Cantidad de Estudiantes a Registrar: "
  );
  console.log("Cantidad de Estudiantes a Registrar: " + cantidadEstudiantes);
  const estudiantes = [];
  for (let i = 0; i < cantidadEstudiantes; i++) {
    const nombre = readLineSync.question(
      `Ingrese el nombre del estidiante ${i}:`
    );
    const edad = readLineSync.question(`Ingrese la edad de ${nombre}:`);
    const estudiante = {
      nombre,
      edad,
    };
    estudiantes.push(estudiante);
  }
  mostrarListaEstudiantes(estudiantes);
};

//Iniciar el registro de estudiantes
registrarEstudiantes();
