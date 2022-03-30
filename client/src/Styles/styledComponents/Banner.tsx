import styled from 'styled-components';
import { globalVariables } from 'Styles/globalStyles';
import { TextSpan } from 'typescript';
import StyledBannerComponent from 'Styles/styledComponents/StyledBanner'


interface IProps {
  background: string;
  image: string;
  title: string;
}

const BannerComponent = ({ background, image, title }:IProps) => {
  

  return (
    <StyledBannerComponent background={background} image={ image}>
      <div className='background'>
        
        <div className='image'></div>¨
        
    </div>
    </StyledBannerComponent>
  )
}

export default BannerComponent;


// background='http://www.thewowstyle.com/wp-content/uploads/2015/03/flower-wallpaper-20.jpg' image="https://i.pinimg.com/736x/61/27/2e/61272ed635ebb3fffb8ebaf8ac00b2bb.jpg" 