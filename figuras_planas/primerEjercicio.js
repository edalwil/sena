// variables de entrada
// hacemos un llamado a las class de las figuras planas que entan el documento figuras planas
const { Triangulo, Rectangulo, Cuadrado, Circulo } = require("./figurasPlanas");
// hacemos readline para tomar datos de usuarios
const readline = require("readline");

// interfas de lineas de comando de nodejs
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// funcion que compueba el dato ingresado para dar el valor correspondiente
function ComprobarIngresoDeMensaje(mensaje) {
  try {
    if (mensaje === "circulo") {
      rl.question("Ingrese el valor del radio: ", (radio) => {
        if (isNaN(parseFloat(radio))) {
          throw new Error("El valor del radio debe ser un número válido.");
        }

        let circulo = new Circulo(radio);
        console.log(
          `El perímetro del círculo es ${circulo.calcularPerimetro()}`
        );
        console.log(`El área del círculo es ${circulo.calcularArea()}`);
        console.log("------------------//------------------------------");
        console.log("quieres continuar con otra figura SI / NO: ");
        rl.question("ingresa el valor: ", (dato) => {
          let valorMinuscula = dato.toLowerCase();
          if (valorMinuscula === "si") {
            menu();
          } else {
            rl.close();
          }
        });
      });
    } else if (mensaje === "triangulo") {
      rl.question("Ingrese el valor de lado1: ", (lado1) => {
        rl.question("Ingrese el valor de lado2: ", (lado2) => {
          rl.question("Ingrese el valor de base: ", (base) => {
            rl.question("Ingrese el valor de altura:", (altura) => {
              if (
                isNaN(parseFloat(lado1)) ||
                isNaN(parseFloat(lado2)) ||
                isNaN(parseFloat(base)) ||
                isNaN(parseFloat(altura))
              ) {
                throw new Error("El valor debe ser un número válido.");
              }
              let triangulo = new Triangulo(lado1, lado2, base, altura);
              console.log(
                `El perímetro del triángulo es ${triangulo.calcularPerimetro()}`
              );
              console.log(
                `El área del triángulo es ${triangulo.calcularArea()}`
              );
              console.log("------------------//------------------------------");
              console.log("quieres continuar con otra figura SI / NO: ");
              rl.question("ingresa el valor: ", (dato) => {
                let valorMinuscula = dato.toLowerCase();
                if (valorMinuscula === "si") {
                  menu();
                } else {
                  rl.close();
                }
              });
            });
          });
        });
      });
    } else if (mensaje === "rectangulo") {
      rl.question("Ingrese el valor de base: ", (base) => {
        rl.question("Ingrese el valor de altura: ", (altura) => {
          if (isNaN(parseFloat(base)) || isNaN(parseFloat(altura))) {
            throw new Error("El valor del radio debe ser un número válido.");
          }
          let rectangulo = new Rectangulo(base, altura);
          console.log(
            `El perímetro del triángulo es ${rectangulo.calcularPerimetro()}`
          );
          console.log(`El área del triángulo es ${rectangulo.calcularArea()}`);
          console.log("------------------//------------------------------");
          console.log("quieres continuar con otra figura SI / NO: ");
          rl.question("ingresa el valor: ", (dato) => {
            let valorMinuscula = dato.toLowerCase();
            if (valorMinuscula === "si") {
              menu();
            } else {
              rl.close();
            }
          });
        });
      });
    } else if (mensaje === "cuadrado") {
      rl.question("Ingrese el valor de lado: ", (lado) => {
        if (isNaN(parseFloat(lado))) {
          throw new Error("El valor del radio debe ser un número válido.");
        }

        let cuadrado = new Cuadrado(lado);
        console.log(
          `El perímetro del triángulo es ${cuadrado.calcularPerimetro()}`
        );
        console.log(`El área del triángulo es ${cuadrado.calcularArea()}`);
        console.log("------------------//------------------------------");
        console.log("quieres continuar con otra figura SI / NO: ");
        rl.question("ingresa el valor: ", (dato) => {
          let valorMinuscula = dato.toLowerCase();
          if (valorMinuscula === "si") {
            menu();
          } else {
            rl.close();
          }
        });
      });
    } else {
      throw new Error(
        "ingresa nombres de figuras planas, triangulo,circulo,cuadrado,rectangulo"
      );
    }
  } catch (error) {
    console.log("Ocurrió un error:", error);
  }
}

// funcion para hacer el menu para selecion de figuras
function menu() {
  console.log("---menu----");
  console.log("a: circulo");
  console.log("b: triangulo");
  console.log("c: rectangulo");
  console.log("d: cuadrado");
  console.log("q: salir");

  rl.question("porfavor ingresa el nombre la figura: ", (figura) => {
    if (figura === "a") {
      ComprobarIngresoDeMensaje("circulo");
    } else if (figura === "b") {
      ComprobarIngresoDeMensaje("triangulo");
    } else if (figura === "c") {
      ComprobarIngresoDeMensaje("rectangulo");
    } else if (figura === "d") {
      ComprobarIngresoDeMensaje("cuadrado");
    } else if (figura === "q") {
      rl.close();
    } else {
      console.log("Opción inválida. Por favor, seleccione una opción válida.");
      mostrarMenu();
    }
  });
}

menu();
