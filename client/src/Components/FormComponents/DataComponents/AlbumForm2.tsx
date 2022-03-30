import { useContext, useState } from 'react';
import { storage } from '../../../Firebase/index'
import { Input, Label } from '@rebass/forms'
import { Text, Button } from "rebass";
import { createAlbum } from 'Services/Album';
import moment from 'moment';
import { UserContext } from 'Data/UserContext';
import DraggableCard from 'Components/ReuseableComponents/DraggableCard';

function AlbumInputBar(props: any) {

  const [image, setImage] = useState();
  const [name, setName] = useState('');
  const [year, setYear] = useState(new Date());
  const [description, setDescription] = useState('');
  const [tokensNumber, setTokensNumber] = useState(0);
  const [tokensValue, setTokensValue] = useState(0);
  const [progress, setProgress] = useState(0);
  const { currentId } = useContext(UserContext);
  const [artistId, setArtistId] = useState(currentId);

  const addAlbum = async (name: string, year: Date, description: string, tokensNumber: number, img_url: string, tokensValue: number, artistId: number) => {
    const newAlbums = props.albums.slice();
    const response = await createAlbum({ name, year, description, tokensNumber, img_url, tokensValue, artistId })
    newAlbums.push(response)
    props.setAlbums(newAlbums); // need to import this from app

    // await createAlbum({ name, year, description, tokensNumber, img_url, tokensValue, artistId })

  }

  const handleChange = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
  }

  const handleSubmit = (evt: any) => {
    // @ts-ignore
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      (snapshot: { bytesTransferred: number; totalBytes: number; }) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(progress)
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          // @ts-ignore
          .child(image.name)
          .getDownloadURL()
          .then((img: any) => {
            addAlbum(name, year, description, tokensNumber, img, tokensValue, artistId);
          })
      }
    )
    evt.preventDefault();
    setName((name: string) => name = '');
    setYear((year: Date) => year = new Date());
    setDescription((description: string) => description = '');
    setTokensNumber((tokensNumber: number) => tokensNumber = 0);
    setTokensValue((tokensValue: number) => tokensValue = 0);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <Label color="#c5c5c5">Album Name</Label>
        <Input type="string" color="#c5c5c5" name="name" value={name} placeholder="Please enter album name ..." onChange={(evt: { target: { value: any; }; }) => setName(evt.target.value)} required />
        <br />


        <Label color="#c5c5c5">Release Date</Label>
        {/* @ts-ignore */}
        <input type="datetime-local" name="year" color="#c5c5c5" value={year} onChange={(evt: { target: { value: any; }; }) => setYear(evt.target.value)} required />
        <br /> <br />

        <Label color="#c5c5c5" >Description of the Album</Label>
        <Input type="string" color="#c5c5c5" name="description" placeholder="Please enter a description of the Album ..." value={description} onChange={(evt: { target: { value: any; }; }) => setDescription(evt.target.value)} required />
        <br />

        <Label color="#c5c5c5" >Number of NFT's Available</Label>
        <Input type="number" name="tokensNumber" color="#c5c5c5" value={tokensNumber} onChange={(evt: { target: { value: string; }; }) => setTokensNumber(parseInt(evt.target.value))} required />
        <br />

        <Label color="#c5c5c5"> NFT's value</Label>
        <Input type="number" name="tokensValue" color="#c5c5c5" value={tokensValue} onChange={(evt: { target: { value: string; }; }) => setTokensValue(parseInt(evt.target.value))} required />
        <br />

        <Label color="#c5c5c5"> Upload Your NFT's cover picture</Label>
        <Input type="file" onChange={handleChange} color="#c5c5c5" />
        <progress value={progress} max="100" />
        <br /> <br />

        <Button backgroundColor="#FFF" mr={2} type="submit" color="#000"> upload your NFTs </Button>
      </form>
    </div>
  )
}

export default AlbumInputBar;
