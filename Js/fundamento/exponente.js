/* 
 * ===========================SERVIÇO NACIONAL DE APRENDIZAGEM INDUSTRIAL=============================
 * Autor:Luis Felipe Cavalari Lima
 * Este pequeno programa é uma lógica utilizada para fazer exponenciazão de algum número,
 * agradeço ao grande professor Adão por ter instigado a criação deste algoritimo 
 * posteriormente será criado uma função com um método para tal 
*/

let num = 10
const exp = 6
let res = 1
let cont =0
while (cont<exp) {
    res*=num 
    cont++
}
console.log(res.toExponential(10))