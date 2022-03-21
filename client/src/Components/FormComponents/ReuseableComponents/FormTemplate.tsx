//react
//antd imports
//components
//styling

//final state: mapping through formfields for configuration object that 
//is inupt in props

interface Props { 
  config: { [key: string]: any }[];
}

const FormTemplate = ({ config }: Props) => {
  return (
    <div>{ config[0].msg }</div>
  )
}

export default FormTemplate