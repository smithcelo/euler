const data = new Date(Date.UTC(1901, 0, 1)); // 1 de janeiro de 1900 em UTC

function sumWeek(data) {
    data.setUTCDate(data.getUTCDate() + 7); // Incrementa 7 dias para somar uma semana
    return data;
}

function sundaysOnJan(data) {
    let cont = 0;

    while (data.getUTCFullYear() < 2001) {
        if (data.getUTCDate()===1) {
            cont++;
        }
        sumWeek(data);
    }
    return cont;
}

console.log(sundaysOnJan(data));