﻿var chessBoardElement = document.createElement('DIV')
chessBoardElement.setAttribute('id', 'board');
chessBoardElement.style.width = "258px";

document.getElementById('game-of-the-day').appendChild(chessBoardElement);

var board,
    millisecondsToWait = 3000;
    game = new Chess(),
    moveCounter = 0,
    pgn = ['[Event "Casual Game"]',
            '[Site "Berlin GER"]',
            '[Date "1852.??.??"]',
            '[EventDate "?"]',
            '[Round "?"]',
            '[Result "1-0"]',
            '[White "Adolf Anderssen"]',
            '[Black "Jean Dufresne"]',
            '[ECO "C52"]',
            '[WhiteElo "?"]',
            '[BlackElo "?"]',
            '[PlyCount "47"]',
            '',
            '1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.b4 Bxb4 5.c3 Ba5 6.d4 exd4 7.O-O',
            'd3 8.Qb3 Qf6 9.e5 Qg6 10.Re1 Nge7 11.Ba3 b5 12.Qxb5 Rb8 13.Qa4',
            'Bb6 14.Nbd2 Bb7 15.Ne4 Qf5 16.Bxd3 Qh5 17.Nf6+ gxf6 18.exf6',
            'Rg8 19.Rad1 Qxf3 20.Rxe7+ Nxe7 21.Qxd7+ Kxd7 22.Bf5+ Ke8',
            '23.Bd7+ Kf8 24.Bxe7# 1-0'];
    
game.load_pgn(pgn.join('\n'));

var moves = game.history()
console.log(moves);

var chess1 = new Chess();

var makeMove = function () {
    chess1.move(moves[moveCounter]);
    board.position(chess1.fen());
    console.log(moveCounter);
    if (moveCounter === moves.length) {
        setTimeout(function () {
            moveCounter = -1;
            chess1 = new Chess();
        }, millisecondsToWait);        
    }
    moveCounter++;
    window.setTimeout(makeMove, 750);
};

var cfg = {
    showNotation: false,
    position: 'start'
};

board = ChessBoard('board', cfg);

window.setTimeout(makeMove, 2000);