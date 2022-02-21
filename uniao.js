const a = [1, 2, 3, 4, 5, 6];
const b = [4, 4, 5, 6, 7, 8];

let arrayUniao = [];

function obterUniao() {

  for (let indexListaA = 0; indexListaA < a.length; indexListaA++) {
    let resultado = false;

    if (arrayUniao.length === 0) {
      arrayUniao.push(a[indexListaA]);
    }
    else {
      for (let index = 0; index < arrayUniao.length; index++) {
        if (arrayUniao[index] === a[indexListaA]) {
          resultado = true;
        }
      }

      if (!resultado) {
        arrayUniao.push(a[indexListaA]);
      }
    }
  }

  for (let indexListaB = 0; indexListaB < b.length; indexListaB++) {
    let resultado = false;

    for (let index = 0; index < arrayUniao.length; index++) {
      if (arrayUniao[index] === b[indexListaB]) {
        resultado = true;
      }
    }

    if (!resultado) {
      arrayUniao.push(b[indexListaB]);
    }

  }

  console.log('array', arrayUniao);
}

obterUniao();
