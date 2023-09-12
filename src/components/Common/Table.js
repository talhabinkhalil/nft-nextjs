import React from 'react';

const Table = () => {
  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-center">
          <thead className="font-bold  uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                Event
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                From
              </th>
              <th scope="col" className="px-6 py-3">
                To
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="font-medium text-black">
            <tr className="bg-white border-b font-medium">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap "
              >
                list
              </th>
              <td className="px-6 py-4">0.008 ETH</td>
              <td className="px-6 py-4">A956CC</td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4">3 hours ago</td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap "
              >
                list
              </th>
              <td className="px-6 py-4">0.008 ETH</td>
              <td className="px-6 py-4">A956CC</td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4">3 hours ago</td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap "
              >
                list
              </th>
              <td className="px-6 py-4">0.008 ETH</td>
              <td className="px-6 py-4">A956CC</td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4">3 hours ago</td>
            </tr>
            <tr className="bg-white border-b font-medium">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap "
              >
                list
              </th>
              <td className="px-6 py-4">0.008 ETH</td>
              <td className="px-6 py-4">A956CC</td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4">3 hours ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
