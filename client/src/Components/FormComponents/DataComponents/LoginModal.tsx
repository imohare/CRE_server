//react
import { useState } from 'react';

//antd imports
import { Modal, Button } from 'antd'
//components
import FormTemplate from '../ReuseableComponents/FormTemplate';
//data
import { artistConfig, userConfig } from '../../../Data/FormConfigs/loginConfig';
//styling




//onCancel toggles setVisible in parent component
interface ModalProps { 
  onCancel: any; //should be a clickhandler function? React.MouseEvent does not work
  isVisible: boolean;
};


const LoginModal = ({ onCancel, isVisible }: ModalProps) => {

    //sets the modal to display artist or user-login
  const [isArtist, setIsArtist] = useState(true);
  
  const loginAs = (artist: boolean) => {
    setIsArtist(artist)
  }

  //default displays form, on submit changes from form to success or failure message
  const [formContent, setFormContent] = useState(<FormTemplate config={isArtist ? artistConfig : userConfig}/>);
    
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