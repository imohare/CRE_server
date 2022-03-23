// import styled from 'styled-components';
// import {useState} from 'react'
// import {Button} from 'antd';
// import LoginModal from '../Components/FormComponents/DataComponents/LoginModal';
// import { FormContextProvider } from '../Data/FormConfigs/FormContext';
// import { setSelectionRange } from '@testing-library/user-event/dist/utils';



// const Header = styled.div`
// display: grid;
// width: 100%;
// height: 20rem;
// grid-template-rows: 3rem;
// grid-template-columns: repeat(12 1fr);

// @media screen and (min-width: 768px) {
//   padding: 1rem 2rem;

// }
// @media screen and (min-width: 1024px) {
//   padding: 0 10%;

// }
// @media screen and (min-width: 1400px) {
//   padding: 0 15%;
// }
// `



// const HeaderPublic = () => {



//   const [isVisible, setIsVisible] = useState(false);

//   const toggleLogin = (startStage) => {
//     setStage(startStage)
//      setIsVisible(prevVisibility => !prevVisibility)
//   }





//   return (
//     <Header>
// <FormContextProvider>
//       {
//         isVisible
//         ?  <LoginModal onCancel={toggleLogin} isVisible={isVisible}  />
//         : null
//         }
//       </FormContextProvider>
//       <Button type="primary" onClick={ ()=>toggleLogin(0) }>sign up</Button>
//       <Button type="primary" onClick={ ()=>toggleLogin(4) }>login</Button>
// </Header>
//   )
// }

// export default HeaderPublic
export { }