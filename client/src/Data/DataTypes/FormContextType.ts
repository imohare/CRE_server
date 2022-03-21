interface IAttributes {
  id: string;
  name: string;
  label: string;
}
interface IConsumerForm {
  [key: string]: any;
}

interface IFormContext { 
  consumerInfo: IConsumerForm;
  setConsumerInfo: React.Dispatch<React.SetStateAction<any>>;
  consumerConfig: {
    attr: IAttributes;
    required: boolean;
  }[];
}

export type { IFormContext };