import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from '@material-tailwind/react';
import Creator from '../../../public/tableuser.png';
import { Button } from '@material-tailwind/react';

import Image from 'next/image';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
/* 
@dev Function serve the loading purpose.
*/
const AccordionsLoader = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-1 gap-3 pl-10">
      {}
      <Accordion>
        <AccordionHeader>
          <table style={{ width: '100%' }} class="table-auto">
            <thead>
              <tr>
                <th className="tablehead-0001">
                  <Skeleton width={'50%'} height={50} />
                </th>
                <th className="tablehead-0001">
                  {' '}
                  <Skeleton width={'50%'} height={50} />
                </th>

                <th className="tablehead-0001">
                  {' '}
                  <Skeleton width={'50%'} height={50} />
                </th>
                <th className="tablehead-0001">
                  {' '}
                  <Skeleton width={'50%'} height={50} />
                </th>
              </tr>
            </thead>
          </table>
        </AccordionHeader>
      </Accordion>
    </div>
  );
};

export default AccordionsLoader;
