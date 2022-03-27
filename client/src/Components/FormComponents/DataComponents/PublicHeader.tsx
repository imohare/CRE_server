
import { useState } from 'react';
//data
import { FormContextProvider } from '../../../Data/FormConfigs/FormContext'
//components
import LoginModal from '../../../Components/FormComponents/DataComponents/LoginModal';
//styles
import StyledHeader from '../../../Styles/styledComponents/StyledHeader';
import StyledButton from '../../../Styles/styledComponents/StyledButton';

//antd imports
import { Button, Card } from 'antd';



export const PublicHeader = () => {

  const [isRegister, setIsRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const toggleLogin = () => {
    setIsLogin(prev => !prev)
  }
  const toggleRegister = () => {
    setIsRegister(prev => !prev)
  }


  return (
    <StyledHeader>
          <FormContextProvider>
            <h1>Landing page</h1>
            <div className='login'>
              <div className='buttons'>
                {
                  isRegister
                    ? <LoginModal isVisible={isRegister} initialStage={3} onCancel={() => toggleRegister()} />
                    : null
                }
                <StyledButton type="primary" onClick={toggleLogin}>sign up</StyledButton>
                {
                  isLogin
                    ? <LoginModal isVisible={isLogin} initialStage={0} onCancel={() => toggleLogin()} />
                    : null
                }
                <StyledButton  type="primary" onClick={toggleRegister}>log in</StyledButton>
              </div>
            </div>
          </FormContextProvider>

        </StyledHeader>

  )
}

export default PublicHeader;