// variables de entrada
// llamamos a la funcion readline para tomar datos del usuario
const readline = require("readline");

let dato1 = [];
let dato2 = [];
let unionVectores = [];

// interfaz de linea de comandos de nodejs
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// proceso
// activar la funcion
datosDeVectores1();

//para ingresar los datos del usuario
function datosDeVectores1() {
  rl.question(
    "porfavor ingresar el primer grupo de datos entre 1 a 5 valores de forma ascendente seprando con , : ",
    (datos) => {
      let arrayVectores = datos.split(",");

      if (arrayVectores.length <= 5) {
        for (let i = 0; i < arrayVectores.length; i++) {
          dato1.push(Number(arrayVectores[i]));
        }

        let verficaiconDeAscendente = dato1.every((element, indice) => {
          if (indice === dato1.length - 1) {
            return true;
          } else {
            return element <= dato1[indice + 1];
          }
        });

        if (!verficaiconDeAscendente) {
          console.log("los no estan ordenados de forma ascendente");
          datosDeVectores1();
        } else {
          datosDeVectores2();
        }
      } else {
        console.log("hay mas de 5 datos");
        console.log("vuelva a ingresar los datos");
        datosDeVectores1();
      }
    }
  );
}

//para ingresar los datos del usuario
function datosDeVectores2() {
  rl.question(
    "porfavor ingresar el segundo grupo de datos entre 1 a 5 valores de forma ascendente seprando con , : ",
    (datos) => {
      let arrayVectores = datos.split(",");

      if (arrayVectores.length <= 5) {
        for (let i = 0; i < arrayVectores.length; i++) {
          dato2.push(Number(arrayVectores[i]));
        }

        let verficaiconDeAscendente = dato1.every((element, indice) => {
          if (indice === dato1.length - 1) {
            return true;
          } else {
            return element <= dato1[indice + 1];
          }
        });

        if (!verficaiconDeAscendente) {
          console.log("los no estan ordenados de forma ascendente");
          datosDeVectores2();
        } else {
          unirVectores(dato1, dato2);
        }
      } else {
        console.log("hay mas de 5 datos");
        console.log("vuelva a ingresar los datos");
        datosDeVectores2();
      }
    }
  );
}

// salida de datos con los dos array unidos
function unirVectores(a, b) {
  unionVectores = a.concat(b);

  unionVectores.sort((a, b) => a - b);

  console.log(`lista de los vectores unidos ${unionVectores}`);
  console.log(
    "----------------------------------///-----------------------------------"
  );
  volverAPreguntar();
}

// volver a iniciar el algorirmo si confimar 

function volverAPreguntar() {
  console.log(
    "----------------------------------///-----------------------------------"
  );

  rl.question("quires volver a ingresar datos: Si o No: ", (datos) => {
    let strinDatos = datos.toLowerCase();
    if (strinDatos === "no") {
      rl.close();
    } else if (strinDatos === "si") {
      datosDeVectores1();
    } else {
      console.log("porfavor valores correctos");
      volverAPreguntar();
    }
  });
}
