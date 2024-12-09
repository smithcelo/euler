let a = 1;
let b = 2;
let soma = 0;

while (a + b < 4000000) {
    a = a + b;
    if (a % 2 === 0)
        soma += a;
    b = a + b;
    if (b % 2 === 0)
        soma += b;
}

console.log(soma+2);