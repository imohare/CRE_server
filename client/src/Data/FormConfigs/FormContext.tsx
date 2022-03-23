import { createContext, useState } from 'react';
import {
  IFormContext,
  ContextProps,
  IConsumerInfo,
  IArtistInfo,
  IAttributes,
  IUserForm,
  IRules
} from '../DataTypes/FormContextType';
//change that to ./DataTypes and put the IFomrContext into DataTypes

export const FormContext = createContext<IFormContext>(null!);



//Form context with consumer and artist sign up form configs
export const FormContextProvider = ({ children }: ContextProps) => {
  
  const [consumerInfo, setConsumerInfo] = useState<IConsumerInfo>({})

  const [artistInfo, setArtistInfo] = useState<IArtistInfo>({})
  
  const consumerConfig = [
    {
      attr: {
        name: 'username',
        key: 'username',
        label: 'Username',
      }, 
      rules: [
        {
          required: true,
          message: 'Please enter your username!',
        },
      ],
      type: 'text'
    },
    {
      attr: {
        name: 'email',
        key: 'email',
        label: 'Email',
      }, 
      rules: [
        {
          required: true,
          type: 'email'
        },
      ],
      type: 'text'
    },
    {
      attr: {
        name: 'location',
        key: 'location',
        label: 'Location',
      },
      rules: [
        {
          required: false,
        },
      ],
      type: 'text'
    }
  ];
  const artistConfig = [
    {
      attr: {
        name: 'name',
        key: 'artistname',
        label: 'Name',
      }, 
      rules: [
        {
          required: true,
          message: 'Please enter your name!',
        },
      ],
      type: 'text'
    },
    {
      attr: {
        name: 'website',
        key: 'website',
        label: 'Website',
      }, 
      rules: [
        {
          required: false,
        },
      ],
      type: 'text'
    }, {
      attr: {
        name: 'instagram',
        key: 'instagram',
        label: 'Instagram',
      }, 
      rules: [
        {
          required: false,
        },
      ],
      type: 'text'
    }, {
      attr: {
        name: 'twitter',
        key: 'twitter',
        label: 'Twitter',
      }, 
      rules: [
        {
          required: false,
        },
      ],
      type: 'text'
    }, {
      attr: {
        name: 'discord',
        key: 'discord',
        label: 'Discord',
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
        name: 'spotify',
        key: 'spotify',
        label: 'Spotify',
      }, 
      rules: [
        {
          required: false,
        },
      ],
      type: 'text'
    }
  ]
  
  //wrap the formtemplate in the parent component
  return (
    <FormContext.Provider value={{ consumerConfig, artistConfig, artistInfo, setArtistInfo, consumerInfo, setConsumerInfo }}>
      { children }
    </FormContext.Provider>
  ); 
}



// 


