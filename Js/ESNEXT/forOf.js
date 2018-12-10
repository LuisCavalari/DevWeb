for(let letra of 'cod3r'){
    console.log(letra)
}

const assunto = ['map','set','reduce']

for(let letra of assunto){
    console.log(letra)
}

const assuntoMap = new Map([
    ['Map',{abordado:true}],
    ['set',{abordado:true}]
])

for(let assunto of assuntoMap){
    console.log(assunto)
}

for (let assutno of assuntoMap.values()){
    console.log(assutno)
}