import { useState, useContext, useEffect } from 'react';
//antd imports
import { Button, Card, DatePicker, Form, Input, InputNumber, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import moment from 'moment';
//components
import FormTemplate from '../../ReuseableComponents/FormTemplate';
//types
import { IEventInfo } from '../../../Data/DataTypes/Forms/FormEventContextType'
//data
import { EventFormContext } from '../../../Data/FormConfigs/FormEventContext';
import { UserContext } from '../../../Data/UserContext';
import { createEvent } from '../../../Services/Event';
//styling
import { motion } from 'framer-motion'
import {StaggerParentVariant} from '../../../Styles/animations/formAnimations';
import { AnyStyledComponent } from 'styled-components';
import { EndOfLineState } from 'typescript';
//onCancel toggles setVisible in parent component

interface IFile {
  [key: string]: any;
}
interface IFileProps {
  file: IFile;
}

interface IProps {
  onSubmitForm: (res: any)=>void;
}


/////////////////////////////////////////////////////////////////////

const EventForm = ({ onSubmitForm }: IProps ) => {

  const [date, setDate] = useState('');  
      // const [imageUrl, setImageUrl] = useState('');
  

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


  const handleChange = ({ file }: IFileProps) => {
   
  }

  // datacomponent sends data to the services directly and to the page component for rendering

  const formatResult = (res: any) => {
    const { name, address, tokens_value, number_of_tokens } = res;
    const formattedResult = {
      name: name,
      address: address,
      date: date,
      tokens_value: tokens_value,
      number_of_tokens: number_of_tokens,
      // tokens_image: imageUrl
    }
    onSubmitForm(formattedResult)
    
  }

  //allows only input of future dates

  const noPastEvents = (current:any) => {
    return current && current.valueOf() < Date.now()
  }

  return (
    <Card title="new Event">
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
            label='Event Name'
            rules={[{ required: true, message: 'Please enter a name for your event' }]}>
            <Input></Input>
          </Form.Item>
          <Form.Item
            name='address'
            label='Location'
            rules={[{ required: true, message: 'Please enter a location' }]}>
            <Input></Input>
          </Form.Item>

          <Form.Item
            name='date'
            label='Date'
            rules={[{
              required: true, message: 'Please enter a valid date',
            }]}
          >
            <DatePicker
              onChange={(date, dateString) => {
                setDate(moment(date).format("MMMM Do YYYY, h:mm:ss a"));     
              }}
              format="MMMM Do YYYY, h:mm a"
              showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
              disabledDate={noPastEvents}
            />
          </Form.Item>

          <Form.Item
            name='description'
            label='Description'>
            <Input></Input>
          </Form.Item>

          <Form.Item
            name='number_of_tokens'
            label='# of Event NFTs'
            rules={[{
              required: true,
              type: 'number',
              message: 'You must chose a number of nFTs for your event'
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
              message: 'You must chose a number of nFTs for your event'
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
                className="event-picture-upload"
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



export default EventForm
