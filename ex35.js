function isPrime(n) {
    if (n < 2)
        return false;
    if (n === 2)
        return true;
    if (n % 2 === 0)
        return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2)
        if (n % i === 0)
            return false;
    return true;
}

function nextPrime(n) {
    next = n + 1;
    while (!isPrime(next))
        next++;
    return next;
}

function generateRotations(n) {
    let str = n.toString(); // Converte o número para string
    let rotations = [];

    for (let i = 0; i < str.length; i++) {
        let rotation = str.slice(i) + str.slice(0, i);
        rotations.push(parseInt(rotation)); // Adiciona a rotação à lista
    }
    return rotations;
}

function primeRotations(r) {
    let p = 0;
    for (let value of r) {
        if (isPrime(value))
            p++;
    }
    if (p === r.length)
        return true;
    return false;
}

function calculatePrimeRotations() {
    let p = 2;
    let v = [];
    let cont = 0;
    do {
        if (isPrime(p)) {
            v = generateRotations(p);
            if (primeRotations(v))
                cont++;
        }
        p = nextPrime(p);
    } while (p < n);
    return cont;
}

const n = 1000000;

console.log(calculatePrimeRotations());

