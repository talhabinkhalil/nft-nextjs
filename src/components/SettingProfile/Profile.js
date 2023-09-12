import React from "react";
import ProfileIcon from "../Icons/ProfileIcon";
import RightIcon from "../Icons/RightIcon";
import FeatureIcon from '../Icons/FeatureIcon'
import Notification from '../Icons/Notification'
const Profile = () => {
  return (
    <div className="flex gap-4 border-r-2">
      <div className="w-[300px] border-r pt-14">
        <h1 className="font-bold text-xl pb-8 px-4">Settings</h1>
        <ul>
          <li className="flex py-6 px-4 justify-between items-center cursor-pointer hover:bg-[#F6F3FF] hover:text-black hover:font-bold text-[#979797]">
            <div className="flex items-center  gap-2">
              <ProfileIcon />
              <span className=" text-xl">Profile</span>
            </div>
            <RightIcon/>
          </li>
          <li className="flex py-6 px-4 justify-between items-center cursor-pointer hover:bg-[#F6F3FF] hover:text-black hover:font-bold text-[#979797]">
            <div className="flex items-center  gap-2">
              <FeatureIcon />
              <span className=" text-xl">Featured Items</span>
            </div>
            <RightIcon/>
          </li>
          <li className="flex py-6 px-4 justify-between items-center cursor-pointer hover:bg-[#F6F3FF] hover:text-black hover:font-bold text-[#979797]">
            <div className="flex items-center  gap-2">
              <Notification />
              <span className="font-medium text-xl">Notifications</span>
            </div>
            <RightIcon/>
          </li>
          <li className="flex py-6 px-4 justify-between items-center cursor-pointer hover:bg-[#F6F3FF] hover:text-black hover:font-bold text-[#979797]">
            <div className="flex items-center  gap-2">
              <ProfileIcon />
              <span className=" text-xl">Offers</span>
            </div>
            <RightIcon/>
          </li>
          <li className="flex py-6 px-4 justify-between items-center cursor-pointer hover:bg-[#F6F3FF] hover:text-black hover:font-bold text-[#979797]">
            <div className="flex items-center  gap-2">
              <ProfileIcon />
              <span className=" text-xl">Account Support</span>
            </div>
            <RightIcon/>
          </li>
          <li className="flex py-6 px-4 justify-between items-center cursor-pointer hover:bg-[#F6F3FF] hover:text-black hover:font-bold text-[#979797]">
            <div className="flex items-center  gap-2">
              <ProfileIcon />
              <span className=" text-xl">Earnings</span>
            </div>
            <RightIcon/>
          </li>
        </ul>
      </div>
     
    </div>
  );
};

export default Profile;
