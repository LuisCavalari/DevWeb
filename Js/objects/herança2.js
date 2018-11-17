//Cadeia de prototipos 
Object.prototype.attr0 = 'Z'
const avo = {
    attr1:'A'
}
const pai = {
    __proto__:avo,
    attr2:'B'
}

const filho = {
    __proto__:pai,
    attr3:'C'
}

console.log(filho.attr0,pai.attr1,filho.attr2)


const carro = {
    velocidadeMax:200,
    velAtual:0,
    acelerar(delta){
        if(this.velAtual + delta <=this.velocidadeMax){
            this.velAtual+=delta
        }else{
            this.velAtual = this.velocidadeMax
        }
    },
    stats(){
        return `Velocidade atual ${this.velAtual} km/h, velocidade max ${this.velocidadeMax} km/h`
    }
}

carro.acelerar(50)
console.log(carro.stats())

const volvo  = {
    modelo:'F40',
    stats(){
        return `modelo ${this.modelo} ${super.stats()}`
    }
}

Object.setPrototypeOf(volvo,carro)

console.log(volvo.stats())