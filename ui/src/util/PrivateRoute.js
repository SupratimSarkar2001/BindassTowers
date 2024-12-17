import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router';
import axiosInstance from './axiosInstance';
import { Spin } from "antd";
import { fullPageBackgroundFlex } from '../styles/styles';

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const validateToken = async () => {
      try {
        await axiosInstance.post('/auth/verify-token'); 
        setIsAuthenticated(true);
      } catch {
        setIsAuthenticated(false);
      }
    };
    validateToken();
  }, []);

  if (isAuthenticated === null) return <div style={fullPageBackgroundFlex}><Spin size="large"/></div>;

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
