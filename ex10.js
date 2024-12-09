let primo = 2;
let total = 0;

function ePrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function proximoPrimo(n) {
    do {
        n++;
    } while (!ePrimo(n));
    return n;
}

function somaPrimos() {
    while (primo < 2000000) {
        total += primo;
        primo = proximoPrimo(primo);
    }
}

somaPrimos();
console.log(total);
