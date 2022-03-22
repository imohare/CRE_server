//react
import { useState, useContext, useEffect } from 'react';
//antd imports
import { Modal, Button } from 'antd'
//components
import FormTemplate from '../ReuseableComponents/FormTemplate';
//data
import { FormContext } from '../../../Data/FormConfigs/FormContext';
//styling

//onCancel toggles setVisible in parent component
interface ModalProps { 
  onCancel: any; 
  isVisible: boolean;
};


const LoginModal = ({ onCancel, isVisible }: ModalProps) => {

  //sets the modal to display artist or user-login
  const [isArtist, setIsArtist] = useState(true);

  //sets the displayStage to 0 (buttons) 1 (artist/userform) and 2 (metamask signin)
  const [displayStage, setDisplayStage] = useState(0);

  const { consumerConfig, artistConfig } = useContext(FormContext)
  
  const displayContent = (stage: number, user: boolean) => {
    if (stage === 0) {
      return (<>
        <p>register as</p>
        <Button onClick={() => loginAs(false)}>user</Button>
        <Button onClick={() => loginAs(true)}>artist</Button>
      </>)
    }
    if (stage === 1) return <FormTemplate config={isArtist ? artistConfig : consumerConfig} />
    if (stage === 2) return <p>logging in with metamask</p>
  }
  //changes formContent according to submit stage and user
  const [formContent, setFormContent] = useState(displayContent(0, false));

 
  useEffect(() => { 
    setFormContent(displayContent(displayStage, isArtist))
   }, [isArtist, displayStage])
  
  const loginAs = (artist: boolean) => {
    setDisplayStage(1)
    setIsArtist(artist)
  }
    
  const submitUser = () => {
    setFormContent(<p>success</p>)
    
  }


  return (
    <Modal
      visible={isVisible}
      onOk={submitUser}
      onCancel={onCancel}
    >
      log in as 
      { formContent }
    </Modal>
  )
}

export default LoginModal

export { }