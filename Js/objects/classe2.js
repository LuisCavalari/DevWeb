class avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class pai extends avo{
    constructor(sobrenome,nome){
      
        super(sobrenome)
        this.nome = nome
    }
    falar(){
        return `Meu nome é ${this.nome} ${this.sobrenome} `
    }
}

const c1 = new pai('GAyzão',"gerei")

console.log(c1.falar())