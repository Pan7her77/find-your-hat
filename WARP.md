# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is "Find Your Hat" - a terminal-based maze-solving game built with Node.js. The project is a simple educational game where players navigate through a field to find their hat while avoiding holes.

## Common Commands

### Development
```bash
# Run the game
node main.js

# Install dependencies
npm install

# Check Node.js version (requires Node.js)
node --version
```

### Project Setup
```bash
# Initial setup for new contributors
npm install
node main.js  # Test that the game runs
```

## Code Architecture

### Core Components

**Field Class** (`main.js`):
- Main game logic container
- Handles field representation and display
- Uses a 2D array to represent the game board

**Game Elements**:
- `^` - Hat (target to find)
- `O` - Holes (obstacles to avoid)
- `░` - Empty field spaces
- `*` - Player position/path

### Architecture Patterns

- **Object-Oriented Design**: Uses ES6 class syntax for the Field component
- **Console-Based Interface**: All interaction happens through terminal output
- **2D Array Grid System**: Game board represented as nested arrays for easy manipulation

### Dependencies

- `prompt-sync`: Handles synchronous user input in the terminal
- Pure Node.js implementation with minimal external dependencies

### Key Design Considerations

- **Terminal Game**: All output is console-based using Unicode characters for visual representation
- **Educational Project**: Code is structured for learning purposes with clear, readable implementations
- **Interactive Gameplay**: Uses synchronous prompts to wait for user input

### Development Notes

- The current implementation is a basic framework - the game logic for player movement, win/lose conditions, and input handling would typically be added to extend functionality
- The Field class is designed to be extensible for additional game features
- Character encoding relies on Unicode symbols that display properly in terminal environments