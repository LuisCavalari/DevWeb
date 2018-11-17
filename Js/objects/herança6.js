function Aula(nome,video){
    this.nome = nome
    this.video = video
    
}

const a1 = new Aula('java',2)

console.log(a1)
// simular operador new

function novo(f,...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj,params)

    return obj

}  

const a12 = novo(Aula,'java2',12)
console.log(a12)