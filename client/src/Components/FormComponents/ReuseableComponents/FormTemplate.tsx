//react
//antd imports
//components
//styling

//final state: mapping through formfields for configuration object that 
//is inupt in props

interface Props { 
  config: { [key: string]: any }[] | null;
}

const FormTemplate = ({ config }: Props) => {
 return config ? (
    <div>{ config[0].required ? <p>field is required</p> : <p>you dumbo!</p> }</div>
  ) 
  : (<div>nope</div>)
}

export default FormTemplate