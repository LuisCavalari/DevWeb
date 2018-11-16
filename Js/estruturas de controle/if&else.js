function nota(n){
    if(typeof n != 'number'){
        console.log('Não é um numero  é '+typeof n)
        return false;
    }if(nota >=7){
        console.log('Aprovado')
    }else if(nota >=4){
        console.log('Em recuperação')
    }else{
        console.log('Reprovado')
    }



}
nota()