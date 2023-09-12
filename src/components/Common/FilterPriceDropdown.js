import React, { useState } from 'react';
import DownIcon from '../Icons/DownIcon';

const FilterPriceDropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-6 border-b border-[#EBEBEB]">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="text-[#1F1F2C] text-xl font-bold">Price</div>
        <DownIcon />
      </div>
      {open && (
        <>
          <div className="flex items-center gap-2 pt-4 pb-8 transition ease-in-out">
            <select
              id="countries"
              class="w-full bg-transparent border border-[#B5B7CA] text-[#1F1F2C] text-base font-bold rounded-lg focus:ring-[#5142FC] focus:border-[#5142FC] block px-2.5 py-3"
            >
              <option selected value="USD">
                USD
              </option>
              <option value="EUR">EUR</option>
              <option value="PKR">PKR</option>
              <option value="AED">AED</option>
              <option value="BTC">BTC</option>
            </select>
            <input
              type="number"
              id="from"
              class="max-w-[65px] bg-transparent border border-[#B5B7CA] text-[#1F1F2C] text-base font-medium rounded-lg focus:ring-[#5142FC] focus:border-[#5142FC] block w-full px-3 py-3"
              placeholder="Min"
              required
            />
            <span className="text-[#1F1F2C] text-base font-bold">to</span>
            <input
              type="number"
              id="to"
              class="max-w-[65px] bg-transparent border border-[#B5B7CA] text-[#1F1F2C] text-medium rounded-lg focus:ring-[#5142FC] focus:border-[#5142FC] block w-full px-3 py-3"
              placeholder="Max"
              required
            />
          </div>
          <button className="w-full py-4 text-center text-white text-base font-bold bg-[#5142FC] rounded-full">
            Apply
          </button>
        </>
      )}
    </div>
  );
};

export default FilterPriceDropdown;
