// components/Button.tsx
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 mt-4 bg-gray-800 text-white rounded-xl"
    >
      {label}
    </button>
  );
};

export default Button;
