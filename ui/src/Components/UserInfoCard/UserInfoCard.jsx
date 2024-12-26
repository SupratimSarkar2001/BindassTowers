import React, { useEffect, useState } from 'react';
import { Card, Typography, Descriptions, Spin, Alert, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import axiosInstance from '../../util/axiosInstance';

const { Title, Text } = Typography;

const UserInfoCard = ({ _id }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/user/id/${_id}`);
        setUserInfo(response.data.data);
        setError(null);
      } catch (err) {
        setError('Unable to fetch user information.');
      } finally {
        setLoading(false);
      }
    };

    if (_id) {
      fetchUserInfo();
    }
  }, [_id]);

  if (loading) {
    return <Spin tip="Loading..." />;
  }

  if (error) {
    return <Alert message="Error" description={error} type="error" showIcon />;
  }

  if (!userInfo) {
    return <Alert message="No user information available." type="info" showIcon />;
  }

  return (
    <Card
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Title level={4} style={{ margin: 0 }}>
            Hey there!!
          </Title>
          <Button 
            type="primary" 
            icon={<EditOutlined />} 
            // onClick={() => onEdit(userInfo)}
          >
          </Button>
        </div>
      }
      bordered
    >
      <Descriptions column={1}>
        <Descriptions.Item label="First Name">
          <Text>{userInfo.firstName}</Text>
        </Descriptions.Item>
        <Descriptions.Item label="Last Name">
          <Text>{userInfo.lastName}</Text>
        </Descriptions.Item>
        <Descriptions.Item label="Email">
          <Text>{userInfo.email}</Text>
        </Descriptions.Item>
        <Descriptions.Item label="Role">
          <Text>{userInfo.role}</Text>
        </Descriptions.Item>
        <Descriptions.Item label="Contact">
          <Text>{userInfo.mobileNumber}</Text>
        </Descriptions.Item>
        <Descriptions.Item label="Age">
          <Text>{userInfo.age}</Text>
        </Descriptions.Item>
        <Descriptions.Item label="City">
          <Text>{userInfo.city}</Text>
        </Descriptions.Item>
        <Descriptions.Item label="State">
          <Text>{userInfo.state}</Text>
        </Descriptions.Item>
        <Descriptions.Item label="Town">
          <Text>{userInfo.town}</Text>
        </Descriptions.Item>
        <Descriptions.Item label="Pin Code">
          <Text>{userInfo.pinCode}</Text>
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default UserInfoCard;
