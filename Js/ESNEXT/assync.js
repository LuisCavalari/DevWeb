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

//recurso do ES8 
// simplificar Promisses

let obterAlunos = async () =>{
    const ta  = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta,tb,tc)

}
obterAlunos().then(alunos => alunos.map(al =>al.nome)).then(al =>console.log(al)).catch(e =>console.log
(e.message))