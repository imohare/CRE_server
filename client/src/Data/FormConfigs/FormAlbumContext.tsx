import { createContext, useState } from 'react';
import { IAlbumFormContext, ContextProps, IAlbumInfo } from '../DataTypes/Forms/FormAlbumContextType';

export const AlbumFormContext = createContext<IAlbumFormContext>(null!);

export const AlbumFormContextProvider = ({ children }: ContextProps) => {
  
  const [albumInfo, setAlbumInfo] = useState<IAlbumInfo>({});
  
  const albumConfig = [
    {
      attr: {
        name: 'name',
        key: 'album_name',
        label: 'Name',
      }, 
      rules: [
        {
          required: true,
          message: 'Please enter a name for your album',
        },
      ],
      type: 'text'
    },
    {
      attr: {
        name: 'date',
        key: 'album_year',
        label: 'Date',
      }, 
      rules: [
        {
          required: true,
          type: 'object',
          message: 'Please select when your album was created',
          whitespace: true
        },
      ],
      type: 'date'
    },
    {
      attr: {
        name: 'description',
        key: 'album_location',
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
        key: 'album_number_of_tokens',
        label: '# of Album NFTs',
      },
      rules: [
        {
          required: true,
          type: 'number',
          message: 'You must chose a number of NFTs for your album',
        },
      ],
      type: 'number'
    },
    // {
    //   attr: {
    //     name: 'tokens_image',
    //     key: 'album_tokens_image',
    //     label: 'NFT image',
    //   },
    //   rules: [
    //     {
    //       required: true,
    //       type: 'file',
    //       message: 'You must chose an imgage for your NFT',
    //     },
    //   ],
    //   type: 'file'
    // },
    {
      attr: {
        name: 'tokens_value',
        key: 'album_tokens_value',
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
    <AlbumFormContext.Provider value={{ albumConfig, albumInfo, setAlbumInfo }}>
      { children }
    </AlbumFormContext.Provider>
  ); 
}