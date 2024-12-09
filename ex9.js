let x = 3;
let y = 4;
let z = Math.sqrt(x ** 2 + y ** 2);

function pit(a, b, c) {

    while (a + b + c !== 1000) {
        b++;
        a = y;

        while (!Number.isInteger(Math.sqrt(a ** 2 + b ** 2))) {
            a++;
        }

        c = Math.sqrt(a ** 2 + b ** 2);
        
        if (a + b + c === 1000) {
            return {a, b, c};
        }
    }

    return {a, b, c};
}

const num = pit(x, y, z);

console.log(num.a, num.b, num.c);
