let chute = parseInt(prompt('Digite um número entre 0 e 10:'));
let numeroSorteado = Math.round(Math.random() * 10)
let tentativas = 0
let acertou = false

while (tentativas < 2) {
  tentativas++
  if (chute == numeroSorteado) {
    acertou = true
    break
  } else {
    alert(`Ops, tente novamente. Você possui mais ${3 - tentativas} tentativa(s)!`)
  }
  chute = parseInt(prompt('Digite outro número entre 0 e 10:'))
}

if (acertou == true) {
  alert(`Eba! O número realmente era ${chute}. Você acertou após ${tentativas} tentativas.`)
} else {
  alert(`Poxa, não foi dessa vez. O número era ${numeroSorteado}.`)
}
