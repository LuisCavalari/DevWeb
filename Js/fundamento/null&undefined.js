const a = {nome:"Jose"}

console.log(a)

const b = a // b recebe o endereço que a está apontando

b.nome = "Tereza"

console.log(a) // logo a é afetado


let c = 3 //aqui não é endereço e sim um valor

let d  = c // recebe o valor, endereço
d++
console.log(c,d)


let valor // não iniciado

console.log(valor)

valor = null // não aponta mais para nada

console.log(valor)

const t = {}
console.log(t.preco)
t.preco = 2

console.log(t)

