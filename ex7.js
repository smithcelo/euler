let primos = []
let p = 2;

function ePrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Função para encontrar o próximo número primo
function proximoPrimo(n) {
    do {
        n++;
    } while (!ePrimo(n));
    return n;
}


while(primos.length<10002) {
    primos.push(p)
    p=proximoPrimo(p)
}

console.log(primos[10000])