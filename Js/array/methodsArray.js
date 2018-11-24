const pilotos = ['Vettel','Raikkonen','Alonso','Massa']

pilotos.pop() //tira da ultima posição

console.log(pilotos)

pilotos.push('Vestapen')//add elemento

console.log(pilotos)

pilotos.shift() //tira o primeiro

console.log(pilotos)

pilotos.unshift('Hamilton') // add no primeiro elemento

console.log(pilotos)
//splice add ou remove elementos

pilotos.splice(2,0,'Notas','Massa')

console.log(pilotos)

pilotos.splice(3,1)


console.log(pilotos)