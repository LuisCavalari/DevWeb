const quase = {0:'ana',1:'josé',2:'maicon'}

Object.defineProperty(quase,'toString',{
    value:function(){
        return Object.values(this)
    },
    enumerable:false
})

console.log(quase[0])

console.log(quase.toString())