import { useState, useContext, useEffect } from 'react';
//antd imports
import { Button } from 'antd';
//components
import FormTemplate from '../../ReuseableComponents/FormTemplate';
//types
import { IMerchandiseInfo } from '../../../Data/DataTypes/Forms/FormMerchandiseContextType'
//data
import { MerchandiseFormContext } from '../../../Data/FormConfigs/FormMerchandiseContext';
import { UserContext } from '../../../Data/UserContext';
import { createMerchandise } from '../../../Services/Merchandise';
//helperfunction from tools
//styling

//onCancel toggles setVisible in parent component

const MerchandiseForm = () => {

  const {
    merchandiseConfig,
    merchandiseInfo,
    setMerchandiseInfo,
  } = useContext(MerchandiseFormContext)

  // useEffect(() => {
  //   displayContent()
  // }, []);

  const registerFormSubmit = (values: any) => {
    setMerchandiseInfo({ ...values })
  }

  const registerHandler = async (info:any) => {
    await createMerchandise.apply(null, info)
  }

  const submitMerchandise = () => {
    console.log('merchandise submitted')
  }

  // const displayContent = () => {
  //   <>
  //     <FormTemplate onFormSubmit={registerFormSubmit} config={merchandiseConfig} />
  //     <Button onClick={registerHandler}>upload merchandise</Button>
  //   </>
  // }

  return (
   <>
      <FormTemplate onFormSubmit={registerFormSubmit} config={merchandiseConfig} />
      <Button onClick={registerHandler}>Upload Merchandise</Button>
   </>
  )
}

export default MerchandiseForm
