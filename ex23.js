const Mat = require('../Classes/Matematica');

function abundantArray() {
    let v = [];
    for (let i = 0; i <= 28123; i++)
        if (Mat.isAbundant(i))
            v.push(i);

    return v;
}

function abundantSums() {
    let v = abundantArray();
    let array = [];
    let r = []

    for (let j = 0; j < v.length; j++) {
        for (let i = 0; i < v.length; i++) {
            if (v[j] + v[i] <= 28123)
                array.push(v[j] + v[i]);
        }
    }

    r = [... new Set(array)];
    return r;
}

function faltantes(v) {
    let r = [];
    for (let i = 1; i < v.length; i++) {
        if (!v.includes(i)) {
            r.push(i);
        }
    }
    return r;
}

function nonAbundantSum () {
    let r = abundantSums();
    let v = faltantes(r);
    let total = 0; 

    for (let value of v)
        total += value;

    console.log(total);
}

nonAbundantSum();