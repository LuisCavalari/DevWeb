function falarDepois(seg,frase){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve(frase)
        },seg*1000)
    })
}

falarDepois(3,'Bacana').then(frase => frase.concat('!')).then(outraFrase => console.log(outraFrase))
