const fabricante = ["Mercedes","audi","bmw"]

function imprimirFabricante(nome,indice){
    console.log(`${indice +1}. ${nome}`)

}

fabricante.forEach(imprimirFabricante)
fabricante.forEach(function(a){
    console.log(a)
})