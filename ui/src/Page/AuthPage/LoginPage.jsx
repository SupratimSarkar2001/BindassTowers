import React from 'react'
import ConfigForm from '../../Components/Forms/ConfigForm'
import {LoginFormConfig} from "../../Components/Forms/config"
import {fullPageBackgroundFlex, cardContainer} from '../../styles/styles'
import { Button } from 'antd'
import { Link } from 'react-router'
const LoginPage = () => {

  const onFinish = (values) => {
    console.log('Form Values: ', values);
    // TODO: Make POST request
  };
  return (
    <div
      style={fullPageBackgroundFlex}
    >
       <div
        style={cardContainer}
      >
        <ConfigForm config={LoginFormConfig}  onFinish={onFinish}/>
        <p>Don't have an account?</p>
        <Link to="/signup"><Button>Sign Up</Button></Link>
      </div>
    </div>
  )
}

export default LoginPage
