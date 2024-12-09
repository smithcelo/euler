function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function lcmRange(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = lcm(result, i);
    }
    return result;
}

const numero = 20;
console.log(lcmRange(numero));
