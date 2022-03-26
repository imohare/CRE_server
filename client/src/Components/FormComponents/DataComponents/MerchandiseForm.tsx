import { useState } from 'react';
//antd imports
import { Button, Card,  Form, Input, InputNumber, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import moment from 'moment';
//components
import FormTemplate from '../../ReuseableComponents/FormTemplate';
//types
import { IMerchandiseInfo } from '../../../Data/DataTypes/Forms/FormMerchandiseContextType'
//data
import { UserContext } from '../../../Data/UserContext';
import { createMerchandise } from '../../../Services/Merchandise';
//styling
import { motion } from 'framer-motion'
import {StaggerParentVariant} from '../../../Styles/animations/formAnimations';
import { type } from '@testing-library/user-event/dist/type';


interface IFile {
  [key: string]: any;
}

interface IFileProps {
  file: IFile;
}

interface IProps {
  onSubmitForm: (res: any)=>void;
}



const MerchandiseForm = ({ onSubmitForm }: IProps) => {

  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [type, setType] = useState('')



  ////////////////////////////////////////////////////////////
// // form submit // //
const formatResult = (res:any) => {
  const { name, description, number_of_tokens, tokens_value } = res;
  const formattedResult = {
    name: name,
    type: type,
    description: description,
    number_of_tokens: number_of_tokens,
    tokens_value: tokens_value,
  }
  console.log( formattedResult)
  onSubmitForm(formattedResult)
}

  
  
  
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





  
  return (
    <Card title="Merchandise">
      <Form
        onFinish={(values: any) => { 
          formatResult(values)
        }}
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
            rules={[{ required: true, message: 'You need to enter a name for the merchandise' }]}>
            <Input></Input>
          </Form.Item>
{/* ///////////////tried adding select tag, didn't work. maybe later////////////////// */}
          <Form.Item
            name='type'
            label='Type'
            rules={[{ required: true, message: 'Please select a type' }]}>
            <Input></Input>
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
              message: 'You must chose a number of NFTs for your merch'
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
              message: 'You must chose a number of NFTs for your merch'
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

export default MerchandiseForm
