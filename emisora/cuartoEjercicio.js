// variables de entrada
// variable para el ingreso de datos
const readline = require("readline");
const personas = [];

// interfas de lines de comando de nodejs
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// creamos la class de persona para guardar los datos y su canciones favoritas
class Persona {
  constructor(
    nombre,
    cedula,
    fechaNacimiento,
    correo,
    ciudadResidencia,
    ciudadOrigen
  ) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.fechaNacimiento = fechaNacimiento;
    this.correo = correo;
    this.ciudadResidencia = ciudadResidencia;
    this.ciudadOrigen = ciudadOrigen;
    this.cancionesFavoritas = [];
  }

  // funcion para agregar canciones favoritas
  agregarCancionFavorita(artista, titulo) {
    if (this.cancionesFavoritas.length < 3) {
      this.cancionesFavoritas.push({ artista, titulo });
      console.log(
        `La canción "${titulo}" de ${artista} ha sido agregada a las favoritas.`
      );
    } else {
      console.log(
        "No se pueden agregar más canciones favoritas. Se ha alcanzado el límite."
      );
    }
  }

  // mostrar informacion de la persona o usuario
  mostrarInformacionPersonal(datos2) {
    console.log("Información Personal:");
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Cédula: ${this.cedula}`);
    console.log(`Fecha de Nacimiento: ${this.fechaNacimiento}`);
    console.log(`Correo Electrónico: ${this.correo}`);
    console.log(`Ciudad de Residencia: ${this.ciudadResidencia}`);
    console.log(`Ciudad de Origen: ${this.ciudadOrigen}`);
    console.log(
      "la cancion favorita es: " +
        this.cancionesFavoritas[datos2].titulo +
        "del artista: " +
        this.cancionesFavoritas[datos2].artista
    );
    console.log(datos2);
  }
}

// procesosos

// funcion para agregar a una persona

function agregarPersona() {
  rl.question("Ingrese el nombre: ", (nombre) => {
    rl.question("Ingrese el número de identificación (cedula): ", (cedula) => {
      rl.question("Ingrese la fecha de nacimiento: ", (fechaNacimiento) => {
        rl.question("Ingrese el correo electrónico: ", (correo) => {
          rl.question(
            "Ingrese la ciudad de residencia: ",
            (ciudadResidencia) => {
              rl.question("Ingrese la ciudad de origen: ", (ciudadOrigen) => {
                const persona = new Persona(
                  nombre,
                  cedula,
                  fechaNacimiento,
                  correo,
                  ciudadResidencia,
                  ciudadOrigen
                );
                personas.push(persona);
                console.log("Persona agregada correctamente.");
                mostrarMenu();
              });
            }
          );
        });
      });
    });
  });
}

// funcion para mostrar la informacion, obteniada con anterioridad
function mostrarInformacionPersonal() {
  rl.question("Ingrese la posición de la persona: ", (posicion) => {
    const index = parseInt(posicion) - 1;
    console.log(index);
    if (index >= 0 && index < personas.length) {
      const persona = personas[index];
      persona.mostrarInformacionPersonal(index);
    } else {
      console.log("La posición ingresada es inválida.");
    }
    mostrarMenu();
  });
}

// funcion para agregar canciones a la clase persona

function agregarCancionFavorita() {
  rl.question("Ingrese la posición de la persona: ", (posicion) => {
    const index = parseInt(posicion) - 1;
    if (index >= 0 && index < personas.length) {
      const persona = personas[index];
      rl.question("Ingrese el artista: ", (artista) => {
        rl.question("Ingrese el título de la canción: ", (titulo) => {
          persona.agregarCancionFavorita(artista, titulo);
          mostrarMenu();
        });
      });
    } else {
      console.log("La posición ingresada es inválida.");
      mostrarMenu();
    }
  });
}

// menu de incio para tomar las objeciones

function mostrarMenu() {
  console.log("--- Menú ---");
  console.log("a. Agregar una persona");
  console.log("b. Mostrar información personal de una persona");
  console.log("c. Agregar canción favorita");
  console.log("q. Salir");

  rl.question("Seleccione una opción: ", (opcion) => {
    if (opcion === "a") {
      agregarPersona();
    } else if (opcion === "b") {
      mostrarInformacionPersonal();
    } else if (opcion === "c") {
      agregarCancionFavorita();
    } else if (opcion === "q") {
      rl.close();
    } else {
      console.log("Opción inválida. Por favor, seleccione una opción válida.");
      mostrarMenu();
    }
  });
}

mostrarMenu();
