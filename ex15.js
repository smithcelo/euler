function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

function latticePaths(n) {
    return factorial(2 * n) / (factorial(n) * factorial(n));
}

console.log(latticePaths(20)); 
