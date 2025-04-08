let estagio = 1;
const imagemTreino = document.getElementById('imagem-treino');
const botaoLevantar = document.getElementById('botao-levantar');
const botaoProximo = document.getElementById('botao-proximo');
const botaoMisterioso = document.getElementById('botao-misterioso');
const somPeido1 = document.getElementById('som-peido1');
const somPeido2 = document.getElementById('som-peido2');
const somExplosao = document.getElementById('som-explosao');
const somMJ = document.getElementById('som-mj');

function levantarPeso() {
    if (estagio === 1) {
        somPeido1.play();
        imagemTreino.src = './imagens/Treino1Final.jpg';
        botaoLevantar.style.display = 'none';
        botaoProximo.style.display = 'inline-block';
    } else if (estagio === 2) {
        somPeido2.currentTime = 0;
        somPeido2.play();
        imagemTreino.src = './imagens/Peso2Final.jpg';
        botaoLevantar.style.display = 'none';
        botaoMisterioso.style.display = 'inline-block';
    }
}

function proximoPeso() {
    estagio = 2;
    imagemTreino.src = './imagens/Peso2Inicial.jpg';
    botaoProximo.style.display = 'none';
    botaoLevantar.style.display = 'inline-block';
}

function revelarSurpresa() {
    somExplosao.volume = 1.0;
    somExplosao.play();
    imagemTreino.src = './imagens/MichaelJackson.png';
    botaoMisterioso.style.display = 'none';
    
    // Toca o som do MJ após a explosão
    setTimeout(() => {
        somMJ.volume = 1.0;
        somMJ.play();
    }, 500); // Espera meio segundo após a explosão
}
