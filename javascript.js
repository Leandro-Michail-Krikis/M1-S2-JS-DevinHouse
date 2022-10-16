while (true) {
  const inicio = Number(prompt("Numero inicial"));
  const raiz = Number(prompt("raiz"));
  let ultimoPA = 1;
  let resultado = "1";

  if (isNaN(inicio) || isNaN(raiz)) {
    alert("Entradas invalidas.");
    continue;
  }

  for (let i = 1; i < 10; i++) {
    ultimoPA += raiz;
    resultado += ", " + ultimoPA.toString();
  }

  alert("resultado: " + resultado);
}
