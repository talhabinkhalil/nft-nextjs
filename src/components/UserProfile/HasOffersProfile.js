import React, { useState } from 'react';
import Creator from '../../../public/tableuser.png';
import Image from 'next/image';
import { Button } from '@material-tailwind/react';

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import AccordionsLoader from '../Loaders/AccordionsLoader';
import AllCollectionCardsLoader from '../Loaders/AllCollectionCardsLoader';
import useDirectMpListings from '../../hooks/thirdWeb-hooks/useDirectMpListings';
import { getReadableDate } from '../../utils/DateFormatter';
import { showWalletAddress } from '../../utils/showWalletAddress';
import { getDirectMarketPlaceOffers } from '../../../services/third-web/getDirectItemsOffers';
import isEmpty from '../../utils/isEmpty';
import useLoading from '../../hooks/redux-toolkit/useLoading';
import AccordionBodyLoader from '../Loaders/AccordionBodyLoader';
import { acceptOffer } from '../../../services/third-web/acceptOffer';
import useDirectActiveListings from '../../hooks/thirdWeb-hooks/useDirectActiveListings';

const HasOffersProfile = () => {
  const { directActive: directItems, isLoading } = useDirectActiveListings();
  const { loading, startLoading, stopLoading } = useLoading();

  const [open, setOpen] = useState('p');
  const [data, setData] = useState([]);

  const handleOpen = async (value) => {
    setData([]);
    setOpen(open === value ? 'p' : value);
    if (open !== value) {
      startLoading();
      const directOffers = await getDirectMarketPlaceOffers(value);
      setData(directOffers);
      stopLoading();
    }
  };

  console.log('directItems', directItems);

  const handleAcceptOffer = async (id, offeror) => {
    console.log(Number(id), offeror);
    const txResult = await acceptOffer(Number(id), offeror);
    console.log(txResult);
  };

  return (
    <>
      {isLoading ? (
        <AllCollectionCardsLoader LoaderComponent={<AccordionsLoader />} />
      ) : (
        <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-1 gap-3 pt-10 pb-10 pl-10">
          {directItems.map((item) => (
            <Accordion open={open === item.id}>
              <AccordionHeader onClick={() => handleOpen(item.id)}>
                <table style={{ width: '100%' }} class="table-auto">
                  <thead>
                    <tr>
                      <th className="tablehead-0001">
                        <div className="flex">
                          <span className="mr-3">
                            <Image
                              width={70}
                              height={70}
                              className="rounded-lg"
                              src={item?.asset?.image_url}
                            />
                          </span>
                          <p className="mt-2 ">{item?.asset?.name}</p>
                        </div>
                      </th>
                      <th className="tablehead-0001">
                        {item?.buyoutCurrencyValuePerToken?.displayValue}{' '}
                        {item?.buyoutCurrencyValuePerToken?.symbol}
                      </th>
                      <th className="tablehead-0001">
                        {getReadableDate(item?.secondsUntilEnd?._hex * 1000)}
                      </th>
                      <th className="tablehead-0001">
                        {showWalletAddress(item?.sellerAddress)}
                      </th>
                    </tr>
                  </thead>
                </table>
              </AccordionHeader>
              {open == item.id && loading ? (
                <AccordionBodyLoader />
              ) : isEmpty(data) ? (
                <AccordionBody>
                  <p className="text-center">'No Offers Found'</p>
                </AccordionBody>
              ) : (
                <AccordionBody>
                  <table style={{ width: '100%' }} class="table-auto">
                    <tr>
                      <td className="tablehead-0001">
                        <div className="flex">
                          <p className="mt-3">Buyer</p>
                        </div>
                      </td>
                      <td className="tablehead-0001">Currency Value</td>
                      <td className="tablehead-0001">Quantity</td>
                      <td className="tablehead-0001">Listing ID</td>
                      <td className="tablehead-00011">
                        <Button className="bg-black">Actions</Button>
                      </td>
                    </tr>
                    <tbody>
                      {data.map((d) => (
                        <>
                          <div className="mt-3"></div>
                          <tr>
                            <td className="tablehead-0001">
                              <div className="flex">
                                <p className="mt-3">
                                  {showWalletAddress(d?.buyerAddress)}
                                </p>
                              </div>
                            </td>
                            <td className="tablehead-0001">
                              {d?.currencyValue?.displayValue +
                                ' ' +
                                d?.currencyValue?.symbol}
                            </td>
                            <td className="tablehead-0001">
                              {Number(d?.quantityDesired?._hex)}
                            </td>
                            <td className="tablehead-0001">
                              {Number(d?.listingId?._hex)}
                            </td>
                            <td className="tablehead-00011">
                              <Button
                                className="bg-black"
                                onClick={() =>
                                  handleAcceptOffer(
                                    d?.listingId?._hex,
                                    d?.buyerAddress
                                  )
                                }
                              >
                                Accept Offer
                              </Button>
                            </td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </AccordionBody>
              )}
            </Accordion>
          ))}
        </div>
      )}
    </>
  );
};

export default HasOffersProfile;
