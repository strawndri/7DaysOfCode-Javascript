function somarValores(x, y) {
  return x + y
}

function subtrairValores(x, y) {
  return x - y
}

function multiplicarValores(x, y) {
  return x * y
}

function dividirValores(x, y) {
  return x / y
}

let respostaContinuar;
let resultado;
let valor1;
let valor2;

while (respostaContinuar != 0) {
  resultado = []
  respostaContinuar = parseInt(prompt('O que você deseja fazer?\n0: Sair do sistema\n1: Somar dois valores\n2: Subtrair dois valores\n3: Multiplicar dois valores\n4: Dividir dois valores'))

  if (respostaContinuar == 0) {
    alert('Até mais!')
    if (resultado.length > 1) {
      document.write(mostraResultado())
    }
    break;
  }

  valor1 = parseFloat(prompt('Primeiro valor: '))
  valor2 = parseFloat(prompt('Segundo valor: '))

  switch (respostaContinuar) {
    case 1:
      resultado = ['soma', somarValores(valor1, valor2)]
      alert(mostraResultado())
      break;
    case 2:
      resultado = ['subtração', subtrairValores(valor1, valor2)]
      alert(mostraResultado())
      break;
    case 3:
      resultado = ['multiplicação', multiplicarValores(valor1, valor2)]
      alert(mostraResultado())
      break;
    case 4:
      if (valor2 == 0) {
        alert('Ops! Não é possível divir por zero.')
      } else {
        resultado = ['divisão', dividirValores(valor1, valor2)]
        alert(mostraResultado())
      }
      break;
    default:
      alert('Ops, não existe esta opção!')
  }
}

function mostraResultado() {
  return `A ${resultado[0]} entre ${valor1} e ${valor2} é ${resultado[1]}`
}