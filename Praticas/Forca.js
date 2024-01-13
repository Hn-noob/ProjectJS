const palavras = ['javascript', 'html', 'css', 'python', 'programação']

let palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)];

let letrasErradas = [];

let palavraOculta = Array(palavraEscolhida.length).fill('_');

const wordContainer = document.getElementById('word-container');
const wrongLettersContainer = document.getElementById('wrong-letters-container');
const hangmanContainer = document.getElementById('hangman');

function atualizarPalavra() {
    wordContainer.textContent = palavraOculta.join(' ')
};

function verificarLetra(letra) {
    if (palavraEscolhida.includes(letra)) {
        for (let i = 0; i < palavraEscolhida.length; i++) {
            if (palavraEscolhida[i] === letra) {
                palavraOculta[i] = letra;
            }
        }
        if (!palavraOculta.includes('_')) {
            alert('Parabéns! Você ganhou!');
            reiniciarJogo();
        }
    } else {
        letrasErradas.push(letra);
        wrongLettersContainer.textContent = `Letras Erradas: ${letrasErradas.join(', ')}`;
        atualizarImagemEnforcado();
        if(letrasErradas.length === 6) {
            alert('Você Perdeu! A palavra era: ' + palavraEscolhida);
            reiniciarJogo();
        }
    }
    atualizarPalavra();
}

function atualizarImagemEnforcado() {
    const numErros = letrasErradas.length;
    hangmanContainer.style.backgroundImage = `url('hangman${numErros}.png')`;
}

atualizarPalavra();

document.addEventListener('keydown', function(event) {
    if (/^[a-zA-Z]$/.test(event.key)) {
        const letra = event.key.toLowerCase();
        if (!letrasErradas.includes(letra) && !palavraOculta.includes(letra)) {
            verificarLetra(letra);
        }
    }
});