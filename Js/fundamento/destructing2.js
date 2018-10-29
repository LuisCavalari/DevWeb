const [a] = [10] // cria variavel com o array 10

console.log(a)

const [b,,c,,d] = [10,2,3,4,5] //ignora 2 e 3

console.log(b,c,d)

const[,[,e]] = [[1,2,3],[1,2]]

console.log(e)