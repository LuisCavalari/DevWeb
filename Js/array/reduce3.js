Array.prototype.reduce2 = function(callback){
    let acumulador = this[0]
    for (let index = 1; index < this.length; index++) {
        acumulador = callback(acumulador,this[index],index,this)
        
        
    }
    return acumulador
}