
Array.prototype.forEach2 = function(f1){
    let i =0;
    while(i < this.length){
        f1(this[i],i)
        i++
    }
}

const apr = ['ana','joão','mendes']

apr.forEach2(function(nome,indice){
    console.log(nome,indice)
})

console.log()