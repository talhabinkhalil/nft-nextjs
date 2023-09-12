import React, { useState } from 'react';
import Checkbox from '../Common/Checkbox';
import DownIcon from '../Icons/DownIcon';

const CheckboxDropdown = ({ name, data }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-6 border-b border-[#EBEBEB]">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="text-[#1F1F2C] text-xl font-bold">{name}</div>
        <DownIcon />
      </div>
      {open && (
        <div className="flex flex-col gap-3 pt-4 transition ease-in-out">
          {data.map((i) => (
            <Checkbox name={i} id={i} label={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CheckboxDropdown;
