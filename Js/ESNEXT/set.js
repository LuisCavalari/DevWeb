//não aceita repetição
const time = new Set()

time.add('Vasco')
time.add('São paulo').add('Atletico')

console.log(time)
console.log(time.size)
console.log(time.has('Vasco'))
console.log(time.delete('Vasco'))
const nome = new Set(['Lucas','Vasco','Julia'])

console.log(nome)