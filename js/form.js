var botaoAdicionar = document.querySelector("#adicionar-player");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var player = obtemPlayerDoFormulario(form);
    var playerTr = montaTr(player);

    var erro = validaPlayer(player);

    if(erro.length>0){
        var mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erro;
        return;
    }

    var tabela = document.querySelector("#tabela-players")
    tabela.appendChild(playerTr);

    form.reset()
});

function obtemPlayerDoFormulario(form){
    var player = {
        nome: form.nome.value,
        elo: form.elo.value,
        partida: form.partida.value,
        win: form.win.value,
        lose: form.lose.value,
        winRate: calculaWinRate(form.win.value, form.partida.value)
    }

    return player;
}

function montaTr(player){
    var playerTr = document.createElement("tr");
    playerTr.classList.add("player");

    playerTr.appendChild(montaTd(player.nome, "info-nome"));
    playerTr.appendChild(montaTd(player.elo, "info-elo"));
    playerTr.appendChild(montaTd(player.partida, "info-partida"));
    playerTr.appendChild(montaTd(player.win, "info-win"));
    playerTr.appendChild(montaTd(player.lose, "info-lose"));
    playerTr.appendChild(montaTd(player.winRate, "info-winRate"));
    return playerTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPlayer(player){

    var erros = [];

    if(!validaPartida(player.partida)) erros.push("Partida é invalido")
    if(!validaLose(player.lose)) erros.push("Derrota é invalida")
    if(!validaWin(player.win)) erros.push("Vitoria Inválida")

    
    return erros;
}