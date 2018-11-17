function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto()

const obj2 = new MeuObjeto()

console.log(obj1.__proto__ === obj2.__proto__)

MeuObjeto.prototype.nome = 'teste'

MeuObjeto.prototype.falar = function(){
    return `Meu nome é ${this.nome}`
}

const obj ={}

obj.__proto__ = MeuObjeto.prototype

console.log(obj.falar())