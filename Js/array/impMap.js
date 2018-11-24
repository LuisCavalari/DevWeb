Array.prototype.map2 = function(f1){
    let result = [];
    for (let index = 0; index < this.length; index++) {
        result.push(f1(this[index]),i,this)
    }
    return result
}