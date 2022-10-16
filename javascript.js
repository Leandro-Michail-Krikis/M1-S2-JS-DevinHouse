var numerosPrimos = 0;

for (let numero = 2; numero <= 1000; numero++) {
  let primo = true;
  for (let subNumeros = 2; subNumeros < numero; subNumeros++) {
    // Se tiver um numero entre ele e um menor do que ele, ele nao e um numero primo
    if (numero % subNumeros === 0) {
      primo = false;
    }
  }
  if (primo) {
    numerosPrimos++
    console.log(numero);
  }
}

console.log("O total de numeros primos ate o 1000 e: " + numerosPrimos);