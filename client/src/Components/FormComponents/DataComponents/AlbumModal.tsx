import { useState, useContext, useEffect } from 'react';
//antd imports
import { Modal, Button } from 'antd';
//components
import FormTemplate from '../../ReuseableComponents/FormTemplate';
//types
import { IAlbumInfo } from '../../../Data/DataTypes/FormAlbumContextType'
//data
import { AlbumFormContext } from '../../../Data/FormConfigs/FormAlbumContext';
import { UserContext } from '../../../Data/UserContext';
import { createAlbum } from '../../../Services/Album';
//helperfunction from tools
//styling

//onCancel toggles setVisible in parent component
interface ModalProps {
  isVisible: boolean;
  onCancel: any;
};

const AlbumModal = ({ isVisible, onCancel }: ModalProps) => {

  const {
    albumConfig,
    albumInfo,
    setAlbumInfo,
  } = useContext(AlbumFormContext)

  useEffect(() => {
    displayContent()
  }, []);

  const registerFormSubmit = (values: any) => {
    setAlbumInfo({ ...values })
  }

  const registerHandler = async (info) => {
    await createAlbum(...info)
  }

  const submitAlbum = () => {
    console.log('album submitted')
  }

  const displayContent = () => {
    <>
      <FormTemplate onFormSubmit={registerFormSubmit} config={albumConfig} />
      <Button onClick={registerHandler}>upload album</Button>
    </>
  }

  return (
    <Modal visible={isVisible} onOk={submitAlbum} onCancel={onCancel}>
      {displayContent()}
    </Modal>
  )
}

export default AlbumModal
