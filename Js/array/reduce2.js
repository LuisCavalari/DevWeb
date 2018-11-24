const notas = [{nota:7.5,nome:"gay",bolsista:true},{nota:7.6,nome:"Serguei",bobolsista:false}]


let todos = notas.map(function(e){
    return e.bolsista
}).reduce(function(antes,depois){
    return antes && depois
})

console.log(todos)
let alguem = notas.map(function(e){
    return e.bolsista
}).reduce(function(antes,depois){
    return antes || depois
})

console.log(`Todos são bolsistas ${todos}
Algúem é bolsistas ?:${alguem}`)
