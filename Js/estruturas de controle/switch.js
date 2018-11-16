function nota(n){
    switch(Math.floor(n)){
        case 10 :case 9 :
            console.log('quadro de honra')
            break;
        case 8: case 7:
            console.log('Aprovado')
            break;
        case 5 : case 4 :
            console.log('Recuperação')
            break;
        default:
            console.log('Reprovado')
            break;
    }

}