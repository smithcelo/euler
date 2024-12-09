function pentagon(n) {
    return n * (3 * n - 1) / 2;
}

function fillPentagon(limit) {
    let v = [];
    for (let i = 1; i < limit; i++) {
        v.push(pentagon(i));
    }
    return v;
}

function isPentagon(set, n) {
    return set.has(n);
}

function pairs(v) {
    let r = [];
    let pentagonSet = new Set(v);

    for (let i = 0; i < v.length; i++) {
        for (let j = i + 1; j < v.length; j++) { 
            let a = v[i];
            let b = v[j];
            if (isPentagon(pentagonSet, a + b) && isPentagon(pentagonSet, Math.abs(a - b))) {
                r.push(a, b);
            }
        }
    }
    return r;
}

let v = fillPentagon(10000);
let r = pairs(v);
console.log(Math.abs(r[1]-r[0]));
