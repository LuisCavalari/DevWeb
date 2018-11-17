const obj = {
    _valor:1,
    get valor(){
        return this._valor++
    },
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}
obj.valor = 200
console.log(obj.valor,obj.valor)