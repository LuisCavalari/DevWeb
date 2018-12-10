const http = require('http')

const getTurma = (letra,callback) =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url,res=>{
        let rest =''
        res.on('data',data=>{
            rest+=data
        })

        res.on('end',()=>{
            callback(JSON.parse(rest))
        })

    })
}
let nomes=[] 
getTurma('A',(alunos)=>{
   
    nomes= nomes.concat(alunos.map(a => a.nome))
    console.log(nomes)
    getTurma('B',alunos =>{
        nomes = nomes.concat(alunos.map(a => a.nome))
        console.log(nomes)
    })
    getTurma('C',alunos =>{
        nomes = nomes.concat(alunos.map(a => a.nome))
        console.log(nomes)
    })

})

console.log(nomes)