interface ContextProps {
  children: React.ReactNode;
}
interface IAlbumInfo {
  [key: string]: string | number;
}
interface IAttributes {
  name: string;
  key: string;
  label: string;
}
interface IAlbumForm {
  [key: string]: string;
}
interface IRules {
  [key: string]: any;
}

interface IAlbumFormContext { 
  albumInfo: IAlbumInfo;
  setAlbumInfo: React.Dispatch<React.SetStateAction<{[key:string]: any}>>;
  albumConfig: {
    attr: IAttributes;
    rules: IRules[];
    type: string;
  }[];
}

export type { IAlbumFormContext, ContextProps, IAlbumInfo, IAttributes, IAlbumForm, IRules }