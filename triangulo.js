//Equilátero: são os triângulos que possuem as três medidas iguais
//Isósceles: São os polígonos que possuem duas medidas iguais e apenas uma diferente;
//Escaleno: são as figuras geométricas de três lados com as três medidas diferentes;

function VerificarTipoTriangulo(a, b, c) {
  if (a === b && b === c) {
    return "Equilátero";
  }
  else if ((a === b && a !== c) || (b === c && b !== a)) {
    return "Isóceles";
  }

  return "Escaleno";
}

VerificarTipoTriangulo(2, 2, 4);