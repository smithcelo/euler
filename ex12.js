function countFactors(n) {
    let count = 0;
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            count += 2; // i e n/i são fatores
            if (i * i === n) {
                count--; // Se i é a raiz quadrada exata, ajuste a contagem
            }
        }
    }
    return count;
}

function findNumber(n) {
    let x = n;
    let count = countFactors(x);

    while (count < 500) {
        x++;
        count = countFactors(x); // Atualiza a contagem de fatores do novo valor de x
    }

    return x;
}

const n = 1;
console.time('Execution Time');
console.log(findNumber(n));
console.timeEnd('Execution Time');
