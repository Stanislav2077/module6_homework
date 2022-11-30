function outer(x) {
    return function(y) {
        return x + y;
    }
}

const sumFunction = outer(7);
const sum = sumFunction(8)
console.log(sum);
