//react
import { useState, useContext, useEffect } from 'react';

//data
import { FormContext } from '../../../Data/FormConfigs/FormContext';
import { getArtistById } from '../../../Services/Artist';
import { getAllAlbumsOfArtist } from '../../../Services/Album';
import { getEventsByArtistId } from '../../../Services/Event';

//styling

//onCancel toggles setVisible in parent component
interface ModalProps { 
  onCancel: any; 
  isVisible: boolean;
};

const ArtistModal = ({ onCancel, isVisible }: ModalProps) => {
  

  return ({}

  )
}

export default ArtistModal

export { }