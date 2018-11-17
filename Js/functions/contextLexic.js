const valor = "Global"

function ja(){
    console.log(this.valor)
}

function x(){
    const valor = "local"
    ja()
}
x()