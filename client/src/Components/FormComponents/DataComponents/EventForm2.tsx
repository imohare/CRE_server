import { useState, useContext } from 'react';
import { storage } from '../../../Firebase/index'
import { Input, Label } from '@rebass/forms'
import { Text, Button } from "rebass";
import { createEvent } from 'Services/Event';
import { UserContext } from 'Data/UserContext';


function EventInputBar(props: any) {

  const [image, setImage] = useState();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [tokensNumber, setTokensNumber] = useState(0);
  const [tokensValue, setTokensValue] = useState(0);
  const [progress, setProgress] = useState(0);
  const { currentId } = useContext(UserContext);
  const [artistId, setArtistId] = useState(currentId);

  //import use context

  const addEvent = async (name: string, address: string, date: Date, description: string, tokensNumber: number, img_url: string, tokensValue: number, artistId: number) => {
    await createEvent({name, address, date, description, tokensNumber, img_url, tokensValue, artistId})
  }

  const handleChange = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
  }

  const handleSubmit = (evt: any) => {
    console.log("artistId", artistId);
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
            addEvent(name, address, date, description, tokensNumber, img, tokensValue, artistId);
          })
      }
    )
    evt.preventDefault();
    setName((name: string) => name = '');
    setDate((date: Date) => date = new Date());
    setDescription((description: string) => description = '');
    setTokensNumber((tokensNumber: number) => tokensNumber = 0);
    setTokensValue((tokensValue: number) => tokensValue = 0);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <br />

        <Label color="#c5c5c5">Event Name</Label>
        <Input type="string" name="name" color="#c5c5c5" value={name} onChange={(evt: { target: { value: any; }; }) => setName(evt.target.value)} required />
        <br />

        <Label color="#c5c5c5">Event Date</Label>
        {/* @ts-ignore */}
        <input type="datetime-local" name="date" color="#c5c5c5" value={date} onChange={(evt: { target: { value: any; }; }) => setDate(evt.target.value)} required />
        <br /> <br />

        <Label color="#c5c5c5">Event Address</Label>
        <Input type="string" name="address" color="#c5c5c5" value={address} onChange={(evt: { target: { value: any; }; }) => setAddress(evt.target.value)} required />
        <br />

        <Label color="#c5c5c5">Description</Label>
        <Input type="string" name="description" color="#c5c5c5" value={description} onChange={(evt: { target: { value: any; }; }) => setDescription(evt.target.value)} required />
        <br />

        <Label color="#c5c5c5">Number of Available NFT's </Label>
        <Input type="number" name="tokensNumber" color="#c5c5c5" value={tokensNumber} onChange={(evt: { target: { value: string; }; }) => setTokensNumber(parseInt(evt.target.value))} required />
        <br />

        <Label color="#c5c5c5">Value of the NFT</Label>
        <Input type="number" name="tokensValue" color="#c5c5c5" value={tokensValue} onChange={(evt: { target: { value: string; }; }) => setTokensValue(parseInt(evt.target.value))} required />
        <br />

        <Label color="#c5c5c5"> Upload Your NFT's cover picture</Label>
        <Input type="file" color="#c5c5c5" onChange={handleChange} />
        <progress value={progress} max="100" />
        <br /> <br />

        <Button backgroundColor="#FFF" mr={2}type="submit" color="#000"> upload your NFTs </Button>
      </form>
    </div>
  )
}

export default EventInputBar;
