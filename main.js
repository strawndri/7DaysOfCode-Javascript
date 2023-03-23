const nome = prompt('Qual seu nome?')
const areaInicial = parseInt(prompt('Qual área deseja seguir?\n0: Front-end\n1: Back-end '))
let primeiraEspecializacao;
let respostaTecnologia;
let tecnologias = []
let tecnologia;

if (areaInicial === 0) {
  let primeiraEspecializacao = parseInt(prompt('Em qual tecnologia você deseja se especializar?\n0: React\n1: Vue'))
} else if (areaInicial === 1) {
  let primeiraEspecializacao = parseInt(prompt('Em qual tecnologia você deseja se especializar?\n0: C#\n1: Java'))
} 

const respostaEspecializacao = parseInt(prompt(`Qual é seu próximo passo?\n0: Continuar na área em que estou\n1: Me tornar fullstack`))

if (respostaEspecializacao === 0) {
  alert(`Que legal, te desejo sucesso!`)
} else if (respostaEspecializacao === 1) {
  alert(`Uau! Temos bastante coisa a aprender, não é? Boa sorte na sua carreira :)`)
} 

while (respostaTecnologia != 0) {
  respostaTecnologia = prompt(`Qual outra tecnologia você gostaria de aprender? (Digite 0 para cancelar)`)
  tecnologias.push(tecnologia)
}

alert(`Foi legal conversar contigo, ${nome}! Até mais.`)