const soma = function(a,b){
    return a +b 
}

const soma2  = function(a,b,operador = soma){
    console.log(operador(a,b))
}

soma2(1,2)

soma2(1,2,function(x,y){
    return x-y
})