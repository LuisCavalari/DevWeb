const http = require('http')

const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let rest = ''
            res.on('data', data => {
                rest += data
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(rest))
                } catch (e) {
                    reject(e)
                }
            })

        })
    })
}

/*getTurma('A').then(alunos=>{
   
    nomes= nomes.concat(alunos.map(a => a.nome))
    console.log(nomes)
    getTurma('B').then(alunos =>{
        nomes = nomes.concat(alunos.map(a => a.nome))
        console.log(nomes)
    })
    getTurma('C').then(alunos =>{
        nomes = nomes.concat(alunos.map(a => a.nome))
        console.log(nomes)
    })

})*/

Promise.all([getTurma('A'),getTurma('B'),getTurma('C')]).then(x => console.log(x))
.then(alunos => alunos.map(al => al.nome))
.then(alunos=>console.log(alunos))

getTurma('D').catch(err => console.log(err.message))