// EJERCICIO  "MÚLTIPLOS"

/*
Cree un método esMultiplo con 2 parámetros que devuelva el
valor lógico verdadero o falso según si el primer número que
se indique como parámetro es múltiplo del segundo
Recuerde que un numero es múltiplo de otro si al dividirlo su
resto es cero
Recuerde que la operación mod permite saber si el resto de
una división es cero
*/

let dividendo: number = Number(
  prompt('"¿Este numero..." (Por favor, ingrese el primer número)')
);
let divisorOCociente: number = Number(
  prompt('"...es múltiplo de: ?" (Por favor, ingrese el segundo número)')
);
let resto: number = dividendo % divisorOCociente;
let resultado: boolean = Boolean(resto);

if (resto === 0) {
  console.log((resultado = true));
} else {
  console.log((resultado = false));
}

/*COMENTARIO

El programa funciona, pero aún falta plantearlo como "Función", tal y como pide la consigna

*/
