import WithHeaderFooter from '../src/components/Common/WithHeaderFooter';
import { useState } from 'react';
import Image from 'next/image';
import useMineCollections from '../src/hooks/redux-toolkit/useMineCollections';
import DropDown from '../src/components/Common/DropDown';
import { useContract, useMintNFT, useStorageUpload } from '@thirdweb-dev/react';
import useUploadImage from '../src/hooks/thirdWeb-hooks/useUploadImage';
import useValidateRequest from '../src/hooks/thirdWeb-hooks/useValidateRequest';
import isEmpty from '../src/utils/isEmpty';
import useGetContractObject from '../src/hooks/thirdWeb-hooks/useGetContractObject';
import useLoading from '../src/hooks/redux-toolkit/useLoading';
import useGetAddress from '../src/hooks/thirdWeb-hooks/useGetAddress';
import { toast } from 'react-hot-toast';

const CreateItem = () => {
  const [image, setImage] = useState(null);
  const { uploadImageToIpfs, uri } = useUploadImage();
  const validateRequest = useValidateRequest();
  const { mineCollections } = useMineCollections();
  const [selectedDisplayValue, setSelectedDisplayValue] = useState('');
  const [collectionContract, setCollectionContract] = useState(
    mineCollections[0]?.blockChain
  );
  const { address } = useGetAddress();
  const { contractObject, getContractObj } = useGetContractObject();
  const { startLoading, loading, stopLoading } = useLoading();

  console.log(contractObject);

  const [formData, setFormData] = useState({
    name: '',
    nft: '',
    url: '',
    description: '',
    collectionId: '',
    blockchain: '',
    supply: 1,
    isSensitiveContent: '',
  });

  // console.log(contractObject);
  // const { mutate: mintTo, isLoading, error } = useMintNFT(contractObject);

  const handleImageChange = ({ target }) => {
    setImage(target.files[0]);
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const getContractAddress = () => {
    if (!isEmpty(mineCollections)) {
      return mineCollections.find((d) => d.id === formData.collectionId);
    }
  };

  const setCategory = (value) => {
    const contract = getContractAddress();
    console.log(contract?.blockChain);
    getContractObj(contract?.blockChain);
    handleChange({ target: { name: 'collectionId', value: value } });
  };

  const createItem = async () => {
    try {
      startLoading();
      const {
        name,
        url,
        description,
        nft,
        collectionId,
        blockchain,
        supply,
        isSensitiveContent,
      } = formData;
      const data = new FormData();
      data.append('name', name);
      data.append('nft', nft);
      data.append('url', url);
      data.append('description', description);
      data.append('collectionId', collectionId);
      data.append('blockchain', blockchain);
      data.append('supply', supply);
      data.append('isSensitiveContent', isSensitiveContent);

      const imageData = await uploadImageToIpfs(image);

      console.log(imageData);
      const metaData = {
        name: formData.name,
        description: formData.description,
        external_url: url,
        image_url: imageData,
        image: imageData,
        // attributes: Object.values(attributesFields),
      };
      await contractObject?.erc721
        ?.mintTo(address, metaData)
        .then((res) => {
          console.log(res);
          stopLoading();
        })
        .catch((error) => {
          stopLoading();
          console.log(error);
        });
    } catch (error) {
      stopLoading();
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  const writeFunction = () => {
    return 1212;
  };

  const handleMintNft = async () => {
    const result = await validateRequest(() => {
      createItem();
    });
  };

  return (
    <WithHeaderFooter>
      <div className="container max-w-[1200px] mx-auto pt-[40px]">
        <div className="flex flex-col  justify-start gap-4">
          <h1 className="text-[#1F1F2C] text-4xl text-start font-bold">
            Create New Item
          </h1>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 pt-10"> */}
        <p className="text-[#1F1F2C] text-sm font-bold pt-6">
          * Required fields
        </p>
        <p className="text-[#1F1F2C] text-2xl font-bold pt-3">
          Image, Video, Audio, or 3D Model*
        </p>
        <p className="text-[rgb(112, 122, 131)] text-sm font-normal pt-1">
          File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
          GLB, GLTF. Max size: 100 MB
        </p>
        <div class="flex justify-start mt-8">
          <div class="m-4">
            <div class="flex items-center justify-center w-full">
              <label class="flex flex-col w-60 h-60 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                {!image ? (
                  <div class="flex flex-col items-center justify-center pt-16">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                      Select a photo
                    </p>
                  </div>
                ) : (
                  <Image
                    alt="Selected Image"
                    src={URL.createObjectURL(image)}
                    width={200}
                    style={{
                      objectFit: 'contain',
                      height: '100%',
                      width: '100%',
                    }}
                    height={200}
                  />
                )}
                <input
                  type="file"
                  class="opacity-0"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </div>
        </div>
        <form class="pt-10 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Name
            </label>
            <input
              class="shadow appearance-none border rounded w-[550px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              required
              onChange={handleChange}
              placeholder="nft name"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              External link<br></br>
              <span className="text[#c3c3]">
                OpenSea will include a link to this URL on this item's detail
                page, so that users can click to <br></br>learn more about it.
                You are welcome to link to your own webpage with more details.
              </span>
            </label>
            <input
              class="shadow appearance-none border rounded w-[550px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="url"
              name="url"
              onChange={handleChange}
              type="text"
              placeholder="http://yousite/item/123"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Description<br></br>
              <span className="text[#c3c3]">
                The description will be included on the item's detail page
                underneath its image.
                <br /> Markdown syntax is supported.
              </span>
            </label>
            <textarea
              rows="4"
              class="shadow appearance-none border rounded w-[550px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              name="description"
              onChange={handleChange}
              placeholder="Describe your nft"
            />
          </div>
        </form>
        <p className=" text-2xl text-[#000]">
          Collection
          <br />
          <span className="text-sm text-[#7A798A] ">
            This is the collection where your item will appear. info
          </span>
        </p>
        <div style={{ width: '250px' }} className="relative mt-4">
          <DropDown
            dropdownValues={mineCollections}
            mainCategoryName={''}
            name="name"
            value="_id"
            selectedValue={formData.collectionId}
            setSelectedValue={setCategory}
            setSelectedDisplayValue={setSelectedDisplayValue}
            selectedDisplayValue={selectedDisplayValue}
          />
        </div>

        <div style={{ width: '550px' }} className="flex justify-between pt-10">
          <div>
            <p>Explicit & Sensitive Content</p>
            <span>Set this item as explicit and sensitive contentinfo</span>
          </div>
          <div>
            {' '}
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="isSensitiveContent"
                value={formData.isSensitiveContent}
                onChange={(e) =>
                  handleChange({
                    target: { name: e.target.name, value: e.target.checked },
                  })
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
            </label>
          </div>
        </div>
        <form class="pt-10 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2 text-2xl text-[#000]"
              for="username"
            >
              Supply
              <br />
              <span className="text-sm text-[#7A798A]">
                The number of items that can be minted. No gas cost to you!inf
              </span>
            </label>
            <input
              class="shadow appearance-none border rounded w-[550px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              value={formData.supply}
              disabled
              type="text"
              placeholder="supply"
            />
          </div>
        </form>
        <h2 className="text-2xl text-[#000]">Freeze metadata </h2>
        <p className="text-sm text-[#7A798A]">
          Freezing your metadata will allow you to permanently lock and store
          all of this item's
          <br /> content in decentralized file storage.
        </p>
        <p className="text-2xl text-[#000] pt-4">
          To freeze your metadata, you must create your item first.
        </p>
        <button
          onClick={handleMintNft}
          disabled={loading}
          className="bg-black text-white px-6 py-2 mt-6 rounded"
        >
          {loading ? 'creating nft...' : 'Create'}
        </button>
      </div>
    </WithHeaderFooter>
  );
};

export default CreateItem;
