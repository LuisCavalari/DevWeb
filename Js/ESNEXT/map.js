const tecnologias = new Map()

tecnologias.set('react',{framework:false})

tecnologias.set('angular',{framework:true})

console.log(tecnologias.get('react'))

const chaves = new Map([
    [function (){},'funcao'],
    [{},'gay'],
    [123,'num']
])

 chaves.forEach((valor,chaves)=>{
     console.log(`valor  ${valor} e chave ${chaves}`)
 })

console.log( chaves.has(123))

chaves.delete(123)
console.log(chaves.size)