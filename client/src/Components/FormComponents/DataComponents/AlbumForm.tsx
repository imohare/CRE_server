import { useState, useContext, useEffect } from 'react';

import styled from 'styled-components';
//antd imports
import { Modal, Button, Card, DatePicker } from 'antd';
import moment from 'moment';
//components
import FormTemplate from '../../ReuseableComponents/FormTemplate';
//types
import { IAlbumInfo } from '../../../Data/DataTypes/Forms/FormAlbumContextType'
//data
import { AlbumFormContext } from '../../../Data/FormConfigs/FormAlbumContext';
import { UserContext } from '../../../Data/UserContext';
import { createAlbum } from '../../../Services/Album';
//helperfunction from tools
//styling


//onCancel toggles setVisible in parent component

const AlbumForm = () => {

  const {
    albumConfig,
    albumInfo,
    setAlbumInfo,
  } = useContext(AlbumFormContext)

  // useEffect(() => {
  //   displayContent()
  // }, []);

  

  const registerFormSubmit = (values: any) => {
    setAlbumInfo({ ...values })
    console.log("values", albumInfo, values.date._d)


  }

  // const registerHandler = async (info:any) => {
  //   await createAlbum.apply(null, info)
  // }

  // const submitAlbum = () => {
  //   console.log('album submitted')
  // }

  // const displayContent = () => {
  //   <>
  //     <FormTemplate onFormSubmit={registerFormSubmit} config={albumConfig} />
  //     <Button onClick={registerHandler}>upload album</Button>
  //   </>
  // }

  const LighterFormTemplate = styled(FormTemplate)`
    background-color: #33468F;
  `

 
  return (
     
    <Card title="new album">
      <LighterFormTemplate onFormSubmit={registerFormSubmit} config={albumConfig} />
   </Card>
  )
}

export default AlbumForm
