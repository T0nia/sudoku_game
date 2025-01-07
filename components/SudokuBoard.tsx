"use client";

import React, { useState } from 'react';
import Button from './Button'; // Import the Button component
import { solveSudoku } from '../utils/solveSudoku';
import { isValidSudoku } from '../utils/validateSudoku';

const initialBoard: (number | null)[][] = [
  [5, 3, null, null, 7, null, null, null, null],
  [6, null, null, 1, 9, 5, null, null, null],
  [null, 9, 8, null, null, null, null, 6, null],
  [8, null, null, null, 6, null, null, null, 3],
  [4, null, null, 8, null, 3, null, null, 1],
  [7, null, null, null, 2, null, null, null, 6],
  [null, 6, null, null, null, null, 2, 8, null],
  [null, null, null, 4, 1, 9, null, null, 5],
  [null, null, null, null, 8, null, null, 7, 9],
];

const SudokuBoard: React.FC = () => {
  const [board, setBoard] = useState(initialBoard);

  // Reset the board to the initial state
  const handleReset = () => {
    setBoard(initialBoard);
  };

  // Solve the Sudoku puzzle
  const handleSolve = () => {
    const solvedBoard = solveSudoku([...board]); // Solve the puzzle
    setBoard(solvedBoard ? [...board] : [...board]); // Update the board
  };

  // Validate the Sudoku board
  const handleValidate = () => {
    const valid = isValidSudoku(board);
    alert(valid ? 'Puzzle is valid!' : 'Puzzle is invalid!');
  };

  // Handle changes in cell values
  const handleCellChange = (row: number, col: number, value: number | null) => {
    const newBoard = [...board];
    newBoard[row][col] = value;
    setBoard(newBoard);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-9 gap-1">
        {board.map((row, rowIndex) =>
          row.map((value, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="flex justify-center items-center w-12 h-12 border border-gray-400"
            >
              <input
                type="number"
                min={1}
                max={9}
                value={value || ''}
                onChange={(e) => handleCellChange(rowIndex, colIndex, Number(e.target.value))}
                className="w-full h-full text-center bg-white border-0 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))
        )}
      </div>
      <div className="flex space-x-4 mt-4">
        <div>
          <Button onClick={handleReset} label="Reset" />
        </div>
        <div>
          <Button onClick={handleSolve} label="Solve" />
        </div>
        <div>
          <Button onClick={handleValidate} label="Validate" />
        </div>
      </div>
    </div>
  );
};

export default SudokuBoard;
