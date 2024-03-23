const params = new URLSearchParams(window.location.search);
const player = params.get('player');
document.getElementById('selectedPlayer').innerText = player;

let chute = document.getElementById('bola');
let mensagem = document.getElementById('mensagem');
let message = document.getElementById('message');
let opcoes = document.getElementById('opcoes');
let tentarNovamente = document.getElementById('tentarNovamente');
let voltarInicio = document.getElementById('voltarInicio');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function mostrarMensagem(mensagemTexto) {
    mensagem.innerText = mensagemTexto;
    opcoes.style.display = 'block'; // exibir os botões de opção
}

function reiniciarJogo() {
    chute.style.display = 'block';
    opcoes.style.display = 'none';
    mensagem.innerText = '';
    tentarNovamente.style.display = 'inline-block'; // exibir os botões de opção
    voltarInicio.style.display = 'inline-block'; // exibir os botões de opção
    document.body.style.backgroundImage = "url('./images/goleiro_esperando.jpg')";
}


chute.addEventListener('click', function() {
    let valor_usuario = getRandomInt(3);
    let valor_cpu = getRandomInt(3);
    
    if (valor_usuario === valor_cpu) {
        switch (valor_usuario) {
            case 0:
                document.body.style.backgroundImage = "url('./images/goleiro_esquerda.jpg')";
                break;
            case 1:
                document.body.style.backgroundImage = "url('./images/goleiro_meio.jpg')";
                break;
            case 2:
                document.body.style.backgroundImage = "url('./images/goleiro_direita.jpg')";
                break;
        }
        mostrarMensagem('What a save!');
    } else {
        switch (valor_usuario) {
            case 0:
                document.body.style.backgroundImage = "url('./images/gol_esquerda.jpg')";
                break;
            case 1:
                document.body.style.backgroundImage = "url('./images/gol_meio.jpg')";
                break;
            case 2:
                document.body.style.backgroundImage = "url('./images/gol_direita.jpg')";
                break;
        }
        mostrarMensagem('Goal!');
    }

    chute.style.display = 'none'; // oculta a imagem após o chute
    message.style.display = 'none'; // oculta a mensagem após o chute
});

tentarNovamente.addEventListener('click', function() {
    reiniciarJogo();
});

voltarInicio.addEventListener('click', function() {
    window.location.href = 'index.html';
});
