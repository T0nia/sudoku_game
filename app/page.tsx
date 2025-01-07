import type { NextPage } from 'next';
import SudokuBoard from '../components/SudokuBoard';

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Sudoku Game</h1>
        <SudokuBoard />
      </div>
    </div>
  );
};

export default Home;
