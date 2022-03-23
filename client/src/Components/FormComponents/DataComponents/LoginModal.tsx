import { useState, useContext, useEffect } from 'react';
//antd imports
import { Modal, Button } from 'antd'
//components
import FormTemplate from '../../ReuseableComponents/FormTemplate';
//data
import {  FormContext } from '../../../Data/FormConfigs/FormContext';
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
    if (displayStage === 2) return <button>sign up with metamask</button>
    if (displayStage === 3) return <button>log in with metamask</button>
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
