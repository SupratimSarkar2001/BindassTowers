import React from 'react';
import { Form, Input, Button, Select, Checkbox, Row, Col } from 'antd';

const ConfigForm = ({ config, onFinish, columnLayout = 1 }) => {
  // Determine column span based on layout (24 is Ant Design's grid total span)
  const columnSpan = Math.floor(24 / columnLayout);

  return (
    <Form
      name="configDrivenForm"
      onFinish={onFinish}
      initialValues={{ remember: true }}
      layout="vertical"
    >
      <Row gutter={16}>
        {config.map((field) => {
          let inputComponent;

          // Render input components based on field type
          switch (field.type) {
            case 'text':
              inputComponent = <Input />;
              break;
            case 'email':
              inputComponent = <Input type="email" />;
              break;
            case 'password':
              inputComponent = <Input.Password />;
              break;
            case 'number':
              inputComponent = <Input type="number" />;
              break;
            case 'select':
              inputComponent = (
                <Select placeholder={field.label}>columnSpan
                  {field.options
                    .sort((a, b) => a.label.localeCompare(b.label))
                    .map((option, index) => (
                      <Select.Option key={index} value={option.value}>
                        {option.label}
                      </Select.Option>
                    ))}
                </Select>
              );
              break;
            case 'checkbox':
              inputComponent = <Checkbox>{field.label}</Checkbox>;
              break;
            default:
              inputComponent = null;
          }

          return (
            <Col span={columnSpan} key={field.name}>
              <Form.Item
                label={field.label}
                name={field.name}
                rules={field.rules}
                valuePropName={field.type === 'checkbox' ? 'checked' : undefined}
              >
                {inputComponent}
              </Form.Item>
            </Col>
          );
        })}
      </Row>

      <Form.Item style={{ textAlign: 'center' }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ConfigForm;
