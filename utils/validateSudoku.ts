
// Function to validate a single move in a specific cell
export const isValidMove = (
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

// Function to validate the entire Sudoku board (no duplicates in rows, columns, or subgrids)
export const isValidSudoku = (board: (number | null)[][]): boolean => {
  for (let row = 0; row < 9; row++) {
    const rowSet = new Set<number>();
    const colSet = new Set<number>();
    for (let col = 0; col < 9; col++) {
      const cellValueRow = board[row][col];
      const cellValueCol = board[col][row];

      // Row validation
      if (cellValueRow !== null) {
        if (rowSet.has(cellValueRow)) return false;
        rowSet.add(cellValueRow);
      }

      // Column validation
      if (cellValueCol !== null) {
        if (colSet.has(cellValueCol)) return false;
        colSet.add(cellValueCol);
      }

      // Subgrid validation
      const subgridRow = Math.floor(row / 3) * 3 + Math.floor(col / 3);
      const subgridCol = (row % 3) * 3 + (col % 3);
      const subgridValue = board[subgridRow][subgridCol];
      if (subgridValue !== null && rowSet.has(subgridValue)) {
        return false;
      }
    }
  }
  return true;
};
