# Find Your Hat - Terminal Maze Game

## Project Overview

"Find Your Hat" is a terminal-based maze-solving game built with Node.js. This educational project challenges players to navigate through a field to find their hat while avoiding holes and staying within the field boundaries. The game demonstrates fundamental programming concepts including object-oriented design, 2D arrays, game loops, and user input handling.

## How It Works

### Game Concept
The game presents a 2D grid field where the player must navigate from their starting position to find their hat. The challenge is to avoid falling into holes or moving outside the field boundaries.

### Visual Elements
The game uses Unicode characters to represent different elements:
- `*` - Player position/path (shows where you've been)
- `^` - Hat (your target destination)
- `O` - Holes (obstacles that cause game over)
- `░` - Empty field spaces (safe to move through)

### Game Logic Flow
1. **Initialization**: The game creates a field with predefined positions for the player, hat, and holes
2. **Display**: The current field state is printed to the terminal
3. **Input Loop**: The game continuously prompts for player movement directions
4. **Movement Processing**: Player input moves the character in the specified direction
5. **Condition Checking**: After each move, the game checks for win/lose conditions
6. **State Update**: The field is updated to reflect the new player position
7. **Game End**: The loop continues until the player wins (finds hat) or loses (hits hole/boundary)

## Code Architecture

### Core Components

#### Field Class
The main game logic is contained within the `Field` class located in `main.js`:

```javascript path=/Users/ayomideolayori/Desktop/codeacademy/starting/main.js start=8
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
}
```

#### Key Methods

**`constructor(field)`**
- Initializes the game field with a 2D array
- Automatically finds and sets the player's starting position
- Stores the field state and player coordinates

**`print()`**
- Displays the current field state to the terminal
- Joins array elements and prints each row

**`isWin()`**
- Checks if the player has reached the hat position
- Returns `true` when player coordinates match the hat location

**`isLoss()`**
- Checks for game-ending conditions:
  - Player moved outside field boundaries
  - Player stepped on a hole
- Returns `true` for any losing condition

### Game Constants
```javascript path=/Users/ayomideolayori/Desktop/codeacademy/starting/main.js start=3
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
```

### Game Loop Implementation
The main game loop handles:
- User input collection via `prompt-sync`
- Movement processing through switch statements
- Win/lose condition evaluation
- Field state updates and display

## How to Use

### Prerequisites
- Node.js installed on your system
- Terminal/command line access

### Installation
1. **Clone or download the project files**
2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the Game
1. **Start the game**:
   ```bash
   node main.js
   ```

2. **Game Controls**:
   - `u` - Move up
   - `d` - Move down  
   - `l` - Move left
   - `r` - Move right

3. **Gameplay**:
   - You start at position marked with `*`
   - Navigate to find your hat `^`
   - Avoid holes `O` and field boundaries
   - Your path is marked as you move

### Example Game Session
```
*░O
░O░
░^░
Which way? (u, d, l, r): d
░░O
*O░
░^░
Which way? (u, d, l, r): d
░░O
░O░
*^░
Which way? (u, d, l, r): r
You win! You found the hat!
```

## Project Structure

```
starting/
├── main.js           # Main game file with Field class and game logic
├── package.json      # Project dependencies and metadata
├── package-lock.json # Dependency lock file
├── WARP.md          # Development guidance for WARP
└── PROJECT_DOCUMENTATION.md # This documentation file
```

## Key Learning Concepts

### Programming Concepts Demonstrated
1. **Object-Oriented Programming**: Using ES6 class syntax
2. **2D Array Manipulation**: Representing and modifying grid-based data
3. **Game Loop Design**: Continuous input processing and state updates
4. **Conditional Logic**: Win/lose condition checking
5. **User Input Handling**: Synchronous terminal input with prompt-sync
6. **State Management**: Tracking and updating game state

### Development Skills Applied
- **Problem Decomposition**: Breaking game logic into manageable methods
- **Edge Case Handling**: Boundary checking and invalid input management
- **User Experience**: Clear visual feedback and instructions
- **Code Organization**: Clean separation of game logic and display functions

## Potential Enhancements

The current implementation provides a solid foundation that could be extended with:

1. **Random Field Generation**: Dynamically create fields with varying sizes and obstacle densities
2. **Difficulty Levels**: Implement multiple difficulty settings
3. **Score System**: Track moves, time, or other metrics
4. **Save/Load Game**: Persist game state between sessions
5. **Larger Fields**: Support for bigger, more complex mazes
6. **Multiple Levels**: Progress through increasingly challenging fields
7. **Power-ups**: Special items that provide advantages
8. **Animated Movement**: Smooth character movement animations

## Dependencies

- **prompt-sync** (v4.1.7): Enables synchronous user input in Node.js terminal applications

## Testing the Installation

To verify everything is working correctly:

1. Check Node.js version:
   ```bash
   node --version
   ```

2. Test the game runs without errors:
   ```bash
   node main.js
   ```

3. Try a few movements to ensure input handling works properly

## Troubleshooting

**Common Issues**:
- **"Cannot find module 'prompt-sync'"**: Run `npm install` to install dependencies
- **Unicode characters not displaying**: Ensure your terminal supports Unicode character sets
- **Game doesn't respond to input**: Verify prompt-sync is properly installed

This project serves as an excellent introduction to game development concepts while reinforcing fundamental programming skills in JavaScript and Node.js.