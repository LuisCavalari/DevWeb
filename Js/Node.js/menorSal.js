const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

const isChine = f => f.pais === 'China'

const isFemale = f => f.genero ==='F'


const menorSal = (func,funcAtual) =>{
    return func.salario < funcAtual.salario ? func:funcAtual
}

axios.get(url).then(response =>{
    const func = response.data
    const menor = func.filter(isChine).filter(isFemale).reduce(menorSal)
    console.log(menor)
})
