function soma(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma(),soma(2))
function soma2(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = c || 1
    return a + b + c
}
function soma3(a = 1,b = 1,c = 1){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = c || 1
    return a + b + c
}