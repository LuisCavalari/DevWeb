function Carro(velocidademaxima=200,delta=5){
    let velocidadeAtual = 0
    this.acelerar = function(){
        if(velocidadeAtual + delta<=velocidademaxima){
            velocidadeAtual+=delta
        }else{
            velocidadeAtual  = velocidademaxima
        }

    }
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
    

}
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(300,20)

ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())