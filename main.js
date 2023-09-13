//import {suma, resta, multiplicacion, division} from "./calculadora.mjs"; --- para llamar a todos * as

import * as Calculadora from './calculadora.mjs';

        const num1 = 10;
        const num2 = 5;

        const operacion = 'suma'; // Puedes cambiar esto a 'resta', 'multiplicacion' o 'division' según la operación que desees realizar.

        let resultado;

        switch (operacion) {
            case 'suma':
                resultado = Calculadora.suma(num1, num2);
                break;
            case 'resta':
                resultado = Calculadora.resta(num1, num2);
                break;
            case 'multiplicacion':
                resultado = Calculadora.multiplicacion(num1, num2);
                break;
            case 'division':
                resultado = Calculadora.division(num1, num2);
                break;
            default:
                resultado = 'Operación no válida';
                break;
        }

        document.getElementById('resultado').textContent = `Resultado de la ${operacion}: ${resultado}`;