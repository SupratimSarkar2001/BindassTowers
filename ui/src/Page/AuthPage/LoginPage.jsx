import React, { useState } from 'react'
import ConfigForm from '../../Components/Forms/ConfigForm'
import { LoginFormConfig } from "../../Components/Forms/config"
import { fullPageBackgroundFlex, cardContainer } from '../../styles/styles'
import { Button, message } from 'antd'
import { Link } from 'react-router'
import axiosInstance from '../../util/axiosInstance'
import { useNavigate } from 'react-router'
const LoginPage = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const onFinish = async (values) => {
    try {
      const response = await axiosInstance.post("/auth/login", values);
      localStorage.setItem('userInfo', JSON.stringify(response.data.data));
      messageApi.success("Login Successfully");
      navigate("/")
    }
    catch (error) {
      messageApi.error(`Login Failed: ${error.message}`);
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
          <ConfigForm config={LoginFormConfig} onFinish={onFinish} />
          <p>Don't have an account?</p>
          <Link to="/signup"><Button>Sign Up</Button></Link>
        </div>
      </div>
    </>
  )
}

export default LoginPage
