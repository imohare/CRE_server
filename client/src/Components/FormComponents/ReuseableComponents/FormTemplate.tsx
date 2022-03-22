//react
//antd imports
import { Form, Input } from 'antd';
//components
//styling

//final state: mapping through formfields for configuration object that 
//is inupt in props

interface Props { 
  config: { [key: string]: any }[] | null;
}

const FormTemplate = ({ config }: Props) => {
  return config ? (
    <Form>
      {config.map(item => (
        <Form.Item {...item.attr}>
          <Input></Input>
        </Form.Item>
      ))
      
      }
   </Form>
  ) 
  : (<div>nope</div>)
}

export default FormTemplate