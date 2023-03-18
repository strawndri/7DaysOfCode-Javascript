let listaDeCompras = {
  doces: [],
  hortifruti: [],
  bebidas: [],
  congelados: [],
  graos: [],
  outros: []
};

let respostaContinuar = 1;
let categorias = Object.keys(listaDeCompras);
let itens = [];
let item;
let categoria;
let minhasListaCompras = '';

function atualizarListaItens() {
  for (var i = 0; i < Object.values(listaDeCompras).length; i++) {
    itens += Object.values(listaDeCompras)[i].concat(Object.values(listaDeCompras)[i + 1])
  }
}

while (respostaContinuar != 3) {
  respostaContinuar = parseInt(prompt("O que deseja fazer?\n1: Adicionar um item à lista de compras\n2: Remover um item\n3: Sair do sistema"));
  categoria = "";
  item = "";
      
  switch (respostaContinuar) {
    case 1:
    item = prompt("Qual seria o item? ");
    while (!categorias.includes(categoria)) {
      categoria = prompt(
        `Em qual categoria ${item} está?\n-Doces\n-Hortifruti\n-Bebidas\n-Congelados\n-Graos\n-Outros`
        ).toLowerCase();
      }
    listaDeCompras[categoria].push(item);
    atualizarListaItens()
    break;

    case 2:
    if (itens.length < 1) {
      alert(mostraLista("\n"));
      while (!itens.includes(item)) {
        item = prompt("Qual seria o item? ");
      }
      for (categoria in listaDeCompras) {
        if (listaDeCompras[categoria].includes[item]) {
          listaDeCompras[categoria].remove(item);
          atualizarListaItens()
          alert(`${item} removido com sucesso.`);
        }
      }
    } else {
      alert("Ops, não há nada na lista.");
    }
    break;
          
    case 3:
    alert("Obrigada por comprar conosco!");
    document.write(mostraLista('<li>'));
    break;
  }
}
      
function mostraLista(i) {
  for (categoria in listaDeCompras) {
    if (
      listaDeCompras.hasOwnProperty(categoria) &&
      listaDeCompras[categoria].length >= 1 &&
      itens.length >= 1
      ) {
        minhasListaCompras += `${i}${categoria}: ${listaDeCompras[categoria]}`;
      }
    }

    if (minhasListaCompras == undefined) {
      minhasListaCompras = 'Lista vazia!'
    }

    return minhasListaCompras
  }
        