interface ContextProps {
  children: React.ReactNode;
}
interface IConsumerInfo {
  [key: string]: string;
}
interface IArtistInfo {
  [key: string]: string;
}

interface IAttributes {
  name: string;
  key: string;
  label: string;
}
interface IUserForm {
  [key: string]: string;
}
interface IRules {
  [key: string]: any;
}

interface IFormContext { 
  consumerInfo: IConsumerInfo;
  setConsumerInfo: React.Dispatch<React.SetStateAction<{[key:string]: any}>>;
  consumerConfig: {
    attr: IAttributes;
    rules: IRules[];
    type: string;
  }[];
  artistInfo: IUserForm;
  setArtistInfo: React.Dispatch<React.SetStateAction<{ [key: string]: any}>>

  artistConfig: {
    attr: IAttributes;
    rules: IRules[];
    type: string;
  }[];
}
export type { IFormContext, ContextProps, IConsumerInfo, IArtistInfo, IAttributes, IUserForm, IRules }