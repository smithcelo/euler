let a = 1n, b = 1n;
let index = 2;

while (b.toString().length < 1000) {
    [a, b] = [b, a + b];
    index++;
}

console.log(index);