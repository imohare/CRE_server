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
        key: 'username',
        label: 'Username',
      }, 
      required: true
    },
    {
      attr: {
        id: 'location',
        key: 'location',
        label: 'Location',
      },
      required: false
    }
  ];
  
  return (
    <FormContext.Provider value={{ consumerInfo, setConsumerInfo, consumerConfig }}>
      { children }
    
    </FormContext.Provider>
  ); 
}



// 


