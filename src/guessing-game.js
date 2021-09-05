class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.lastGuess = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.lastGuess = Math.round(this.min + (this.max - this.min) / 2);
        return this.lastGuess;
    }

    lower() {
        this.max = this.lastGuess;
    }

    greater() {
        this.min = this.lastGuess;
    }
}

module.exports = GuessingGame;