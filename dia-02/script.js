let nome = prompt("Qual o seu nome? ");
let idade = parseInt(prompt(`Quantos anos você tem, ${nome}? `));
let linguagemDeProgramacao = prompt(
  "Qual linguagem de programação você está estudando?"
);

alert(
  `${nome}, você tem ${idade} anos e já está aprendendo ${linguagemDeProgramacao}!`
);

let resposta = parseInt(prompt(
  `Você está gostando de estudar ${linguagemDeProgramacao}? Digite 1 para SIM e 0 para NÃO.`
));

while (resposta < 0 || resposta > 1) {
  resposta = parseInt(prompt(
  `Hmm... não entendi a sua resposta, tente novamente.`
));
}

switch (resposta) {
  case 0:
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
    break;
  case 1:
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
    break;
}
