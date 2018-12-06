function passo1(cont,next){
    cont.v1 = 'passo'
    next()

}

function passo2(cont,next){
    cont.v2 = 'passo2'
    next()
}

const passo3 = cont => cont.v3 = "xi"


const exec = function(ctx,...middleware){
    const execPasso  = indice =>{
        middleware && indice < middleware.length  &&
        middleware[indice](ctx,()=>execPasso(indice+1))

    }
    execPasso(0)
}

const obj = {}

exec(obj,passo1,passo2,passo3)
console.log(obj)