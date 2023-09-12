import { AccordionBody, Button } from '@material-tailwind/react';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

const AccordionBodyLoader = () => {
  return (
    <AccordionBody>
      <table style={{ width: '100%' }} class="table-auto">
        <tbody>
          <tr>
            <td className="tablehead-0001">
              <div className="flex">
                <p className="mt-3">
                  <Skeleton width={100} height={20} />
                </p>
              </div>
            </td>
            <td className="tablehead-0001">
              {' '}
              <Skeleton width={100} height={20} />
            </td>
            <td className="tablehead-0001">
              {' '}
              <Skeleton width={100} height={20} />
            </td>
            <td className="tablehead-0001">
              {' '}
              <Skeleton width={100} height={20} />
            </td>
            <td className="tablehead-00011">
              <Button className="bg-black">
                <Skeleton width={45} height={20} />
              </Button>
            </td>
          </tr>
          <div className="mt-3"></div>
          <tr>
            <td className="tablehead-0001">
              <div className="flex">
                <p className="mt-3">
                  <Skeleton width={100} height={20} />
                </p>
              </div>
            </td>
            <td className="tablehead-0001">
              {' '}
              <Skeleton width={100} height={20} />
            </td>
            <td className="tablehead-0001">
              {' '}
              <Skeleton width={100} height={20} />
            </td>
            <td className="tablehead-0001">
              {' '}
              <Skeleton width={100} height={20} />
            </td>
            <td className="tablehead-00011">
              <Button className="bg-black">
                <Skeleton width={45} height={20} />
              </Button>
            </td>
          </tr>
          <div className="mt-3"></div>
          <tr>
            <td className="tablehead-0001">
              <div className="flex">
                <p className="mt-3">
                  <Skeleton width={100} height={20} />
                </p>
              </div>
            </td>
            <td className="tablehead-0001">
              {' '}
              <Skeleton width={100} height={20} />
            </td>
            <td className="tablehead-0001">
              {' '}
              <Skeleton width={100} height={20} />
            </td>
            <td className="tablehead-0001">
              {' '}
              <Skeleton width={100} height={20} />
            </td>
            <td className="tablehead-00011">
              <Button className="bg-black">
                <Skeleton width={45} height={20} />
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </AccordionBody>
  );
};

export default AccordionBodyLoader;
