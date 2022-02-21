function calcularBhaskara(a, b, c) {

  let bNegativo = b * (-1);
  let bQuadrado = b * b;

  let delta = bQuadrado - 4 * a * c;

  if (delta < 0) {
    console.log('Delta menor que zero. Não é possível calcular')
  }
  else if (delta === 0) {
    console.log('Delta igual a zero')
  }
  else {
    let raizDelta = Math.sqrt(delta);

    let x1 = (bNegativo + raizDelta) / (2 * a);
    let x2 = (bNegativo - raizDelta) / (2 * a);

    console.log('X1:', x1);
    console.log('X2:', x2);
  }


}

calcularBhaskara(3, -15, 12);