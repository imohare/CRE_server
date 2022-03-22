//react
//antd imports
import { Form, Button, Input, InputNumber, Cascader } from 'antd';
import { isNullishCoalesce } from 'typescript';
//components
//styling

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
      case ('text'): {
        return (<Input></Input>)
      }
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

      {config.map(item => {
        const { type, attr } = item;
        const { rules } = item;
        return (
          <Form.Item {...attr} rules={rules}>
            {
              formField(type)
            }
          
          </Form.Item>
        )
      })
      }
      <Form.Item>
        <Button type="primary" htmlType="submit">submit</Button>
      </Form.Item>
   </Form>
  ) 
  : (<div>no configuration object available</div>)
}

export default FormTemplate