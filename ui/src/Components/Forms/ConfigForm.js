import React from 'react';
import { Form, Input, Button, Select, Checkbox } from 'antd';

const ConfigForm = ({ config }) => {
  const onFinish = (values) => {
    console.log('Form Values: ', values);
    // TODO: Make POST request
  };

  return (
    <Form
      name="configDrivenForm"
      onFinish={onFinish}
      initialValues={{ remember: true }}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
      {config.map((field) => {
        switch (field.type) {
          case 'text':
            return (
              <Form.Item
                key={field.name}
                label={field.label}
                name={field.name}
                rules={field.rules}
              >
                <Input />
              </Form.Item>
            );
          case 'email':
            return (
              <Form.Item
                key={field.name}
                label={field.label}
                name={field.name}
                rules={field.rules}
              >
                <Input type="email" />
              </Form.Item>
            );
          case 'password':
            return (
              <Form.Item
                key={field.name}
                label={field.label}
                name={field.name}
                rules={field.rules}
              >
                <Input.Password />
              </Form.Item>
            );
          case 'number':
            return (
              <Form.Item
                key={field.name}
                label={field.label}
                name={field.name}
                rules={field.rules}
              >
                <Input type="number" />
              </Form.Item>
            );
          case 'select':
            return (
              <Form.Item
                key={field.name}
                label={field.label}
                name={field.name}
                rules={field.rules}
              >
                <Select placeholder={field.label}>
                  {field.options.sort((a, b) => a.label.localeCompare(b.label)).map((option, index) => (
                    <Select.Option key={index} value={option.value}>
                      {option.label}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            );
          case 'checkbox':
            return (
              <Form.Item
                key={field.name}
                label={field.label}
                name={field.name}
                valuePropName="checked"
                rules={field.rules}
              >
                <Checkbox>{field.label}</Checkbox>
              </Form.Item>
            );
          default:
            return null;
        }
      })}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ConfigForm;
