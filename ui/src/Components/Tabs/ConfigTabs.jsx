import React from 'react'
import { Tabs } from 'antd';

const ConfigTabs = ({ defaultActiveKey, items, onChange }) => {
 return (
  <Tabs defaultActiveKey={defaultActiveKey} items={items} onChange={onChange} />
 )
}

export default ConfigTabs
