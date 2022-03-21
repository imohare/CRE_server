import { createContext, useState } from 'react';
import IFormContext from './DataTypes/FormContextType';
// import { IConsumer } from './DataTypes'

export const FormContext = createContext<IFormContext>();

export const FormContextProvider = ({ children:Html }) => {
  const [consumerInfo, setConsumerInfo] = useState({
    eth_address: '',
    username: '',
    location: '',
    points: 0,
    email: '',
    id: 0,
    createdAt: ''
  })
  
  
const userConfig = [
  {
    attr: {
      id: 'username',
      name: 'username',
      label: 'Username',
      rules: `${[{required: true, message: 'please choose a username!'}]}`
    }
  },
  {
    attr: {
      id: 'location',
      name: 'location',
      label: 'Location',
    }
  }
]
  
return (
    <FormContext.Provider value={{ consumerInfo, setConsumerInfo, consumerConfig }}>
    { ...children }
    </UserContext.Provider>
  )
  
}



