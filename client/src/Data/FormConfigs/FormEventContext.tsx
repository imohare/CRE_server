import { createContext, useState } from 'react';
import { IEventFormContext, ContextProps, IEventInfo } from '../DataTypes/Forms/FormEventContextType';

export const EventFormContext = createContext<IEventFormContext>(null!);

export const EventFormContextProvider = ({ children }: ContextProps) => {
  
  const [eventInfo, setEventInfo] = useState<IEventInfo>({});
  
  const eventConfig = [
    {
      attr: {
        name: 'name',
        key: 'event_name',
        label: 'Name',
      }, 
      rules: [
        {
          required: true,
          message: 'Please enter a name for your event',
        },
      ],
      type: 'text'
    },
    {
      attr: {
        name: 'adddress',
        key: 'event_address',
        label: 'Address',
      }, 
      rules: [
        {
          required: true,
          message: 'Please enter an address for your event',
        },
      ],
      type: 'text'
    },
    {
      attr: {
        name: 'date',
        key: 'event_date',
        label: 'Date',
      }, 
      rules: [
        {
          required: true,
          type: 'date-time',
          message: 'Please select when your event was created',
        },
      ],
      type: 'date-time'
    },
    {
      attr: {
        name: 'description',
        key: 'event_location',
        label: 'Description',
      },
      rules: [
        {
          required: false,
        },
      ],
      type: 'text'
    },
    {
      attr: {
        name: 'number_of_tokens',
        key: 'event_number_of_tokens',
        label: '# of Event NFTs',
      },
      rules: [
        {
          required: true,
          type: 'number',
          message: 'You must chose a number of NFTs for your event',
        },
      ],
      type: 'number'
    },
    {
      attr: {
        name: 'tokens_image',
        key: 'event_tokens_image',
        label: 'NFT image',
      },
      rules: [
        {
          required: true,
          type: 'string',
          message: 'You must chose an imgage for your NFT',
        },
      ],
      type: 'string'
    },
    {
      attr: {
        name: 'tokens_value',
        key: 'event_tokens_value',
        label: 'NFT value',
      },
      rules: [
        {
          required: true,
          type: 'number',
          message: 'You must select a value for your NFT',
        },
      ],
      type: 'number'
    },
  ];
  
  //wrap the formtemplate in the parent component
  return (
    <EventFormContext.Provider value={{ eventConfig, eventInfo, setEventInfo }}>
      { children }
    </EventFormContext.Provider>
  ); 
}