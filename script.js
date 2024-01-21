var numero1, numero2;

// Función para verificar si un valor es un número válido y mayor que cero
function esNumeroValido(valor) {
  return !isNaN(valor) && valor > 0;
}

// Pedir al usuario el primer número y verificar si es válido
do {
  numero1 = prompt("Ingrese el primer número:");
  numero1 = parseFloat(numero1);

  if (!esNumeroValido(numero1)) {
    alert("Por favor, ingrese un número válido y mayor que cero.");
  }
} while (!esNumeroValido(numero1));

// Pedir al usuario el segundo número y verificar si es válido
do {
  numero2 = prompt("Ingrese el segundo número:");
  numero2 = parseFloat(numero2);

  if (!esNumeroValido(numero2)) {
    alert("Por favor, ingrese un número válido y mayor que cero.");
  }
} while (!esNumeroValido(numero2));

// Determinar y mostrar el resultado
if (numero1 > numero2) {
  alert(numero1 + " es mayor que " + numero2);
} else if (numero1 < numero2) {
  alert(numero1 + " es menor que " + numero2);
} else {
  alert("Ambos números son iguales");
}