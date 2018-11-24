const prod = [{nome:'Macbook',preco:3000,fragil:true},
{nome:'Carro',preco:2000,fragil:true},
{nome:'lápis',preco:200,fragil:false},
{nome:'Copo',preco:20,fragi:true}]


const caro = e=> e.preco > 500
const fragil = e=> e.fragil

const prod2 = prod.filter(caro).filter(fragil)

console.log(prod2)

Array.prototype.filter2 = function(f1){
    let res = [];
    for (let index = 0; index < this.length; index++) {
        if(f1(this[index],index,this))
            res.push(this[index])
    }
    return res
}
console.log(prod.filter2(caro).filter2(fragil))
