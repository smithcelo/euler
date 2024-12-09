const n = 100;

function squareSum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++)
        sum += i**2;
    return sum;
}

function sumSquare(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++)
        sum += i;
    return sum**2;
}

console.log(sumSquare(n)-squareSum(n));