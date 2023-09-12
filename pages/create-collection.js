import React from 'react';
import WithHeaderFooter from '../src/components/Common/WithHeaderFooter';
import UploadImage from '../src/components/CreateCollection/UploadImage';
import Footer from '../src/components/Layout/Footer';
import Header from '../src/components/Layout/Header';

const CreateCollection = () => {
  return (
    <div>
      <WithHeaderFooter>
        <UploadImage />
      </WithHeaderFooter>
    </div>
  );
};

export default CreateCollection;
