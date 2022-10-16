while (true) {
  let numero = prompt(
    "Coloque o numero para a tabuada. ou escreva PARE para parar"
  );

  if (numero.toUpperCase() === "PARE") {
    alert("O programa parou.");
    break;
  } else {
    numero = Number(numero);
  }

  if (isNaN(numero)) {
    alert("Numero invalida tente novamente.");
    continue;
  }

  for (let i = 0; i <= 10; i++) {
    alert(numero + " x " + i + " = " + numero * i);
  }
}
