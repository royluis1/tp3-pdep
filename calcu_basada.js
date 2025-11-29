/* Paradigma: Orientado a Objetos (Basado en Clases)
   Lenguaje: JavaScript (ES6 Classes)
*/

class Calculadora {
    // Encapsulamiento: El estado (resultado) se inicializa en el constructor
    constructor() {
        this.resultado = 0;
    }

    // Métodos públicos (Abstracción de la operación)
    sumar(valor) {
        this.validarNumero(valor);
        this.resultado += valor;
        return this.resultado;
    }

    restar(valor) {
        this.validarNumero(valor);
        this.resultado -= valor;
        return this.resultado;
    }

    multiplicar(valor) {
        this.validarNumero(valor);
        this.resultado *= valor;
        return this.resultado;
    }

    dividir(valor) {
        this.validarNumero(valor);
        if (valor === 0) {
            console.error("Error: No se puede dividir por cero.");
            return null;
        }
        this.resultado /= valor;
        return this.resultado;
    }

    limpiar() {
        this.resultado = 0;
        return this.resultado;
    }

    obtenerResultado() {
        return this.resultado;
    }

    // Método 'privado' (por convención o usando # en versiones modernas)
    // para uso interno de la clase.
    validarNumero(valor) {
        if (typeof valor !== 'number') {
            throw new Error("El valor ingresado debe ser un número");
        }
    }
}

// --- Uso de la Clase ---
const miCalculadora = new Calculadora();
console.log("Suma 10:", miCalculadora.sumar(10));      // 10
console.log("Resta 2:", miCalculadora.restar(2));      // 8
console.log("Multiplica por 5:", miCalculadora.multiplicar(5)); // 40
console.log("Resultado final:", miCalculadora.obtenerResultado());