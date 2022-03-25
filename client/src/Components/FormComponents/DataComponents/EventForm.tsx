import { useState, useContext, useEffect } from 'react';
//antd imports
import { Button } from 'antd';
//components
import FormTemplate from '../../ReuseableComponents/FormTemplate';
//types
import { IEventInfo } from '../../../Data/DataTypes/Forms/FormEventContextType'
//data
import { EventFormContext } from '../../../Data/FormConfigs/FormEventContext';
import { UserContext } from '../../../Data/UserContext';
import { createEvent } from '../../../Services/Event';
//helperfunction from tools
//styling

//onCancel toggles setVisible in parent component

const EventForm = () => {

  const {
    eventConfig,
    eventInfo,
    setEventInfo,
  } = useContext(EventFormContext)

  const registerFormSubmit = (values: any) => {
    setEventInfo({ ...values })
  }

  const registerHandler = async (info:any) => {
    await createEvent.apply(null, info)
  }

  return (
    <>
      <FormTemplate onFormSubmit={registerFormSubmit} config={eventConfig} />
      <Button onClick={registerHandler}>Upload Event</Button>
    </>
  )
}

export default EventForm
