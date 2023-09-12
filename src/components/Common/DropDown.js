import { Menu, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import isEmpty from '../../utils/isEmpty';
import DownIcon from '../Icons/DownIcon';
const DropDown = ({
  dropdownValues,
  mainCategoryName,
  selectedValue,
  setSelectedDisplayValue,
  name = 'name',
  value = 'name',
  setSelectedValue,
  selectedDisplayValue,
}) => {
  const handleSelectDropdown = (e, name) => {
    setSelectedValue(e);
    setSelectedDisplayValue && setSelectedDisplayValue(name);
  };

  return (
    <div>
      <Menu
        as="div"
        className="dropdown relative  text-left px-12 py-3 border-2 border-[#EEEEEE] z-10"
      >
        <div>
          <Menu.Button
            style={{ width: '200px' }}
            className="text-black font-normal flex justify-center gap-5 items-center"
          >
            {isEmpty(selectedDisplayValue)
              ? isEmpty(selectedValue)
                ? dropdownValues[0]?.[name]
                : selectedValue
              : selectedDisplayValue}

            <DownIcon />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute  right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {dropdownValues.map((dropdown, index) => (
                <Menu.Item key={dropdown.id}>
                  <button
                    className={`${
                      selectedValue == dropdown.name ||
                      (isEmpty(selectedValue) && index == 0)
                        ? 'bg-[#6E37FF] text-white text-center'
                        : 'text-black'
                    } group flex w-full items-center px-4 py-2`}
                    onClick={() =>
                      handleSelectDropdown(dropdown[value], dropdown[name])
                    }
                  >
                    {dropdown[name]}
                  </button>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default DropDown;
