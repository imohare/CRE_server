import { useState, useContext, useEffect } from 'react';
import styled, { AnyStyledComponent } from 'styled-components';
//antd imports
import { Modal, Button, Card, DatePicker, Form, Input, InputNumber, Upload } from 'antd';
import moment from 'moment';
//components
import FormTemplate from '../../ReuseableComponents/FormTemplate';
//types
import { IAlbum } from '../../../Data/DataTypes'
//data
import { UserContext } from '../../../Data/UserContext';
import { createAlbum } from '../../../Services/Album';
//helperfunction from tools
//styling
import { motion } from 'framer-motion'
import {StaggerParentVariant} from '../../../Styles/animations/formAnimations';


// interface IExpectedResponse {
//   name: String;
//   date: object;
//   description: String;
//   number_of_tokens: Number;
//   tokens_value: Number;
// }

interface IProps {
  onSubmitForm: (res: any)=>void;
}
  

const AlbumForm = ({ onSubmitForm }: IProps) => {
  
  const [date, setDate] = useState('');

  const [image, setImage] = useState(null);

  
  const formatResult = (res:any) => {
    const { name, description, number_of_tokens, tokens_value } = res;
    const result = {
      name: name,
      description: description,
      number_of_tokens: number_of_tokens,
      tokens_value: tokens_value,
      date: date
    }
    onSubmitForm(result)
}

  return (
     
    <Card title="new album">
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
          <Form.Item name='name'
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
              setDate(moment(date).format('MMMM Do YYYY, h:mm:ss a'))      
              }} picker="month" />
          </Form.Item>

          <Form.Item name='description'
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
            <Upload>

            </Upload>
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
