while (true) {
  let numero = prompt("Coloque um numero. ou escreva PARE para parar");

  if (numero.toUpperCase() == "PARE") {
    alert("O Programa parou");
    break;
  } else {
    numero = parseInt(numero);
  }

  if (isNaN(numero)) {
    alert("Numero invalido tente novamente.");
    continue;
  }

  if (numero % 2 == 0) {
    let numerosImpares = numero / 2;
    let numerosPares = numero / 2 + 1;
    alert(
      `O ${numero} tem ${numerosPares} numeros par e ${numerosImpares} numeros impar`
    );
  } else {
    let numerosImpares = (numero + 1) / 2;
    let numerosPares = (numero + 1) / 2;
    alert(
      `Entre 0 e ${numero} tem ${numerosPares} numeros par e ${numerosImpares} numeros impar`
    );
  }
}
