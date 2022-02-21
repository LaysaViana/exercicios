const a = [1, 2, 3, 4, 5, 6];
const b = [4, 4, 5, 6, 7, 8];

let arrayIntersecao = [];

function obterIntersecao() {

  for (let indexListaA = 0; indexListaA < a.length; indexListaA++) {
    let resultado = false;

    for (let indexListaB = 0; indexListaB < b.length; indexListaB++) {
      if (b[indexListaB] === a[indexListaA]) {
        resultado = true;
      }
    }

    if (resultado) {
      arrayIntersecao.push(a[indexListaA]);
    }

  }

  console.log('array', arrayIntersecao);
}

obterIntersecao();
