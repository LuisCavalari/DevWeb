const num = [1,2,4,5]

let res =  num.map(function(a){
    return a*2
})


const soma10 = e=> e +10
const dinheiro =  e => `R$ ${e.toFixed(2).replace('.',',')}`
const triplo = e =>e*3

let res2= num.map(soma10).map(triplo).map(dinheiro)
console.log(res2)