function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto()

const obj2 = new MeuObjeto()

console.log(obj1.__proto__ === obj2.__proto__)