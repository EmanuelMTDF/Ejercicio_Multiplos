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
  prompt('"¿Este número..." (Por favor, ingrese el primer número)')
);
let divisorOCociente: number = Number(
  prompt('"...es múltiplo de: ?" (Por favor, ingrese el segundo número)')
);

function esMultiplo(dividendo: number, divisorOCociente: number): boolean {
  let resto: number = dividendo % divisorOCociente;
  let resultado: boolean;
  if (resto === 0) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

console.log(esMultiplo(dividendo, divisorOCociente));
