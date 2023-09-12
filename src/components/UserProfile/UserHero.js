import React from 'react';
import profilecover from '../../../public/profilebg.png';
import profile from '../../../public/profile.png';
import Image from 'next/image';
import Icons from '../Icons/IdIcon';
import Nfts from '../AllNfts/Nfts';
const UserHero = () => {
  return (
    <div>
      <div
        className="mx-6 mt-10 h-[300px] relative flex items-center gap-4"
        style={{
          backgroundImage: `url(${profilecover.src})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
        }}
      >
        <Image className="rounded-lg mt-20 ml-8 " src={profile} alt="profile" />
        <div>
          <h1 className="font-bold text-4xl text-white pb-6">Trista Francis</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            Laborum obcaecati dignissimos quae quo ad iste ipsum officiis
            deleniti asperiores sit.
          </p>
          <div className="bg-white rounded-full px-6 p-2 flex gap-3 w-fit">
            <p className="text-[#6E37FF] text-sm font-medium">
              DdzFFzCqrhshMSx....
            </p>
            <Image src={Icons} alt="icon" />
          </div>
        </div>
      </div>
      <div className="bg-[#F8F8F8] p-3 rounded-b mx-6">
        <ul className="text-center flex justify-center font-bold ">
          <li className="p-3 px-8 hover:text-[#5142FC] cursor-pointer">
            COLLECTED
          </li>
          <li className="p-3 px-8 hover:text-[#5142FC] cursor-pointer">
            CREATED
          </li>
          <li className="p-3 px-8 hover:text-[#5142FC] cursor-pointer">
            FAVORITED
          </li>
          <li className="p-3 px-8 hover:text-[#5142FC] cursor-pointer">
            ACTIVITY
          </li>
          <li className="p-3 px-8 hover:text-[#5142FC] cursor-pointer">MORE</li>
        </ul>
      </div>
    </div>
  );
};

export default UserHero;
