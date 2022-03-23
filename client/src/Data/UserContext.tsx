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
  //userType is going to be 'artist', 'puglic' or 'consumer'
  const [userType, setUserType] = useState('public');
  const [currentId, setCurrentId] = useState(0);
  const [name, setName] = useState('')

  return (
    <UserContext.Provider value={{ userType, setUserType }}>
      { children } 
    </UserContext.Provider>
  )
  
}

export default UserContextProvider;