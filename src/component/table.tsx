import React, { FC } from "react";
import { BiDetail } from "react-icons/bi";

interface Tableprops {
  id: number | string;
  name?: string;
  location?: string | number;
  end_date?: string;
  validation_status?: string;
  onClick?: React.MouseEventHandler;
}

const Table: FC<Tableprops> = ({
  id,
  name,
  location,
  end_date,
  validation_status,
  onClick,
}) => {
  return (
    <tr className="text-center text-white">
      <th>{id} </th>
      <td>{name}</td>
      <td>{location}</td>
      <td>{end_date}</td>
      <td>{validation_status}</td>
      <td className="py-4">
        <div className="flex justify-center text-green-400 cursor-pointer">
          <BiDetail onClick={onClick} />
        </div>
      </td>
    </tr>
  );
};

export default Table;
