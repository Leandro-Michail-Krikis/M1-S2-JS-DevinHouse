let soma = 0;
while (true) {
  let numero = prompt(
    "Coloque o numero para a soma. ou escreva -1 para parar"
  );

  if (numero == -1) {
    alert("A soma dos numero e : " + soma);
    break;
  } else {
    numero = Number(numero);
  }

  if (isNaN(numero)) {
    alert("Numero invalido tente novamente.");
    continue;
  }

  soma += numero 
  
}
