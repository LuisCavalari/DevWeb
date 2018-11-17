const pai = {nome:'pedro', corCabelo:'preto'}

const filha=  Object.create(pai)
filha.nome =   'Ana'
console.log(filha.corCabelo)

const filha2 = Object.create(pai,{
    nome:{value:'Maria', writable:false, enumerable:true}
})

console.log(filha2.nome)

console.log(Object.keys(filha))


for(let key in filha){
    filha.hasOwnProperty(key) ? console.log(key) :console.log(`Por herança ${key}`)

    
}