import React from 'react';
import { Carousel } from 'antd';
import {
  slideContentStyleOC,
  slideContentStyleProperty,
  slideContentStyleRenewal,
  slideContentStyleTask,
  slideContentText,
} from '../../styles/styles';

const WelcomeSlide = () => {
  return (
    <Carousel infinite={false} autoplay style={{ paddingRight: 24, borderRadius: 8 }}>
      <div>
        <div style={slideContentStyleTask}>
          <h3 style={slideContentText}>One Place for all your Task</h3>
          <p style={slideContentText}>Manage, track, and complete your tasks efficiently in one unified platform.</p>
        </div>
      </div>
      <div>
        <div style={slideContentStyleProperty}>
          <h3 style={slideContentText}>Property Registration</h3>
          <p style={slideContentText}>Simplify your property registration process with seamless online solutions.</p>
        </div>
      </div>
      <div>
        <div style={slideContentStyleOC}>
          <h3 style={slideContentText}>One Click Ownership Change</h3>
          <p style={slideContentText}>Transfer ownership effortlessly with just a single click.</p>
        </div>
      </div>
      <div>
        <div style={slideContentStyleRenewal}>
          <h3 style={slideContentText}>Hassle-free Rent Renewal</h3>
          <p style={slideContentText}>Renew your rental agreements without the usual paperwork or stress.</p>
        </div>
      </div>
    </Carousel>
  );
};

export default WelcomeSlide;
