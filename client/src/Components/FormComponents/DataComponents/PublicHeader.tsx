
import { useState } from 'react';
import { Link } from 'react-router-dom';
//data
import { FormContextProvider } from 'Data/FormConfigs/FormContext'
//components
import LoginModal from 'Components/FormComponents/DataComponents/LoginModal';
//styles
import StyledHeader from 'Styles/styledComponents/StyledHeader';
import StyledButton from 'Styles/styledComponents/StyledButton';
import AnimatedH1 from 'Styles/animations/AnimatedH1';


//antd imports

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
        <div className='login'>
          <div>

          </div>
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
                <StyledButton type="primary" onClick={toggleRegister}>log in</StyledButton>
              </div>
            </div>
          </FormContextProvider>
                  <AnimatedH1>Just browsing</AnimatedH1>
        </StyledHeader>

  )
}

export default PublicHeader;