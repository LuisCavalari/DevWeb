function getPreco(preco = 0,moeda='R$'){
    return `${moeda} ${this.preco*(1-this.desc) *(1+ this.imposto)}`
}
const prod = {
    preco:200,
    desc:0.1,
    imposto:0,
    getPreco
}

console.log(prod.getPreco())
console.log(getPreco.call(prod,prod.preco,'$'))
console.log(getPreco.call(prod,[prod.preco,'$']))