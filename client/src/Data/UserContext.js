import { createContext, useState } from 'react';
// import { IConsumer } from './DataTypes'

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [consumerInfo, setConsumerInfo] = useState({
    eth_address: '',
    username: '',
    location: '',
    points: 0,
    email: '',
    id: 0,
    createdAt: ''
  })
  

  
  return (
    <UserContext.Provider value={{ consumerInfo, setUserInfo, userConfig }}>
    { ...children }
    </UserContext.Provider>
  )
  
}