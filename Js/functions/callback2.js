const notas = [7.7,8,9,8,6,4]

let notasb = []

/*for(i in notas){
    if(notas[i]<7){
        notasb.push(notas[i])
        console.log(notas[i])
    }
}*/
notasb = notas.filter(function(a){
    return a < 7
})

console.log(notasb)

notasb = notas.filter((nota)=> nota < 7)

console.log(notasb)