import { useStorageUpload } from '@thirdweb-dev/react';
import React, { useState } from 'react';

const useUploadImage = () => {
  const { mutateAsync: upload } = useStorageUpload();
  const [uri, setUri] = useState('');

  const uploadImageToIpfs = async (image) => {
    const uris = await upload({
      data: [image],
      options: { uploadWithGatewayUrl: true, uploadWithoutDirectory: false },
    });
    setUri(uris);
    return uris[0];
  };

  return { uri, uploadImageToIpfs };
};

export default useUploadImage;
