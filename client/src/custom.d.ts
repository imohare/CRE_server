import 'styled-components';

declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";


declare module 'styled-components' {
  export interface DefaultTheme {
     fontColor: string;
    background: string;
    highlight: string;
    border: string;
  }
}