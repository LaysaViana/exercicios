const a = [1, 2, 3, 4, 5, 6];
const b = [4, 4, 5, 6, 7, 8];

let arrayDiferenca = [];

function obterDiferenca() {

  for (let indexListaA = 0; indexListaA < a.length; indexListaA++) {

    let resultado = false;

    for (let indexListaB = 0; indexListaB < b.length; indexListaB++) {
      if (b[indexListaB] === a[indexListaA]) {
        resultado = true;
      }
    }

    if (!resultado) {
      arrayDiferenca.push(a[indexListaA]);
    }

  }

  for (let indexListaB = 0; indexListaB < b.length; indexListaB++) {

    let resultado = false;

    for (let index = 0; index < arrayDiferenca.length; index++) {
      if (b[indexListaB] === arrayDiferenca[index]) {
        resultado = true;
      }
    }

    if (!resultado) {
      arrayDiferenca.push(b[indexListaB]);
    }

  }

  console.log('array', arrayDiferenca);
}

obterDiferenca();
