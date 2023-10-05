import { FC } from "react";

interface btnProps {
  id: string;
  type?: string;
  label?: string;
  color?: string;
  width?: string;
  height?: string;
  onClick?: React.MouseEventHandler;
} 

const Button: FC<btnProps> = ({ id, label, color, width, height, type, onClick }) => {
  return (
    <>
      <button
        id={id}
        onClick={onClick}
        type={type}
        className={`text-white ${color} w-${width} h-${height} bg-blue-950 hover:bg-blue-900 border rounded-md px-4 py-2 font-semibold`}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
