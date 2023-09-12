import React from 'react';
import WithHeaderFooter from '../src/components/Common/WithHeaderFooter';
import Content from '../src/components/UserProfile/Content';
import LoadMore from '../src/components/Common/LoadMore';
import ProfileHeader from '../src/components/Common/ProfileHeader';
import CollectionDetailSider from '../src/components/Common/CollectionDetailSider';

const UserProfile = () => {
  return (
    <div>
      <WithHeaderFooter>
        <ProfileHeader withTabs={true} forCollection={false} />
        <CollectionDetailSider />
        <Content />
        {/* <LoadMore /> */}
      </WithHeaderFooter>
    </div>
  );
};

export default UserProfile;
