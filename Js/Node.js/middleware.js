function passo1(cont,next){
    cont.v1 = 'passo'
    next()

}

function passo2(cont,next){
    cont.v2 = 'passo2'
    next()
}

const passo3 = cont => cont