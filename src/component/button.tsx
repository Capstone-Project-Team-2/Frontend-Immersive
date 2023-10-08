import { FC } from "react";

interface btnProps {
  id: string;
  type?: string;
  label?: string;
  color?: string;
  width?: string;
  height?: string;
  hover?: string;
  onClick?: React.MouseEventHandler;
}

const Button: FC<btnProps> = ({
  id,
  label,
  color,
  width,
  height,
  hover,
  type,
  onClick,
}) => {
  return (
    <>
      <button
        id={id}
        onClick={onClick}
        type={type}
        className={`text-white ${color} w-${width} h-${height} hover:${hover} border border-gray-800 rounded-md px-4 py-2 font-semibold`}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
