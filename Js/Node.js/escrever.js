const fs = require('fs')

const produto = {
    nome:"josé",
    altura:1.78
}

fs.writeFile(__dirname+"/arquivo2.json",JSON.stringify(produto),err=>{
    console.log(err||'Arquivo salvo')
})