function permute(str) {
    let results = [];

    if (str.length === 1) {
        return [str];
    }

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let remainingChars = str.slice(0, i) + str.slice(i + 1);
        let remainingPermutations = permute(remainingChars);

        for (let permutation of remainingPermutations) {
            results.push(char + permutation);
        }
    }

    return results;
}

let input = '0123456789';
let permutations = permute(input);

permutations.sort();

console.log(permutations[999999]); 
