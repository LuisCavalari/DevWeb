function rand([min = 0,max = 1000]){
    if(min > max) [max,min] = [min,max]
    const rand = Math.random() * (max- min)+min;
    return Math.floor(rand);
}

console.log(rand([0,88]))