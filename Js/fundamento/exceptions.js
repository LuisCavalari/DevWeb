function imprimirNome(obj){
    try {
        console.log(obj.nome.toUpperCase()+'!!!')
        
    } catch (error) {
        tratarErrorElancar(error)
    }finally{
        console.log('termino')
    }
 
}

function tratarErrorElancar(error){
    //throw new Error('...')
    //throw 10
    //throw true
    throw{
       nome: error.name,
       me:error.message


    }
}
const obj = {
    name:'Altair'
}

imprimirNome(obj)