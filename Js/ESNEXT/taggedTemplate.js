//tagged template
function tag(part,...valores){
    console.log(part)
    console.log(valores)
    return 'outra String'
}
const nome = 'leo'
const sit  = 'apr'
console.log(tag`${nome} esta ${sit}`)