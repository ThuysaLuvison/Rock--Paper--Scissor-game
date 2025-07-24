function jogar(jogador) {
    const opcoes = ["pedra", "papel", "tesoura"];
    const computador = opcoes[Math.floor(Math.random() * 3)];

    let resultado = "";

    if (jogador === computador) {
        resultado = "Empate! 🤝";
    } 
    else if (

    (jogador === "pedra" && computador === "tesoura") ||
    (jogador === "tesoura" && computador === "papel") ||
    (jogaodr === "papel" && computador === "pedra")
    ) {
        resultado = `Você venceu! 🎉 (${jogador} vs ${computador})`; 
    }
    else{
        resuldado = `Você perdeu! 😢 (${jogador} vs ${computador})`;
    }
    
    document.getElementById("resultado").textContent = resultado;
}