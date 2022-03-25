interface ContextProps {
  children: React.ReactNode;
}
interface IEventInfo {
  [key: string]: string | number | Date;
}
interface IAttributes {
  name: string;
  key: string;
  label: string;
}
interface IEventForm {
  [key: string]: string;
}
interface IRules {
  [key: string]: any;
}

interface IEventFormContext { 
  eventInfo: IEventInfo;
  setEventInfo: React.Dispatch<React.SetStateAction<{[key:string]: any}>>;
  eventConfig: {
    attr: IAttributes;
    rules: IRules[];
    type: string;
  }[];
}

export type { IEventFormContext, ContextProps, IEventInfo, IAttributes, IEventForm, IRules }