while (true) {
  try {
    let dia = Number(prompt("Coloque o dia em forma de numero. (1-31)"));
    let mes = Number(prompt("Coloque o mes em forma de numero. (1-12)"));
    if (
      isNaN(mes) ||
      isNaN(dia) ||
      dia < 1 ||
      dia > 31 ||
      mes < 0 ||
      mes > 12
    ) {
      throw new Error("");
    }
    const dataDeEntrada = new Date(null, mes - 1, dia).getTime();
    const inicioOutono = new Date(null, 3 - 1, 22).getTime();
    const inicioInverno = new Date(null, 06 - 1, 22).getTime();
    const inicioPrimavera = new Date(null, 09 - 1, 22).getTime();
    const fimPrimavera = new Date(null, 12 - 1, 21).getTime();

    let resultado;
    if (dataDeEntrada >= inicioOutono && dataDeEntrada < inicioInverno) {
      resultado = "Outono";
    } else if (
      dataDeEntrada >= inicioInverno &&
      dataDeEntrada < inicioPrimavera
    ) {
      resultado = "Inverno";
    } else if (
      dataDeEntrada >= inicioPrimavera &&
      dataDeEntrada <= fimPrimavera
    ) {
      resultado = "Primavera";
    } else {
      resultado = "Verão";
    }

    alert("A estação atual é " + resultado);
  } catch (error) {
    alert("dados invalidos tente novamente.");
    continue;
  }
}
