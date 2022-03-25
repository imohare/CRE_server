import { createContext, useState } from 'react';
import {
  IFormContext,
  ContextProps,
  IConsumerInfo,
  IArtistInfo,
  IAttributes,
  IUserForm,
  IRules
} from '../DataTypes/Forms/FormContextType';

//change that to ./DataTypes and put the IFomrContext into DataTypes

// @ts-ignore
export const FormContext = createContext<IFormContext>({});


//Form context with consumer and artist sign up form configs
export const FormContextProvider = ({ children }: ContextProps) => {
  
  const [consumerInfo, setConsumerInfo] = useState<IConsumerInfo>({})

  const [artistInfo, setArtistInfo] = useState<IArtistInfo>({})
  
  const consumerConfig = [
    {
      attr: {
        // name = same as in the results object {name: [userinput]}
        name: 'username',
        // just for react
        key: 'username',
        //what is on the form
        label: 'Username',
      }, 
      rules: [
        {
          //info for antd
          required: true,
          message: 'Please enter your username!',
        },
      ],
      //input type for the form template
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
  
  //wraps the formtemplate in the parent component
  return (
    <FormContext.Provider value={{ consumerConfig, artistConfig, artistInfo, setArtistInfo, consumerInfo, setConsumerInfo }}>
      { children }
    </FormContext.Provider>
  ); 
}



// 


