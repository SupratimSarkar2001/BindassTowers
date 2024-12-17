import React from 'react'
import ConfigForm from '../../Components/Forms/ConfigForm'
import { SignUpFormConfig } from "../../Components/Forms/config"
import { fullPageBackgroundFlex, cardContainer } from '../../styles/styles'
import { Button, message } from 'antd'
import { Link } from 'react-router'
import { useNavigate } from 'react-router'
import axiosInstance from '../../util/axiosInstance'
const SignupPage = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const onFinish = async (values) => {
    console.log('Form Values: ', values);
    try {
      const response = await axiosInstance.post("/auth/signup", values);
      messageApi.success("Sign Up Successfully");
      setTimeout(()=>{
        navigate("/login")
      },500)
    }
    catch (error) {
      messageApi.error(`Sign Up Failed: ${error.message}`);
    }
  };
  return (
    <>
    {contextHolder}
      <div
        style={fullPageBackgroundFlex}
      >
        <div
          style={cardContainer}
        >
          <ConfigForm config={SignUpFormConfig} onFinish={onFinish} columnLayout={2} />
          <p>Already have an account?</p>
          <Link to="/login"><Button>Login</Button></Link>
        </div>
      </div>
    </>
  )
}

export default SignupPage
