//react
import { useState } from 'react';
//antd imports
import { Form, Button, Input, InputNumber, DatePicker, Upload } from 'antd';
//components
//styling
import { motion, } from 'framer-motion';
import { StaggerParentVariant, StaggerItemVariant } from '../../Styles/animations/formAnimations';
import moment from 'moment';


//final state: mapping through formfields for configuration object that 
//is inupt in props

interface Props { 
  config: { [key: string]: any }[] | null;
  onFormSubmit: (values: any)=>void;
}

const FormTemplate = ({ config, onFormSubmit }: Props) => {

  const onFinish = (values: any) => {
    
    onFormSubmit(values)
  }

  const [dateTime, setDateTime] = useState('');
  
  
  const formField = (type: string) => {

     switch (type) {
      case ('text'): return (<Input></Input>);
      case ('number'): return (<InputNumber></InputNumber>);
      case ('date'): return (<DatePicker
         format="YYYY-MM-DD HH:mm"
         showTime={{ defaultValue: moment('12:00PM', 'HH:mm') }}
         inputReadOnly
       >
      </DatePicker>
        );
      case ('file'): return (<Upload></Upload>);
    }
  }
  
  return config ? (
    <Form
      labelCol={{
        span: 6
      }}
      wrapperCol={{
        span: 18
      }}
      autoComplete="on"
      onFinish={onFinish}
     
    >
      <motion.div
        variants={StaggerParentVariant}
        initial="hidden"
        animate="show"
        exit="exit"
      >
      {config.map(item => {
        const { type, attr } = item;
        const { rules } = item;
        return (

          <motion.div
            variants={StaggerItemVariant}
          >
          <Form.Item {...attr} rules={rules}>
            {
              formField(type)
            }
            </Form.Item>
            </motion.div>
        )
      })
        }
        <motion.div>
      <Form.Item>
        <Button type="primary" htmlType="submit">submit</Button>
          </Form.Item>
          </motion.div>
        </motion.div>
   </Form>
  ) 
  : (<div>no configuration object available</div>)
}

export default FormTemplate