import { FC } from "react";

interface btnProps {
  id: string;
  label?: string;
  color?: string;
  width?: string;
  height?: string;
  onClick?: React.MouseEventHandler;
}

const Button: FC<btnProps> = ({ id, label, color, width, height, onClick }) => {
  return (
    <>
      <button
        id={id}
        onClick={onClick}
        className={`text-white ${color} w-${width} h-${height} hover:bg-slate-500 border rounded-md px-4 py-2 font-semibold`}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
