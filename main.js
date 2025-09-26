const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this.field = field;
        //Default player position
        this.playerRow = 0;
        this.playerCol = 0;

        // Find the player's starting position
        for (let row = 0; row < this.field.length; row++) {
            for (let col = 0; col < this.field[row].length; col++) {
                if (this.field[row][col] === pathCharacter) {
                    this.playerRow = row;
                    this.playerCol = col;
            }
        }
    }
    } // Close the constructor method
    print() {
        for (let row of this.field) {
            console.log(row.join(''));
        }
    }
    //checks current position win condition
    isWin() {
        return this.field[this.playerRow][this.playerCol] === hat;
    }
    //checks current position lose condition
    isLoss() {
        if (this.playerRow < 0 || this.playerRow >= this.field.length ||
            this.playerCol < 0 || this.playerCol >= this.field[0].length) {
                return true;
            }
        //cheacks for hole
        return this.field[this.playerRow][this.playerCol] === hole;
    }
}

// Example usage:
const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░']
]);

myField.print();
console.log(myField.field.join());

let repeat = true;

while (repeat) {
    let userInput = prompt('Which way? (u, d, l, r): ');
    const prevRow = myField.playerRow;
    const prevCol = myField.playerCol;

    //player movement
    switch(userInput) {
        case 'u':
            myField.playerRow -= 1;
            break;
        case 'd':
            myField.playerRow += 1;
            break;
        case 'l':
            myField.playerCol -= 1;
            break;
        case 'r':
            myField.playerCol += 1;
            break;
        default:
            console.log('Invalid input. Please enter u, d, l, or r.');
            continue; // Skip the rest of the loop and prompt again
    }

    if (myField.isLoss()) {
        if (myField.playerRow < 0 || myField.playerRow >= myField.field.length ||
            myField.playerCol < 0 || myField.playerCol >= myField.field[0].length) {
            console.log('You fell off the field! Game Over!');
        } else { // Must be a hole
            console.log('You fell into a hole! Game Over!');
        }
        repeat = false;
    } else if (myField.isWin()) {
        console.log('You win! You found the hat!');
        repeat = false;
    } else {
        // Clear the previous position and mark the new position
        myField.field[prevRow][prevCol] = fieldCharacter;
        myField.field[myField.playerRow][myField.playerCol] = pathCharacter;
        myField.print();
    }
}   

// Example usage:
// Create a simple field manually
const predefinedField = [
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░']
  ];
  
  // Or generate a random field
  // const randomField = Field.generateField(5, 5, 0.2);
  
  // Start the game
const game = new Field(predefinedField);
