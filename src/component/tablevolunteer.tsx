import React, { FC } from "react";
import { BiDetail } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";

interface Tableprops {
  id: number | string;
  name?: string;
  email?: string | number;
  onClick?: React.MouseEventHandler;
  onDelete?: React.MouseEventHandler;
}

const Table: FC<Tableprops> = ({ id, name, email, onClick, onDelete }) => {
  return (
    <tr className="text-center text-white">
      <th>{id} </th>
      <td className="text-left ps-6">{name}</td>
      <td className="text-left ps-6">{email}</td>
      <td className="py-4">
        <div className="flex justify-center gap-4 cursor-pointer">
          <span className="text-green-400">
            <BiDetail onClick={onClick} />
          </span>
          <span className="text-red-500">
            <FaTrashAlt onClick={onDelete} />
          </span>
        </div>
      </td>
    </tr>
  );
};

export default Table;
