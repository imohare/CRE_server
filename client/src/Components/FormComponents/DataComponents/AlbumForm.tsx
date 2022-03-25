import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
//antd imports
import { Modal, Button, Card, DatePicker, Form, Input, InputNumber } from 'antd';
import moment from 'moment';
//components
import FormTemplate from '../../ReuseableComponents/FormTemplate';
//types
import { IAlbumInfo } from '../../../Data/DataTypes/Forms/FormAlbumContextType'
//data
import { UserContext } from '../../../Data/UserContext';
import { createAlbum } from '../../../Services/Album';
//helperfunction from tools
//styling
import { motion } from 'framer-motion'
import {StaggerParentVariant} from '../../../Styles/animations/formAnimations';
import { truncate } from 'fs';



const AlbumForm = () => {

  // useEffect(() => {
  //   displayContent()
  // }, []);

  
  // const registerFormSubmit = (values: any) => {
  //   setAlbumInfo({ ...values })
  //   console.log("values", albumInfo, values.date._d)

  // }

  // const onChange = (date, dateString) => {
  //   console.log(date, dateString)
  // }

  // const registerHandler = async (info:any) => {
  //   await createAlbum.apply(null, info)
  // }

  // const submitAlbum = () => {
  //   console.log('album submitted')
  // }

  return (
     
    <Card title="new album">
          <Form
      labelCol={{
        span: 6
      }}
      wrapperCol={{
        span: 18
      }}
      autoComplete="on"
      onFinish={(values)=>{console.log(values)}}
      >
        <motion.div
          variants={StaggerParentVariant}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          

          <Form.Item name='name'
            key='album_name'
            label='Name'
            rules={[{ required: true, message: 'Please enter a name for your album' }]}>
            <Input></Input>
          </Form.Item>
          <Form.Item
          name='date'
          key='album_year'
          label='Date'
            rules={[{ required: true, message: 'Please select when your album was created' }]}
          >
              <DatePicker onChange={(date, dateString)=>{console.log(date, dateString)}} picker="month" />
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
