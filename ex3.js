const mat = require('../Classes/Matematica');

const n = 600851475143;
const v = mat.fatoresPrimos(n);

console.log(v[v.length-1]);
