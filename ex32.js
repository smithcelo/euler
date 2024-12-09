function isPandigital(n) {
    let v = n.toString().split('');
    v.sort((a, b) => a - b);

    for (let i in v)
        if (parseInt(v[i]) !== parseInt(i) + 1)
            return false;
    return true;
}

function pushPandigital() {
    let v = [];

    for (let i = 1; i < 1000; i++) { // Limite menor para ser mais prático
        for (let j = 1; j < 10000; j++) {
            let num = i.toString() + j.toString() + (i * j).toString();
            if (isPandigital(num)) {
                v.push(i*j);
            }
        }
    }

    let array = [... new Set(v)]
    return array.sort();
}

function somaArray(v) {
    let soma = 0;
    for (let value of v)
        soma += value;
    return soma;
}

const resultado = pushPandigital();
console.log(somaArray(resultado));
