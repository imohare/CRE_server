interface ContextProps {
  children: React.ReactNode;
}
interface IMerchandiseInfo {
  [key: string]: string | number | Date;
}
interface IAttributes {
  name: string;
  key: string;
  label: string;
}
interface IMerchandiseForm {
  [key: string]: string;
}
interface IRules {
  [key: string]: any;
}

interface IMerchandiseFormContext { 
  merchandiseInfo: IMerchandiseInfo;
  setMerchandiseInfo: React.Dispatch<React.SetStateAction<{[key:string]: any}>>;
  merchandiseConfig: {
    attr: IAttributes;
    rules: IRules[];
    type: string;
  }[];
}

export type { IMerchandiseFormContext, ContextProps, IMerchandiseInfo, IAttributes, IMerchandiseForm, IRules }