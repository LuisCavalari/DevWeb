function imprimirSoma(a,b){ //sem retorno
    if((!b))
        b=0
    console.log(a+b)
}

imprimirSoma(2)

console.log(soma(2,3))

function soma(a, b= 0){
    return a+b
}