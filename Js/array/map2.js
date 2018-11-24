const carrinho = ['{"nome":"Borracha","preco":3.75}','{"nome":"Lápis","preco"sd :4.00}']

let valor =  carrinho.map(function(e){
    return JSON.parse(e).preco
})

console.log(valor)