//é um escopo criado quando a função é declarada
//permite acesso a váriaveis externas  a função
const x = "Global"

function fora(){
    const x = "Local"
    function dentro(){
        return x
    }
    return dentro
}

const fun = fora()
console.log(fun())