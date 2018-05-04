var titulo = document.querySelector(".titulo");
titulo.textContent = "Jogadores"

var players = document.querySelectorAll(".player");

for(var i = 0; i<players.length; i++){
    var player = players[i];

    var tdPartida = player.querySelector(".info-partida");
    var partida = tdPartida.textContent;
    var tdWin = player.querySelector(".info-win");
    var win = tdWin.textContent;
    var tdLose = player.querySelector(".info-lose");
    var lose = tdLose.textContent;

    var tdWinRate = player.querySelector(".info-winRate");

    var partidaValida = validaPartida(partida);
    var winValida = validaWin(win);
    var loseValida = validaLose(lose);

    if(!partidaValida){
        partidaValida = false;
        tdWinRate.textContent = "Numero de partidas invalida";
        player.classList.add("player-invalido");
    }
    if(!winValida){
        winValida = false;
        tdWinRate.textContent = "Numero de vitorias invalida";
        player.classList.add("player-invalido");
    }
    if(!loseValida){
        loseValida = false;
        tdWinRate.textContent = "Numero de derrotas invalida";
        player.classList.add("player-invalido");
    }
    if(partidaValida && winValida && loseValida){
        var winRate = calculaWinRate(partida, win, lose);
        tdWinRate.textContent = winRate;
    }
}

function validaPartida(partida){
    if(partida>=0){
        return true;
    }else{
        return false;
    }
}

function validaWin(win){
    if(win>=0){
        return true;
    }else{
        return false;
    }
}

function validaLose(lose){
    if(lose>=0){
        return true;
    }else{
        return false;
    }
}

function calculaWinRate(win, partida){
    var winRate = 0;
    winRate = win/partida*(100);
    return winRate.toFixed(2);
}