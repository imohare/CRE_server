interface IAttributes {
  id: string;
  name: string;
  key: string;
  label: string;
}
interface IConsumerForm {
  [key: string]: string;
}
interface IRules {
  [key: string]: any;
}

interface IFormContext { 
  consumerInfo: IConsumerForm;
  setConsumerInfo: React.Dispatch<React.SetStateAction<any>>;
  consumerConfig: {
    attr: IAttributes;
    rules: IRules[];
    type: string;
  }[];
  artistConfig: {
    attr: IAttributes;
    rules: IRules[];
    type: string;
  }[];
}

export type { IFormContext };