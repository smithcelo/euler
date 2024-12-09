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
    let next = n + 1;
    while (!isPrime(next))
        next++;
    return next;
}

function isPandigital(n) {
    let v = n.toString().split('');
    v.sort((a, b) => a - b);

    for (let i in v)
        if (parseInt(v[i]) !== parseInt(i) + 1)
            return false;
    return true;
}


function maxPrimePandigital() {
    let max = 6;
    let p = 1000000;
    
    while (p < n) {
        // console.log(p, isPrime(p),isPandigital(p));
        if (isPrime(p) && isPandigital(p)) {
            max = p;
        }
        p = nextPrime(p);
    }
    return max;
}

const n = 10000000;
console.log(maxPrimePandigital());
