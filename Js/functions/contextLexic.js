const valor = "Global"

function ja(){
    console.log(valor)
}

function x(){
    const valor = "local"
    ja()
}
x()