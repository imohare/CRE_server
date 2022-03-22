import { ReactHTMLElement } from "react";

interface IFormContext { 
  consumerInfo: {
    [key: string]: any;
  } 
  setConsumerInfo: React.Dispatch<React.SetStateAction<object>>
  consumerConfig
}