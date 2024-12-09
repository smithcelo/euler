let total = []; // Armazena a sequência mais longa
let n = 2;

function collatz(n) {
    if (n % 2 === 0) {
        return n / 2;
    } else {
        return 3 * n + 1;
    }
}

function preencheVetor(n) {
    let v = []; // Inicializa o vetor v dentro da função para evitar reutilização
    v.push(n);

    while (n !== 1) {
        n = collatz(n);
        v.push(n);
    }

    return v;
}

function incrementa() {
    while (n < 1000000) {
        let v = preencheVetor(n);
        
        if (v.length > total.length) {
            total = v;
        }

        n++;
    }
}

incrementa();

console.log(total[0], total.length);
