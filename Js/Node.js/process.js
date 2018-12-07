const anonimo = process.argv.indexOf('--a')!==-1
if(anonimo){
    process.stdout.write('Anonimo')
    process.exit()
}else{
    process.stdout.write('Informe seu nome \n')
    process.stdin.on('data',data =>{
        const nome = data.toString().replace('\n','')
        process.stdout.write(`Fala ${nome}\n`)
        process.exit()
    })
  
}