function isPandigital(n) {
    let v = n.toString().split('');
    v.sort((a, b) => a - b);

    for (let i in v)
        if (parseInt(v[i]) !== parseInt(i) + 1)
            return false;
    return true;
}

function fibonacci() {
    let a = 1n;
    let b = 1n;
    let cont = 2;

    while (true) {
        const str = a.toString();
        const first9 = str.slice(0, 9);
        const last9 = str.slice(-9);
        
        if (isPandigital(first9) && isPandigital(last9)) {
            break;
        }
        
        [a, b] = [a + b, a];
        cont++;
    }

    return cont;
}

console.log(isPandigital(321),isPandigital(123456789),isPandigital(192837465),isPandigital(12345));