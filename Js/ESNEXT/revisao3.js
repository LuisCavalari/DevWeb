//Objects.values Object.entries

const obj = {
    nome:"Jose",
    idade:18
}

console.log(Object.values(obj))
console.log(Object.entries(obj))

const nome ="Alo"

const pessoa ={
    nome,
    ola(){
        return 'Bom dia filho da puta'
    }
}

console.log(pessoa.ola())

class animal {}
class pessoa2 extends animal{
    constructor(nome,idade){
        this.nome  = nome
        this.idade = idade
    }
    falar(){
        return `Meu nome é ${this.nome} e tenho ${this.idade} anos`
    }

}


console.log(new pessoa2('Jose',12).falar())