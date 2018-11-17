const ferrari = {
    velocidadeMax:300,
    modelo:'F40'
}
const volvo = {
    velocidadeMax:250,
    modelo:'F50'
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__===Object.prototype)
console.log(volvo.__proto__)