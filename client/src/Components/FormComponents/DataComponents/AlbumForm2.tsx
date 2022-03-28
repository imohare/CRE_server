import { useState } from 'react';
import {storage} from '../../../Firebase/index'
import { Input } from '@rebass/forms'
import { Text } from "rebass";
import { createAlbum } from 'Services/Album';
import { Button } from "antd"

function AlbumInputBar (props: any) {

  const [image, setImage]= useState();
  const [name, setName] = useState('');
  const [year, setYear] = useState(new Date());
  const [description, setDescription] = useState('');
  const [tokensNumber, setTokensNumber] = useState(0);
  const [tokensValue, setTokensValue] = useState(0);
  const [progress, setProgress] = useState(0);
  const [artistId, setArtistId] = useState(1);

  const addAlbum = async (name: string, year: Date, description: string, tokensNumber: number, img_url: string, tokensValue: number, artistId: number) => {
    const newAlbums = props.albums.slice();
    const response = await createAlbum(name, year, description, tokensNumber, img_url, tokensValue, artistId)
    newAlbums.push(response)
    props.setAlbums(newAlbums); // need to import this from app
  }

  const handleChange = (e:any) => {
    const file = e.target.files[0];
    setImage(file);
  }

  const handleSubmit = (evt: any) => {
    // @ts-ignore
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      (snapshot: { bytesTransferred: number; totalBytes: number; }) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
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
            console.log(name, "name");
            console.log(year, "year"); // this needs to be turned into the correct format
            console.log(description, "description");
            console.log(tokensNumber, "tokensNumber");
            console.log(img, "img");
            console.log(tokensValue, "tokensValue");
            console.log(artistId, "artistId");
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
        <progress value={progress} max="100"/>
        <Input type="string" name="name" value={name} onChange={(evt: { target: { value: any; }; }) => setName(evt.target.value)} required></Input>
        <br />
        {/* @ts-ignore */}
        <Input type="date" name="year" value={year} onChange={(evt: { target: { value: any; }; }) => setYear(evt.target.value)} required></Input>
        <br />
        <Input type="string" name="description" value={description} onChange={(evt: { target: { value: any; }; }) => setDescription(evt.target.value)} required></Input>
        <br />
        <Input type="number" name="tokensNumber" value={tokensNumber} onChange={(evt: { target: { value: string; }; }) => setTokensNumber(parseInt(evt.target.value))} required></Input>
        <br />
        <Input type="number" name="tokensValue" value={tokensValue} onChange={(evt: { target: { value: string; }; }) => setTokensValue(parseInt(evt.target.value))} required></Input>
        <br />
        <Input type="file" onChange={handleChange} />
        <br />
        <Button color="#33e">
          <Text fontFamily='system-ui'>
            Upload
          </Text>
        </Button>
      </form>
    </div>
  )
}

export default AlbumInputBar;
