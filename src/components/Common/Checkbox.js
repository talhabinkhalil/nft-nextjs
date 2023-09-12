import React from 'react';

const Checkbox = ({ name, id, label }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        // checked
        name={name}
        id={id}
        class="bg-transparent cursor-pointer w-4 h-4 border-1 border-[#7A798A] focus:outline-none rounded"
      />
      <label for={name} className="text-[#1F1F2C] text-xs leading-5">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
