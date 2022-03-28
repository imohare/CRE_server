import { createContext, useEffect, useState } from 'react';
import { IUserObject } from './DataTypes'

interface IUserContext {
  currentId: number;
  setCurrentId: React.Dispatch<React.SetStateAction<number>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  userType: string;
  setUserType: React.Dispatch<React.SetStateAction<string>>;
  userObject: IUserObject;
  setUserObject: React.Dispatch<React.SetStateAction<IUserObject>>;  
}
interface IProps {
  children: React.ReactNode;
}

const UserContext = createContext<IUserContext>(null!);

const UserContextProvider = ({ children }: IProps) => {
  //userType is going to be 'artist', 'public' or 'consumer'
  const [userType, setUserType] = useState('public');
  const [currentId, setCurrentId] = useState(0);
  const [name, setName] = useState('');
  const [userObject, setUserObject] = useState({});

  return (
    <UserContext.Provider value={{ currentId, setCurrentId, name, setName, userType, setUserType, userObject, setUserObject }}>
      { children } 
    </UserContext.Provider>
  )
}

export  {UserContextProvider, UserContext};

