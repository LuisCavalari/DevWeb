let num1 = 1.0 //1.0 reconhece como inteiro, mesmo com ponte

let num2 = Number('2.0') //conversão de string para number

console.log(Number.isInteger(num2))

//exemplo de media ponderada

num1 = 8.5

num2 = 9.0
const peso1 = 2
const peso2 = 4


let total = num1*peso1 + num2*peso2
let media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2)) //converte numa string binária
console.log(typeof media)