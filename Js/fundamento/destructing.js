// novo recurso do ES2015

const pessoa = {
    nome: 'ana',
    idade :5,
    enedereco:{
        rua : 'rua abc',
        numero: 11
    }
}

const{nome,idade} = pessoa

console.log(nome,idade)

const {nome : i , idade :n} = pessoa

console.log(i,n)