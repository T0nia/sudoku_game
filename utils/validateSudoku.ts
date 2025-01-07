// utils/validateSudoku.ts

export const isValidSudoku = (board: (number | null)[][]): boolean => {
    // Check rows, columns, and 3x3 grids
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
  