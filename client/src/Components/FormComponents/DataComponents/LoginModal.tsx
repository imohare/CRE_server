import { useState, useContext, useEffect } from 'react';
//antd imports
import { Modal, Button } from 'antd'
//components
import FormTemplate from '../../ReuseableComponents/FormTemplate';

import {IArtistInfo, IConsumerInfo} from '../../../Data/DataTypes/FormContextType'
//data
import { FormContext } from '../../../Data/FormConfigs/FormContext';
import { UserContext } from '../../../Data/UserContext';
import { getConsumerByEthAddress } from '../../../Services/Consumer';
//helperfunction from tools
import { checkIfInDB, getEthAddress, registerWithEthAddress } from '../../../Tools/FormHelpers';
import { getArtistByEthAddress } from 'Services/Artist';
//styling

//onCancel toggles setVisible in parent component
interface ModalProps { 
  isVisible: boolean;
  initialStage: number;
  onCancel: any;
};


const LoginModal = ({ isVisible, initialStage, onCancel }: ModalProps) => {

  const {
    consumerConfig,
    artistConfig,
    consumerInfo,
    setConsumerInfo,
    artistInfo,
    setArtistInfo
  } = useContext(FormContext)

  const {
    setUserType,
    setCurrentId,
    setName
  } = useContext(UserContext)
  //sets the modal to display artist or user-login
  const [isArtist, setIsArtist] = useState(true);
  //sets the displayStage to 0 (buttons) 1 (artist/userform) and 2 (metamask signin)
  const [displayStage, setDisplayStage] = useState(initialStage);

  
  const loginAs = (artist: boolean) => {
    setDisplayStage(1)
    setIsArtist(artist)
  }

  useEffect(() => {
    displayContent()
  }, [displayStage])
  
  const registerFormSubmit = (values: any) => {
    console.log('message from the module component', values)
    isArtist ? setArtistInfo((...prev) => { return { ...prev, ...values } }) : setConsumerInfo((prev) => { return { ...prev, ...values }})
    setDisplayStage(2);
  
  }

  const registerHandler = async () => {
    const res = await checkIfInDB(isArtist); //should return truthy
    //stagechange to display message to signup first if result is undefined
    if (res) {
      if (isArtist) registerWithEthAddress(isArtist, artistInfo)
      if (!isArtist) registerWithEthAddress(isArtist, consumerInfo);//setting the user in the global context
      setDisplayStage(5)
    } else {
      setDisplayStage(7)
    }
    
  }
  const loginHandler = async (u: boolean) => {
      const check = await checkIfInDB(u);
      if (check) {
        const eth = await getEthAddress();
        //check if eth_address is needed in c
        if (u) {
          const artistObj = await getArtistByEthAddress(eth);
          //get id and name from return of artist
          // const { name, id } = artistObj;
            setUserType('artist');
        }
        if (!u) {
          const consumerObj = await getConsumerByEthAddress(eth);
          setUserType('consumer');
        }
    }
      setDisplayStage(6)
    
  }

    
const submitUser = () => {
  console.log('logged in')
    }
    
    const displayContent = () => {
    if (displayStage === 0) {
      return (<>
        <p>register as</p>
        <Button onClick={() => loginAs(false)}>user</Button>
        <Button onClick={() => loginAs(true)}>artist</Button>
      </>)
    }
    if (displayStage === 1) return <FormTemplate onFormSubmit={ registerFormSubmit } config={isArtist ? artistConfig : consumerConfig} />
      if (displayStage === 2) return <button onClick={ registerHandler }>sign up with metamask</button>
    if (displayStage === 3) return <><button onClick={ () => loginHandler(true) }>log in as artist</button><button onClick={()=>loginHandler(false)}>log in as user</button></>
  }
  
  return (
    <Modal
      visible={isVisible}
      onOk={submitUser}
      onCancel={onCancel}
      footer={null}
      >
      { displayContent() }
    </Modal>
  )
}

export default LoginModal
