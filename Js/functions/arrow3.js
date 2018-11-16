let comparaComThis = function(param){
    console.log(this === param)
}



const obj = {}

comparaComThis = comparaComThis.bind(obj)

comparaComThis(global)
console.log()
comparaComThis = (param)=>{
    console.log(this === param)
}
