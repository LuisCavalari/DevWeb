const stri = "SENAI"

console.log(stri.charAt(2)) //mostra o caracter localizado no index 2

console.log(stri.charAt(5)) //não joga erro, pois js é muito bom pra jogar erros

console.log(stri.charCodeAt(2)) //retorna o código ASCII do caracter

console.log(stri.indexOf('N')) //retorna aonde esta o N 

console.log(stri.substring(2)) //mostra até o index 2

console.log(stri.substring(0,stri.length-1)) //mostra até a penultima letra

console.log(stri.concat(' is the best')) 

console.log(stri.replace(/\d/g,'g'))

console.log('Jose,maria,luis'.split(',')) // gera um array apartir do separador ,

