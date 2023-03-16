let listaDeCompras = {
    doces: [],
    hortiFruti: [],
    bebidas: [],
    congelados: [],
    graos: [],
    outros: []
}

let respostaContinuar = 1
let categorias = Object.keys(listaDeCompras)
let item; 
let categoria;

while (respostaContinuar == 1) {
    respostaContinuar = parseInt(prompt('Deseja adicionar um item à lista de compras?\n0: Não\n1: Sim'))
    categoria = ''
    
    if (respostaContinuar == 1) {
        item = prompt('Qual seria o item? ')
        
        while (!categorias.includes(categoria)){
            categoria = prompt(`Em qual categoria esse ${item} está?\n-Doces\n-Hortifruti\n-Bebidas\n-Congelados\n-Graos\n-Outros`).toLowerCase()
        }
        
        listaDeCompras[categoria].push(item)
        
    } else if (respostaContinuar == 0) {
        alert('Obrigada por comprar conosco!')
    }
}


for (categoria in listaDeCompras){
    if (listaDeCompras.hasOwnProperty(categoria) && listaDeCompras[categoria].length >= 1) {
        document.write(`<li>${categoria}: ${listaDeCompras[categoria]}</li>`);
    }
}
