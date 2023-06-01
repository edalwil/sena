class Edades {
  constructor(edades) {
    this.edades = edades;
    this.edadesMemores = [];
    this.edadesMayores = [];
    this.edadDeadultoMayor = [];
    this.promedio = 0;
  }

  //   menores de edad <= 17
  menorDeEdad() {
    for (let i = 0; i < this.edades.length; i++) {
      if (this.edades[i] <= 17) {
        this.edadesMemores.push(this.edades[i]);
      }
    }
    return this.edadesMemores;
  }
  //   mayores de edad <= 60
  mayoresDeEdad() {
    for (let i = 0; i < this.edades.length; i++) {
      if (this.edades[i] <= 60 && this.edades[i] >= 18) {
        this.edadesMayores.push(this.edades[i]);
      }
    }
    return this.edadesMayores;
  }

  //    adultos mayores > 60
  adultoMayor() {
    for (let i = 0; i < this.edades.length; i++) {
      if (this.edades[i] > 60) {
        this.edadDeadultoMayor.push(this.edades[i]);
      }
    }
    return this.edadDeadultoMayor;
  }

  //   edad mas baja
  edadMasBaja() {
    this.edades.sort((a, b) => a - b);
    console.log(`la edad mas baja es ${this.edades[0]}`);
  }

  //   edad mas alta
  edadMasAlta() {
    this.edades.sort((a, b) => a - b);
    console.log(`la edad mas alta es ${this.edades[this.edades.length - 1]}`);
  }

  // promedio de edades

  promedioDeEdades() {
    for (let i = 0; i < this.edades.length; i++) {
      this.promedio += this.edades[i];
    }
    this.promedio = this.promedio / this.edades.length;
    console.log(`el promedio de las edades es de ${this.promedio}`);
  }
}

module.exports = { Edades };
