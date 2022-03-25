import { useState, useContext, useEffect } from 'react';
//antd imports
import { Modal, Button } from 'antd';
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
    console.log("values", values)
    //setAlbumInfo({ ...values })
  }

  const registerHandler = async (info:any) => {
    await createAlbum.apply(null, info)
  }

  const submitAlbum = () => {
    console.log('album submitted')
  }

  // const displayContent = () => {
  //   <>
  //     <FormTemplate onFormSubmit={registerFormSubmit} config={albumConfig} />
  //     <Button onClick={registerHandler}>upload album</Button>
  //   </>
  // }

  return (
   <>
      <FormTemplate onFormSubmit={registerFormSubmit} config={albumConfig} />
      <Button onClick={registerHandler}>Upload Album</Button>
   </>
  )
}

export default AlbumForm
