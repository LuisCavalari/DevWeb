const pessoa  = {
    nome:"Luis",
    idade:45

}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa).forEach(([nome,valor]) => {
    console.log(nome,valor)
}));
Object.defineProperty(pessoa,'dataNascimento',{
    enumerable:true,
    writable:false,
    value:'05/01/2002'
})

console.log(pessoa)

const ob1 = {a:1}
const ob2 = {b:2}
const ob3 = {a:2}

const ob4 = Object.assign(ob1,ob2,ob3)

console.log(ob4)