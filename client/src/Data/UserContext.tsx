import { createContext, useState } from 'react';
// import { IConsumer } from './DataTypes'

interface IProps {
  children: React.ReactNode;
}
interface IUserContext {
  userType: string;
  setUserType: React.Dispatch<React.SetStateAction<any>>;
}

export const UserContext = createContext<IUserContext>(null!);

export const UserContextProvider = ({ children }: IProps) => {
  const [userType, setUserType] = useState('artist');
  
  return (
    <UserContext.Provider value={{ userType, setUserType }}>
      { children } 
    </UserContext.Provider>
  )
  
}

export default UserContextProvider;