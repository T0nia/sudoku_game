export const generateRandomSudoku = (): (number | null)[][] => {
  // Two predefined random puzzles
  const puzzle1: (number | null)[][] = [
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

  const puzzle2: (number | null)[][] = [
    [2, null, null, 3, null, 4, 5, null, 7],
    [null, 3, 4, 2, null, null, 6, 9, null],
    [5, 6, null, null, null, 7, null, 4, null],
    [3, 9, null, 5, 1, null, 4, null, null],
    [4, null, 1, 9, 3, null, 7, null, 6],
    [6, null, 7, 8, 4, 2, null, 5, 3],
    [null, 8, 5, null, 7, 3, 9, 6, null],
    [9, null, 3, 6, 2, 8, null, null, 4],
    [7, null, null, 1, null, 9, 3, null, 5],
  ];

  // Randomly pick one of the two puzzles
  const puzzles = [puzzle1, puzzle2];
  const randomIndex = Math.floor(Math.random() * puzzles.length);
  
  return puzzles[randomIndex]; // Return the randomly selected puzzle
};
