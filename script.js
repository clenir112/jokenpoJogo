let jogar = document.getElementById("btn");
jogar.addEventListener("click", function() {
  let idade = prompt("Quantos anos você tem?");

  /*Comparação idade*/
  if (idade < 18) {
    alert("Você é menor de idade, não pode jogar jokenpo!");
  }

  if (idade >= 18) {
    let escolhaJogador = prompt("1-Pedra, 2-Papel ou 3-Tesoura?");
    let escolhaComputador = Math.floor(Math.random() * 3) + 1;

    if (escolhaJogador == escolhaComputador) {
      alert('Empate!!');
    }

    if (escolhaJogador == 1) { // Jogador escolheu Pedra
      if (escolhaComputador == 2) {
        alert('Computador venceu, escolheu papel!!');
      }
      if (escolhaComputador == 3) {
        alert("Jogador vence, computador escolheu tesoura!");
      }
      if (escolhaComputador == 1) {
        // Já coberto no primeiro if de empate, mas para clareza:
        // alert("Empate, ambos escolheram pedra!");
      }
    }

    if (escolhaJogador == 2) { // Jogador escolheu Papel
      if (escolhaComputador == 1) {
        alert("Jogador venceu, computador escolheu pedra!!");
      }
      if (escolhaComputador == 3) {
        alert("Computador venceu, escolheu tesoura!");
      }
      if (escolhaComputador == 2) {
        // Já coberto no primeiro if de empate:
        // alert("Empate, ambos escolheram papel!");
      }
    }

    if (escolhaJogador == 3) { // Jogador escolheu Tesoura
      if (escolhaComputador == 1) {
        alert("Computador venceu, escolheu pedra!!");
      }
      if (escolhaComputador == 2) {
        alert("Jogador venceu, computador escolheu papel!");
      }
      if (escolhaComputador == 3) {
        // Já coberto no primeiro if de empate:
        // alert("Empate, ambos escolheram tesoura!");
      }
    }

    alert("Escolha do Computador = " + escolhaComputador);
  }
});