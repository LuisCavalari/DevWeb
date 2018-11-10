function rand({min = 0,max = 1000}){
    const valor = Math.random(max-min)+min
    return valor;
}

const obj = {min:100,
max:1000}

console.log(rand({}))