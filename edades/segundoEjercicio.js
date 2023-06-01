// variables de entrada
// realizamos un llamado de la class de edades
const { Edades } = require("./classEdades");
// llamamos a la funcion readline para tomar datos del usuario
const readline = require("readline");

// interfaz de linea de comandos de nodejs
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//para ingresar los datos del usuario
function volverIngresarValores() {
  rl.question("porfavor ingres las edades con , en cada edad: ", (años) => {
    let arrayAños = años.split(",");
    let datosConfirmados = [];

    for (let i = 0; i < arrayAños.length; i++) {
      datosConfirmados.push(Number(arrayAños[i]));
    }

    let validacionDeDatos = datosConfirmados.every((datos) => !isNaN(datos));

    if (!validacionDeDatos || datosConfirmados.length >= 10) {
      console.log("solo numeros verdaderos o solo 10 datos");
      volverIngresarValores();
    } else {
      recolecionDeDatos(datosConfirmados);
    }
  });
}

// funcion para dar la salida de los elmentos requerido
function recolecionDeDatos(datosConfirmados) {
  let grupoDeEdades = new Edades(datosConfirmados);
  console.log(
    `la siguientes edades son menores de edad ${grupoDeEdades.menorDeEdad()}`
  );
  console.log(
    `la siguientes edades son mayores de edad ${grupoDeEdades.mayoresDeEdad()}`
  );
  console.log(
    `la siguientes edades son adultos mayores ${grupoDeEdades.adultoMayor()}`
  );
  grupoDeEdades.edadMasAlta();
  grupoDeEdades.edadMasBaja();
  grupoDeEdades.promedioDeEdades();
  console.log(
    "-------------------------------------------------------------------"
  );

  // funcion para volver a preguntar si quiere volver a ingresar datos.
  rl.question(
    "quires volver a ingresar otro listado de edades SI / NO: ",
    (dato) => {
      let valorMinuscula = dato.toLocaleLowerCase();
      if (valorMinuscula === "si") {
        volverIngresarValores();
      } else if (valorMinuscula === "no") {
        rl.close();
      }
    }
  );
}

volverIngresarValores();
