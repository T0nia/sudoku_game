"use client";
import React, { useState } from 'react';
import Button from './Button';
import { solveSudoku } from '../utils/solveSudoku'; 
import { generateRandomSudoku } from '../utils/generateSudoku'; 
import { resetBoard } from '../utils/resetBoard';
import { initialBoard } from '../utils/initialBoard';

const SudokuBoard: React.FC = () => {
  const [board, setBoard] = useState(generateRandomSudoku()); 

  // Generate a random new puzzle
  const handleStart = () => {
    const newBoard = generateRandomSudoku();
    setBoard(newBoard);
  };

  // Reset the board using the external reset function
  const handleReset = () => {
    const resetGameBoard = resetBoard(); 
    setBoard(resetGameBoard); 
  };

  // Validate the Sudoku board (Check button logic)
  const handleValidate = () => {
    // Check if the board is in its default state
    if (JSON.stringify(board) === JSON.stringify(initialBoard)) {
      alert('Give it a try');
      return;
    }

    // Check if the puzzle is solved
    const solvedBoard = solveSudoku([...board]);  
    if (solvedBoard) {
      alert('Great! Puzzle solved');
    } else {
      alert('Puzzle not solved');
    }
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
          row.map((value, colIndex) => {
            const isLightGrey = (rowIndex + colIndex) % 2 === 1;
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`flex justify-center items-center w-12 h-12 ${isLightGrey ? 'bg-purple-200' : 'bg-white'}`}
              >
                <input
                  type="number"
                  min={1}
                  max={9}
                  value={value || ''}
                  onChange={(e) => handleCellChange(rowIndex, colIndex, Number(e.target.value))}
                  className="w-full h-full text-center bg-transparent border-0 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            );
          })
        )}
      </div>
      <div className="flex space-x-4 mt-4">
        <Button onClick={handleStart} label="Start" />
        <Button onClick={handleValidate} label="Check" />
        <Button onClick={handleReset} label="Reset" />
      </div>
    </div>
  );
};

export default SudokuBoard;
