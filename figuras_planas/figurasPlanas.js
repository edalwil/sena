// realizamos la programacion orientada a objetos

class FigurasPlanas {
  constructor() {}

  // metedo para calcula Area y perimetros de las figuras
  calcularArea() {
    // logica para calcular area
  }

  calcularPerimetro() {
    // logica para calcular perimetro
  }
}

// triangulo
class Triangulo extends FigurasPlanas {
  constructor(lado1, base, lado2, altura) {
    super();
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.base = base;
    this.altura = altura;
  }

  calcularPerimetro() {
    return this.lado1 + this.base + this.lado2;
  }

  calcularArea() {
    return (this.altura * this.base) / 2;
  }
}

// rectangulo

class Rectangulo extends FigurasPlanas {
  constructor(base, altura) {
    super();
    this.base = base;
    this.altura = altura;
  }

  calcularPerimetro() {
    return 2 * (this.base + this.altura);
  }

  calcularArea() {
    return this.base * this.altura;
  }
}

// cuadrado

class Cuadrado extends FigurasPlanas {
  constructor(lado) {
    super();
    this.lado = lado;
  }

  calcularPerimetro() {
    return 4 * this.lado;
  }

  calcularArea() {
    return Math.pow(this.lado, 2);
  }
}

class Circulo extends FigurasPlanas {
  constructor(radio) {
    super();
    this.radio = radio;
  }

  calcularPerimetro() {
    return 2 * Math.PI * Math.pow(this.radio, 2);
  }

  calcularArea() {
    return Math.PI * Math.pow(this.radio, 2);
  }
}

module.exports = { Triangulo, Rectangulo, Cuadrado, Circulo };
