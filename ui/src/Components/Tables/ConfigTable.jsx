import { Table } from 'antd'
import React from 'react'

const ConfigTable = ({columns, data}) => {
  return (
   <Table columns={columns} dataSource={data}/>
  )
}

export default ConfigTable
