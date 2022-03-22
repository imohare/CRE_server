import { createContext, useState } from 'react';
import { IFormContext } from '../DataTypes/FormContextType';
//change that to ./DataTypes and put the IFomrContext into DataTypes

export const FormContext = createContext<IFormContext>(null!);

interface ContextProps {
  children: React.ReactNode;
}
interface IConsumerInfo {
  [key: string]: any;
}

//Form context with consumer and artist sign up form configs
export const FormContextProvider = ({ children }: ContextProps ) => {
  const [consumerInfo, setConsumerInfo] = useState<IConsumerInfo>({
    eth_address: '',
    username: '',
    location: '',
    points: 0,
    email: '',
    id: 0,
    createdAt: ''
  })
  
  const consumerConfig = [
    {
      attr: {
        id: 'username',
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
        id: 'last_name',
        name: 'last name',
        key: 'lastname',
        label: 'last name',
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
        id: 'location',
        name: 'location',
        key: 'location',
        label: 'Location',
      },
      rules: [
        {
          required: false,
        },
      ],
      type: 'number'
    }
  ];
  const artistConfig = [
    {
      attr: {
        id: 'artistname',
        name: 'artistname',
        key: 'artistname',
        label: 'Name',
      }, 
      rules: [
        {
          required: true,
          message: 'Please select time!',
        },
      ],
      type: 'text'
    },
  ]
  
  //wrap the formtemplate in the parent component
  return (
    <FormContext.Provider value={{ consumerInfo, setConsumerInfo, consumerConfig, artistConfig }}>
      { children }
    </FormContext.Provider>
  ); 
}



// 


