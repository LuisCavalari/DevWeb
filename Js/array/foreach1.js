const aprovados = ['jose','ana','moacir','gay']


aprovados.forEach(function(nome,indice){
    console.log(nome,indice+1)
})
const exibi = function(nome){
    console.log(nome)
}

aprovados.forEach(exibi)


