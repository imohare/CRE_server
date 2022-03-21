//react
import { useState, useContext } from 'react';
//antd imports
import { Modal, Button } from 'antd'
//components
import FormTemplate from '../ReuseableComponents/FormTemplate';
//data
import {FormContext} from '../../../Data/FormConfigs/FormContext';
//styling

//onCancel toggles setVisible in parent component
interface ModalProps { 
  onCancel: any; 
  isVisible: boolean;
  setIsArtist: any; //should be a dispatch?
  isArtist: boolean
};


const LoginModal = ({ onCancel, isVisible, setIsArtist, isArtist }: ModalProps) => {

  const { consumerConfig } = useContext(FormContext)

  //default displays form, on submit changes from form to success or failure message
  const [formContent, setFormContent] = useState(<FormTemplate config={isArtist ? consumerConfig : consumerConfig} />);
  
  const loginAs = (artist: boolean) => {
    setIsArtist(artist)
  }
    
  const submitUser = () => {
    setFormContent(<p>success</p>)
    
    //on server sucess, setModalContent to success, else, set it to failure
  }


  return (
    <Modal
      visible={isVisible}
      onOk={submitUser}
      onCancel={onCancel}
    >
      log in as
      <Button onClick={()=>loginAs(false)}>user</Button>
      <Button onClick={()=>loginAs(true)}>artist</Button>
      { formContent }
    </Modal>
  )
}

export default LoginModal

export { }