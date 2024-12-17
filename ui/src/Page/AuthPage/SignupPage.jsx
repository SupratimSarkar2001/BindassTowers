import React from 'react'
import ConfigForm from '../../Components/Forms/ConfigForm'
import {SignUpFormConfig} from "../../Components/Forms/config"
import {fullPageBackgroundFlex, cardContainer} from '../../styles/styles'
import { Button } from 'antd'
import { Link } from 'react-router'
const SignupPage = () => {

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
        <ConfigForm config={SignUpFormConfig}  onFinish={onFinish} columnLayout={2}/>
        <p>Already have an account?</p>
        <Link to="/login"><Button>Login</Button></Link>
      </div>
    </div>
  )
}

export default SignupPage
