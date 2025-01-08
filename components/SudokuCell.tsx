import React from 'react';

interface SudokuCellProps {
  value: number | null;
  onChange: (value: number | null) => void;
}

const SudokuCell: React.FC<SudokuCellProps> = ({ value, onChange }) => {
  return (
    <input
      type="number"
      min="1"
      max="9"
      value={value ?? ''}
      onChange={(e) => onChange(e.target.value ? parseInt(e.target.value) : null)}
      className="w-12 h-12 text-center bg-transparent border-0 outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default SudokuCell;
