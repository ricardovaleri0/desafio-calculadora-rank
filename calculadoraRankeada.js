function calcularSaldoENivel(vitorias, derrotas) {
    
    let saldoVitorias = vitorias - derrotas;
    let nivel;
  

    if (vitorias < 10) {
      nivel = 'Ferro';
    } else if (vitorias <= 20) {
      nivel = 'Bronze';
    } else if (vitorias <= 50) {
      nivel = 'Prata';
    } else if (vitorias <= 80) {
      nivel = 'Ouro';
    } else if (vitorias <= 90) {
      nivel = 'Diamante';
    } else if (vitorias <= 100) {
      nivel = 'Lendário';
    } else {
      nivel = 'Imortal';
    }
    
    return { saldoVitorias, nivel };
  }
  function exibirMensagem(saldoVitorias, nivel) {
    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível ${nivel}.`);
  }
    
const jogadores = [
    { vitorias: 5, derrotas: 2 },
    { vitorias: 15, derrotas: 5 },
    { vitorias: 30, derrotas: 10 },
    { vitorias: 60, derrotas: 20 },
    { vitorias: 85, derrotas: 30 },
    { vitorias: 95, derrotas: 40 },
    { vitorias: 110, derrotas: 50 }
  ];
  
  
  for (let i = 0; i < jogadores.length; i++) {
    const jogador = jogadores[i];
    const resultado = calcularSaldoENivel(jogador.vitorias, jogador.derrotas);
    exibirMensagem(resultado.saldoVitorias, resultado.nivel);
  }
  