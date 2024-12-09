function fatorial(n) {
    let fat = 1n;
    for (let i = BigInt(n); i >= 1n; i--)
        fat *= i;

    return fat;
}

function sumDigits(n) {
    const v = n.toString().split('');
    let total = 0;

    for (let value of v) 
        total += parseInt(value); 

    return total;
}

const n = 100
console.log(sumDigits(fatorial(n)));