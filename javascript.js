while (true) {
  let idade = prompt("Coloque a sua idade. ou escreva PARE para parar");

  if (idade.toUpperCase() === "PARE") {
    alert("O programa parou.");
    break;
  } else {
    idade = Number(idade);
  }

  if (isNaN(idade) || idade < 0) {
    alert("Idade invalida tente novamente.");
    continue;
  }

  if (idade <= 15) {
    alert("E um jovem")
  } else if (idade <= 64) {
    alert("E um adulto")
  } else {
    alert("E um idoso")
  }
  
}
