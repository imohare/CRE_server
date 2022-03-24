import { createContext, useState } from 'react';
// import { IConsumer } from './DataTypes'

interface IProps {
  children: React.ReactNode;
}
interface IUserContext {
  userType: string;
  setUserType: React.Dispatch<React.SetStateAction<string>>;
  currentId: number;
  setCurrentId: React.Dispatch<React.SetStateAction<number>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<IUserContext>(null!);

export const UserContextProvider = ({ children }: IProps) => {
  //userType is going to be 'artist', 'public' or 'consumer'
  const [userType, setUserType] = useState('public');
  const [currentId, setCurrentId] = useState(0);
  const [name, setName] = useState('')

  return (
    <UserContext.Provider value={{ userType, setUserType, currentId, setCurrentId, name, setName }}>
      { children } 
    </UserContext.Provider>
  )
  
}

export default UserContextProvider;