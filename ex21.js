function sumOfProperDivisors(n) {
    let sum = 1; // Começa com 1, que é um divisor de qualquer número.
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            sum += i;
            if (i !== n / i) {
                sum += n / i;
            }
        }
    }
    return sum;
}

function isAmicable(a) {
    let b = sumOfProperDivisors(a);
    return a !== b && sumOfProperDivisors(b) === a;
}

function findAmicableNumbers(limit) {
    let amicablePairs = [];
    for (let i = 2; i < limit; i++) {
        if (isAmicable(i)) {
            let pair = [i, sumOfProperDivisors(i)];
            if (!amicablePairs.flat().includes(pair[1])) {
                amicablePairs.push(pair);
            }
        }
    }
    return amicablePairs;
}

console.time('Execution Time');
let amicablePairs = findAmicableNumbers(10000);
console.timeEnd('Execution Time');

let total = 0;

for (let pair of amicablePairs) {
    total += pair[0] + pair[1];
}

console.log(total); // Exibe a soma total dos números amigáveis
