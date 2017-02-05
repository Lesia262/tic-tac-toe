class TicTacToe {
    constructor() {
        this.winner = null;
        this.field = [null, null, null, null, null, null, null, null, null];
        this.player = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        var row, col;
        row = rowIndex;
        col = columnIndex;
        if(this.field[row*3+col] != null) return;
        this.field[row*3+col] = this.player;
        if(this.player == 'x') {
            this.player = 'o';
        } else {
            this.player = 'x';
        }   

    }

    isFinished() { 
            if(this.winner != null) return true;
        var result = true;
            for(var a=0; a<9; a++) {
                if(this.field[a] == null) result = false;
            }
        return result; 
        // return this.winner;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        var result = true;
        for(var a = 0; a<9; a++){
            if(this.field[a]== null){
                result = false;
            }
        }
    return result;
    }

    

    isDraw() {
        var result = true;
        for(var a = 0; a<9; a++){
            if(this.field[a]== null){
                result = false;
            }
        }
        if(this.winner != null) result = false;
    return result;
    }

    getFieldValue(rowIndex, colIndex) {
    var row, col;
    row = rowIndex;
    col = colIndex;
    return this.field[row*3 + col];
    }
}

module.exports = TicTacToe;
