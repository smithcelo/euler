let maiorPalindromo = 0;

for (let i = 999; i > 99; i--) {
    for (let j = 999; j >= i; j--) {
        let produto = i * j;
        let produtoStr = produto.toString();
        let reverso = produtoStr.split('').reverse().join('');
        if (produtoStr === reverso && produto > maiorPalindromo) {
            maiorPalindromo = produto;
        }
    }
}

console.log(maiorPalindromo);
