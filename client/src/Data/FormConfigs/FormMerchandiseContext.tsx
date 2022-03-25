import { createContext, useState } from 'react';
import { IMerchandiseFormContext, ContextProps, IMerchandiseInfo } from '../DataTypes/Forms/FormMerchandiseContextType';

export const MerchandiseFormContext = createContext<IMerchandiseFormContext>(null!);

export const MerchandiseFormContextProvider = ({ children }: ContextProps) => {
  
  const [merchandiseInfo, setMerchandiseInfo] = useState<IMerchandiseInfo>({});
  
  const merchandiseConfig = [
    {
      attr: {
        name: 'name',
        key: 'merchandise_name',
        label: 'Name',
      }, 
      rules: [
        {
          required: true,
          message: 'Please enter a name for your merchandise',
        },
      ],
      type: 'text'
    },
    {
      attr: {
        name: 'type',
        key: 'type',
        label: 'Type',
      }, 
      rules: [
        {
          required: true,
          message: 'Please enter the type of your merchandise',
        },
      ],
      type: 'text'
    },
    {
      attr: {
        name: 'description',
        key: 'merchandise_location',
        label: 'Description',
      },
      rules: [
        {
          required: false,
        },
      ],
      type: 'text'
    },
    {
      attr: {
        name: 'number_of_tokens',
        key: 'merchandise_number_of_tokens',
        label: '# of Merchandise NFTs',
      },
      rules: [
        {
          required: true,
          type: 'number',
          message: 'You must chose a number of NFTs for your merchandise',
        },
      ],
      type: 'number'
    },
    {
      attr: {
        name: 'tokens_image',
        key: 'merchandise_tokens_image',
        label: 'NFT image',
      },
      rules: [
        {
          required: true,
          type: 'string',
          message: 'You must chose an imgage for your NFT',
        },
      ],
      type: 'string'
    },
    {
      attr: {
        name: 'tokens_value',
        key: 'merchandise_tokens_value',
        label: 'NFT value',
      },
      rules: [
        {
          required: true,
          type: 'number',
          message: 'You must select a value for your NFT',
        },
      ],
      type: 'number'
    },
  ];
  
  //wrap the formtemplate in the parent component
  return (
    <MerchandiseFormContext.Provider value={{ merchandiseConfig, merchandiseInfo, setMerchandiseInfo }}>
      { children }
    </MerchandiseFormContext.Provider>
  ); 
}