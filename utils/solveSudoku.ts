// utils/solveSudoku.ts

export const solveSudoku = (board: (number | null)[][]): boolean => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === null) {
          for (let num = 1; num <= 9; num++) {
            if (isValidMove(board, row, col, num)) {
              board[row][col] = num;
              if (solveSudoku(board)) {
                return true;  // If solving works, return true.
              }
              board[row][col] = null;  // Backtrack if the solution doesn't work.
            }
          }
          return false;  // If no valid number can be placed, return false.
        }
      }
    }
    return true;  // Puzzle solved.
  };
  
  const isValidMove = (
    board: (number | null)[][],
    row: number,
    col: number,
    num: number
  ): boolean => {
    // Check row
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num) return false;
    }
    // Check column
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === num) return false;
    }
    // Check 3x3 subgrid
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[startRow + i][startCol + j] === num) return false;
      }
    }
    return true;
  };
  