import React from 'react'
import ConfigForm from '../../../Components/Forms/ConfigForm'
import { AddNewPropertyFormConfig } from '../../../Components/Forms/config'
import { fullPageCardContainer } from '../../../styles/styles'
import { message } from 'antd'
import axiosInstance from '../../../util/axiosInstance'

const AddNewProperty = () => {
 const [messageApi, contextHolder] = message.useMessage();
 const onFinish = async (values) => {
  try {
    const response = await axiosInstance.post("/property/create", values);
    messageApi.success("Property Added Successfully");
  }
  catch (error) {
    messageApi.error(`Property Add Failed: ${error.message}`);
  }
};
 return (
  <>
  {contextHolder}
   <div
     style={fullPageCardContainer}
   >
     <h1>Add New Property</h1>
    <div
    >
     <ConfigForm config={AddNewPropertyFormConfig} onFinish={onFinish}/>
    </div>
   </div>
  </>

 )
}

export default AddNewProperty
