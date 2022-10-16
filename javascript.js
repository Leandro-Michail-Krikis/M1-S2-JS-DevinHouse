while (true) {
  const calculosValidos = ["+", "-", "*", "/"];
  const calculo = prompt(
    "qual o tipo de cálculo deseja fazer (“+”, “-”, “*” ou “/”)"
  );
  const primeiroNumero = Number(prompt("Coloque o primeiro Numero"));
  const segundoNumero = Number(prompt("Coloque o segundo Numero"));
  let resultado;

  if (
    isNaN(primeiroNumero) ||
    isNaN(segundoNumero) ||
    calculosValidos.indexOf(calculo) == -1
  ) {
    alert("dados invalidos tente novamente.");
    continue;
  }

  switch (calculo) {
    case "+":
      resultado = primeiroNumero + segundoNumero;
      break;

    case "-":
      resultado = primeiroNumero - segundoNumero;
      break;

    case "*":
      resultado = primeiroNumero * segundoNumero;
      break;

    case "/":
      resultado = primeiroNumero / segundoNumero;
      break;
  }
  alert("O resultado do seu cálculo é: " + resultado)
  break;
}
