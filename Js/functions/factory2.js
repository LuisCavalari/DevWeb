function criarPessoa(nome,idade){
    return{
        nome,
        idade,
        desconto:0.1
    }
}

console.log(criarPessoa("Jose",42))