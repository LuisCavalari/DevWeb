class Lancamento{
    constructor(nome = "Genérico",valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes,ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
        
    }
    addLancamentos(...lancamentos){
        lancamentos.forEach(element => {
            this.lancamentos.push(element)
        });
    }
    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l=>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const lan1 = new Lancamento('Salario',4500)
const lan2  = new Lancamento('Bonus',8000)
const ciclo1 = new CicloFinanceiro('junho',2018)

ciclo1.addLancamentos(lan1,lan2)

console.log(ciclo1.sumario())

