export const isValidMove = (board: (number | null)[][], row: number, col: number, num: number): boolean => {
  // Check if the number is valid in the given row, column, and 3x3 box
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num || board[i][col] === num) return false;
  }

  // Check 3x3 box
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[startRow + i][startCol + j] === num) return false;
    }
  }
  return true;
};

export const isValidSudoku = (board: (number | null)[][]): boolean => {
  // Validate the entire board (row, column, and box constraints)
  for (let row = 0; row < 9; row++) {
    const rowSet = new Set<number>();
    const colSet = new Set<number>();
    for (let col = 0; col < 9; col++) {
      if (board[row][col] !== null && rowSet.has(board[row][col]!)) return false;
      if (board[row][col] !== null) rowSet.add(board[row][col]!);

      if (board[col][row] !== null && colSet.has(board[col][row]!)) return false;
      if (board[col][row] !== null) colSet.add(board[col][row]!);
    }
  }
  return true;
};
