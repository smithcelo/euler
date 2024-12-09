const fs = require('fs').promises; 
const path = require('path');


async function lerArquivo() {

    const data = await fs.readFile(path.resolve('nomes.txt'), 'utf8');
    const nomes = data.split(',').map(nome => nome.trim().replace(/"/g, ''));
    nomes.sort();
    return nomes;
}

async function main() {
    const nomes = await lerArquivo('nomes.txt');
    let total = 0;;
    
    for (let i = 0; i < nomes.length; i++) {
        let caracteres = 0;
        for (let index in nomes[i]) {
            caracteres += (nomes[i].charCodeAt(index) - 64)*(i+1);
        }
        total +=caracteres;
    }
    return total;
}

main().then(total => console.log(total));