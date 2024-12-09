function bigint () {
let total = 0n;
for (let i = 1n; i<=1000; i++) {
    total += i**i;
}
return total.toString().slice(-10);
}

console.log(bigint());