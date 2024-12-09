function numberToWords(n) {
    const units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const thousands = ["", "thousand"];

    if (n === 1000) {
        return "one thousand";
    }

    let word = "";
    if (Math.floor(n / 1000) > 0) {
        word += units[Math.floor(n / 1000)] + " " + thousands[1] + " ";
        n %= 1000;
    }
    if (Math.floor(n / 100) > 0) {
        word += units[Math.floor(n / 100)] + " hundred";
        if (n % 100 > 0) {
            word += " and ";
        }
        n %= 100;
    }
    if (n > 10 && n < 20) {
        word += teens[n - 10];
    } else {
        if (Math.floor(n / 10) > 0) {
            word += tens[Math.floor(n / 10)];
            if (n % 10 > 0) {
                word += " ";
            }
        }
        word += units[n % 10];
    }
    return word.trim();
}

function countLetters(words) {
    return words.replace(/[\s-]/g, "").length;
}

function totalLetters(from, to) {
    let total = 0;
    for (let i = from; i <= to; i++) {
        total += countLetters(numberToWords(i));
    }
    return total;
}

console.log(totalLetters(1, 1000)); // Conta o total de letras de 1 a 1000
