// Calcular 2^1000 e converter para string
const numStr = (2n ** 1000n).toString();

let soma = 0;

for (let i = 0; i < numStr.length; i++) {
    soma += Number(numStr[i]);
}

console.log(soma);
