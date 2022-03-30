import { useState, useContext, useEffect } from 'react';
//antd imports
import { Modal, Button } from 'antd'
//components
import FormTemplate from '../../ReuseableComponents/FormTemplate';

import { IArtistInfo, IConsumerInfo } from '../../../Data/DataTypes/Forms/FormContextType'
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

// interface IUserData {
//   userType: string;
//   currentId: number;
//   name: string;
// }


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
    userType,
    setUserType,
    currentId,
    setCurrentId,
    name,
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
    isArtist ? setArtistInfo({ ...values }) : setConsumerInfo({ ...values })
    console.log('message from the context, artistInfo is:', artistInfo, 'consumer is ', consumerInfo)
    setDisplayStage(2);
  }


  //here now
  const registerHandler = async () => {
    console.log('in register handler')
    console.log('artist info in context 1:" consumer info in context 2', artistInfo, consumerInfo)
    const check = await checkIfInDB(isArtist); //should return falsy
    //if falsey, we want to create a new user to our DB
    if (!check) {
      console.log("in! check")
      let res;

      if (isArtist) {
        res = await registerWithEthAddress(isArtist, artistInfo)
        console.log("res artist", res)
      }
      if (!isArtist) {
        res = await registerWithEthAddress(isArtist, consumerInfo);
        console.log(res, "res consumer")
      }//setting the user in the global context
      console.log(res, "user res logged");

      setDisplayStage(6) //successful registration
    } else {
      console.log("in else check")
      console.log('returning truthy')
      setDisplayStage(4);
    }
  }

  const loginHandler = async (u: boolean): Promise<void> => {
    const check = await checkIfInDB(u);
    console.log('check', check);
    if (check) {
      const eth = await getEthAddress();
      if (u) {
        const artistObjResponse = await getArtistByEthAddress(eth);
        console.log(artistObjResponse, 'artist response login')
        const { name, id } = await artistObjResponse;
        setCurrentId(id);
        setName(name)
        setUserType('artist');
      }
      if (!u) {
        const consumerObjResponse = await getConsumerByEthAddress(eth);
        console.log(consumerObjResponse, 'artist response login');
        const { username, id } = consumerObjResponse;
        setCurrentId(id);
        setName(username)
        setUserType('consumer');
      }
    }
    setDisplayStage(7)
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
    if (displayStage === 1) return <FormTemplate onFormSubmit={registerFormSubmit} config={isArtist ? artistConfig : consumerConfig} />
    if (displayStage === 2) return <Button onClick={registerHandler}>sign up with metamask</Button>
    if (displayStage === 3) return <><Button onClick={() => loginHandler(true)}>log in as artist</Button><Button onClick={() => loginHandler(false)}>log in as user</Button></>
    // 4: already registered
    if (displayStage === 4) return <><div>You are already registered, please log in:</div><Button onClick={() => setDisplayStage(3)}>click here to log in</Button></>
    //7: registration failed
    if (displayStage === 5) return <div>Registration failed for unknown reasons. Please try again and contact us if it still doesn't work</div>
    // 5 successful registration
    if (displayStage === 6) return <div>Thank you for registering!</div>
    // 6: successful login
    if (displayStage === 7) return <div>You are now logged in</div>
  }

  return (
    <Modal
      visible={isVisible}
      onOk={submitUser}
      onCancel={onCancel}
      footer={displayStage > 5 && (<Button onClick={onCancel}>start browsing!</Button>)}
    >
      {displayContent()}
    </Modal>
  )
}

export default LoginModal
