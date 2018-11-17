const obj = Object.preventExtensions({
    nome:'Qualquer',
    preco:1.99,
    tag:'promoção'
})
console.log('Extensivel',Object.isExtensible(obj))// da pra excluir

const pessoa = {
    nome:'Juliana',
    idade:42
}

Object.seal(pessoa)// não da pra excluir nem add, apenas modificar os valores

console.log('Selado:',Object.isSealed(pessoa))