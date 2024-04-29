function calculaSaldoVitorias(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    return saldoVitorias;
}

function retornaNivelJogador(saldoVitorias) {
    if(saldoVitorias >= 101) {
        return 'Imortal';
    } else if (saldoVitorias > 90) { 
        return 'Lendário';
    } else if (saldoVitorias > 80) {
        return 'Diamante';
    } else if (saldoVitorias > 50) {
        return 'Ouro';
    } else if (saldoVitorias > 20) {
        return 'Prata';
    } else if (saldoVitorias > 10) {
        return 'Bronze';
    } else {
        return 'Ferro';
    }
}

function retornaMensagem(vitorias, nivel) {
    const saldoVitorias = calculaSaldoVitorias(vitorias, nivel);
    const nivelJogador = retornaNivelJogador(saldoVitorias);

    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivelJogador}`);
}


//Execução dos testes
let entradaVitoria = 50;
let entradaDerrota = 50;

for(let i = 0; i < 11; i++) {
    entradaVitoria = entradaVitoria + 5;
    entradaDerrota = entradaDerrota - 5;
    retornaMensagem(entradaVitoria, entradaDerrota);
}