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
        
        var winner1 = null;

        row = rowIndex;
        col = columnIndex;
        if(this.field[row*3+col] != null) return;
        this.field[row*3+col] = this.player;
        if(this.player == 'x') {
            this.player = 'o';
        } else {
            this.player = 'x';
        }   
        if(this.field[0]==this.field[1]) if(this.field[1]==this.field[2]) winner1 = this.field[2];
        if(this.field[3]==this.field[4]) if(this.field[4]==this.field[5]) winner1 = this.field[5];
        if(this.field[6]==this.field[6]) if(this.field[6]==this.field[7]) winner1 = this.field[7];
        if(this.field[0]==this.field[3]) if(this.field[3]==this.field[6]) winner1 = this.field[6];
        if(this.field[1]==this.field[4]) if(this.field[4]==this.field[7]) winner1 = this.field[7];
        if(this.field[2]==this.field[5]) if(this.field[5]==this.field[8]) winner1 = this.field[8];
        if(this.field[0]==this.field[4]) if(this.field[4]==this.field[8]) winner1 = this.field[8];
        if(this.field[2]==this.field[4]) if(this.field[4]==this.field[6]) winner1 = this.field[6];


        if(winner1 != null) this.winner = winner1;


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
