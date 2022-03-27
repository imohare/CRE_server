import { useState } from 'react';
//antd imports
import { Button, Card, DatePicker, Form, Input, InputNumber, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import moment from 'moment';
//components
//types
import { IAlbum } from '../../../Data/DataTypes'
//data
import { createAlbum } from '../../../Services/Album';
//helperfunction from tools
//styling
import { motion } from 'framer-motion'
import {StaggerParentVariant} from '../../../Styles/animations/formAnimations';
import { RcFile } from 'antd/lib/upload';


//firebase
// import { storage } from '../../../Firebase';


// interface IExpectedResponse {
//   name: String;
//   date: object;
//   description: String;
//   number_of_tokens: Number;
//   tokens_value: Number;
// }

interface IFile {
  [key: string]: any;
}

interface IFileProps {
  file: IFile;
}

interface IProps {
  onSubmitForm: (res: any)=>void;
}
  

const AlbumForm = ({ onSubmitForm }: IProps) => {
  
  const [date, setDate] = useState('');

  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);






  //////////////////////////////////////////////////////////////
  // // image upload // //

  const onPreview = async (file: IFile) => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow && imgWindow.document.write(image.outerHTML);
  };


  const handleChange = ({ file }:IFileProps ) => {
    console.log('file to upload', file)
    // const storageRef = storage.ref(`album/image/${file.name}`)
    
  
  }




////////////////////////////////////////////////////////////
// // form submit // //
  const formatResult = (res:any) => {
    const { name, description, number_of_tokens, tokens_value } = res;
    const formattedResult = {
      name: name,
      description: description,
      number_of_tokens: number_of_tokens,
      tokens_value: tokens_value,
      year: date
    }
    console.log('formatted result that gets sent to api ', formattedResult)
    return formattedResult;
  }

  const formSubmit = async (values: IAlbum) => {
    const formattedResults = formatResult(values);
    console.log(formattedResults);
    // const eventInDB = await createAlbum(formattedResults, currentId);
    // onSubmitForm(eventInDB)
  }
  

  return (
    <Card title="new album">
      <Form
        onFinish={formSubmit}
      labelCol={{
        span: 6
      }}
      wrapperCol={{
        span: 18
      }}
        autoComplete="on"
      >
        <motion.div
          variants={StaggerParentVariant}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Form.Item
            name='name'
            label='Name'
            rules={[{ required: true, message: 'Please enter a name for your album' }]}>
            <Input></Input>
          </Form.Item>

          <Form.Item
          name='date'
          label='Date'
            rules={[{ required: true, message: 'Please select when your album was created' }]}
          >
            <DatePicker
              onChange={(date, dateString) => {
                setDate(moment(date).format('MMMM Do YYYY, h:mm:ss a'));     
              }} picker="month" />
          </Form.Item>

          <Form.Item
            name='description'
            label='Description'>
            <Input></Input>
          </Form.Item>

          <Form.Item
            name='number_of_tokens'
            label='# of Album NFTs'
            rules={[{
              required: true,
              type: 'number',
              message: 'You must chose a number of nFTs for your album'
            }]}
          >
            <InputNumber></InputNumber>
            </Form.Item>
          <Form.Item
            name='tokens_value'
            label='NFT value'
            rules={[{
              required: true,
              type: 'number',
              message: 'You must chose a number of nFTs for your album'
            }]}
          >
            <InputNumber></InputNumber>
          </Form.Item>
          <Form.Item>
            <ImgCrop>
              <Upload
                // action={(file: RcFile): Promise<string> => {
                  
                //  }}
                action="gs://cre-6cbea.appspot.com"
                listType="picture-card"
                className="album-picture-upload"
                showUploadList={false}   
                onChange={handleChange}
                onPreview={onPreview}
              >

              </Upload> 
              </ImgCrop>  
            </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">submit</Button>
          </Form.Item>
          </motion.div>
        </Form>
   </Card>
  )
}

export default AlbumForm
