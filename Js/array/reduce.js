const notas = [{nota:7.5,nome:"gay"},{nota:7.6,nome:"Serguei"}]


const resul = notas.map(function(e){
    return e.nota
}).reduce(function(acumulador,atual){
    return atual+acumulador
})

console.log(resul)