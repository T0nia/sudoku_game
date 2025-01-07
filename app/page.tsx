import type { NextPage } from 'next';
import SudokuBoard from '../components/SudokuBoard';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      
      <h1 className="text-5xl font-bold text-yellow-400 mb-4 from-neutral-200">
        SUDOKU
      </h1>

      {/* Sudoku Board */}
      <SudokuBoard />
    </div>
  );
};

export default Home;
