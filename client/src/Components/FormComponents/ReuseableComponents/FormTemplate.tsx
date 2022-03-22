//react
//antd imports
import { Form, Button, Input, InputNumber, DatePicker } from 'antd';
//components
//styling
import { motion, } from 'framer-motion';
import { StaggerParentVariant, StaggerItemVariant } from '../../../Styles/animations/formAnimations';

//final state: mapping through formfields for configuration object that 
//is inupt in props

interface Props { 
  config: { [key: string]: any }[] | null;
}

const FormTemplate = ({ config }: Props) => {
  const onFinish = (values: any) => {
    console.log('on finish working')
    console.log(values)
  }
  const formField = (type: string) => {
    switch (type) {
      case ('text'): return (<Input></Input>);
      case ('number'): return (<InputNumber></InputNumber>)
      case ('date'): return (<DatePicker> {/*date is inside the return value _d: Date*/} </DatePicker>)
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
      onValuesChange={(changedValues, allValues) => {
        console.log(changedValues, 'allvalues', allValues)
      }}
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